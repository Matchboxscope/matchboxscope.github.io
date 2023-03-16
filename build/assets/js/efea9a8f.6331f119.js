"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||i;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},s="Anglerfish",l={unversionedId:"Anglerfish",id:"Anglerfish",title:"Anglerfish",description:'The Anglerfish is a derivative from the Matchboxscope. It has a "Angel" (German: fishing-rod) for hunting microbes, fishes, bacteria, algae...that can grow on a surface - under water! Yes! We want to capture the biofilm that will grow on transparent surfaces over time under water to get an idea what\'s happening. The core idea is to build an ESP32-based microscope, which fits into a watertight container. You focus it once to see the furface of the container sharp and release it into the wild, where it will capture images periodically.',source:"@site/docs/Anglerfish.md",sourceDirName:".",slug:"/Anglerfish",permalink:"/docs/Anglerfish",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"ESPectrometer",permalink:"/docs/ESPectrometer"}},o={},c=[{value:"Components",id:"components",level:2},{value:"Bill of material",id:"bill-of-material",level:3},{value:"3D printing files",id:"3d-printing-files",level:2},{value:"Assembly Process",id:"assembly-process",level:2},{value:"Removing camera lens",id:"removing-camera-lens",level:3},{value:"Mount the camera lens in the tube",id:"mount-the-camera-lens-in-the-tube",level:3},{value:"Assembling the case",id:"assembling-the-case",level:3},{value:"Assembling the electronics (optional)",id:"assembling-the-electronics-optional",level:3},{value:"Microscope in the bottle =&gt; focus!",id:"microscope-in-the-bottle--focus",level:3},{value:"Final assembly",id:"final-assembly",level:3},{value:"Setting up the software",id:"setting-up-the-software",level:2}],h={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anglerfish"},"Anglerfish"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Anglerfish")," is a derivative from the ",(0,r.kt)("strong",{parentName:"p"},"Matchboxscope"),'. It has a "Angel" (German: fishing-rod) for hunting microbes, fishes, bacteria, algae...that can grow on a surface - under water! Yes! We want to capture the biofilm that will grow on transparent surfaces over time under water to get an idea what\'s happening. The core idea is to build an ESP32-based microscope, which fits into a watertight container. You focus it once to see the furface of the container sharp and release it into the wild, where it will capture images periodically.'),(0,r.kt)("p",null,'While designing the Anglerfish - which actually looks like an anglerfish considering the "Angle" - we experimented with many different design configurations and consdierations.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"One way of doing it, but way too complicated",src:a(315).Z,width:"450",height:"169"})),(0,r.kt)("p",null,"There are great threads on building watertight assemblies using PVC tubes (LINK) or 3D rinted parts (LINK, PRUSA). However, one day (actually during cooking something) we came across the idea of using jars from jams."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/OpenUc2/status/1528406118816534529"},"quick survey")," led to the point that most countries have Bonne Maman jars in their supermarket shelves. An ideal starting point for frugal microscope submarines! Still curious? Continue reading! :-)"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Anglerfish")," shares many aspects with the ",(0,r.kt)("strong",{parentName:"p"},"Matchboxscope"),", hence it may be worth to also have a look ",(0,r.kt)("a",{parentName:"p",href:"/docs/Matchboxscope"},"here")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",alt:"Logo"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NEW !!!!"))," We have a Youtube Video hat guides you through the process of building your own Anglerfish: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=XuOOWYZesqA&feature=youtu.be"},"https://www.youtube.com/watch?v=XuOOWYZesqA&feature=youtu.be")),(0,r.kt)("h1",{id:"assembly"},"Assembly"),(0,r.kt)("p",null,"We will give you a step-by-step guide how to assemble the hole microscope. If anything fails or doesn't match as expected (most likely), please file an issue immediately. We will be there for you. Most of the steps below are very similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Matchboxscope"},"Matchboxscope"),". only the way the screws for focusing the sample are oriented differently."),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"This you will need for your device in order to work:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Explosion",src:a(1199).Z,width:"164",height:"500"})),(0,r.kt)("h3",{id:"bill-of-material"},"Bill of material"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Part"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Price"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ESP32-CAM (MB)+USB board"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Better get two, one may break.."),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.ebay.de/itm/274841850465?var=575090963555"},"Ebay")),(0,r.kt)("td",{parentName:"tr",align:"center"},"6-15\u20ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"USB Micro Cable"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"1\u20ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"M3 Screws (Cylindrical head, 15mm, 8mm)"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3D printing material (PLA)"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Aluminium foil (sticking if possible)"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Sticky tape"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Springs"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Bonne Maman glass (empty)"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"0\u20ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TP5400 USB/LiIon Adapter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"For charging the battery/powering the ESP"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[Ebay]","(",(0,r.kt)("a",{parentName:"td",href:"https://www.ebay.de/itm/143958030411?mkcid=16&mkevt=1&mkrid=707-127634-2357-0&ssspo=tg9hdLAtSmS&sssrc=204"},"https://www.ebay.de/itm/143958030411?mkcid=16&mkevt=1&mkrid=707-127634-2357-0&ssspo=tg9hdLAtSmS&sssrc=204")),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"3d-printing-files"},"3D printing files"),(0,r.kt)("p",null,"All design files can be found in the folder ",(0,r.kt)("a",{parentName:"p",href:"./INVENTOR"},"INVENTOR"),"."),(0,r.kt)("p",null,"All 3D-printable files can be found ",(0,r.kt)("a",{parentName:"p",href:"./STL/Anglerfish_JAR"},"here"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anglerfish_Jar_Adapterplate_v1_12.stl"),(0,r.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anblerfish_middle2_v1_1.stl"),(0,r.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anglerfish_bottom_v0_2.stl"),(0,r.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anglerfish_Lightperiscope_long_V0_21.stl")),(0,r.kt)("h2",{id:"assembly-process"},"Assembly Process"),(0,r.kt)("p",null,"These are the parts you need"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1774).Z,width:"338",height:"450"})),(0,r.kt)("h3",{id:"removing-camera-lens"},"Removing camera lens"),(0,r.kt)("p",null,"Be careful! This is the most crucial part! Hold the camera sensor and unswrew the lens. Try not to touch the Flatband cable.\n",(0,r.kt)("img",{src:a(6112).Z,width:"450",height:"338"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9250).Z,width:"450",height:"338"})),(0,r.kt)("h3",{id:"mount-the-camera-lens-in-the-tube"},"Mount the camera lens in the tube"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7769).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"If the tube doesn't match the diameter of the lens, warm the plastic to make it bendable."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1522).Z,width:"338",height:"450"})),(0,r.kt)("p",null,'Add the camera sensor to the hole. It should be "pressfit".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5767).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"The flatband has to be folded in the next step. Be careful: It may break and ruin the camera"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1894).Z,width:"450",height:"338"})),(0,r.kt)("h3",{id:"assembling-the-case"},"Assembling the case"),(0,r.kt)("p",null,"Close the casing with M3x20 screws"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8392).Z,width:"450",height:"338"})),(0,r.kt)("p",null,'For adding a "spring-loaded" mechanism, use the foam in the packaging of the ESP32 and cut a hole into the center'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1641).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"Add the foam to the lens-tube assembly"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5231).Z,width:"450",height:"338"})),(0,r.kt)("p",null,'Add the baseplate to the JAR. This should be "press-fit"; if it doesn\'t work out of the box, place the jar on a hotplate (stove) and warm it up to ~50-80\xb0C, gently push the plate as close to the glass as possible.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2562).Z,width:"450",height:"338"})),(0,r.kt)("h3",{id:"assembling-the-electronics-optional"},"Assembling the electronics (optional)"),(0,r.kt)("p",null,"Alternatively you can use a small powerbank that fits into the assembly."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1261).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"Solder a USB cable or siply two wires to the 5V/GND of the ESP32 on one end. The other end goes to the large USB or 5V/GND of the TP5400. This is the supply voltage."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9734).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"The Litium Ion battery will be connected to the TP5400 input (B+/B-)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3079).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"Make sure you do not create a shortcut! => Place everything in plastic bag."),(0,r.kt)("h3",{id:"microscope-in-the-bottle--focus"},"Microscope in the bottle => focus!"),(0,r.kt)("p",null,"Mount the camera assembly to the jar baseplate:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7985).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"Adjust the focus by first turning on the ESP32 and connect to the Wifi (",(0,r.kt)("inlineCode",{parentName:"p"},"SSID: Matchboxscope"),"). Open the page ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.4.1."},"http://192.168.4.1.")," Make a mark on the glass surface in front of the objective lens (has to be removed afterwards!). Turn the three focusing screws such that you create a sharp image of the mark on the glass."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1244).Z,width:"450",height:"338"})),(0,r.kt)("h3",{id:"final-assembly"},"Final assembly"),(0,r.kt)("p",null,"Put everything together and close the lid. Only connect the USB cable if you are close to your experiment."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(349).Z,width:"450",height:"338"})),(0,r.kt)("p",null,"Mount the LED with hotglue (use a lot)"),(0,r.kt)("h2",{id:"setting-up-the-software"},"Setting up the software"),(0,r.kt)("p",null,"Comming soon"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3073).Z,width:"241",height:"500"})))}p.isMDXComponent=!0},3073:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Screenshot_20220419_184943_com.android.chrome-06e13e0b4722b58e3944c64cdd1f9533.jpg"},1774:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_0-fc3a7daabc8ffe6d775e8bb682d9fbed.jpg"},6112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_1-9f1aad4c01caee1c0c0fb7e44467fff1.jpg"},7985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_10-e548dbe757c9d0c7ee5f49e2e96111c5.jpg"},1244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_11-dbb0a60bb2d84ba097728292683ee41e.jpg"},9734:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_12-6ce745df6dd307b5eee1c7f23bc37c8c.jpg"},3079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_13-a666f465f47d05a1bae078c23a0cf37f.jpg"},2562:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_14-ecd14fa58a7a9538493954d27550d52d.jpg"},349:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_16-2381b50e77e4c2c312da552c0d86c27a.jpg"},1261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_18-babe9bda37272938ad403cf8505615a7.jpg"},9250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_2-6dceff553df9adc47b01471319fb3538.jpg"},7769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_3-7d6ae065e9860893c5042a7fd3e0339a.jpg"},1522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_4-01e158c72409eb089a29ae09b6a43abe.jpg"},5767:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_5-ebe5bd2d59eaaac7ed1beb01050420e2.jpg"},1894:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_6-c1f9ce41b1a5648d206cef9d5c1a61b4.jpg"},8392:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_7-edcdfc39a0d4f127af3dbee1bca65a7e.jpg"},1641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_8-7165851b3d400ec805599f2129527972.jpg"},5231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_9-b8acc0a010b739f71d82855fdd893c68.jpg"},315:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anglerfish_explosion-fdc5cc91ece82db6ce9007fc76e8b69f.PNG"},1199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/explosion-78f0e818bf1a39d09cb033a7389a7835.jpeg"}}]);