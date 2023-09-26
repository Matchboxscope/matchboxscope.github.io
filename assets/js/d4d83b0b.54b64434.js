"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[6670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="ESP32 Camera Streaming over WiFi with Python",s={unversionedId:"Tutorials/ESP32HTTPStreamFrames",id:"Tutorials/ESP32HTTPStreamFrames",title:"ESP32 Camera Streaming over WiFi with Python",description:"Stream frames from your ESP32 Camera using WiFi and process them in Python to visualize with Napari.",source:"@site/docs/Tutorials/ESP32HTTPStreamFrames.md",sourceDirName:"Tutorials",slug:"/Tutorials/ESP32HTTPStreamFrames",permalink:"/docs/Tutorials/ESP32HTTPStreamFrames",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebSERIAL",permalink:"/docs/Software/WebSERIAL"},next:{title:"ESP32RawUSBFrame",permalink:"/docs/Tutorials/ESP32RawUSBFrame"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware:",id:"hardware",level:3},{value:"Software:",id:"software",level:3},{value:"ESP32 Setup",id:"esp32-setup",level:2},{value:"Quickstart",id:"quickstart",level:3},{value:"Python Interface",id:"python-interface",level:2},{value:"Walkthrough Napari Plugin",id:"walkthrough-napari-plugin",level:3},{value:"Basic concept",id:"basic-concept",level:3},{value:"More theory on Accessing ESP32 Camera Frames Using Python and REST API",id:"more-theory-on-accessing-esp32-camera-frames-using-python-and-rest-api",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Feedback &amp; Community",id:"feedback--community",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"esp32-camera-streaming-over-wifi-with-python"},"ESP32 Camera Streaming over WiFi with Python"),(0,r.kt)("p",null,"Stream frames from your ESP32 Camera using WiFi and process them in Python to visualize with Napari."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ESP32 Camera Image",src:a(7586).Z,width:"608",height:"460"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The ESP32 camera offers both a connection to available networks and the ability to create its own access point. With the aid of a web server, we can seamlessly interact with it using HTTP requests from various platforms, including Python. This tutorial walks you through the process of streaming video from the ESP32 Camera and visualizing it using Napari."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"hardware"},"Hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESP32 camera module (Tested with Seeed Studio XIAO Sense with the OV2640 camera and also the ESP32-CAM)"),(0,r.kt)("li",{parentName:"ul"},"PC with a USB port"),(0,r.kt)("li",{parentName:"ul"},"USB cable"),(0,r.kt)("li",{parentName:"ul"},"WiFi connection / stick")),(0,r.kt)("h3",{id:"software"},"Software:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python with the necessary libraries installed"),(0,r.kt)("li",{parentName:"ul"},"ESP32 Firmware")),(0,r.kt)("h2",{id:"esp32-setup"},"ESP32 Setup"),(0,r.kt)("h3",{id:"quickstart"},"Quickstart"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Flash your ESP32 with the appropriate firmware ",(0,r.kt)("a",{parentName:"li",href:"https://matchboxscope.github.io/firmware/FLASH.html"},"from here"),"."),(0,r.kt)("li",{parentName:"ol"},"Once flashed, the board attempts to connect to a WiFi network (SSID: Blynk, Password: 12345678). If unsuccessful, it'll create an access point named ",(0,r.kt)("em",{parentName:"li"},"Matchboxscope_XXXX"),". Connect your computer to this network."),(0,r.kt)("li",{parentName:"ol"},"Test the stream at: ",(0,r.kt)("a",{parentName:"li",href:"http://192.168.4.1"},"http://192.168.4.1"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ESP32_DETAILED_LINK.md"},"Detailed ESP32 code and streaming setup")," "),(0,r.kt)("h2",{id:"python-interface"},"Python Interface"),(0,r.kt)("p",null,"Our key goal is to implement an interface to perform HTTP requests on the ESP32 Server that retrieve JPEG frames as well as setting parameters on the camera side. We have implemented a Napari plugin that was derived from @jacopoabramo's Napari-recorder here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/omniscope-viewer/blob/main/src/omniscopeViewer/control/devices/omniscope.py"},"https://github.com/Matchboxscope/omniscope-viewer/blob/main/src/omniscopeViewer/control/devices/omniscope.py"),"\nIt has several stages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Discovering available ESPressoscopes"),(0,r.kt)("li",{parentName:"ul"},"Starting the stream"),(0,r.kt)("li",{parentName:"ul"},"controling parameters"),(0,r.kt)("li",{parentName:"ul"},"display the camera stream")),(0,r.kt)("p",null,"Ensure you're working in a Python virtual environment to keep dependencies isolated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv esp32env\nsource esp32env/bin/activate\n")),(0,r.kt)("p",null,"Installation of the omniscope-viewer plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Matchboxscope/omniscope-viewer/\ncd ominiscope-viewer\npip install -e .\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install git+https://github.com/Matchboxscope/omniscope-viewer/\n")),(0,r.kt)("h3",{id:"walkthrough-napari-plugin"},"Walkthrough Napari Plugin"),(0,r.kt)("p",null,"Steps to start the viewer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start Napari"),(0,r.kt)("li",{parentName:"ul"},"Connect to the ESPressoscope using the Wifi/Accesspoint"),(0,r.kt)("li",{parentName:"ul"},'Open the "omniscope-viewer" plugin'),(0,r.kt)("li",{parentName:"ul"},"select the ",(0,r.kt)("inlineCode",{parentName:"li"},"omniscope")," (this is designed for a multicamera view, but the ESPressoscope works equally well)"),(0,r.kt)("li",{parentName:"ul"},"Wait until the device is discovered (Napari becomes inresponssive for a few seconds)"),(0,r.kt)("li",{parentName:"ul"},"Start stream"),(0,r.kt)("li",{parentName:"ul"},"Done :)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8006).Z,width:"640",height:"432"})),(0,r.kt)("h3",{id:"basic-concept"},"Basic concept"),(0,r.kt)("p",null,"The below snippet visualizes the idea of how python retrieves the frames:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def capture_frame(url):\n    while True:\n        try:\n            stream = requests.get(url + \":81\", stream=True)\n            bytes_ = bytes()\n            for chunk in stream.iter_content(chunk_size=8*1024):\n                bytes_ += chunk\n                a = bytes_.find(b'\\xff\\xd8')\n                b = bytes_.find(b'\\xff\\xd9')\n                if a != -1 and b != -1:\n                    jpg = bytes_[a:b+2]\n                    bytes_ = bytes_[b+2:]\n                    frame = cv2.imdecode(np.frombuffer(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)\n                    # Here, integrate with Napari or any other visualizer of your choice\n        except (requests.exceptions.RequestException) as e:\n            print(\"Error occurred:\", e)\n            time.sleep(5)\n")),(0,r.kt)("p",null,"The requests package performs a get-request on the address ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.4.1:81")," and converts the returning bytes into an image.\nBy calling this function repeatetly a stream can be converted into several RGB numpy frames. The original code is designed to also display multiple cameras, hence we call it omniscope, but the result is the same. the images just get concatenated to form a grid instead."),(0,r.kt)("p",null,'The discovery works by pinging all IP addresses within a subnet and trying to get an answer for the keyworkd "omniscope" or "cam_name" when requesting the URL 192.168.4.1/status\nThe returning dictionary looks for example like this:\n{"lamp":100,"autolamp":1,"min_frame_time":0,"framesize":8,"quality":12,"xclk":8,"brightness":-1,"contrast":0,"saturation":0,"sharpness":0,"special_effect":0,"wb_mode":0,"awb":0,"awb_gain":1,"aec":0,"aec2":1,"ae_level":-1,"aec_value":797,"agc":0,"agc_gain":5,"gainceiling":2,"bpc":0,"wpc":1,"raw_gma":1,"lenc":0,"vflip":0,"hmirror":0,"dcw":1,"colorbar":0,"cam_name":"Matchboxscope","code_ver":"Apr 17 2023 @ 09:18:49","rotate":"0","stream_url":"',(0,r.kt)("a",{parentName:"p",href:"http://192.168.137.69:81/%22,%22anglerfishSlider%22:%221%22%7D"},'http://192.168.137.69:81/","anglerfishSlider":"1"}'),"\nYou can try it out yourself"),(0,r.kt)("p",null,"For a more advanced interface and multi-camera setup, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/omniscope-viewer"},"Omniscope project"),"."),(0,r.kt)("h4",{id:"more-theory-on-accessing-esp32-camera-frames-using-python-and-rest-api"},"More theory on Accessing ESP32 Camera Frames Using Python and REST API"),(0,r.kt)("p",null,"This is a bit more explanation on how you can access the frames"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Setup the Environment"),":"),(0,r.kt)("p",{parentName:"li"},"First, ensure you've set up your Python environment and installed the required libraries:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install requests opencv-python numpy\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sending an HTTP Request to Retrieve a Frame"),":"),(0,r.kt)("p",{parentName:"li"},"The ESP32 camera, when set up as an HTTP server, can provide frames as JPEG images in response to specific requests. One common endpoint might be ",(0,r.kt)("inlineCode",{parentName:"p"},"/capture"),", which returns a single JPEG frame."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport cv2\nimport numpy as np\n\n# Define the camera\'s API endpoint\nCAMERA_ENDPOINT = "http://192.168.4.1/capture"\n\n# Fetch the JPEG image from the ESP32 camera\nresponse = requests.get(CAMERA_ENDPOINT)\n\n# Check if the request was successful\nif response.status_code == 200:\n    # Convert the image bytes to a numpy array\n    image_np_array = np.frombuffer(response.content, dtype=np.uint8)\n\n    # Decode the numpy array into an image\n    image = cv2.imdecode(image_np_array, cv2.IMREAD_COLOR)\n\n    # Display the image\n    cv2.imshow(\'ESP32 Camera Frame\', image)\n    cv2.waitKey(0)\n    cv2.destroyAllWindows()\nelse:\n    print(f"Failed to retrieve image. HTTP Response Code: {response.status_code}")\n')),(0,r.kt)("p",{parentName:"li"},"The script above does the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends a GET request to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/capture")," endpoint of the ESP32 camera."),(0,r.kt)("li",{parentName:"ul"},"If successful (HTTP status code 200), it converts the JPEG byte data into a numpy array."),(0,r.kt)("li",{parentName:"ul"},"Using OpenCV, the numpy array is then decoded into an actual image, which can be displayed or processed further."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Streaming Frames"),":"),(0,r.kt)("p",{parentName:"li"},"To continuously fetch and display frames (essentially streaming the video feed), you can place the request and image processing code inside a loop. You might also want to include error-handling mechanisms to handle scenarios where a frame might not be fetched successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"while True:\n    response = requests.get(CAMERA_ENDPOINT)\n\n    if response.status_code == 200:\n        image_np_array = np.frombuffer(response.content, dtype=np.uint8)\n        image = cv2.imdecode(image_np_array, cv2.IMREAD_COLOR)\n\n        cv2.imshow('ESP32 Camera Stream', image)\n\n        # Break the loop if 'q' key is pressed\n        if cv2.waitKey(1) & 0xFF == ord('q'):\n            break\n    else:\n        print(f\"Failed to retrieve image. HTTP Response Code: {response.status_code}\")\n\ncv2.destroyAllWindows()\n")),(0,r.kt)("p",{parentName:"li"},"This script continuously requests frames and displays them, giving the appearance of streaming. Pressing the ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," key will stop the streaming and close the display window."))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"You've now established a connection between the ESP32 camera and Python to visualize the streaming data using Napari. Explore more, adapt, and expand based on your needs!"),(0,r.kt)("h2",{id:"feedback--community"},"Feedback & Community"),(0,r.kt)("p",null,"Your contributions are invaluable! Share results, raise questions, or suggest modifications by creating an issue in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/issues"},"repository"),"."))}u.isMDXComponent=!0},7586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/espressoscopenapari-03d5a327dbbebe32b3889029b86a8dfc.jpg"},8006:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/walkthrough_napari-0362d5bf766efe222c8e1da29908644d.gif"}}]);