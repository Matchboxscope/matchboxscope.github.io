"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[394],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return i?a.createElement(h,r(r({ref:t},p),{},{components:i})):a.createElement(h,r({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7170:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const o={},r="Introduction",s={unversionedId:"Introduction",id:"Introduction",title:"Introduction",description:"ESPressoscope: Affordable and Versatile Open-Source Microscopy Platform",source:"@site/docs/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/docs/Introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Seeed Studio XIAO ESP32S3 Sense - Advanced Development Board",permalink:"/docs/Hardware/SeeedXiao"},next:{title:"Anglerfish APP User Guide",permalink:"/docs/Software/AnglerfishAPP"}},l={},c=[{value:"Some theory",id:"some-theory",level:2},{value:"Magnification",id:"magnification",level:3},{value:"Illumination",id:"illumination",level:3},{value:"Outline and Structure of this Wiki",id:"outline-and-structure-of-this-wiki",level:2},{value:"ESPressoscope Wiki",id:"espressoscope-wiki",level:2},{value:"1. Introduction",id:"1-introduction",level:3},{value:"2. Variants of ESPressoscope",id:"2-variants-of-espressoscope",level:3},{value:"3. Hardware Components",id:"3-hardware-components",level:3},{value:"4. Software",id:"4-software",level:3},{value:"6. Tutorials and Guides",id:"6-tutorials-and-guides",level:3},{value:"License and Collaboration",id:"license-and-collaboration",level:2},{value:"Collaborating",id:"collaborating",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ESPressoscope: Affordable and Versatile Open-Source Microscopy Platform")),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(5461).Z,width:"1936",height:"453"})),(0,n.kt)("p",null,"Microscopy has long been an indispensable tool for exploring the hidden intricacies of the microcosm, enabling scientists to investigate, identify, and measure objects at the microscopic scale. However, the accessibility and operational capabilities of modern microscopy equipment have often been hindered by exorbitant costs, limited availability of components, and challenges associated with transportation, particularly in remote or resource-limited settings. To address these challenges, we introduce ESPressoscope, an innovative approach that leverages the power of a $5 open-source microcontroller board, the ESP32-CAM. This platform not only serves as a portable and field-ready digital microscope but also stands as a versatile foundation for a diverse array of imaging applications."),(0,n.kt)("h1",{id:"enabling-versatility-through-a-simple-and-low-cost-microscope"},"Enabling Versatility Through a simple and low-cost Microscope"),(0,n.kt)("p",null,"ESP32-CAM's unassuming design belies its potential. By incorporating a few external components, ESPressoscope transforms the ESP32-CAM board into a sophisticated in-situ autonomous time-lapse digital cell imaging platform. This adaptability is showcased across various configurations, spanning from in-lab incubators to underwater microscopy setups, and seamlessly integrating with microfluidic devices and spectrophotometry measurements. The result is a range of modular microscopes, each tailored to specific applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Matchboxscope/Incubotar-Scope:")," A portable brightfield microscope designed for capturing micrographs in the field and within cell incubators. It boasts optical resolutions between 3-4 \xb5m and supports optional z-stacking for enhanced imaging.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u201cAnglerfish\u201d:")," This self-contained underwater microscope is engineered for studying biofilm growth beneath the water's surface, unlocking new insights into aquatic ecosystems.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u201cESPlanktoscope\u201d:")," A simplified flow-imaging microscope featuring an integrated peristaltic pump. It offers a cost-effective solution for visualizing dynamic micro-scale fluidic processes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},'"ESPectrophotometer":')," A compact and digital low-cost visible-light spectrometer, catering to applications demanding precise spectroscopic measurements.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u201cHoloESP\u201d:")," This compact and economical lens-less holographic microscope ventures into the realm of inline holography, enabling high-resolution reconstructions without the constraints of conventional lenses."))),(0,n.kt)("p",null,"ESP32-CAM's inherent advantages extend beyond versatility. With its low power consumption and compact form factor, ESPressoscope proves ideal for field research, particularly in remote and previously inaccessible environments. The platform's WiFi connectivity provides internet access, allowing seamless integration with cloud-based image processing and storage systems. Furthermore, we introduce a suite of web browser-based tools designed to simplify software management and operation of the microscope."),(0,n.kt)("p",null,"Through ESPressoscope, we demonstrate the potential of cost-effective, portable microscopy solutions to democratize scientific exploration. This platform transcends barriers, enabling new avenues of research in both biological and analytical applications. ESPressoscope is not merely a microscope; it is an invitation to reimagine microscopy's reach, impact, and affordability."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(7259).Z,width:"400",height:"400"}),"*"),(0,n.kt)("p",null,"This is the hub for the smallest standalone low-cost open-source DIY microscope system that can be used for a gazillion different applications. Sounds interesting? Continue reading!"),(0,n.kt)("p",null,"The core component of this device is an ESP32 microcontroller packed with a small Camera (OV2460), WiFi, and a microSD card slot, making it a perfect match for your microscopy project. In its minimal version, you only need the ESP32-CAM and perhaps some chewing gum to raise the objective lens and create a finite corrected microscope."),(0,n.kt)("p",null,"Why raise the lens, and what is a finite corrected microscope, you ask?"),(0,n.kt)("h2",{id:"some-theory"},"Some theory"),(0,n.kt)("h3",{id:"magnification"},"Magnification"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Why can you actually magnify?")," Good question! We don't magnify at all, but since the pixels of the OV2460 camera are really small, and we use the objective lens with a relatively small focal length (f'=~5mm), we perform a \"4f-imaging\". In this context, this means, we have a sample at a distance of 2f (focal lengths) in front of the lens, which will, in turn, create an image at 2f away from it. The camera chip will digitize the image and send it over to your displaying device. You can tune the magnification by changing the distance between the sample-lens and the lens-sensor. The formula is given by:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"M=a'/a"),", where ",(0,n.kt)("inlineCode",{parentName:"p"},"M"),"is the magnification, ",(0,n.kt)("inlineCode",{parentName:"p"},"a'")," the distance sample-lens, ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," the distance lens-sensor. Further:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"1/f'=1/a' - 1/a"),";"),(0,n.kt)("p",null,"You can easily display your phone's screen's ~100\xb5m sized pixels. By tuning the distance, you can play with the field of view, resolution (since the imaging NA changes), and magnification. We don't care about sampling right now, since we do not have much influence on it anyway..."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(1547).Z,width:"500",height:"281"}),"\n",(0,n.kt)("img",{src:i(1547).Z,width:"500",height:"281"})),(0,n.kt)("p",null,"Essentially, this configuration is also known as a finite-corrected microscopy arrangement. It comes with many problems, but we want to keep it simple. Hence we will stick to the basic optical setup here."),(0,n.kt)("h3",{id:"illumination"},"Illumination"),(0,n.kt)("p",null,"The other important part of any microscope is the illumination setup. And also in this case, the ESP32-Cam board is coming to our help."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Why don't we need any illumination?")," Yet another good question. Where there is no light, we won't see anything. Obviously. But: The ESP32 has an insanely strong LED Torch/light that can be switched on/off and even dimmed. Luckily, we can use it to illuminate our sample for transmission microscopy. Wait, how can that be done? Easy! We construct a little periscope/mirror-periscope that simply reflects the light on top of the sample. We have also used other illumination systems like a fiber optic or an Ikea USB LED. The versatility of the system is amazing."),(0,n.kt)("p",null,"This is how the first periscope illumination looked like. Like an Anglerfish..."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4394).Z,width:"500",height:"375"}),"\n",(0,n.kt)("img",{src:i(3330).Z,width:"375",height:"500"})),(0,n.kt)("p",null,"And using those two simple tricks (lens distance from the sensor, and illumination), we developed multiple unbelievably cost-effective open hardware microscopes.  "),(0,n.kt)("h2",{id:"outline-and-structure-of-this-wiki"},"Outline and Structure of this Wiki"),(0,n.kt)("p",null,"Creating a comprehensive and organized wiki page for the ESPressoscope and its variants is a great idea. Here's a suggested structure for your wiki:"),(0,n.kt)("h2",{id:"espressoscope-wiki"},"ESPressoscope Wiki"),(0,n.kt)("h3",{id:"1-introduction"},"1. Introduction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Brief overview of the ESPressoscope project"),(0,n.kt)("li",{parentName:"ul"},"Importance of low-cost open-source microscopes"),(0,n.kt)("li",{parentName:"ul"},"Advantages and applications of the ESPressoscope")),(0,n.kt)("h3",{id:"2-variants-of-espressoscope"},"2. Variants of ESPressoscope"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anglerfish",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Description of underwater imaging capabilities"),(0,n.kt)("li",{parentName:"ul"},"Anglerfish APP User Guide"))),(0,n.kt)("li",{parentName:"ul"},"Matchboxscope",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Simplest microscope variant using microcontroller"),(0,n.kt)("li",{parentName:"ul"},"DIY instructions and features"))),(0,n.kt)("li",{parentName:"ul"},"Fluidiscope",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Microscope with an additional pump"),(0,n.kt)("li",{parentName:"ul"},"Enhanced features and applications"))),(0,n.kt)("li",{parentName:"ul"},"Holoscope",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Inline holography image reconstruction"),(0,n.kt)("li",{parentName:"ul"},"Unique imaging capabilities")))),(0,n.kt)("h3",{id:"3-hardware-components"},"3. Hardware Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ESP32 camera module"),(0,n.kt)("li",{parentName:"ul"},"SEEED Studio Xiao Sense (UC2-fueld) board"),(0,n.kt)("li",{parentName:"ul"},"Additional components for each variant (e.g., pumps, holography setup)")),(0,n.kt)("h3",{id:"4-software"},"4. Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Firmware:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Overview of the firmware"),(0,n.kt)("li",{parentName:"ul"},"Flashing the firmware online"),(0,n.kt)("li",{parentName:"ul"},"Compatibility with different variants"),(0,n.kt)("li",{parentName:"ul"},"Troubleshooting and updates"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Android App"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Description of the Android app"),(0,n.kt)("li",{parentName:"ul"},"Installation and setup instructions"),(0,n.kt)("li",{parentName:"ul"},"User guide for using the app with different variants")))),(0,n.kt)("h3",{id:"6-tutorials-and-guides"},"6. Tutorials and Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Serial Image Stream guide"),(0,n.kt)("li",{parentName:"ul"},"ESP32RawUSBFrame explanation"),(0,n.kt)("li",{parentName:"ul"},"Adding Motor Driver to Xia Sense")),(0,n.kt)("h2",{id:"license-and-collaboration"},"License and Collaboration"),(0,n.kt)("p",null,"This project is open-source and is released under the CERN open hardware license. We encourage everyone who is using our Toolbox to share their results and ideas so that the system keeps improving. It should serve as an easy-to-use and easy-to-access general-purpose building block solution for multiple applications."),(0,n.kt)("p",null,"You're free to fork the project and enhance it. If you have any suggestions to improve it or add additional functions make a pull request or file an issue."),(0,n.kt)("h2",{id:"collaborating"},"Collaborating"),(0,n.kt)("p",null,"If you find this project useful, please like this repository, follow us on Twitter, and cite the webpage! :-)"),(0,n.kt)("p",null,"*Intro image done using DALL-E2"))}d.isMDXComponent=!0},5461:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Espressoscope-v1-02-cc3ad36697ddaae2c87b7545e9763072.jpg"},4394:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20220326_185946-e6bceb68c10698c000683ad03f58e82f.jpg"},3330:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20220326_190242-8a671003965cc829f44ce61b83e71b6f.jpg"},1547:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image1-b87ffe3e133bbceccf536c8ecff26c4f.png"},7259:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/intro_img-e9d1b9ec202c196fa91da9ee38fb5aa6.png"}}]);