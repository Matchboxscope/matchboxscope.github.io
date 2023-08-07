"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,g=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="ESPressoscope (Injection Molded Version of the Matchboxscope)",s={unversionedId:"ESPressoScope",id:"ESPressoScope",title:"ESPressoscope (Injection Molded Version of the Matchboxscope)",description:"A Cup-sized microscope that never sleeps.",source:"@site/docs/ESPressoScope.md",sourceDirName:".",slug:"/ESPressoScope",permalink:"/docs/ESPressoScope",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ESPectrometer",permalink:"/docs/ESPectrometer"},next:{title:"Firmware",permalink:"/docs/Firmware"}},l={},p=[{value:"Improvements",id:"improvements",level:2},{value:"Flash the firmware",id:"flash-the-firmware",level:2},{value:"Assembly",id:"assembly",level:2},{value:"Done",id:"done",level:2},{value:"Operation",id:"operation",level:2},{value:"Find the focus",id:"find-the-focus",level:3},{value:"Software",id:"software",level:2},{value:"Capturing imates",id:"capturing-imates",level:3},{value:"Browser-based operation",id:"browser-based-operation",level:3},{value:"ImJoy/ImageJ.js",id:"imjoyimagejjs",level:4},{value:"GitHub upload",id:"github-upload",level:4},{value:"Autonomous operation",id:"autonomous-operation",level:3},{value:"Non-deepsleep timelapse",id:"non-deepsleep-timelapse",level:4},{value:"Deep-sleep timelapse",id:"deep-sleep-timelapse",level:4},{value:"Imaging Results",id:"imaging-results",level:2},{value:"Showcase",id:"showcase",level:2}],d={toc:p},h="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"espressoscope-injection-molded-version-of-the-matchboxscope"},"ESPressoscope (Injection Molded Version of the Matchboxscope)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"A Cup-sized microscope that never sleeps.")),(0,r.kt)("p",null,"This is the latest version of the base assembly for any ESP32-based microscope."),(0,r.kt)("h2",{id:"improvements"},"Improvements"),(0,r.kt)("p",null,"This device is a work-in-progress instrument. Not everything is perfectly working yet. Bare with us. If you find something sneaky, please feel free to file an issue or start a discussion here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matchboxscope/Matchboxscope"},"https://github.com/matchboxscope/Matchboxscope")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Known Issues:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hole for led holder larger"),(0,r.kt)("li",{parentName:"ul"},"Do we really want threaded inserts?"),(0,r.kt)("li",{parentName:"ul"},"Case of ESP32 may be pushing the boot/reset button causing issues while turning on?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Improvements:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"removing threaded inserts saves a hot iron, but removes smooth operation while focussing"),(0,r.kt)("li",{parentName:"ul"},"one of the insert holes is a little off, does not have enough printing material/support"),(0,r.kt)("li",{parentName:"ul"},"make hole round assembly larger in diameter to have moroe support for the threaded inserts?"),(0,r.kt)("li",{parentName:"ul"},"diffuser for the led")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The newest ",(0,r.kt)("strong",{parentName:"p"},"3D Printing files")," can be found in the ESPressoscope release here:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2"},"https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2"))),(0,r.kt)("h2",{id:"flash-the-firmware"},"Flash the firmware"),(0,r.kt)("p",null,"Please visit the following explanation ",(0,r.kt)("a",{parentName:"p",href:"/docs/Firmware"},"Firmware")),(0,r.kt)("h2",{id:"assembly"},"Assembly"),(0,r.kt)("p",null,"These are the parts you need to build a Matchboxscope:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4570).Z,width:"2736",height:"3648"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Price (USD)"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ESP32-Camera board + USB Serial adapter"),(0,r.kt)("td",{parentName:"tr",align:null},"ESP32 Camera Board with USB Serial"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"$20"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/ESP32-CAM-MB-Kameramodul-Bluetooth-Entwicklungsplatine-serielle-automatischer-1-St%C3%BCck/dp/B0BW8R64G2/ref=asc_df_B0BW8R64G2/?tag=googshopde-21&linkCode=df0&hvadid=650906361097&hvpos=&hvnetw=g&hvrand=1218942929036455298&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-2022052345436&psc=1&th=1&psc=1&gclid=CjwKCAjw_aemBhBLEiwAT98FMqvqt9tAKJwjN-7spPI5fVI1voVxfh5AhyYn2LXKl_vBqAfgKlxVlBoCHo8QAvD_BwE"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lid/bottom (printed)"),(0,r.kt)("td",{parentName:"tr",align:null},"3D Printed Lid/bottom"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"$2 (each)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Base (printed)"),(0,r.kt)("td",{parentName:"tr",align:null},"3D Printed Base"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"$2 (each)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Camera holder (printed)"),(0,r.kt)("td",{parentName:"tr",align:null},"3D Printed Camera holder"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"$3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lamp holder (printed)"),(0,r.kt)("td",{parentName:"tr",align:null},"3D Printed Lamp holder"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"$2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lens holder (printed)"),(0,r.kt)("td",{parentName:"tr",align:null},"3D Printed Lens holder"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"$2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED Lamp"),(0,r.kt)("td",{parentName:"tr",align:null},"LIHAO Mini LED Lamp (Waterproof)"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"$5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.nl/LIHAO-mini-ledlampjes-lantaarns-batterijen-waterdicht/dp/B01FF07XFE"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Springs"),(0,r.kt)("td",{parentName:"tr",align:null},"Pack of 3 Springs"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"$1 (pack)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/Druckfedern-Sortiment-Spirale-Druckfeder-Stahlfeder/dp/B079N7BMS3/ref=asc_df_B079N7BMS3/?tag=googshopde-21&linkCode=df0&hvadid=228048441988&hvpos=&hvnetw=g&hvrand=1914160452934365838&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-420561922299&psc=1&th=1&psc=1"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M3x20 Cylindrical Headed Screws (DIN912)"),(0,r.kt)("td",{parentName:"tr",align:null},"Pack of 8 M3x20 Screws"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.5 (pack)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M3x6mm Screws (DIN912)"),(0,r.kt)("td",{parentName:"tr",align:null},"Pack of 2 M3x6mm Screws"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.2 (pack)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M3x12mm Screws (DIN912)"),(0,r.kt)("td",{parentName:"tr",align:null},"Pack of 4 M3x12mm Screws"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.3 (pack)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M3x24mm Screws (DIN912)"),(0,r.kt)("td",{parentName:"tr",align:null},"Pack of 3 M3x24mm Screws"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.4 (pack)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M3 threaded inserts (4x6mm)"),(0,r.kt)("td",{parentName:"tr",align:null},"Pack of 6 M3 Threaded Inserts"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"$1 (pack)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/-/en/Threaded-Bushings-Internal-Ultrasonic-Printers/dp/B0BFV5PXFY/ref=sr_1_5?crid=SQJMDVXKZ5EN&keywords=threaded+insert&qid=1690971183&s=industrial&sprefix=threaded+insert+%2Cindustrial%2C75&sr=1-5"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USB micro cable"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Micro Cable"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"$5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.de/Amazon-Basics-USB-C-USB-IF-Certified-black/dp/B085SBKFJR/ref=sr_1_1_ffob_sspa?crid=J2LWNNBLS3X6&keywords=usb+micro&qid=1690971197&s=industrial&sprefix=usb+micro%2Cindustrial%2C86&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"},"Link"))))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"WARNING:"))," It is advisable to have the USB cable disconnected from the camera board. This way the USB connector won't rip off the PCB and you won't induce any electro static discharges which may ultimatively destroy the board")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the threaded inserts to the base using a hot iron - don't burn yourself! Hint: You can have 3 inserts on the top and three on the bottom. A hot iron with a fine tip is better than one with a flat one. (",(0,r.kt)("strong",{parentName:"p"},"HINT:")," This mechanism may change back to a non-threaded insert based version for better operatibility)\n",(0,r.kt)("img",{src:a(110).Z,width:"3648",height:"2736"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat this for all 6 slots (or 5 if you only use 2 on the bottom)\n",(0,r.kt)("img",{src:a(8775).Z,width:"2736",height:"3648"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the lens from the camera module using pliers\n",(0,r.kt)("img",{src:a(7190).Z,width:"3648",height:"2736"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HINT/Warning:")," Be careful while removing the lens. The flex cable is sensitive to tension. It may be easier to first remove the camera module using the snap-bar mechanism and then later add it again.\n",(0,r.kt)("img",{src:a(674).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Add the lens to the holder and remove the sticky tape (",(0,r.kt)("strong",{parentName:"li"},"Note"),": This part looks a little different now since the screw has to move closer to the base board); ",(0,r.kt)("strong",{parentName:"li"},"Hint:")," The distance between the camera lens and the sensor determines the magnification, the further out the lens lurkes, the higher the magnification. You can tune it freely. ",(0,r.kt)("strong",{parentName:"li"},"Hint :")," Remove any sticker that may remain on the camera lens.\n",(0,r.kt)("img",{src:a(6849).Z,width:"3648",height:"2736"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HINT:")," In Motion:\n",(0,r.kt)("img",{src:a(9305).Z,width:"800",height:"450"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fix the lens on the base using M3x6mm screws (",(0,r.kt)("strong",{parentName:"p"},"Note"),": The screws should not touch the PCB later when everything is fully assembled! Therefore, please use short screws. )\n",(0,r.kt)("img",{src:a(2260).Z,width:"3648",height:"2736"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the camera holder to the board and fix the camera in place (",(0,r.kt)("strong",{parentName:"p"},"Hint"),": If the Camera is not holding properly, you could use blutek or double sided sticky tape to fix it temporally. ",(0,r.kt)("strong",{parentName:"p"},"WARNING:")," be careful with the flex-pcb (copper one) since this easily breaks if not handled with care); Make sure the flatband cable is oriented correctly and the camera sensor (round, shingy side) points to the SD card slot as indicated in the image below. Make sure you have a good mechanical connection between the flat-band cable and the snap-bar-like mechanism of the ESP-CAM board. Carefuly pull the connection and see if it won't go off.\n",(0,r.kt)("img",{src:a(35).Z,width:"3648",height:"2736"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ESP32 board to the base so that the camera tube fits into the hole in the base\n",(0,r.kt)("img",{src:a(5448).Z,width:"3648",height:"2736"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Close the base with the lid from below using M3x12mm screws (not using too long screws); ",(0,r.kt)("strong",{parentName:"p"},"HINT:")," Make sure the lid(s) are oriented such that the screw holes are pointing outwards as indicated in the image below:\n",(0,r.kt)("img",{src:a(8348).Z,width:"3648",height:"2736"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the springs to the screws and mount the sample plate using M3x24mm screws;  Add the lamp holder using the M3x12 screw.\n",(0,r.kt)("img",{src:a(4484).Z,width:"2736",height:"3648"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HINT:")," This is a bit tricky. Start with one screw+spring combination, fix it and continue with all others. In motion:\n",(0,r.kt)("img",{src:a(1962).Z,width:"640",height:"360"})),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Add the lamp - done!\n",(0,r.kt)("img",{src:a(4486).Z,width:"2736",height:"3648"}))),(0,r.kt)("h2",{id:"done"},"Done"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7295).Z,width:"3648",height:"2736"})),(0,r.kt)("h2",{id:"operation"},"Operation"),(0,r.kt)("h3",{id:"find-the-focus"},"Find the focus"),(0,r.kt)("p",null,"Turn on the light. Take a piece of paper and first try if you can sense any contrast variation in the camera stream. Try to turn the 3 spring-loaded screws such that the stage z-position becomes coincident with the position of best contrast with the piece of paper. Try to keep the stage parallel to the base."),(0,r.kt)("h2",{id:"software"},"Software"),(0,r.kt)("h3",{id:"capturing-imates"},"Capturing imates"),(0,r.kt)("p",null,"If you start the stream and hit the Capture button, the image gets stored on the internal SD card (if inserted). For this, please flash it using the official SD card formatting tool: ",(0,r.kt)("a",{parentName:"p",href:"https://www.sdcard.org/downloads/formatter/"},"https://www.sdcard.org/downloads/formatter/")),(0,r.kt)("h3",{id:"browser-based-operation"},"Browser-based operation"),(0,r.kt)("p",null,"You can connect to the ESP32 using a wifi-enabled device that runs a browser (mostly tested with Chrome). Find the device's IP address (e.g. by observing the Serial output) and enter this address into the browser's address bar. The UI comes in ",(0,r.kt)("inlineCode",{parentName:"p"},"simple")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"advanced")," mode. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"advanced"),". Play around with the settings. You can tweak it to be fully manual, however, the image data will always be JPEG compressed (sorry)."),(0,r.kt)("h4",{id:"imjoyimagejjs"},"ImJoy/ImageJ.js"),(0,r.kt)("p",null,"When the stream is running, you can send an image to the in-built ImJoy/ImageJ.js plugin. There you can do all kinds of image processing tasks as you know from Fiji. ",(0,r.kt)("strong",{parentName:"p"},"Note")," This will only work if the stream is running. Once you hit the ",(0,r.kt)("inlineCode",{parentName:"p"},"send to ImJoy")," button, the stream will pause. For another image, you have to restart the stream first."),(0,r.kt)("h4",{id:"github-upload"},"GitHub upload"),(0,r.kt)("p",null,"Similar to the ImageJ.js functionality, the ESP32 can trigger a ",(0,r.kt)("inlineCode",{parentName:"p"},"git push")," of the latest frame from the camera stream to a gallery repository available here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matchboxscope/Matchboxscope-gallery"},"https://github.com/matchboxscope/Matchboxscope-gallery"),". The image resolution will be altered to a much smaller value, (320x240 pixels^2) so that the upload won't timeout (unknown reason??). This change in resolution leads to an over exposed image with previously adjusted settings."),(0,r.kt)("p",null,"The uploaded images get compiled into a JS-based gallery daily, available here: ",(0,r.kt)("a",{parentName:"p",href:"https://matchboxscope.github.io/gallery/matchboxgallery"},"https://matchboxscope.github.io/gallery/matchboxgallery")),(0,r.kt)("h3",{id:"autonomous-operation"},"Autonomous operation"),(0,r.kt)("p",null,"If a FAT formatted SD micro card is inserted, you can record timelapse image series with the previously entered settings. Two modes are available. One, where the network operatibility is still available, the other when it'S in deep-sleep mode (e.g. under water)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HINT:")," Please format the SD card using the official SD card formatter: ",(0,r.kt)("a",{parentName:"p",href:"https://www.sdcard.org/downloads/formatter/"},"https://www.sdcard.org/downloads/formatter/")),(0,r.kt)("h4",{id:"non-deepsleep-timelapse"},"Non-deepsleep timelapse"),(0,r.kt)("p",null,"Adjust the value in the timelapse slider to something between 0-600s. The image gets stored on the SD card."),(0,r.kt)("h4",{id:"deep-sleep-timelapse"},"Deep-sleep timelapse"),(0,r.kt)("p",null,'To enter this setting, you have to move the slider for Anglerfishmode all the way to the very right. A link appears that will activate the deep-sleep time lapse feature. It will use the previously set period in the timelapse slider. All settings that have been entered through the GUI will be used for imaging + an exposure series of 1,5,10,50,100,500ms will be acquired. Images get stored on the SD card. To exit the "boot loop", you simply remove the SD card and it will turn back to normal mode,where it tries to connect to the previously set wifi connection.'),(0,r.kt)("p",null,"![](./IMAGES/injectionmold/Result of 2023_07_12-HeLaLongTermIncubator_Good.mpg)"),(0,r.kt)("h2",{id:"imaging-results"},"Imaging Results"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HeLa cells in an incubator while they are dying (sad but true)"),"\n",(0,r.kt)("img",{src:a(1387).Z,width:"200",height:"150"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8106).Z})),(0,r.kt)("h2",{id:"showcase"},"Showcase"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2530).Z,width:"1536",height:"2048"}),"\n",(0,r.kt)("img",{src:a(2440).Z,width:"800",height:"600"}),"\n",(0,r.kt)("img",{src:a(8847).Z,width:"800",height:"600"}),"\n",(0,r.kt)("img",{src:a(1973).Z,width:"800",height:"600"}),"\n",(0,r.kt)("img",{src:a(9669).Z,width:"800",height:"600"}),"\n",(0,r.kt)("img",{src:a(1791).Z,width:"1536",height:"2048"}),"\n",(0,r.kt)("img",{src:a(8221).Z,width:"1024",height:"768"}),"\n",(0,r.kt)("img",{src:a(1356).Z,width:"1280",height:"1024"}),"\n",(0,r.kt)("img",{src:a(3087).Z,width:"1280",height:"1024"}),"\n",(0,r.kt)("img",{src:a(2968).Z,width:"1280",height:"1024"}),"\n",(0,r.kt)("img",{src:a(7264).Z,width:"1280",height:"1024"}),"\n",(0,r.kt)("img",{src:a(5187).Z,width:"1280",height:"1024"})))}c.isMDXComponent=!0},6849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20230519_122130-3e22d45d7e20bbaa0b2488b970e74d42.jpg"},674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VID_20230504_104920-8d39bee6aaca545cd498fecc4589f108.gif"},9305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VID_20230504_105826-6ea973f06dd0c41d439f029fe999d926.gif"},1962:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VID_20230504_111346-11516b8d55037f8cc7613cc558e33c4d.gif"},8775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding1-4bfb3439e6877ac04e07f2df3fedd1ac.jpg"},2260:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding12-c2106c673e1d2bc649858635d28ce1a6.jpg"},35:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding14-64092b4a80e9797b32d499571ce9144a.jpg"},5448:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding15-4b5a7da10125605ee414410f80f37fec.jpg"},8348:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding16-a5f46520d1124b60cfdc57669e7646e9.jpg"},4484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding17-f2a7b2701fe026b03fc2779a3163e39e.jpg"},4486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding18-75c6958096c5e2b40e98212e9f2c33dc.jpg"},7295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding19-a96bcc3f63a18b87e85d2cdfe0d4ecbc.jpg"},4570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding2-9c988ea4150d8a9b485f969601b4931e.jpg"},110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding3-7fe5fb603c763c13c4ef313d40a45948.jpg"},7190:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding4-018b8dbda900f4f889f56f7439902130.jpg"},2530:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_1-7baa588a80a902dc414d0a1f6177272d.jpeg"},2968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_10-132556c39a40c76c8daa34eede9be222.jpeg"},7264:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_11-473950d15c546a8ddcdf8ab3566c4e87.jpeg"},5187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_12-fc3bb0f097e4e3160649426d5ba06de7.jpeg"},2440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_2-6315d7b9f68101e092a2da8bf467af19.jpeg"},8847:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_3-2d69551bbd68d5c379fc85567c919df0.jpeg"},1973:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_4-cdf4bbcc9831c51a23a62b5af1777382.jpeg"},9669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_5-58038d0f265d15c7011ae7eb85ce3ca4.jpeg"},1791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_6-420e35dedcc1832b81916f679fde444e.jpeg"},8221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_7-fc96a654e1e24855e62c310ebeb9515a.jpeg"},1356:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_8-0aeb671dc39504874b7d2c394e288a2c.jpeg"},3087:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/matchboxscope_injectionmolding_sample_9-3b137739ffe95fa31ba7f4ec35706567.jpeg"},8106:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023_06_23-HeLa_Timelapse-1-ac2d1d1b247114236fe470151b86eaa7.mpg"},1387:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ResultofSDkeptstack-fa739a30ceae8b7d008df9ff8ae73437.gif"}}]);