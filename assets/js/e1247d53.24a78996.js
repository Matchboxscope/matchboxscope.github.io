"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[1818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o=void 0,l={unversionedId:"Tutorials/ESP32RawUSBFrame",id:"Tutorials/ESP32RawUSBFrame",title:"ESP32RawUSBFrame",description:"---",source:"@site/docs/Tutorials/ESP32RawUSBFrame.md",sourceDirName:"Tutorials",slug:"/Tutorials/ESP32RawUSBFrame",permalink:"/docs/Tutorials/ESP32RawUSBFrame",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebSERIAL",permalink:"/docs/Software/WebSERIAL"},next:{title:"DIY Motorized Microscope with Seeed Studio XIAO Sense",permalink:"/docs/Tutorials/XiaoMotorized"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware:",id:"hardware",level:3},{value:"Software:",id:"software",level:3},{value:"ESP32 Setup",id:"esp32-setup",level:2},{value:"Step 1: Clone the Repository",id:"step-1-clone-the-repository",level:3},{value:"Step 2: Flashing the Code",id:"step-2-flashing-the-code",level:3},{value:"Using Platform.io:",id:"using-platformio",level:4},{value:"Using Arduino IDE:",id:"using-arduino-ide",level:4},{value:"Step 3: Check the Serial Monitor",id:"step-3-check-the-serial-monitor",level:3},{value:"ESP32 Code",id:"esp32-code",level:3},{value:"Python Setup",id:"python-setup",level:2},{value:"Step 1: Clone the Python Script",id:"step-1-clone-the-python-script",level:3},{value:"Step 2: Running the Python Script",id:"step-2-running-the-python-script",level:3},{value:"Step 3: View the Results",id:"step-3-view-the-results",level:3},{value:"Optimizations &amp; Advanced Topics",id:"optimizations--advanced-topics",level:2},{value:"Python code",id:"python-code",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Feedback &amp; Community",id:"feedback--community",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"retrieving-raw-frames-from-the-esp32-camera-using-python"},"Retrieving RAW Frames from the ESP32 Camera using Python"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The ESP32 camera module is a versatile piece of hardware that offers both wireless and wired connectivity options. While it's common to use it with JPEG compression for ease of streaming, sometimes, we need the highest quality of images, especially for scientific applications. In such scenarios, RAW frames become critical."),(0,r.kt)("p",null,"This tutorial will guide you through the process of setting up your ESP32 camera to capture and send RAW frames via USB Serial to a Python application running on a PC."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"hardware"},"Hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESP32 camera module (Tested with Seeed Studio XIAO Sense with the OV2640 camera)"),(0,r.kt)("li",{parentName:"ul"},"PC with a USB port")),(0,r.kt)("h3",{id:"software"},"Software:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://platformio.org/install/cli"},"Platform.io")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,r.kt)("li",{parentName:"ul"},"Python with packages: numpy, pyserial, and cv2. You can install them using:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install numpy pyserial opencv-python\n")))),(0,r.kt)("h2",{id:"esp32-setup"},"ESP32 Setup"),(0,r.kt)("h3",{id:"step-1-clone-the-repository"},"Step 1: Clone the Repository"),(0,r.kt)("p",null,"Clone the code from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/main/main.ino"},"repository"),"."),(0,r.kt)("h3",{id:"step-2-flashing-the-code"},"Step 2: Flashing the Code"),(0,r.kt)("h4",{id:"using-platformio"},"Using Platform.io:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the project in Platform.io."),(0,r.kt)("li",{parentName:"ol"},"Connect the ESP32 camera module to your PC."),(0,r.kt)("li",{parentName:"ol"},"Select the correct board and port."),(0,r.kt)("li",{parentName:"ol"},"Build and upload the code.")),(0,r.kt)("h4",{id:"using-arduino-ide"},"Using Arduino IDE:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Arduino IDE and select the correct board and port."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},".ino")," file from the cloned repository."),(0,r.kt)("li",{parentName:"ol"},"Compile and upload.")),(0,r.kt)("h3",{id:"step-3-check-the-serial-monitor"},"Step 3: Check the Serial Monitor"),(0,r.kt)("p",null,"Ensure the code is running correctly by opening the Serial Monitor. You should see logs if everything is set up correctly. If there are any errors, they will be displayed here."),(0,r.kt)("h3",{id:"esp32-code"},"ESP32 Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The code can be found here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/main/main.ino"},"https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/main/main.ino")),(0,r.kt)("li",{parentName:"ul"},"We use Platform.io to compile and flash the code to the Seeed Studio XIAO Sense that uses the OV2640 camera with the ESP32S3 chip"),(0,r.kt)("li",{parentName:"ul"},"Alternatively, one can use the Arduino IDE"),(0,r.kt)("li",{parentName:"ul"},"Further details on the camera can be found here ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html")),(0,r.kt)("li",{parentName:"ul"},"The serial will only send images once requested, for this we have a very basic interface where commands are send over serial:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setting expsorue time: t1000\\n\nsetting gain: g1\\n\ngetting frame: \\n\nrestarting: r0\\n */\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In a previous version we had problems with frame synchronizsation, therefore we manipulated the frame buffer to eventually detect the offset. Therfore the frame-grabber function looks like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void grabImage()\n{\n  camera_fb_t *fb = NULL;\n  fb = esp_camera_fb_get();\n\n  if (!fb || fb->format != PIXFORMAT_GRAYSCALE) // PIXFORMAT_JPEG)\n  {\n    Serial.println(\"Failed to capture image\");\n    ESP.restart();\n  }\n  else\n  {\n    // Modify the first 10 pixels of the buffer to indicate framesync\n    // PRoblem: The reference frame will move over time at random places\n    // It'S not clear if this is an issue on the client or server side\n    // Solution: To align for it we intoduce a known pattern that we can search for\n    // in order to align for this on the client side\n    // (actually something funky goes on here: We don't even need to align for that on the client side if we introduce these pixels..)\n    for(int i = 0; i < 10; i++){\n    fb->buf[i] = i % 2;  // Alternates between 0 and 1\n    }\n    // delay(40);\n\n    // String encoded = base64::encode(fb->buf, fb->len);\n    // Serial.write(encoded.c_str(), encoded.length());\n    if(0){\n      Serial.write(fb->buf, fb->len);\n    }\n    else{\n        // Encode the buffer in base64 and send it\n      String encoded = base64::encode((uint8_t*)fb->buf, fb->len);\n      Serial.println(encoded);\n      //free(encoded); // Remember to free the encoded buffer after using it\n\n    }\n    //Serial.println();\n  }\n\n  esp_camera_fb_return(fb);\n}\n")),(0,r.kt)("h2",{id:"python-setup"},"Python Setup"),(0,r.kt)("h3",{id:"step-1-clone-the-python-script"},"Step 1: Clone the Python Script"),(0,r.kt)("p",null,"Clone the Python implementation from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/PYTHON/ESP32SerialCamGrayBytebuffer.py"},"here"),"."),(0,r.kt)("h3",{id:"step-2-running-the-python-script"},"Step 2: Running the Python Script"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the directory containing the script."),(0,r.kt)("li",{parentName:"ol"},"Run the script:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python ESP32SerialCamGrayBytebuffer.py\n")))),(0,r.kt)("h3",{id:"step-3-view-the-results"},"Step 3: View the Results"),(0,r.kt)("p",null,"If everything is set up correctly, you should see RAW frames being displayed."),(0,r.kt)("h2",{id:"optimizations--advanced-topics"},"Optimizations & Advanced Topics"),(0,r.kt)("p",null,"To get the most out of this setup, consider the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optimizing the Framerate"),": Try adjusting the baud rate or optimizing the code further to achieve higher frame rates."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Image Processing"),": Use OpenCV to perform real-time image processing. This can include autofocus, image recognition, or any other computer vision task."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Camera Settings"),": Explore the camera settings interface in the ESP32 code to adjust exposure time, gain, or even restart the camera.")),(0,r.kt)("h3",{id:"python-code"},"Python code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The python implementation comes with a minimum number of dependencies (only numpy, and pyserial and cv2 for displaying)"),(0,r.kt)("li",{parentName:"ul"},"The code can be found here ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/PYTHON/ESP32SerialCamGrayBytebuffer.py"},"https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/PYTHON/ESP32SerialCamGrayBytebuffer.py")),(0,r.kt)("li",{parentName:"ul"},"The ImSwitch Implementation can be found here ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openUC2/ImSwitch/blob/cac306aaa2c1f10b771854b07ff509bab5575c53/imswitch/imcontrol/model/managers/detectors/ESP32SerialCamManager.py#L15"},"Manager")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openUC2/ImSwitch/blob/cac306aaa2c1f10b771854b07ff509bab5575c53/imswitch/imcontrol/model/interfaces/CameraESP32CamSerial.py#L11"},"Interface"),"\nThe basic idea is to request a frame:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"        # Command the camera to capture an image\n        serialdevice.write(('\\n').encode())\n        time.sleep(.05)  # Allow some time for the image to be captured\n")),(0,r.kt)("p",null,"then read the information from serial to have a full frame"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"      time.sleep(.05)  # Allow some time for the image to be captured\n\n        # Calculate the length of the base64 string\n        base64_length = calculate_base64_length(320, 240)\n\n        # Read the base64 string from the serial port\n        lineBreakLength = 2\n        base64_image_string  = serialdevice.read(base64_length+lineBreakLength)\n")),(0,r.kt)("p",null,"and then decode the frame into a numpy array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"        # Decode the base64 string into a 1D numpy array\n        image_bytes = base64.b64decode(base64_image_string)\n        image_1d = np.frombuffer(image_bytes, dtype=np.uint8)\n\n        # Reshape the 1D array into a 2D image\n        frame = image_1d.reshape(240, 320)\n")),(0,r.kt)("p",null,"That's all the magic."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This tutorial provided a step-by-step guide to capturing RAW frames from the ESP32 camera and processing them with a Python application. The capability to handle RAW frames can open up a wide range of possibilities, especially for scientific and precision tasks."),(0,r.kt)("p",null,"For further exploration, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openUC2/openUC2-Hackathon-BluFocus"},"openUC2 project")," which utilizes this setup for hardware autofocusing with the ESP32 camera."),(0,r.kt)("h2",{id:"feedback--community"},"Feedback & Community"),(0,r.kt)("p",null,"Your feedback and contributions are valuable! Share your results, ask questions, or suggest improvements by creating an issue in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/issues"},"repository"),". Join the community and collaborate to push the boundaries of what's possible with the ESP32 camera."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"There you have it\u2014a full tutorial based on the provided input and suggestions. Modify as you see fit and ensure all links are functioning correctly."))}h.isMDXComponent=!0}}]);