(function () {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  var width = 1280;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  var cursorX = 0;
  let clipping_limit = 240;

  let data_array = [];



  var mySettings = {
    curveWidth: 720,
    curveHeight: 500,
    signalSizeX: 1280,
    signalSizeY: 255,
    minX: 0,
    minY: 0,
    maxX: 1280,
    maxY: 255,
    gridX: 40,
    gridLabelX: 80,

    margin_left: 30,
    margin_right: 40,
    margin_top: 25,
    margin_bottom: 70,



  };

  let showColorBar = false;

  let clipping = false;

  var marker1X = 434;
  var marker1Y = 434;

  var marker2X = 611;
  var marker2Y = 611;

  var activeMarker = 0;

  var sens_pos = 100;
  var color_mode = false;

  let ifactor = 0.1;

  // |streaming| indicates whether or not we're currently streaming
  // motionjpeg from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var motionjpeg = null;
  var canvas = null;
  var curve = null;

  var startbutton = null;



  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  function isPointInRectangle(rectangle, point) {
    return point.x >= rectangle.x &&
      point.x <= rectangle.x + rectangle.width &&
      point.y >= rectangle.y &&
      point.y <= rectangle.y + rectangle.height;
  }

  function setElements() {

    var s = document.getElementById('marker1');
    s.value = Math.round(marker1X);

    var s = document.getElementById('marker2');
    s.value = Math.round(marker2X);

    var s = document.getElementById('minX');
    s.value = Math.round(mySettings.minX);

    var s = document.getElementById('maxX');
    s.value = Math.round(mySettings.maxX);

    var s = document.getElementById('maxY');
    s.value = Math.round(mySettings.maxY);

    var s = document.getElementById('switch-colorbar');
    s.checked = showColorBar;

    var s = document.getElementById('ifactor');
    s.value = ifactor;

  }

  function getCookies() {
    if (getCookie("minX") != "") mySettings.minX = parseInt(getCookie("minX"));
    if (getCookie("maxX") != "") mySettings.maxX = parseInt(getCookie("maxX"));
    if (getCookie("sens_pos") != "") sens_pos = parseInt(getCookie("sens_pos"));

    if (getCookie("marker1X") != "") marker1X = parseFloat(getCookie("marker1X"));
    if (getCookie("marker1Y") != "") marker1Y = parseFloat(getCookie("marker1Y"));
    if (getCookie("marker2X") != "") marker2X = parseFloat(getCookie("marker2X"));
    if (getCookie("marker2Y") != "") marker2Y = parseFloat(getCookie("marker2Y"));

    if (getCookie("maxY") != "") mySettings.maxY = parseFloat(getCookie("maxY"));

    if (getCookie("colorBar") != "") { if (getCookie("colorBar") == 1) showColorBar = true; else showColorBar = false; }

    if (getCookie("ifactor") != "") ifactor = parseFloat(getCookie("ifactor"));
  }

  function setCookies() {
    setCookie("minX", mySettings.minX, 10);
    setCookie("maxX", mySettings.maxX, 10);
    setCookie("sens_pos", sens_pos, 10);
    setCookie("marker1X", marker1X, 10);
    setCookie("marker1Y", marker1Y, 10);
    setCookie("marker2X", marker2X, 10);
    setCookie("marker2Y", marker2Y, 10);
    setCookie("maxY", mySettings.maxY, 10);
    setCookie("colorBar", showColorBar * 1, 10);
    setCookie("ifactor", ifactor, 10);
  }


  function filter(sample_data) {
    // smooth sample data
    var sample_data_buffer = new Array(sample_data.length);
    for (var i = 0; i < sample_data.length; i++) {
      if (i < 4 || i > sample_data.length - 5) {
        sample_data_buffer[i] = sample_data[i];
      } else {
        var matrix = math.matrix([
          [0.02192964, 0.22851215, 0.49911642, 0.22851215, 0.02192964],
        ]);

        var vector = math.matrix([
          [sample_data[i - 2]],
          [sample_data[i - 1]],
          [sample_data[i]],
          [sample_data[i + 1]],
          [sample_data[i + 2]]
        ]);

        var result = math.multiply(matrix, vector);
        sample_data_buffer[i] = result._data[0];
      }
    }


    return sample_data_buffer;
  }

  function movingAverage(signal, FilterValue) {

    let movingAverage = [];
    let vnew = 0.0;
    let v = 0.0;
    let KFilter = (100 - FilterValue) / 100 + 0.1

    // Calculate moving average
    for (let i = 0; i < signal.length - 1; i++) {
      vnew = signal[i];
      v = v + (vnew - v) * KFilter;
      movingAverage[i] = v;
    }

    v = 0;

    for (let i = signal.length - 2; i >= 0; i--) {
      vnew = signal[i];
      v += (vnew - v) * KFilter;
      movingAverage[i] = (movingAverage[i] + v) / 2;
    }

    return movingAverage;
  }

  function findSpec() {


    var context = canvas.getContext('2d');
    context.drawImage(motionjpeg, 0, 0, width, height);
    // get image data
    var data = context.getImageData(0, 0, width, height);

    let sum = 0;
    let summax = 0;
    let maxline = 0;

    for (let y = 0; y < height; y++) {
      sum = 0;

      for (let x = 0; x < width; x++) {
        sum = sum + data.data[y * width * 4 + x * 4] + data.data[y * width * 4 + x * 4 + 1] + data.data[y * width * 4 + x * 4 + 2];

      }
      if (sum > summax) { summax = sum; maxline = y; }
    }
    sens_pos = maxline;
  }

  function FindPeaks(sample_data) {
    // filtering data
    var sample_data_buffer = filter(sample_data);
    // seed N scatter points in the graph
    var N = 100;
    var scatter_points = new Array(N);
    for (var i = 0; i < scatter_points.length; i++) {
      x = Math.floor(Math.random() * sample_data.length)
      // x is equal to a random number between 0 and length of the sample_data array       
      scatter_points[i] = {
        x: x,
        y: sample_data[x]
      };
    }

    // we iterate along each point
    // Each point is a climber with certain energy to go down the hill. Infinite energy to go up the hill.
    // we start trying to move it to the left
    // if the point is lower than the point to the left we move it to the left
    // if the point is higher than the point to the left we check the difference. 
    // If we have more energy than the difference we move it to the left and we subtract the difference from the energy.
    // if we have less energy than the difference we stop moving the point.
    // We record the maximun point we reached. 
    // we repeat the same process for the right side
    // after the process we choose the higher point between the left and the right point
    // we check if there are points too near and remove redundant ones
    for (var i = 0; i < scatter_points.length; i++) {
      var x = scatter_points[i].x;
      var y = scatter_points[i].y;
      var energy = 50;

      var max_left = {
        x: x,
        y: y
      };

      // move to the left
      while (energy > 0) {
        var x_left = x - 1;
        var y_left = sample_data[x_left];

        // check the difference
        var diff = y - y_left;
        if (diff < 0) {
          // if the point is lower than the point to the left we move it to the left
          x = x_left;
          y = y_left;
          // if the point y is higher than the max_left we update the max_left
          if (y > max_left.y) {
            max_left.x = x;
            max_left.y = y;
          }
        } else {
          // if the point is higher than the point to the left we check the difference.
          if (energy > diff) {
            // If we have more energy than the difference we move it to the left and we subtract the difference from the energy.
            x = x_left;
            y = y_left;
            energy = energy - diff;
          } else {
            // if we have less energy than the difference we stop moving the point.
            break;
          }
        }
      }

      x_left = x;
      y_left = y;

      // move to the right
      var x = scatter_points[i].x;
      var y = scatter_points[i].y;
      energy = 50;

      var max_right = {
        x: x,
        y: y
      };

      while (energy > 0) {
        var x_right = x + 1;
        var y_right = sample_data[x_right];

        // check the difference
        var diff = y - y_right;
        if (diff < 0) {
          // if the point is lower than the point to the right we move it to the right
          x = x_right;
          y = y_right;
          // if the point y is higher than the max_right we update the max_right
          if (y > max_right.y) {
            max_right.x = x;
            max_right.y = y;
          }
        } else {
          // if the point is higher than the point to the right we check the difference.
          if (energy > diff) {
            // If we have more energy than the difference we move it to the right and we subtract the difference from the energy.
            x = x_right;
            y = y_right;
            energy = energy - diff;
          } else {
            // if we have less energy than the difference we stop moving the point.
            break;
          }
        }
      }

      // if the max_left is higher than the max_right we update the scatter point
      if (max_left.y > max_right.y) {
        scatter_points[i].x = max_left.x;
        scatter_points[i].y = max_left.y;
      } else {
        scatter_points[i].x = max_right.x;
        scatter_points[i].y = max_right.y;
      }

      // check if there are points too near and remove redundant ones
      for (var j = 0; j < scatter_points.length; j++) {
        if (i != j) {
          var x1 = scatter_points[i].x;
          var y1 = scatter_points[i].y;
          var x2 = scatter_points[j].x;
          var y2 = scatter_points[j].y;
          var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
          if (distance < 10) {
            if (y1 > y2) {
              scatter_points[j].x = x1;
              scatter_points[j].y = y1;
            } else {
              scatter_points[i].x = x2;
              scatter_points[i].y = y2;
            }
          }
        }
      }

    }

    // drop points with the same x
    var unique_scatter_points = [];
    for (var i = 0; i < scatter_points.length; i++) {
      var x = scatter_points[i].x;
      var y = scatter_points[i].y;
      var unique = true;

      for (var j = 0; j < unique_scatter_points.length; j++) {
        if (x == unique_scatter_points[j].x) {
          unique = false;
          break;
        }
      }

      if (unique) {
        unique_scatter_points.push({
          x: x,
          y: y
        });
      }
    }

    scatter_points = unique_scatter_points;
    return scatter_points;
  }

  function peakDetection(signal, delta) {

    let firstDerivative = [];
    let peaks = [];
    let valid = false;
    let max = 0;

    // Calculate first derivative
    for (let i = delta; i < signal.length - delta - 1; i++) {
      v = signal[i];

      valid = false;
      bend = 0;

      if ((v > signal[i + 1]) && (v >= signal[i - 1]) && (v > 15)) valid = true;
      //                if ((v>=signal[i+1])&&(v>signal[i-1])&&(v>15)) valid = true;


      for (let j = 2; j < delta; j++) {
        if ((v <= signal[i + j]) || (v <= signal[i - j])) valid = false;
        bend += (signal[i + j] - signal[i + j + 1]) + (signal[i - j] - signal[i - j - 1]);
      }

      if (bend < 10) valid = false;

      if (valid) peaks.push(i + 1);
    }


    return peaks;
  }


  function wavelengthToRGB(wavelength) {
    // Define the CIE RGB color matching functions
    let x = 0.4124 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -3.33)) +
      0.3576 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -1.87)) +
      0.1805 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -1.01));
    let y = 0.2126 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -3.33)) +
      0.7152 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -1.87)) +
      0.0722 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -1.01));
    let z = 0.0193 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -3.33)) +
      0.1192 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -1.87)) +
      0.9505 * (1 + 0.09991 * Math.pow(wavelength / 559.0, -1.01));

    // Convert CIE XYZ to CIE RGB
    let r = 3.2406 * x - 1.5372 * y - 0.4986 * z;
    let g = -0.9689 * x + 1.8758 * y + 0.0415 * z;
    let b = 0.0557 * x - 0.2040 * y + 1.0570 * z;

    // Normalize RGB values to [0, 1] range
    r = (r > 0.0031308) ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
    g = (g > 0.0031308) ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g;
    b = (b > 0.0031308) ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b;

    // Return the RGB values
    return [r, g, b];
  }


  function startup() {
    motionjpeg = document.getElementById('mImage');
    //motionjpeg.crossOrigin = "Anonymous";
    canvas = document.getElementById('canvas');
    curve = document.getElementById('curve');
    startbutton = document.getElementById('startbutton');

    height = motionjpeg.height
    // Firefox currently has a bug where the height can't be read from
    // the motionjpeg, so we will make assumptions if this happens.

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    //  curve.setAttribute('width', 222);
    //   curve.setAttribute('height', 222);





    getCookies();

    setElements();


    var intervalId = window.setInterval(function () {
      takepicture();
    }, 200);


    document.getElementById('switch-colorbar').addEventListener('change', function (e) {

      if (e.target.checked) {
        showColorBar = true;
      } else {
        showColorBar = false;
      }
    });


    document.getElementById('switch-colors').addEventListener('change', function (e) {

      if (e.target.checked) {
        color_mode = true;
      } else {
        color_mode = false;
      }
    });



    document.getElementById('minX').addEventListener('change', function () {

      var inputValue = this.value;
      mySettings.minX = parseInt(inputValue);
      if ((mySettings.maxX - mySettings.minX) < 20) mySettings.minX = mySettings.maxX - 20;
      setElements();
    });


    document.getElementById('maxX').addEventListener('change', function () {

      var inputValue = this.value;
      mySettings.maxX = parseInt(inputValue);
      if ((mySettings.maxX - mySettings.minX) < 20) mySettings.maxX = mySettings.minX + 20;
      setElements();
    });

    document.getElementById('maxY').addEventListener('change', function () {

      var inputValue = this.value;
      mySettings.maxY = parseInt(inputValue);
      if ((mySettings.maxY) < 20) mySettings.maxY = 20;
      if ((mySettings.maxY) > 300) mySettings.maxY = 300;
      setElements();
    });

    document.getElementById('ifactor').addEventListener('change', function () {

      var inputValue = this.value;
      ifactor = parseFloat(inputValue);
      if ((ifactor) < 0) ifactor = 0;
      if ((ifactor) > 0.9) ifactor = 0.9;
      setElements();


    });




    document.getElementById('marker1').addEventListener('change', function () {

      var inputValue = this.value;
      marker1X = parseInt(inputValue);

      console.log(waveToRGB(inputValue));

    });

    document.getElementById('marker2').addEventListener('change', function () {

      var inputValue = this.value;
      marker2X = parseInt(inputValue);

    });




    canvas.addEventListener('click', function (ev) {
      // Get the x and y coordinates of the click event
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      // Print the coordinates to the console
      console.log("Clicked at x: " + x + ", y: " + y);

      sens_pos = y * 4;


    }, false);



    curve.addEventListener('mousedown', function (ev) {
      // Get the x and y coordinates of the click event
      var rect = curve.getBoundingClientRect();

      let clickPoint = { x: event.clientX - rect.left, y: event.clientY - rect.top };

      let markerPos = marker1X;
      if (markerPos < mySettings.minX) markerPos = mySettings.minX;
      if (markerPos > mySettings.maxX) markerPos = mySettings.maxX;

      let markerRect = { x: transX(markerPos, mySettings) - 10, y: transY(0, mySettings) + 20, width: 20, height: 30 };
      if (isPointInRectangle(markerRect, clickPoint)) activeMarker = 1; else {

        markerPos = marker2X;
        if (markerPos < mySettings.minX) markerPos = mySettings.minX;
        if (markerPos > mySettings.maxX) markerPos = mySettings.maxX;

        let markerRect = { x: transX(markerPos, mySettings) - 10, y: transY(0, mySettings) + 20, width: 20, height: 30 };
        if (isPointInRectangle(markerRect, clickPoint)) activeMarker = 2; else activeMarker = 0;
      }



      // console.log(clickPoint);
      //   console.log(markerRect);
      console.log(activeMarker);
    }, false);


    curve.addEventListener('mouseup', function () {
      activeMarker = 0;
    })

    curve.addEventListener('mouseout', function () {
      activeMarker = 0;
    })



    curve.addEventListener('mousemove', function (ev) {
      // Get the x and y coordinates of the click event
      var rect = curve.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      // Print the coordinates to the console


      cursorX = reTransX(x, mySettings);
      if (cursorX < mySettings.minX) cursorX = mySettings.minX;
      if (cursorX > mySettings.maxX) cursorX = mySettings.maxX;

      var saveMin = waveToPix(mySettings.minX);
      var saveMax = waveToPix(mySettings.maxX);

      if ((activeMarker > 0) && (Math.abs(marker1Y - marker2Y) > 30)) {
        if (activeMarker == 1) if ((marker2Y - 30) > waveToPix(cursorX)) marker1Y = waveToPix(cursorX);
        if (activeMarker == 2) if ((marker1Y + 30) < waveToPix(cursorX)) marker2Y = waveToPix(cursorX);


        mySettings.minX = pixToWave(saveMin);
        mySettings.maxX = pixToWave(saveMax);


        cursorX = reTransX(x, mySettings);
        if (cursorX < mySettings.minX) cursorX = mySettings.minX;
        if (cursorX > mySettings.maxX) cursorX = mySettings.maxX;

        var s = document.getElementById('minX');
        s.value = Math.round(mySettings.minX);

        var s = document.getElementById('maxX');
        s.value = Math.round(mySettings.maxX);
      }


    }, false);

    setbutton.addEventListener('click', function (ev) {

      findSpec();


      ev.preventDefault();
    }, false);




    storebutton.addEventListener('click', function (ev) {

      setCookies();

      // takepicture();
      ev.preventDefault();
    }, false);


    resetbutton.addEventListener('click', function (ev) {

      mySettings.minX = 0;
      mySettings.maxX = 1280;

      mySettings.maxY = 255;

      sens_pos = 100;

      marker1X = 434;
      marker1Y = 434;
      marker2X = 611;
      marker2Y = 611;

      ifactor = 0.1;

      setCookies();
      setElements();

      // takepicture();
      ev.preventDefault();
    }, false);




    clearphoto();


  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var ctx = curve.getContext('2d');
    ctx.fillStyle = "#AAA";
    ctx.fillRect(0, 0, curve.width, curve.height);



    var data = canvas.toDataURL('image/png');

  }

  // Capture a photo by fetching the current contents of the motionjpeg
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function pixToWave(wave) {

    var a = (marker2Y - marker1Y) / (marker2X - marker1X);
    var b = marker1Y - a * marker1X

    return (wave - b) / a;

  }


  function waveToPix(pix) {
    var a = (marker2Y - marker1Y) / (marker2X - marker1X);
    var b = marker1Y - a * marker1X

    return a * pix + b;
  }


  function transX(xpos, Settings) {
    var signalSizeX = Settings.maxX - Settings.minX;
    return Settings.margin_left + (xpos - mySettings.minX) * (Settings.curveWidth - Settings.margin_left - Settings.margin_right) / signalSizeX;
  }

  function transY(ypos, Settings) {
    var signalSizeY = Settings.maxY - Settings.minY;
    return Settings.curveHeight - Settings.margin_bottom - ypos * (Settings.curveHeight - Settings.margin_top - Settings.margin_bottom) / signalSizeY;;
  }


  function reTransX(xpos, Settings) {
    var signalSizeX = Settings.maxX - Settings.minX;

    return (xpos - Settings.margin_left) * signalSizeX / (Settings.curveWidth - Settings.margin_left - Settings.margin_right) + mySettings.minX;
  }

  function drawMarker(x, y, num, context) {
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x + 15, y + 20, x - 1, y + 20);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x - 15, y + 20, x + 1, y + 20);
    context.fill();

    context.fillStyle = "#000000";
    context.font = "10px Arial";
    context.textAlign = "center";
    context.fillText(num, x, y + 16);

  }

  function drawSpectrometerGrid(gridWidth, gridHeight) {
    // Create a canvas element and set its width and height
    var canvas = document.getElementById('curve');


    curve.width = mySettings.curveWidth;
    curve.height = mySettings.curveHeight;




    // Get the 2D context of the canvas
    var ctx = canvas.getContext('2d');


    // Draw the grid background

    ctx.beginPath();


    mySettings.gridX = parseInt(Math.round((mySettings.maxX - mySettings.minX) / 200) * 10);
    if (mySettings.gridX < 5) mySettings.gridX = 5;



    for (var x = mySettings.minX; x <= mySettings.maxX; x += mySettings.gridX) {
      ctx.moveTo(transX(x + ((mySettings.minX % 5) != 0) * (5 - mySettings.minX % 5), mySettings), transY(0, mySettings));
      ctx.lineTo(transX(x + ((mySettings.minX % 5) != 0) * (5 - mySettings.minX % 5), mySettings), transY(mySettings.maxY, mySettings));
    }



    for (var y = 0; y <= mySettings.maxY; y += 10) {
      ctx.moveTo(transX(mySettings.minX, mySettings), transY(y, mySettings));
      ctx.lineTo(transX(mySettings.maxX, mySettings), transY(y, mySettings));
    }



    // Set the stroke style and width
    ctx.strokeStyle = "#404040";
    ctx.lineWidth = 1;

    // Draw the grid lines
    ctx.stroke();

    // Set font and text alignment
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#a0a0a0";

    // Add labels to the x-axis

    mySettings.gridLabelX = Math.round((mySettings.maxX - mySettings.minX) / 200) * 20;
    if (mySettings.gridLabelX < 5) mySettings.gridLabelX = 5;


    var minval = mySettings.minX;


    for (var x = minval; x <= mySettings.maxX; x += mySettings.gridLabelX) {
      ctx.fillText(Math.trunc(x + ((mySettings.minX % 5) != 0) * (5 - mySettings.minX % 5)), transX(x + ((mySettings.minX % 5) != 0) * (5 - mySettings.minX % 5), mySettings), transY(0, mySettings) + 15 + showColorBar * 8);
    }


    if (showColorBar) {
      for (var x = transX(minval, mySettings); x <= transX(mySettings.maxX, mySettings); x += 1) {
        ctx.beginPath();
        ctx.strokeStyle = `rgb(${Math.floor(waveToRGB(reTransX(x, mySettings))[0])}, ${Math.floor(waveToRGB(reTransX(x, mySettings))[1])}, ${Math.floor(waveToRGB(reTransX(x, mySettings))[2])})`;
        ctx.moveTo(x, transY(0, mySettings) + 9);
        ctx.lineTo(x, transY(0, mySettings) + 1);
        ctx.stroke();
      }

    }



    ctx.fillStyle = "#a0a0a0";

    // Add labels to the y-axis

    ctx.textAlign = "right";

    for (var y = 0; y <= mySettings.maxY; y += 10) {
      ctx.fillText(y, transX(mySettings.minX, mySettings) - 10, transY(y, mySettings) + 3);
    }

    // Set font and text alignment
    ctx.font = "14px Arial";
    ctx.textAlign = "center";

    // Add a title to the canvas
    // ctx.fillText("Spectrometer", canvas.width / 2, 20);

    //draw Marker
    ctx.fillStyle = "#a0a0a0";

    let markerDraw = marker1X;
    if (markerDraw < mySettings.minX) markerDraw = mySettings.minX;
    if (markerDraw > mySettings.maxX) markerDraw = mySettings.maxX;

    drawMarker(transX(markerDraw, mySettings), transY(0, mySettings) + 18 + showColorBar * 8, 1, ctx);
    ctx.fillStyle = "#a0a0a0";

    markerDraw = marker2X;
    if (markerDraw < mySettings.minX) markerDraw = mySettings.minX;
    if (markerDraw > mySettings.maxX) markerDraw = mySettings.maxX;

    drawMarker(transX(markerDraw, mySettings), transY(0, mySettings) + 18 + showColorBar * 8, 2, ctx);


    // Axe label

    ctx.font = "14px Arial";
    ctx.fillStyle = "#a0a0a0";
    ctx.textAlign = "right";
    ctx.fillText("Wavelength [nanometers]", transX(mySettings.maxX, mySettings), transY(mySettings.maxY, mySettings) - 10);

    ctx.textAlign = "left";
    ctx.fillText("Intensity", transX(mySettings.minX, mySettings) - 25, transY(mySettings.maxY, mySettings) - 10);

    if (clipping) {
      ctx.fillStyle = "#f35b3f";
      ctx.textAlign = "center";

      ctx.fillText("Clipping! Reduce intensity", transX((mySettings.minX + mySettings.maxX) / 2, mySettings), transY(mySettings.maxY, mySettings) - 10);
    }
  }


  function takepicture() {


    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      //motionjpeg.setAttribute('crossOrigin', '');
      context.drawImage(motionjpeg, 0, 0, width, height);

      var ctx = curve.getContext('2d');


      // get image data
      var data = context.getImageData(0, sens_pos, width, 1);

      // document.write(data.data);

      // draw reading line
      context.lineWidth = 4;
      context.strokeStyle = '#ffff00';  // set color to yelow
      context.beginPath();
      context.moveTo(0, sens_pos);
      context.lineTo(width, sens_pos);
      context.stroke();



      // temporal filtering
      let data_buffer = [];


      for (let i = 0; i <= data.data.length; i++) {


        if (isNaN(data_array[i])) data_buffer[i] = data.data[i];
        else data_buffer[i] = data_array[i];
      }

      for (let i = 0; i <= data.data.length; i++) {
        data_array[i] = (ifactor) * data_buffer[i] + (1 - ifactor) * data.data[i];
      }



      // draw Gird
      drawSpectrometerGrid(curve.width, curve.height);

      //Draw cursor
      ctx.beginPath();
      ctx.moveTo(transX(cursorX, mySettings), transY(0, mySettings));
      ctx.lineTo(transX(cursorX, mySettings), transY(mySettings.maxY, mySettings));
      ctx.strokeStyle = '#f35b3f';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = "10px Arial";
      ctx.textAlign = "left";
      ctx.fillStyle = "#a0a0a0";

      ctx.fillText(cursorX.toFixed(1), transX(cursorX, mySettings) + 4, transY(mySettings.maxY, mySettings) + 20);


      //Draw curves  

      var imin = waveToPix(mySettings.minX);
      var imax = waveToPix(mySettings.maxX);
      if (imin < 0) imin = 0;
      if (imax < 0) imax = 0;
      if (imax > 1280) imax = 1280;
      if (imin > 1280) imin = 1280;

      imin = parseInt(imin);
      imax = parseInt(imax);

      if (imin > imax) { var mystore = imin; imin = imax; imax = mystore; }


      let data_value = 0;

      if (color_mode) {



        ctx.beginPath();
        ctx.moveTo(transX(pixToWave(imin), mySettings), transY(data.data[mySettings.imin * 4], mySettings));
        ctx.strokeStyle = '#ff0000';  // set color to red
        ctx.lineWidth = 1;



        for (let i = imin + 1; i <= imax; i++) {

          data_value = data_array[i * 4];

          if (data_value <= mySettings.maxY)
            ctx.lineTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings))
          else ctx.moveTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings));

        }

        ctx.stroke();

        // green

        ctx.beginPath();
        ctx.moveTo(transX(pixToWave(imin), mySettings), transY(data.data[mySettings.imin * 4 + 1], mySettings));
        ctx.strokeStyle = '#00ff00';  // set color to green
        ctx.lineWidth = 1;



        for (let i = imin + 1; i <= imax; i++) {

          data_value = data_array[i * 4 + 1];

          if (data_value <= mySettings.maxY)
            ctx.lineTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings))
          else ctx.moveTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings));

        }


        ctx.stroke();

        // blue


        ctx.beginPath();
        ctx.moveTo(transX(pixToWave(imin), mySettings), transY(data.data[mySettings.imin * 4 + 2], mySettings));
        ctx.strokeStyle = '#0000ff';  // set color to blue
        ctx.lineWidth = 1;

        clipping = false;


        for (let i = imin + 1; i <= imax; i++) {

          data_value = data_array[i * 4 + 2];

          if ((data.data[i * 4] > clipping_limit) || (data.data[i * 4 + 1] > clipping_limit) || (data.data[i * 4 + 2] > clipping_limit)) clipping = true;

          if (data_value <= mySettings.maxY)
            ctx.lineTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings))
          else ctx.moveTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings));
        }


        ctx.stroke();

      } else {

        // gray



        ctx.strokeStyle = '#f0f0f0';  // set color to gray
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(transX(pixToWave(imin), mySettings), transY(data_array[mySettings.imin], mySettings));


        clipping = false;
        let peaks_array = [];
        let ii = 0;
        for (let i = imin + 1; i <= imax; i++) {

          data_value = (data_array[i * 4] + data_array[i * 4 + 1] + data_array[i * 4 + 2]);

          if ((data.data[i * 4] > clipping_limit) || (data.data[i * 4 + 1] > clipping_limit) || (data.data[i * 4 + 2] > clipping_limit)) clipping = true;

          if (data_value <= mySettings.maxY)
            ctx.lineTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings))
          else ctx.moveTo(transX(pixToWave(i), mySettings), transY(data_value, mySettings));
          // peaks_array[ii]=data_value;
          //ii++;

        }

        ctx.stroke();




        for (let i = 0; i < data_array.length / 4; i++) {
          peaks_array[i] = (data_array[i * 4] + data_array[i * 4 + 1] + data_array[i * 4 + 2])
        }

        let peaks = peakDetection(peaks_array, 30);

        ctx.strokeStyle = '#ff0000';  // set color to gray
        ctx.lineWidth = 1;
        ctx.beginPath();

        //console.log( peaks_array);

        for (let i = 0; i < peaks.length; i++) {

          ctx.moveTo(transX(peaks[i], mySettings), transY(50, mySettings));
          ctx.lineTo(transX(peaks[i], mySettings), transY(100, mySettings));

          //ctx.moveTo(transX(peaks[i].x,mySettings),transY(mySettings.minY,mySettings));
          //ctx.lineTo(transX(peaks[i].x,mySettings),transY(mySettings.maxY,mySettings));

        }

        ctx.stroke();

        peaks = FindPeaks(peaks_array, 30);

        ctx.strokeStyle = '#00ff00';  // set color to gray
        ctx.lineWidth = 1;
        ctx.beginPath();

        //console.log( peaks_array);

        for (let i = 0; i < peaks.length; i++) {



          ctx.moveTo(transX(peaks[i].x, mySettings), transY(0, mySettings));
          ctx.lineTo(transX(peaks[i].x, mySettings), transY(50, mySettings));

        }

        ctx.stroke();

        //let filtersignal=movingAverage(mysignal, 0) ;

        //mypeaks=peakDetection(filtersignal, 30);



        //ctx.lineTo(transX(pixToWave(i),mySettings), transY(filtersignal[i],mySettings) );


        /*
          for (let i = 0; i < mypeaks.length - 1; i++) 
         
          {
        ctx.moveTo(transX(pixToWave(mypeaks[i]),mySettings),transX(0,mySettings));
        ctx.lineTo(transX(pixToWave(mypeaks[i]),mySettings),transX(255,mySettings));
        
        }
         
        */




      }





      var data = canvas.toDataURL('image/png');

    } else {
      clearphoto();
    }
  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();



