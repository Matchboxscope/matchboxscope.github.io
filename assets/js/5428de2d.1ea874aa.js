"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[1392],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),h=o,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return i?n.createElement(g,a(a({ref:t},d),{},{components:i})):n.createElement(g,a({ref:t},d))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6871:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(7462),o=(i(7294),i(3905));const r={},a="DIY Motorized Microscope with Seeed Studio XIAO Sense",s={unversionedId:"XiaoMotorized",id:"XiaoMotorized",title:"DIY Motorized Microscope with Seeed Studio XIAO Sense",description:"Building unique DIY projects is not only fulfilling but also helps in honing skills and understanding the components better. In this tutorial, we're going to walk you through the steps of turning the Seeed Studio XIAO Sense into a motorized microscope.",source:"@site/docs/XiaoMotorized.md",sourceDirName:".",slug:"/XiaoMotorized",permalink:"/docs/XiaoMotorized",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebSERIAL",permalink:"/docs/WebSERIAL"},next:{title:"Serial Image Stream",permalink:"/docs/serialStream"}},l={},p=[{value:"Background:",id:"background",level:3},{value:"Materials:",id:"materials",level:2},{value:"Assembly:",id:"assembly",level:2},{value:"1. Wiring the XIAO to the Stepper Driver:",id:"1-wiring-the-xiao-to-the-stepper-driver",level:3},{value:"2. Visual Guide:",id:"2-visual-guide",level:3},{value:"All Components Laid Out:",id:"all-components-laid-out",level:4},{value:"Pins Ready to be Bent:",id:"pins-ready-to-be-bent",level:4},{value:"Combine XIAO and Stepper Driver:",id:"combine-xiao-and-stepper-driver",level:4},{value:"Linking VMotor with the Step-up Converter:",id:"linking-vmotor-with-the-step-up-converter",level:4},{value:"Bridging the Direction Pin:",id:"bridging-the-direction-pin",level:4},{value:"Connecting the Motor:",id:"connecting-the-motor",level:4},{value:"3. Final Assembly:",id:"3-final-assembly",level:3},{value:"Coding:",id:"coding",level:2},{value:"Watch it in Action:",id:"watch-it-in-action",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"diy-motorized-microscope-with-seeed-studio-xiao-sense"},"DIY Motorized Microscope with Seeed Studio XIAO Sense"),(0,o.kt)("p",null,"Building unique DIY projects is not only fulfilling but also helps in honing skills and understanding the components better. In this tutorial, we're going to walk you through the steps of turning the Seeed Studio XIAO Sense into a motorized microscope."),(0,o.kt)("h3",{id:"background"},"Background:"),(0,o.kt)("p",null,"The XIAO's diminutive size presents a challenge for adapting bipolar stepper motors, mainly because of the lack of a specific adapter board. Most stepper motor drivers, like those from Trinamic or the A4988, typically require a voltage greater than 6V, but XIAO, through USB, supports only 5V."),(0,o.kt)("p",null,"Nevertheless, the XIAO Sense's footprint coincidentally aligns with the common stepper driver layout. Leveraging this and my desire for minimal additional work, I've created a modification where an A4988 driver board and a Pololu step-up converter (from 5V to 12V) are attached to the XIAO. This modification aims to drive small stepper motors to focus the microscope lens."),(0,o.kt)("h2",{id:"materials"},"Materials:"),(0,o.kt)("p",null,"Here's what you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Xiao Sense ESP32S3 board"),(0,o.kt)("li",{parentName:"ul"},"A4988 or TMC driver"),(0,o.kt)("li",{parentName:"ul"},"2 wires"),(0,o.kt)("li",{parentName:"ul"},"Pololu U3V16F12 step up converter (5V->12V) ",(0,o.kt)("a",{parentName:"li",href:"https://eckstein-shop.de/Pololu-12V-Step-Up-Voltage-Regulator-Spannungsregler-U3V16F12?googlede=1&gclid=CjwKCAjwxOymBhAFEiwAnodBLEc5hGNNLyPqjgnipfdSq02DWteRHEU8KiYmO-bzoIoDtpCwcYBkCxoCe44QAvD_BwE"},"Buy Here"))),(0,o.kt)("h2",{id:"assembly"},"Assembly:"),(0,o.kt)("h3",{id:"1-wiring-the-xiao-to-the-stepper-driver"},"1. Wiring the XIAO to the Stepper Driver:"),(0,o.kt)("p",null,"For a comprehensive guide on this, consider checking out the official ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/"},"Seeed Studio documentation"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pin Assignments for a solder-less configuration:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable -> d6"),(0,o.kt)("li",{parentName:"ul"},"m1 -> D5"),(0,o.kt)("li",{parentName:"ul"},"m2 -> d4"),(0,o.kt)("li",{parentName:"ul"},"m3 -> d3"),(0,o.kt)("li",{parentName:"ul"},"notreset -> d2"),(0,o.kt)("li",{parentName:"ul"},"notsleep -> d1"),(0,o.kt)("li",{parentName:"ul"},"step -> d0"),(0,o.kt)("li",{parentName:"ul"},"dir -> d7 (using a wire)")),(0,o.kt)("p",null,"In addition, connect the step-up converter to the VDD and GND. Then bridge the 12V to VMot with a wire."),(0,o.kt)("h3",{id:"2-visual-guide"},"2. Visual Guide:"),(0,o.kt)("h4",{id:"all-components-laid-out"},"All Components Laid Out:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(1109).Z,width:"3648",height:"2736"})),(0,o.kt)("h4",{id:"pins-ready-to-be-bent"},"Pins Ready to be Bent:"),(0,o.kt)("p",null,"Ensure you align them correctly."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(847).Z,width:"3648",height:"2736"})),(0,o.kt)("h4",{id:"combine-xiao-and-stepper-driver"},"Combine XIAO and Stepper Driver:"),(0,o.kt)("p",null,"It should look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(362).Z,width:"3648",height:"2736"})),(0,o.kt)("p",null,"Make sure the pins for GND/VDD aren't causing a short-circuit:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(2911).Z,width:"3648",height:"2736"})),(0,o.kt)("h4",{id:"linking-vmotor-with-the-step-up-converter"},"Linking VMotor with the Step-up Converter:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(5724).Z,width:"3648",height:"2736"})),(0,o.kt)("h4",{id:"bridging-the-direction-pin"},"Bridging the Direction Pin:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(9548).Z,width:"3648",height:"2736"})),(0,o.kt)("h4",{id:"connecting-the-motor"},"Connecting the Motor:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(1412).Z,width:"3648",height:"2736"})),(0,o.kt)("h3",{id:"3-final-assembly"},"3. Final Assembly:"),(0,o.kt)("p",null,"Integrate the XIAO in a matchboxscope setup:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(8924).Z,width:"3648",height:"2736"})),(0,o.kt)("p",null,"Various angles of the setup:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(7608).Z,width:"2736",height:"3648"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(5399).Z,width:"3648",height:"2736"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(3811).Z,width:"3648",height:"2736"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(3893).Z,width:"3648",height:"2736"})),(0,o.kt)("h2",{id:"coding"},"Coding:"),(0,o.kt)("p",null,"Example code to move it. The simple camera server will have it shortly.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera"},"https://github.com/Matchboxscope/matchboxscope-simplecamera")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <AccelStepper.h>\n\n// Define pin assignments\n#define ENABLE_PIN 6\n#define M1_PIN 5\n#define M2_PIN 4\n#define M3_PIN 3\n#define NOTRESET_PIN 2\n#define NOTSLEEP_PIN 1\n#define STEP_PIN 0\n#define DIR_PIN 7\n\n// Create an instance of AccelStepper\n// AccelStepper::DRIVER means we're driving the motor directly without any additional hardware interface\nAccelStepper stepper(AccelStepper::DRIVER, STEP_PIN, DIR_PIN);\n\nvoid setup() {\n  // Set pin modes\n  pinMode(ENABLE_PIN, OUTPUT);\n  pinMode(M1_PIN, OUTPUT);\n  pinMode(M2_PIN, OUTPUT);\n  pinMode(M3_PIN, OUTPUT);\n  pinMode(NOTRESET_PIN, OUTPUT);\n  pinMode(NOTSLEEP_PIN, OUTPUT);\n\n  // Set pins to default states\n  digitalWrite(ENABLE_PIN, LOW); // Assuming low enables the motor driver\n  digitalWrite(M1_PIN, HIGH);    // These values might need adjustments based on your specific motor/driver configuration\n  digitalWrite(M2_PIN, HIGH);\n  digitalWrite(M3_PIN, HIGH);\n  digitalWrite(NOTRESET_PIN, HIGH); // Assuming high means not resetting\n  digitalWrite(NOTSLEEP_PIN, HIGH); // Assuming high means not sleeping\n\n  // Set up the stepper properties\n  stepper.setMaxSpeed(1000);   // Set max speed (steps per second). Adjust based on your needs.\n  stepper.setAcceleration(500); // Set acceleration (steps per second^2). Adjust based on your needs.\n}\n\nvoid loop() {\n  // Rotate stepper to position 2000\n  stepper.moveTo(2000);\n  while (stepper.distanceToGo() != 0) {\n    stepper.run();\n  }\n\n  delay(1000); // Wait for a second\n\n  // Rotate stepper back to position 0\n  stepper.moveTo(0);\n  while (stepper.distanceToGo() != 0) {\n    stepper.run();\n  }\n\n  delay(1000); // Wait for a second\n}\n")),(0,o.kt)("h2",{id:"watch-it-in-action"},"Watch it in Action:"),(0,o.kt)("p",null,"See the linear stage move:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(1407).Z,width:"800",height:"450"})),(0,o.kt)("p",null,"And here it is, lifting the objective lens:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(9757).Z,width:"1280",height:"720"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"And there you have it! A DIY motorized microscope leveraging the Seeed Studio XIAO Sense. Happy tinkering!"))}u.isMDXComponent=!0},1109:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_114813-213cc944bbdbd2188e7d03e75311bcb8.jpg"},847:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_115303-5e33a2409d77a78713c00dbc7492efdf.jpg"},362:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_115437-2bef41748c628807109aed80b3bc227f.jpg"},2911:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_115440-be23ef2e6b75b6755111115f501f2506.jpg"},5724:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_115906-9432446808096fe994d333337e325883.jpg"},9548:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_115919-93608b819449a6bd68bfc31fe9bce85f.jpg"},1412:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_115944-a1b763d6861c19f0eb64c711eb04185f.jpg"},8924:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_121428-4a06ff1cb025e3feb56e77c9d5a8a009.jpg"},7608:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_135007-bd58416a9c4cbf2ab1c1f3769b318aae.jpg"},5399:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_135045-cab83f6bb3865b9f46d3ccd7d9f0146f.jpg"},3811:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_145102-56cf86363c86e28f72682289c39db08c.jpg"},3893:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230815_145105-b4562d32d5c617549fc3079c9699e44b.jpg"},1407:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/VID_20230815_121047-e77f2ef0ab32fa87fcc250d99deb6ef3.gif"},9757:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/VID_20230815_122644-4defca316ae7f1ef126e9398dd2c1197.gif"}}]);