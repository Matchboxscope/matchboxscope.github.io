"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[7507],{5680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>d});var n=i(6540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),f=r,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return i?n.createElement(d,a(a({ref:t},p),{},{components:i})):n.createElement(d,a({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},341:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(8168),r=(i(6540),i(5680));const o={},a="Variation of Imaging Contrast in ESPressoscope Illumination",s={unversionedId:"Hardware/DifferentIllumination",id:"Hardware/DifferentIllumination",title:"Variation of Imaging Contrast in ESPressoscope Illumination",description:"Supplementary Figure 2: Variation of imaging contrast as a function of the illumination unit.",source:"@site/docs/Hardware/DifferentIllumination.md",sourceDirName:"Hardware",slug:"/Hardware/DifferentIllumination",permalink:"/docs/Hardware/DifferentIllumination",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"ESP32 Camera and OV2640 Sensor Documentation",permalink:"/docs/Hardware/ESP32Cam"}},l={},c=[{value:"Implications and Considerations",id:"implications-and-considerations",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"variation-of-imaging-contrast-in-espressoscope-illumination"},"Variation of Imaging Contrast in ESPressoscope Illumination"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(7572).A,width:"4464",height:"3300"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Supplementary Figure 2"),": Variation of imaging contrast as a function of the illumination unit."),(0,r.yg)("p",null,"The ESPressoscope platform offers different choices for illumination source wielding a significant influence over the illuminated field of view, contrast, homogeneity, and overall signal quality. To demonstrate this phenomenon, we conducted experiments utilizing a prepared slide from a Gossypium stem, unveiling distinct contrast variations contingent upon the illumination unit employed."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Simplest Periscope Illumination:")),(0,r.yg)("p",null,"In its most basic periscope configuration, the illumination source resides in proximity to the camera lens. This arrangement bestows optimal homogeneity and usable field of view, rendering it a desirable choice for particular applications. However, a limitation emerges in terms of available sample space, as the LED flashlight's proximity restricts the area for the sample. This close positioning results in a highly coherent illumination, contributing to improved contrast within the field of view."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Battery-Driven LED Illumination:")),(0,r.yg)("p",null,"The utilization of a battery-driven LED introduces an elevated degree of freedom in illumination placement. This dynamic positioning allows for enhanced contrast due to the LED's more coherent illumination characteristics. While delivering improved contrast, this method does not offer trigger capabilities."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Toslink Illumination:")),(0,r.yg)("p",null,"The Toslink illumination source offers heightened flexibility, akin to the Ikea USB Lamp. However, it illuminates only a specific subset of the field of view. While adaptable in placement, it sacrifices comprehensive coverage for enhanced flexibility."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Neopixel LED Matrix Illumination:")),(0,r.yg)("p",null,"The Neopixel LED matrix provides notable contrast and the potential for advanced digital contrast techniques such as differential phase contrast or Fourier Ptychography Microscopy (FPM). However, its implementation necessitates soldering skills, introducing a technical requirement."),(0,r.yg)("h2",{id:"implications-and-considerations"},"Implications and Considerations"),(0,r.yg)("p",null,"The choice of illumination source within the ESPressoscope ecosystem bears intricate implications for imaging outcomes. Depending on the desired outcome, the field of view's coverage, coherence of illumination, and practical constraints must be meticulously weighed. Users are encouraged to assess the specific requirements of their microscopy application and select an illumination source aligned with their goals. The ESPressoscope's modularity enables the swift interchange of illumination units, facilitating experimentation and optimization for distinct imaging scenarios."))}m.isMDXComponent=!0},7572:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/illutable-db0de4661cbe1b05a847a3a9ef3c6580.png"}}]);