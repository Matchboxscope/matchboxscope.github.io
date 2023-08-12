"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[5505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},s="Matchboxscope (Older simpler version)",o={unversionedId:"Matchboxscope",id:"Matchboxscope",title:"Matchboxscope (Older simpler version)",description:"UPDATE Even though the classic Matchboxscope is still working, we recommend you to have a loot at the updated and more comprehensive documentation under Matchboxscope Injection Molded Version. Thanks!",source:"@site/docs/Matchboxscope.md",sourceDirName:".",slug:"/Matchboxscope",permalink:"/docs/Matchboxscope",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ESP32-Based Microscopy",permalink:"/docs/Introduction"},next:{title:"WebSERIAL",permalink:"/docs/WebSERIAL"}},l={},c=[{value:"CAD Files",id:"cad-files",level:2},{value:"Z Stage",id:"z-stage",level:2},{value:"Components",id:"components",level:2},{value:"Bill of materials",id:"bill-of-materials",level:3},{value:"3D printing files",id:"3d-printing-files",level:2},{value:"Assembly of the illumination unit",id:"assembly-of-the-illumination-unit",level:2},{value:"Pictures taken with the Matchboxscope",id:"pictures-taken-with-the-matchboxscope",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"matchboxscope-older-simpler-version"},"Matchboxscope (Older simpler version)"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"UPDATE"))," Even though the classic Matchboxscope is still working, we recommend you to have a loot at the updated and more comprehensive documentation under ",(0,r.kt)("a",{parentName:"p",href:"../Matchboxscope_IM.md"},"Matchboxscope Injection Molded Version"),". Thanks!")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"QuickStart"))," The current CAD files can conveniently be downloaded from Printables: ",(0,r.kt)("a",{parentName:"p",href:"https://www.printables.com/model/412753-esp32-microscope-matchboxscope"},"https://www.printables.com/model/412753-esp32-microscope-matchboxscope"))),(0,r.kt)("p",null,"This device is not much larger than a matchbox (hence its name - surprise..). Besides the ESP32-CAM it only needs 3D printed components, screws, aluminum foil, and a couple of magnets (or optional springs).\nBelow, we will guide you through the process of building the full device"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3578).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"The Matchboxscope needs some 5V juice from USB and can work using a power bank. It has wifi capabilities, and it can live stream to whatever device you want :)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2374).Z,width:"500",height:"388"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5438).Z,width:"500",height:"281"})),(0,r.kt)("h2",{id:"cad-files"},"CAD Files"),(0,r.kt)("p",null,"The release files can be found here:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.printables.com/model/412753-esp32-microscope-matchboxscope"},"https://www.printables.com/model/412753-esp32-microscope-matchboxscope")),(0,r.kt)("p",null,"or another Inventor-based version here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_Matchboxscope.zip"},"https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_Matchboxscope.zip")),(0,r.kt)("h2",{id:"z-stage"},"Z Stage"),(0,r.kt)("p",null,"In the Matchboxscope, the Z stage is controlled by magnets and by three screws. The magnets between the middle part and the top part are repelling each other and, in this way, keeping the sample stage in place:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9059).Z,width:"500",height:"282"})),(0,r.kt)("p",null,"If you are, somehow averse to magnets, you can also use springs. In this case, we suggest using a nut for safety (and not shooting the spring-loaded glass slide in the sky)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5751).Z,width:"500",height:"375"})),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"This you will need for your device to work:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5209).Z,width:"400",height:"500"}),"\n",(0,r.kt)("img",{src:a(1478).Z,width:"400",height:"500"})),(0,r.kt)("h3",{id:"bill-of-materials"},"Bill of materials"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Part"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Price"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ESP32-CAM (MB)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Min board"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Aliexpress"),(0,r.kt)("td",{parentName:"tr",align:"center"},"6\u20ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"USB Micro Cable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Connection"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Aliexpress"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1\u20ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"M3 Screws (Cylindrical head, 20mm, 12mm)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Structural"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Hardware store"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Allen key 2.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Z focus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Hardware store"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3D printing material (PLA)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Structural"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3D printing store"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Aluminum foil or silver spray paint"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Structural"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Craft store"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Neodymium magnets round 12x2 or 12x3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Structural"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Aliexpress"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Springs (for the spring version)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Structural"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Hardware store"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"3d-printing-files"},"3D printing files"),(0,r.kt)("p",null,"All 3D-printable files can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Matchboxscope/tree/master/STL/Matchboxscope"},"here")),(0,r.kt)("p",null,"The Matchboxscope is composed of three parts:"),(0,r.kt)("p",null,"The bottom part, a case for the ESP32 board"),(0,r.kt)("p",null,"The middle part, which acts as a spacer between the lens and the camera sensor\n(",(0,r.kt)("strong",{parentName:"p"},"this should be printed in black"),")"),(0,r.kt)("p",null,"The top part (the sample part) holds the glass slide and the illumination periscope."),(0,r.kt)("h1",{id:"assembly-of-the-microscope"},"Assembly of the microscope"),(0,r.kt)("p",null,"A video of the build can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iw_hoDRlnpg"},"here"),"  "),(0,r.kt)("p",null,"Before starting, please check for updates at the end of this page."),(0,r.kt)("p",null,"Once you have obtained the parts, the assembly can be done in 5 minutes."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3904).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"You need: the ESP32 cam, the 3D printed parts, 3 M3x20 or M3x25 screws, 3 M3x16 screws, 12x2 or 12x3 neodymium magnets, superglue, M3 Allen Key, plier, and tweezers."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6344).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"With a plier and very gently unscrew the lens from the ESP32 camera and, if not connected yet, connect it to the board."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3570).Z,width:"500",height:"375"})),(0,r.kt)("p",null,'Put the lens on the 3D-printed "middle" part and the board in the 3D-printed "bottom" part. Alling the middle part and the bottom part.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5472).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"Once aligned, push the middle part to fix the camera on the 3D-printed part. Once the camera is in the 3D-printed middle part, bend the cable to align the two 3D-printed parts."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(661).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"Screw the two parts using 3 M3x16 (or M3x12) screws, and glue the magnets in position (both with polarity pointing in the same direction)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4295).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"Glue the other two magnets on the 3D-printed sample part, and remember that the magnet should repel the ones on the middle part."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5876).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"Screw the M3x20 in position and attach the illumination periscope. If needed, add more magnets to make the repulsion sturdier."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7327).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"And here you go. Enjoy your new tiny scope. Use an extra magnet to keep your slide stable on the holder."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(122).Z,width:"500",height:"375"})),(0,r.kt)("h2",{id:"assembly-of-the-illumination-unit"},"Assembly of the illumination unit"),(0,r.kt)("p",null,"The idea of the illumination unit is to re-use the LED torch that is mounted on the ESP32-CAM and can be controlled through GPIO4. Don't look directly into the LED. As I said, it's bright!"),(0,r.kt)("p",null,'One option is to glue or stick aluminum foil in the "periscope". Another option is to use silver spray paint to paint it (or use any silver paint you want). Both options worked fine:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3142).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"Print the little periscope and add aluminum foil inside the little channel, but keep the round holes open. Double-sided sticky tape will help you to mount the aluminum foil. Alternatively, use self-sticky aluminum foil. Tweezers help you in the process of placing the foil."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3e3).Z,width:"500",height:"375"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(267).Z,width:"375",height:"500"})),(0,r.kt)("p",null,'You can also seal the "light channel" with additional aluminum foil. A small piece of diffuse Sticky-tape/scotch tape (3M) on the end of the channel will make the illumination much smoother but is not necessary (actually not visible on the photo).'),(0,r.kt)("h2",{id:"pictures-taken-with-the-matchboxscope"},"Pictures taken with the Matchboxscope"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"div=0.01mm")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(437).Z,width:"500",height:"375"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Rotifer")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1967).Z,width:"500",height:"400"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Mosquito larvae")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2183).Z,width:"500",height:"400"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5837).Z,width:"500",height:"375"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7486).Z,width:"500",height:"400"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Rotifers and Tardigrade")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(193).Z,width:"500",height:"375"})),(0,r.kt)("p",null,"And a video recorded from the Matchboxscope is ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=x27QPLMVoFQ"},"here")),(0,r.kt)("h1",{id:"updates"},"Updates"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"*update April 2023 - we are testing external (battery-powered) LED. These LEDs are usually used for decorations, can be on for 2 weeks, and are quite cheap. See for example ",(0,r.kt)("a",{parentName:"p",href:"https://www.amazon.nl/LIHAO-mini-ledlampjes-lantaarns-batterijen-waterdicht/dp/B01FF07XFE"},'"LIHAO mini LED"'),".\nUsing these LEDs we have obtained a bit more contrast than the standard periscope, and we don't heat the ESP32 using the onboard LED. The clear glass can be scratched with some sandpaper to make the light more homogeneous.\nThe STL file can be downloaded from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Matchboxscope/blob/master/STL/Matchboxscope/Matchboxscope_VCM_v1_Matchboxscope_Lightperiscope_externalLED12mm_v3.stl"},"the STL folder in the repository"),"."),(0,r.kt)("p",null,"the matchboxscope with the external LED:\n",(0,r.kt)("img",{src:a(1221).Z,width:"3024",height:"4032"})),(0,r.kt)("p",null,"Image taken with the periscope:\n",(0,r.kt)("img",{src:a(7783).Z,width:"800",height:"600"})),(0,r.kt)("p",null,"Image taken with the external LED:\n",(0,r.kt)("img",{src:a(8484).Z,width:"800",height:"600"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"*update Feb 2023 - You can 3D print a spacer for the camera on the board. This spacer will alleviate the cable stress. You can find the file in the STL folder."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4538).Z,width:"681",height:"304"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"*update March 2023 - We have found these M3x30 screw with a flat part. Being in contact with the 3D-Printed top part for the Z focussing, they work better because of less friction."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2337).Z,width:"582",height:"287"})))}h.isMDXComponent=!0},3578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220328_133003-5b0c603bd9273a40ae534517fb866a32.jpg"},3e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220329_093734-a67952772808379584c044eee84b2479.jpg"},267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IMG_20220329_093902-c8e32242b673e7ca5e8a4117c80c55a1.jpg"},2374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Roti-97e9a2884acbbdc42b4f8256cb63e913.gif"},9059:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Zstage-7c71eb39421e8435d8291f1b70a5cc83.gif"},437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example1-e44f7f3c90cfb3a6e2c1e0563dab200c.jpg"},1967:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example2-9aef1e16364780b2dba152430eab376d.jpg"},2183:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example3-fcea919be55c131166a7f74f44afa747.jpg"},5837:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example4-cba0018b35113a53736ef7f0a5c0a3ec.jpg"},7486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example5-eb9f7b66eab39ab41cabbba642dacc20.jpg"},193:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example6-04a108daf816daeff039e691fd9577e9.jpg"},1221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extLED-0a810e3aa63546b23d3b6eba510dfa8c.jpg"},7783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extLED1-42a17ebca53d5c7638ed0be76068657c.JPG"},8484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extLED2-bd48a3b511bbb8001541d8ffac9897ba.JPG"},3904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1001-75f602e5dc132b085e551edc8d49ab35.jpeg"},6344:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1002-e411de48b256d6beade11b8a52af777d.jpeg"},3570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1003-1d8cc3f28f05b4cde30396dd3094f376.jpeg"},4538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1003_b-f022efe6cdd5b84684a39be311a9445e.jpeg"},5472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1004-9cbbdb0f275aca7392a6219b5ba56ae2.jpeg"},661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1005-0bb2294cd5216545ff2e382602b3cd46.jpeg"},4295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1006-e71bff8cd663d89ce86d0e9accf882f5.jpeg"},5876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1007-41609fb85fd3514bd31d78b84215615d.jpeg"},7327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev1008-d1ccf75ec365d542282603bf6728b9e1.jpeg"},2337:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidev_update01-5e4ff2c749fd85da02d9e841b4c8ca37.jpeg"},5438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lice-daa8299cf397c2b350ab1783f224aa1c.gif"},3142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/periscope-fe334c1317fed63fa860aeaa1a98aa4e.jpeg"},122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/powerbank-60acdcb5b8b26529797648ae1d698758.jpg"},1478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/render1-858199bbb9d187296df8cbb1f7e31bef.png"},5209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/render2-94055f9e536f8cc449fc685790770c34.png"},5751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spring-09b6d8042b603ebc0232219580827c57.jpeg"}}]);