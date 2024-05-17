"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[9658],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,h=g["".concat(s,".").concat(m)]||g[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));const i={},r=void 0,l={unversionedId:"Software/Firmware",id:"Software/Firmware",title:"Firmware",description:"Instead of flashing the firmware - which may become tricky, especially if you have troubles with:",source:"@site/docs/Software/Firmware.md",sourceDirName:"Software",slug:"/Software/Firmware",permalink:"/docs/Software/Firmware",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Anglerfish APP User Guide",permalink:"/docs/Software/AnglerfishAPP"},next:{title:"WebSERIAL",permalink:"/docs/Software/WebSERIAL"}},s={},c=[{value:"Step-by-step guide",id:"step-by-step-guide",level:3},{value:"Creating an access point / wifi hotspot",id:"creating-an-access-point--wifi-hotspot",level:3},{value:"Troubleshoot",id:"troubleshoot",level:3},{value:"Not connecting",id:"not-connecting",level:4},{value:"Not connecting via Wifi",id:"not-connecting-via-wifi",level:4},{value:"Stream stops",id:"stream-stops",level:4},{value:"Bootloop",id:"bootloop",level:4}],p={toc:c},g="wrapper";function d(e){let{components:t,...i}=e;return(0,o.yg)(g,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Instead of flashing the firmware - which may become tricky, especially if you have troubles with:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"the browser not connecting to the device (e.g. firmware issues, driver issues)"),(0,o.yg)("li",{parentName:"ul"},"installation of drivers not possible"),(0,o.yg)("li",{parentName:"ul"},"usb cable doesn't work"),(0,o.yg)("li",{parentName:"ul"},"ESP32-CAM board behaves weird (99% of the time this is the case..)\nyou can use the ",(0,o.yg)("strong",{parentName:"li"},"standard firmware/preflashed software")," and simply connect the device to USB-power and search for the access point the device creates by default (e.g. ",(0,o.yg)("em",{parentName:"li"},"ESP32-XXXX")," and go to ",(0,o.yg)("a",{parentName:"li",href:"http://192.168.4.1"},"http://192.168.4.1"),", you will see some very nice GUI :-) )"))),(0,o.yg)("p",null,"This is an interesting approach from SEEEDStudio itself: ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/grove_ai_vision/index.html"},"https://files.seeedstudio.com/grove_ai_vision/index.html")),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"UPDATE"))," We have created a quick video to show every step from connecting the device to displaying the video on screen. Please consider watching the following ",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/ji-f1ymRpAs"},(0,o.yg)("strong",{parentName:"a"},"YOUTUBE VIDEO")),".")),(0,o.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ji-f1ymRpAs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.yg)("h3",{id:"step-by-step-guide"},"Step-by-step guide"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Connect the ESP32-CAM board to the USB and press the ",(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"RESET"))," (in the rear of the ESP32-CAM board) and ",(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"BOOT"))," (or sometimes ",(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"IO0")),") button (on the USB-side). Then first release the ",(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"RESET"))," and then the ",(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"BOOT"))," button. The device will be in ",(0,o.yg)("inlineCode",{parentName:"li"},"download mode"))),(0,o.yg)("p",null,"In motion (push RST -> CAM board, push Boot/IO0 Serial board, release RST, release Boot)\n",(0,o.yg)("img",{src:n(9925).A,width:"640",height:"360"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Go to ",(0,o.yg)("a",{parentName:"p",href:"https://matchboxscope.github.io/firmware/FLASH.html"},"https://matchboxscope.github.io/firmware/FLASH.html")," and select the ",(0,o.yg)("inlineCode",{parentName:"p"},"ESP32 Camera Simple Webcam Server Advanced")," firmware\n",(0,o.yg)("img",{src:n(5348).A,width:"3648",height:"2736"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Hit the ",(0,o.yg)("inlineCode",{parentName:"p"},"Connect")," button and select the ESP32-CAM\n",(0,o.yg)("img",{src:n(392).A,width:"3648",height:"2736"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select ",(0,o.yg)("inlineCode",{parentName:"p"},"Install ESP32..."),"\n",(0,o.yg)("img",{src:n(1301).A,width:"3648",height:"2736"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Hit ",(0,o.yg)("inlineCode",{parentName:"p"},"Install"),"\n",(0,o.yg)("img",{src:n(2070).A,width:"3648",height:"2736"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Wait for it...\n",(0,o.yg)("img",{src:n(3123).A,width:"3648",height:"2736"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open the serial Minitor afterwards and hit the ",(0,o.yg)("inlineCode",{parentName:"p"},"RESET"),"button on the ESP32\n",(0,o.yg)("img",{src:n(4323).A,width:"3648",height:"2736"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The output should look something like this\n",(0,o.yg)("img",{src:n(1748).A,width:"3648",height:"2736"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"By default the ESP32 will connect to a WIFI hotspot using the following default:"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SSID: Blynk\nPW: 12345678\n")),(0,o.yg)("p",null,"If this is not available, it will create a stand-alone Access Point (AP) to which you would need to connect to with your cellphone/tablet/PC/laptop... The address to reach the device becomes ",(0,o.yg)("a",{parentName:"p",href:"http://192.168.4.1"},"http://192.168.4.1")),(0,o.yg)("p",null,"You can add your own by setting it in the GUI. The following flow-chart gives more insight :"),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(3897).A,width:"3446",height:"3579"})),(0,o.yg)("p",null,"The firmware is based on this code: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/tree/matchboxscope"},"https://github.com/Matchboxscope/matchboxscope-simplecamera/tree/matchboxscope")," and now heavily modified."),(0,o.yg)("ol",{start:10},(0,o.yg)("li",{parentName:"ol"},"finding the ESP in the network may become tricky. You can install the Fing APP (",(0,o.yg)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.overlook.android.fing"},"https://play.google.com/store/apps/details?id=com.overlook.android.fing"),") and scan your local network for its IP. In case you prepared an access point (AP) using Windows, you can spot the IP address in the hotspot  settings.")),(0,o.yg)("h3",{id:"creating-an-access-point--wifi-hotspot"},"Creating an access point / wifi hotspot"),(0,o.yg)("p",null,"You can use the Android AP or Windows hotspot, perhaps also the iPhone thingy to create an access point with the following credentials:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SSID: Blynk\nPW: 12345678\n")),(0,o.yg)("p",null,"and the ESP32 will automatically connect"),(0,o.yg)("p",null,"The log will look like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Connecting to Wifi Network 1: [F6:D1:08:4A:51:F0] Blynk\n[ 13000][V][WiFiGeneric.cpp:97] set_esp_interface_ip(): Configuring Station static IP: 0.0.0.0, MASK: 0.0.0.0, GW: 0.0.0.0\n.[ 13632][V][WiFiGeneric.cpp:355] _arduino_event_cb(): STA Connected: SSID: Blynk, BSSID: f6:d1:08:4a:51:f0, Channel: 1, Auth: WPA2_PSK\n[ 13633][D][WiFiGeneric.cpp:931] _eventCallback(): Arduino Event: 4 - STA_CONNECTED\n[ 13674][V][WiFiGeneric.cpp:369] _arduino_event_cb(): STA Got New IP:192.168.137.217\n[ 13675][D][WiFiGeneric.cpp:931] _eventCallback(): Arduino Event: 7 - STA_GOT_IP\n[ 13678][D][WiFiGeneric.cpp:996] _eventCallback(): STA IP: 192.168.137.217, MASK: 255.255.255.0, GW: 192.168.137.1\n.Client connection succeeded\nIP address: 192.168.137.217\nNetmask   : 255.255.255.0\nGateway   : 192.168.137.1\nSetting httpURL\nSetting up OTA\n\nNo OTA password has been set! (insecure)\n\n[ 16024][I][ArduinoOTA.cpp:141] begin(): OTA server at: Matchboxscope.local:3232\nAdded HTTP service to MDNS server\nTime functions disabled\nStarting web server on port: '80'\nStarting stream server on port: '81'\n\nCamera Ready!\nUse 'http://192.168.137.217/' to connect\nStream viewer available at 'http://192.168.137.217:81/view'\nRaw stream URL is 'http://192.168.137.217:81/'\nCamera debug data is disabled (send 'd' for status dump, or any other char to enable debug)\n")),(0,o.yg)("p",null,"Go to the device's ip address, in this case  ",(0,o.yg)("a",{parentName:"p",href:"http://192.168.137.217/"},"http://192.168.137.217/")," and open the stream."),(0,o.yg)("h3",{id:"troubleshoot"},"Troubleshoot"),(0,o.yg)("h4",{id:"not-connecting"},"Not connecting"),(0,o.yg)("p",null,"Possible causes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Did you install the driver/is the driver installed (Usually it's preinstalled in Windows/Mac)"),(0,o.yg)("li",{parentName:"ul"},"Antivirus software running?"),(0,o.yg)("li",{parentName:"ul"},"USB Cable is actually a data-cable not a charging-only cable?")),(0,o.yg)("h4",{id:"not-connecting-via-wifi"},"Not connecting via Wifi"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"on Android (perhaps iPhone too?) it's a known behaviour; Make sure ",(0,o.yg)("strong",{parentName:"li"},"mobile data")," is switched off when you connect to the access point created by the ESP32 camera")),(0,o.yg)("h4",{id:"stream-stops"},"Stream stops"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"lower the resolution (e.g. VGA)"),(0,o.yg)("li",{parentName:"ul"},"reflash the firmware")),(0,o.yg)("h4",{id:"bootloop"},"Bootloop"),(0,o.yg)("p",null,"Causes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"faulty esp32 camera"),(0,o.yg)("li",{parentName:"ul"},"error while uploading firmware"),(0,o.yg)("li",{parentName:"ul"},"camera broken\nSolutions:"),(0,o.yg)("li",{parentName:"ul"},"reflash the firmware"),(0,o.yg)("li",{parentName:"ul"},"get a new board"),(0,o.yg)("li",{parentName:"ul"},"get a new camera module")))}d.isMDXComponent=!0},9925:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/VID_20230519_114908-1c374b43cdc217a78b97d6b1a9fa8fd3.gif"},3897:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/flowchartwifi-83b6e3b2391617f8e4c96c55e35790e8.png"},4323:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding10-f1e7ddb3b37bd0f6ecea0c1bc69b7346.jpg"},1748:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding13-c097277e266b3e8ab7e8fd29b961654f.jpg"},5348:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding5-a0621b5462d4963b4d204663c14c2195.jpg"},392:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding6-e488288ae42c83ccea305d2575842ff5.jpg"},1301:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding7-6415c42bdce80bc46d3357fd10cc3301.jpg"},2070:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding8-ab91c1a211b638fff846c6ee14c3e43c.jpg"},3123:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding9-47f017578cc8dfbe42cc82ada16f9205.jpg"}}]);