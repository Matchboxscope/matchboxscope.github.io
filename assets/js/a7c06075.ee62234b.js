"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[1597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={},o="Fluidiscope",s={unversionedId:"Variants/Fluidiscope",id:"Variants/Fluidiscope",title:"Fluidiscope",description:"Microscopy is a key tool in many scientific fields, including medical research, environmental monitoring, and materials science. However, current microscopy techniques often have limitations in terms of accessibility, flexibility, and high-throughput sample monitoring. To address these challenges, we developed an ESP32-based microscope with a peristaltic pump module for continuous or controlled flow. It can be used for microplastics, yeast, plankton... find it out! :)",source:"@site/docs/Variants/Fluidiscope.md",sourceDirName:"Variants",slug:"/Variants/Fluidiscope",permalink:"/docs/Variants/Fluidiscope",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ESPressoscope (Injection Molded Version of the Matchboxscope)",permalink:"/docs/Variants/ESPressoScope"},next:{title:"ESP32-based InLine Holography Microscope",permalink:"/docs/Variants/Holoscope"}},l={},p=[{value:"Components",id:"components",level:2},{value:"Bill of material",id:"bill-of-material",level:3},{value:"3D printing files",id:"3d-printing-files",level:2},{value:"CAD Files",id:"cad-files",level:2},{value:"Assembly Process",id:"assembly-process",level:2},{value:"Some thoughts on the Ikea Lamp",id:"some-thoughts-on-the-ikea-lamp",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fluidiscope"},"Fluidiscope"),(0,i.kt)("p",null,"Microscopy is a key tool in many scientific fields, including medical research, environmental monitoring, and materials science. However, current microscopy techniques often have limitations in terms of accessibility, flexibility, and high-throughput sample monitoring. To address these challenges, we developed an ESP32-based microscope with a peristaltic pump module for continuous or controlled flow. It can be used for microplastics, yeast, plankton... find it out! :)"),(0,i.kt)("p",null,"Traditional microscopy techniques often require specialized expertise, expensive equipment, and limited flexibility. Furthermore, high-throughput sample monitoring can be challenging using traditional microscopy methods. To overcome these limitations, we designed an ",(0,i.kt)("strong",{parentName:"p"},"ESP32-based microscope with a peristaltic pump module*")," to enable continuous or controlled flow. The microscope is equipped with a decent camera module for high-resolution imaging and real-time video capture. The peristaltic pump module is added to the microscope assembly using a tube that adapts to the pump. A second ESP32 is used to control the stepper motor 28byj-48, which drives the pump."),(0,i.kt)("h1",{id:"assembly"},"Assembly"),(0,i.kt)("p",null,"We will give you a step-by-step guide how to assemble the fluidics part. The microscope (i.e. ",(0,i.kt)("a",{parentName:"p",href:"docs/Matchboxscope.md"},"matchboxscope")," remains the same. If anything fails or doesn't match as expected (most likely), please file an issue immediately. We will be there for you.\n",(0,i.kt)("strong",{parentName:"p"},"Illumination:")," Since we wanted to try different illumination scenarios, we added the IKEA USB Lamp to the assembly. It'S powered by the ESP32 USB."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The Teaser"),"\n",(0,i.kt)("img",{alt:"Explosion",src:a(333).Z,width:"640",height:"360"}),'{ width="400" height="300" style="display: block; margin: 0 auto" }'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The Rendering"),"\n",(0,i.kt)("img",{alt:"Explosion",src:a(5761).Z,width:"1024",height:"768"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In Reality"),"\n",(0,i.kt)("img",{alt:"Start",src:a(5914).Z,width:"2736",height:"3648"})),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"This you will need for your device in order to work:"),(0,i.kt)("h3",{id:"bill-of-material"},"Bill of material"),(0,i.kt)("p",null,"(only for the perestaltic pump)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Part"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Purpose"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Price"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ESP32 D1 mini"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Controls the pump, receives PWM signal 0..3V3 (fwd/bwd/0)"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.azdelivery.de/products/esp32-d1-mini"},"AZ")),(0,i.kt)("td",{parentName:"tr",align:"center"},"10 \u20ac")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Ball bearing 8x3mm"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Push the tube"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.5\u20ac")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3D printing material (PLA)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Ikea USB lamp"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Variable Illumination"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.ikea.com/de/de/p/jansjoe-led-leuchte-usb-schwarz-70291232/"},"ikea")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5\u20ac")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"28byj-48 + ULN2003"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rotating Stepper Motor"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.amazon.de/Elegoo-Stepper-Schrittmotor-28BYJ-48-Treiberplatine/dp/B01MEGIHLF"},"Amazon")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5\u20ac")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"5mm silicone tube"),(0,i.kt)("td",{parentName:"tr",align:"center"},"for the perestaltic"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"None"},"???")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.5\u20ac")))),(0,i.kt)("h2",{id:"3d-printing-files"},"3D printing files"),(0,i.kt)("p",null,"All design files can be found in the release from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Matchboxscope/releases/tag/ESPMicroscopeCollectionv2"},"Matchboxscope Releases")," (Look for miniplanktoscope)."),(0,i.kt)("p",null,"All 3D-printable files can be found ",(0,i.kt)("a",{parentName:"p",href:"./STL/Anglerfish_JAR"},"here"),":"),(0,i.kt)("h2",{id:"cad-files"},"CAD Files"),(0,i.kt)("p",null,"The release files can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_PlanktoscopeMini.zip"},"https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_PlanktoscopeMini.zip")),(0,i.kt)("h2",{id:"assembly-process"},"Assembly Process"),(0,i.kt)("p",null,"These are the parts you need"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4319).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,"Assemble the perestaltic pump. Add the M3x8 DIN906 to the rotating head and mount the 8x3mm bearings:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(9045).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,"Screw the Stepper motor to the pump-base with M3x12mm screws"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(2726).Z,width:"2736",height:"3648"})),(0,i.kt)("p",null,"Add the perestaltic head to the motor shaft"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(1126).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,"Add a tube that fits the assembly (e.g. 5mm silicon), mount zipties to the ends of the inlet/outlet, so that when rotating the motor, the motor, the tube won'T run away"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(9141).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,"Add the lid and fix it with M3x12mm screws;"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(243).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,"The wiring should look like this. Follow this tutorial for the wiring; You can choose almost any pin configuration. The code we will use later can be found ","[here]",":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(8207).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,'The motor will get the PWM signal from the camera and controlls the motor\'s rounds per miniute acoordingly:\nThe in1-4 pins on the ULN2003 can be 32,25,22,27 as stated below.\nThe "analogIn" was chosen to be 4.'),(0,i.kt)("p",null,"In code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Stepper.h>\n\nconst int stepsPerRevolution = 2048;  // change this to fit the number of steps per revolution\n\n// ULN2003 Motor Driver Pins\n#define IN1 32\n#define IN2 25\n#define IN3 22\n#define IN4 27\n\n#define analogIn 4\n\n// initialize the stepper library\nStepper stepper(stepsPerRevolution, IN1, IN3, IN2, IN4);\n\nvoid setup() {\n  // set the speed at 5 rpm\n  stepper.setSpeed(10);\n  // initialize the serial port\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  // read analog value from the potentiometer\n  int nAverage = 20;\n  long valSum = 0;\n  int val = 0;\n  for(int iAverage = 0; iAverage<nAverage; iAverage++){\n    // we use PWM, so we have to create some kind of mean..\n    valSum += analogRead(analogIn); // 0..4095\n\n  }\n  val = (float)valSum/(float)nAverage;\n  Serial.println(val);\n\n  // if the joystic is in the middle ===> stop the motor\n  if (  (val > 2000) && (val < 2100) )\n  {\n    // STOP\n    Serial.println("STOP");\n    digitalWrite(IN1, LOW);\n    digitalWrite(IN2, LOW);\n    digitalWrite(IN3, LOW);\n    digitalWrite(IN4, LOW);\n  }\n\n  else if (val >= 2100)\n  {\n    // map the speed between 5 and 500 rpm\n    int speed_ = map(val, 2100, 4095, 1, 15);\n    // set motor speed\n    stepper.setSpeed(speed_);\n\n    // move the motor (1 step)\n    stepper.step(1);\n  }\n\n  // move the motor in the other direction\n  else\n  {\n    // map the speed between 5 and 500 rpm\n    int speed_ = map(val, 2000, 0, 1, 15);\n    // set motor speed\n    stepper.setSpeed(speed_);\n\n    // move the motor (1 step)\n    stepper.step(-1);\n  }\n}\n')),(0,i.kt)("p",null,"Make sure the motor runs freely (for this, simply connect the motor driver board to the ESP, e.g. following this ",(0,i.kt)("a",{parentName:"p",href:"https://randomnerdtutorials.com/esp32-stepper-motor-28byj-48-uln2003/"},"tutorial")," and try a sample code for teh arduio IDE)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(5156).Z,width:"1280",height:"720"})),(0,i.kt)("p",null,"Hide all the cables"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(3870).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,"Put it close together, organize the wires and tubes\n",(0,i.kt)("img",{alt:"Start",src:a(8834).Z,width:"2736",height:"3648"})),(0,i.kt)("p",null,"Add the tube and make sure the wires are leaving the assembly like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(2099).Z,width:"2736",height:"3648"})),(0,i.kt)("h3",{id:"some-thoughts-on-the-ikea-lamp"},"Some thoughts on the Ikea Lamp"),(0,i.kt)("p",null,"This is inspired by the ",(0,i.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:5167475"},"https://www.thingiverse.com/thing:5167475")," design, where Dupont cable were added to a 3D printed assembly in order to mimic a female USB plug. To be honest, it's much more straightforward to simply by a female adapter and solder it to the board using some wires - but: I didn't have one, so I created this layer for the lamp. It wasn't straightforward to add the ikea lamp - so: ",(0,i.kt)("strong",{parentName:"p"},"WARNING")," Better buy one of these and solder it to the ESP 5V/GND :)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(8773).Z,width:"2736",height:"3648"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(8979).Z,width:"3648",height:"2736"})),(0,i.kt)("p",null,"And all mounted together:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start",src:a(4674).Z,width:"2736",height:"3648"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Done!!!")),(0,i.kt)("h1",{id:"software"},"Software"),(0,i.kt)("p",null,"More to come here?"))}m.isMDXComponent=!0},8773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20221221_113751-68994de1519b891a422c99b7b5f73497.jpg"},8979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20221221_113755-e929a4632246d3a3e2995ed375aa7102.jpg"},4674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20221221_114443-3817c97637d5ce5efdc5eb73cbdab818.jpg"},5761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Planktoscope_Mini_v0-027c3f0a9520009b5aa69ee7ce818a42.png"},333:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Teaser-2a6875a2a15a9f485aa68d4cfafe6729.gif"},9045:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_0-0e92763f24667af681959660c458ec68.jpg"},4319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_1-5fe61932d5c2dd450ad5e55e84903e85.jpg"},5914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_10-c217f78f86147da0cf8af57c75b7d8dc.jpg"},5156:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_11-202bfa04ed6a8968ea537d5031bebd7e.gif"},2726:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_2-fb292ea8127141feda5d168fb93d7b19.jpg"},1126:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_3-8e004ef04f69b72233786d71234996c9.jpg"},9141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_4-26808b8c1d40dad958293ac38a01a7c9.jpg"},243:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_5-f17faa6787792163f2c456a5aa76912f.jpg"},8207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_6-e4f93e6e3e6a6ef488996a06775430e4.jpg"},3870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_7-f0a03d70af5836ffd08c3087d2ecae5e.jpg"},8834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_8-3ba5b69dbc1733535bd1cd5d4eab396a.jpg"},2099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluidiscope_9-2ccd150517660a2aa2c4e621d9f8029e.jpg"}}]);