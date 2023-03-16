"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=i,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={},s="Matchboxscope",o={unversionedId:"Matchboxscope",id:"Matchboxscope",title:"Matchboxscope",description:"This device is not much larger than a matchbox (hence its name - surprise..). Besides the ESP32-CAM it only needs 3D printed components, screws, aluminium foil and a couple of magnets (or optional springs).",source:"@site/docs/Matchboxscope.md",sourceDirName:".",slug:"/Matchboxscope",permalink:"/docs/Matchboxscope",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ESP32-Based Microscopy",permalink:"/docs/Introduction"},next:{title:"WebSERIAL",permalink:"/docs/WebSERIAL"}},l={},c=[{value:"Some theory",id:"some-theory",level:2},{value:"Z Stage",id:"z-stage",level:2},{value:"Components",id:"components",level:2},{value:"Bill of material",id:"bill-of-material",level:3},{value:"3D printing files",id:"3d-printing-files",level:2},{value:"Assembly of the microscope",id:"assembly-of-the-microscope",level:2},{value:"Assembly of the microscope",id:"assembly-of-the-microscope-1",level:2},{value:"Assembly of the illumination unit",id:"assembly-of-the-illumination-unit",level:2},{value:"Pictures taken with the Matchboxscope",id:"pictures-taken-with-the-matchboxscope",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"matchboxscope"},"Matchboxscope"),(0,i.kt)("p",null,"This device is not much larger than a matchbox (hence its name - surprise..). Besides the ESP32-CAM it only needs 3D printed components, screws, aluminium foil and a couple of magnets (or optional springs).\nBelow, we will guide you through the process to build the full device"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3578).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"The Matchboxscope just need some juice from usb and can work using a powerbank. It has wifi capabilities and it can live stream to whataver device you want :) "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2374).Z,width:"500",height:"388"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5438).Z,width:"500",height:"281"})),(0,i.kt)("h2",{id:"some-theory"},"Some theory"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Why can you actually magnify?")," Good question! In fact, we don't magnify at all, but since the pixels of the OV2460 camera are really small and we make use of the objective lens with a relatively small focal length (f'=~5mm), we perform a \"4f-imaging\". In this context this means, we have a sample at a distance of 2f (focal lengths) in front of the lens, which will in turn create an image at 2f away from it. The camera chip will digitize the image and send it over to your displaying device. You can tune the magnification by changing the distance between sample-lens and lens-sensor. The formular is give by:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"M=a'/a"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),"is the magnification, ",(0,i.kt)("inlineCode",{parentName:"p"},"a'")," the distance sample-lens, ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," the distance lens sensor. Further:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1/f'=1/a' - 1/a"),";"),(0,i.kt)("p",null,"You can easily display the ~100\xb5m sized pixels of your phone's screen. By tuning the distanve you can play with the field of view, resolution (since the imaging NA changes) and magnification. We don't care about sampling right now, since we do not have much of an influence on it anyway.."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9082).Z,width:"500",height:"281"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1163).Z,width:"500",height:"281"})),(0,i.kt)("p",null,"Essentially, this configuration is also known as a finite-corrected microscopy arrangement. It comes with a series of problems, but we want to keep it simple, hence we will stick to the basic optical setup here."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Why don't we need any illumination?")," Yet another good question. Where there is no light, we won'T see anything. Obviously. But: The ESP32 has an insanely strong LED Torch/light that can be switched on/off and even be dimmed. Luckily, we can make us of it for illuminating our sample for transmission microscopy. Wait, how can that be done? Easy! We construct a little periscoe/mirror-tunnel that simply reflect the light back to the sample. The efficiency must be well below 10%, perhaps even 1%, but since the Torch is so bright, it still works!"),(0,i.kt)("p",null,"This how it looks like - like an ",(0,i.kt)("a",{parentName:"p",href:"/docs/Anglerfish"},"Anglerfish"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2536).Z,width:"500",height:"375"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8047).Z,width:"375",height:"500"})),(0,i.kt)("h2",{id:"z-stage"},"Z Stage"),(0,i.kt)("p",null,"In the Matchboxscope, the Z stage is controlled by magnets and by three screws. The magnets between the middle part and the top part are repelling each other and in this way keeping the sample stage in place: "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9059).Z,width:"500",height:"282"})),(0,i.kt)("p",null,"If you are, somehow adverse to magnets, you can use springs as well. In this case we suggest to use a nut for safaty (and not to shoot the spring loaded  glass slide in the sky). "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5751).Z,width:"500",height:"375"})),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"This you will need for your device in order to work:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5209).Z,width:"400",height:"500"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1478).Z,width:"400",height:"500"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3081).Z,width:"446",height:"500"})),(0,i.kt)("h3",{id:"bill-of-material"},"Bill of material"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Part"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Purpose"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Price"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ESP32-CAM (MB)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"6\u20ac")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"USB Micro Cable"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"1\u20ac")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"M3 Screws (Cylindrical head, 20mm, 12mm)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3D printing material (PLA)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Aluminium foil or silver spray paint (sticking if possible)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Neodymium magnets round 12x2 or 12x3"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Springs (for the spring version)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h2",{id:"3d-printing-files"},"3D printing files"),(0,i.kt)("p",null,"All design files can be found in the folder ",(0,i.kt)("a",{parentName:"p",href:"./INVENTOR"},"INVENTOR"),"."),(0,i.kt)("p",null,"All 3D-printable files can be found ",(0,i.kt)("a",{parentName:"p",href:"./STL/IncubatorMicroscope_static"},"here"),":"),(0,i.kt)("p",null,"The Matchboxscope is composed of three parts:"),(0,i.kt)("p",null,"The bottom part, for the ESP32 board"),(0,i.kt)("p",null,"The middle part, which acts as a spacer between the lens and the camera sensor"),(0,i.kt)("p",null,"The top part (the sample part), for holding the glass slide and the illumination periscope."),(0,i.kt)("p",null,"So far there are three different possibilities for the top part: a flexure to fix the glass slide, a squared 18x18mm for coverslips, and a flat large one to be used with a magnet. The choice is yours:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:a(4851).Z,width:"500",height:"375"}),'{width="500"}'),(0,i.kt)("h2",{id:"assembly-of-the-microscope"},"Assembly of the microscope"),(0,i.kt)("p",null,"a video of the build can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iw_hoDRlnpg"},"https://www.youtube.com/watch?v=iw_hoDRlnpg"),"  "),(0,i.kt)("p",null,"Once you have obtained the parts, the assebly can be done in 5 minutes. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3904).Z,width:"500",height:"375"}),'{width="800"}'),(0,i.kt)("p",null,"You need: the ESP32 cam, the 3D printed parts, 3 M3x20 or M3x25 screws, 3 M3x16 screws, 12x2 or 12x3 neodymium magnets, superglue, M3 Allen Key, plier and tweezers. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6344).Z,width:"500",height:"375"}),'{width="800"}'),(0,i.kt)("p",null,"With a plier, and very gently, unscrew the lens from the ESP32 camera and, if not attached yet, attach it to the board. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3570).Z,width:"500",height:"375"}),'{width="800"}'),(0,i.kt)("p",null,'put the lens on the 3D printed "middle" part, and the board in the 3D printed "bottom" opart. Alling the middle part and the bottom part. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5472).Z,width:"500",height:"375"}),'{width="800"}'),(0,i.kt)("p",null,"once alligned, push the middle part to fix the camera on the 3D printed part. Once the camera is in the 3D printed middle part, bend the camera cable to allign the two 3D printed parts. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(661).Z,width:"500",height:"375"}),'{width="800"}'),(0,i.kt)("p",null,"screw the two parts using 3 M3x16 screw, and glue the magnets in position (both with polarity pointing in the same direction) "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4295).Z,width:"500",height:"375"}),'{width="800"}'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4851).Z,width:"500",height:"375"})),(0,i.kt)("h2",{id:"assembly-of-the-microscope-1"},"Assembly of the microscope"),(0,i.kt)("p",null,"a video of the build can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iw_hoDRlnpg"},"https://www.youtube.com/watch?v=iw_hoDRlnpg"),"  "),(0,i.kt)("p",null,"Once you have obtained the parts, the assebly can be done in 5 minutes. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3904).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"You need: the ESP32 cam, the 3D printed parts, 3 M3x20 or M3x25 screws, 3 M3x16 screws, 12x2 or 12x3 neodymium magnets, superglue, M3 Allen Key, plier and tweezers. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6344).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"With a plier, and very gently, unscrew the lens from the ESP32 camera and, if not attached yet, attach it to the board. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3570).Z,width:"500",height:"375"})),(0,i.kt)("p",null,'put the lens on the 3D printed "middle" part, and the board in the 3D printed "bottom" opart. Alling the middle part and the bottom part. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5472).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"once alligned, push the middle part to fix the camera on the 3D printed part. Once the camera is in the 3D printed middle part, bend the camera cable to allign the two 3D printed parts. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(661).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"screw the two parts using 3 M3x16 screw, and glue the magnets in position (both with polarity pointing in the same direction) "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4295).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"glue the other two magnets on the 3D printed sample part, and remmeber that the the magnet should repel the ones on the middle part. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5876).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"Screw the M3x20 in position and attach the illumination periscope. If needed, add more magnets to make the repuslion sturdier."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7327).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"and here you go. Enjoy your new tiny scope. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(122).Z,width:"500",height:"375"})),(0,i.kt)("h2",{id:"assembly-of-the-illumination-unit"},"Assembly of the illumination unit"),(0,i.kt)("p",null,"Some additional information for the assembly process can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Anglerfish"},"Anglerfish"),"-documentation."),(0,i.kt)("p",null,"The idea of the illumination unit is to re-use the LED torch that is mounted on the ESP32-CAM and can be controlled through GPIO4. Don't look directly into the LED. As said, it's bright!"),(0,i.kt)("p",null,'One option is to glue, or stick some aluminium foil in the "periscope". Another option is to use sliver spray paint to paint it (or use any silver paint you want). Both option worked fine: '),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3142).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"Print the little periscope and add aluminium foil inside the little channel, but keep the round holes open. Double-sided sticky tape will help you to mount the aluminium foil. Alternatively, use self-sticky aluminium foil. Tweezers help you in the process of placing the foil."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3e3).Z,width:"500",height:"375"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(267).Z,width:"375",height:"500"})),(0,i.kt)("p",null,'You can also seal the "light-channel" with additional aluminium foil. A small piece of diffuse Sticky-tape/scotch tape (3M) on the end of the channel will make the illumination much smoother but is not necessary (actually not visible on the photo).'),(0,i.kt)("h2",{id:"pictures-taken-with-the-matchboxscope"},"Pictures taken with the Matchboxscope"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"div=0.01mm"),"\n",(0,i.kt)("img",{src:a(437).Z,width:"500",height:"375"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Rotifer"),"\n",(0,i.kt)("img",{src:a(1967).Z,width:"500",height:"400"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Mosquito larvae"),"\n",(0,i.kt)("img",{src:a(2183).Z,width:"500",height:"400"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5837).Z,width:"500",height:"375"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7486).Z,width:"500",height:"400"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Rotifers and Tardigrade"),"\n",(0,i.kt)("img",{src:a(193).Z,width:"500",height:"375"})),(0,i.kt)("p",null,"and a video recorded from the Matchboxscope is here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=x27QPLMVoFQ"},"https://www.youtube.com/watch?v=x27QPLMVoFQ")))}d.isMDXComponent=!0},2536:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220326_185946-e6bceb68c10698c000683ad03f58e82f.jpg"},8047:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220326_190242-8a671003965cc829f44ce61b83e71b6f.jpg"},3578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220328_133003-5b0c603bd9273a40ae534517fb866a32.jpg"},3e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220329_093734-a67952772808379584c044eee84b2479.jpg"},267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220329_093902-c8e32242b673e7ca5e8a4117c80c55a1.jpg"},2374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Roti-97e9a2884acbbdc42b4f8256cb63e913.gif"},9059:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Zstage-7c71eb39421e8435d8291f1b70a5cc83.gif"},437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example1-e44f7f3c90cfb3a6e2c1e0563dab200c.jpg"},1967:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example2-9aef1e16364780b2dba152430eab376d.jpg"},2183:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example3-fcea919be55c131166a7f74f44afa747.jpg"},5837:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example4-cba0018b35113a53736ef7f0a5c0a3ec.jpg"},7486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example5-eb9f7b66eab39ab41cabbba642dacc20.jpg"},193:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example6-04a108daf816daeff039e691fd9577e9.jpg"},3081:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/expl-91086460f3465177b8eae9ea869d403d.gif"},3904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1001-75f602e5dc132b085e551edc8d49ab35.jpeg"},6344:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1002-e411de48b256d6beade11b8a52af777d.jpeg"},3570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1003-1d8cc3f28f05b4cde30396dd3094f376.jpeg"},5472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1004-9cbbdb0f275aca7392a6219b5ba56ae2.jpeg"},661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1005-0bb2294cd5216545ff2e382602b3cd46.jpeg"},4295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1006-e71bff8cd663d89ce86d0e9accf882f5.jpeg"},5876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1007-41609fb85fd3514bd31d78b84215615d.jpeg"},7327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1008-d1ccf75ec365d542282603bf6728b9e1.jpeg"},9082:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-b87ffe3e133bbceccf536c8ecff26c4f.png"},1163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image2-d71d74b46083af2aec5c18c1ae1b3845.png"},5438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lice-daa8299cf397c2b350ab1783f224aa1c.gif"},3142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/periscope-fe334c1317fed63fa860aeaa1a98aa4e.jpeg"},122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/powerbank-60acdcb5b8b26529797648ae1d698758.jpg"},1478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/render1-858199bbb9d187296df8cbb1f7e31bef.png"},5209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/render2-94055f9e536f8cc449fc685790770c34.png"},5751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spring-09b6d8042b603ebc0232219580827c57.jpeg"},4851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/top-42489ac04b703461927482d9582ccbb6.jpeg"}}]);