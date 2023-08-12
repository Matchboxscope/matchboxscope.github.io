"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[3747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={slug:"SerialCamera",title:"Using the ESP32 Camera in the Browser",authors:["Benedict"],tags:["ESP32-CAM","WEB-SERIAL","Wired"]},i="Using the ESP32 Camera in the Browser",c={permalink:"/blog/SerialCamera",source:"@site/blog/SerialCamera.md",title:"Using the ESP32 Camera in the Browser",description:"Here you can use the ESP32 camera in the browser",date:"2023-08-12T22:16:29.000Z",formattedDate:"August 12, 2023",tags:[{label:"ESP32-CAM",permalink:"/blog/tags/esp-32-cam"},{label:"WEB-SERIAL",permalink:"/blog/tags/web-serial"},{label:"Wired",permalink:"/blog/tags/wired"}],readingTime:.07,hasTruncateMarker:!1,authors:[{name:"Benedict Diederich",title:"Maintainer of Matchboxscope",url:"https://github.com/beniroquai",imageURL:"https://openuc2.com/wp-content/uploads/2022/11/Benedict_Diederich_openUC2-2-929x1024.webp",key:"Benedict"}],frontMatter:{slug:"SerialCamera",title:"Using the ESP32 Camera in the Browser",authors:["Benedict"],tags:["ESP32-CAM","WEB-SERIAL","Wired"]},nextItem:{title:"Flashing the Firmware",permalink:"/blog/Flashing"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here you can use the ESP32 camera in the browser"),(0,a.kt)("iframe",{src:"https://matchboxscope.github.io/serialcamera/index.html",width:"100%",height:"100%"}))}m.isMDXComponent=!0}}]);