"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=s,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),s=(a(7294),a(3905));const n={},o="ESP32 CAM based on the SEEED Studio Xiao Sense",i={unversionedId:"ESP32SeeedXiao",id:"ESP32SeeedXiao",title:"ESP32 CAM based on the SEEED Studio Xiao Sense",description:"We all like the ESP32-CAM because it is dead-cheap. However, this comes with a huge drawback there are alternatives.",source:"@site/docs/ESP32SeeedXiao.md",sourceDirName:".",slug:"/ESP32SeeedXiao",permalink:"/docs/ESP32SeeedXiao",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Anglerfish",permalink:"/docs/Anglerfish"},next:{title:"ESPectrometer",permalink:"/docs/ESPectrometer"}},l={},c=[{value:"Assembly",id:"assembly",level:2},{value:"STLs",id:"stls",level:2},{value:"openUC2",id:"openuc2",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"esp32-cam-based-on-the-seeed-studio-xiao-sense"},"ESP32 CAM based on the SEEED Studio Xiao Sense"),(0,s.kt)("p",null,"We all like the ESP32-CAM because it is dead-cheap. However, this comes with a huge drawback: The quality of these devices is variable, also it was said that the power management of this device is not ideal due to some groundplane mismatch. The good thing: there are alternatives.\nRecently, Seeed Studio presented the new XIAO Sense series. It's the same camera (OV2650), but with a more powerful ESP32S3 and a much smaller footprint. To have a quick fix, we create an adapter that encapsulates the XIAO into the ESP32-CAM (AI Tinker) formfactor. You can use the same software, but have to flash the ",(0,s.kt)("strong",{parentName:"p"},"XIAO")," version from the flashing webpage. Everything else, remains the same."),(0,s.kt)("p",null,'Our experience so far is: Awesome! No more glitches, reboots or weird behaviours. It just works. Attention: This "beast" gets warm. But as the engineers from Seeed described it: It\'s due to its powerfuliness :D'),(0,s.kt)("h2",{id:"assembly"},"Assembly"),(0,s.kt)("p",null,"Some images that describe how the XIAO adapts to the ESP32-CAM formfactor"),(0,s.kt)("p",null,"There is a small dummy SD-card so that the XIAO remains in place. If you use a micro-SD card you won't need this addon:\n",(0,s.kt)("img",{src:a(6375).Z,width:"492",height:"384"})),(0,s.kt)("p",null,"The camera goes in the same place as the bigger predecor:\n",(0,s.kt)("img",{src:a(7098).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,"The whole assembly is fixed with 4 M3x12mm screws (or something similar), make sure the Wifi antenna is placed at some place that vertical to the XIAO's operation. Check before assembling everything. Sometimes the wifi signal becomes weak.\n",(0,s.kt)("img",{src:a(5133).Z,width:"3648",height:"2736"})),(0,s.kt)("h2",{id:"stls"},"STLs"),(0,s.kt)("p",null,"You need the following items:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:a(3841).Z},"The Base housing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:a(9697).Z},"The Lid for the housing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:a(2942).Z},"The dummy SD-card")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:a(5774).Z},"A dummy xiao Model"))),(0,s.kt)("p",null,"All files as a ",(0,s.kt)("a",{target:"_blank",href:a(8399).Z},"ZIP")),(0,s.kt)("h2",{id:"openuc2"},"openUC2"),(0,s.kt)("p",null,"You can also build you ",(0,s.kt)("strong",{parentName:"p"},"ANGLERFISH")," using cubes. Please head over to the openUC2 repository for having a look at the dedicated Module."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/openUC2/openUC2-SEEED-XIAO-Camera"},"OpenUC2 Repo")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3277).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,"In experiment:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7308).Z,width:"2736",height:"3648"})))}u.isMDXComponent=!0},8399:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Archiv-05b6db2a21bc0ad6be043798edb2c872.zip"},2942:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Assembly_Cube_SEEED_Xiao_Sense_Camera_adapter_v3_00_ESP32_XIAO_Adapter_SDcard_4-a906cf676caab2f8e02526146bd253b7.stl"},3841:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Assembly_Cube_SEEED_Xiao_Sense_Camera_adapter_v3_00_ESP32_XIAO_Adapter_base_2-a3b269b9122b03aeb3004b02e95fb684.stl"},9697:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Assembly_Cube_SEEED_Xiao_Sense_Camera_adapter_v3_00_ESP32_XIAO_Adapter_lid_3-39ba3f594780fee264cce28192a4d5eb.stl"},5774:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Assembly_Cube_SEEED_Xiao_Sense_Camera_adapter_v3_00_Seeeduino_Xiao_1-f3e97bb9cdd7d9c8a133a62cab3c4c1f.stl"},7098:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IMG_20230705_084950-4009057fc359eafed5263f25beb8177c.jpg"},5133:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IMG_20230705_085006-f4973fa8eee126a0104dd818666c2f83.jpg"},3277:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IMG_20230718_131610-b4cf2d7aecd13146407ef752471d19c4.jpg"},7308:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IMG_20230722_124929-db309a4520c7f134cbfd8f2023554ccd.jpg"},6375:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/seeedconnected-605af74b31fe3987f9e09f0ea54ffa48.png"}}]);