function waveToRGB(wavelength) {

  const minwave = 350;
  const maxwave = 800;

  let colorspace =
    [
      [0, 0, 0],
      [26, 1, 25],
      [82, 10, 79],
      [142, 25, 135],
      [203, 36, 194],
      [199, 48, 250],
      [123, 50, 250],
      [42, 50, 250],
      [0, 53, 250],
      [0, 92, 250],
      [0, 152, 251],
      [0, 219, 253],
      [0, 255, 223],
      [0, 253, 157],
      [0, 253, 98],
      [0, 252, 60],
      [0, 252, 57],
      [109, 252, 58],
      [188, 252, 60],
      [255, 246, 61],
      [255, 176, 47],
      [255, 107, 36],
      [255, 40, 29],
      [255, 0, 28],
      [255, 0, 28],
      [255, 0, 28],
      [255, 0, 28],
      [255, 0, 28],
      [255, 0, 28],
      [225, 0, 24],
      [183, 0, 18],
      [141, 0, 10],
      [100, 0, 5],
      [61, 0, 2],
      [23, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

  let lvalue = 0;
  if ((wavelength > minwave) && (wavelength < maxwave)) {
    lvalue = (wavelength - minwave) / (maxwave - minwave) * 36;
  }

  let index = Math.trunc(lvalue);

  let r = colorspace[index][0] + (lvalue - index) * (colorspace[index + 1][0] - colorspace[index][0])
  let g = colorspace[index][1] + (lvalue - index) * (colorspace[index + 1][1] - colorspace[index][1])
  let b = colorspace[index][2] + (lvalue - index) * (colorspace[index + 1][2] - colorspace[index][2])

  return [r, g, b];
}

