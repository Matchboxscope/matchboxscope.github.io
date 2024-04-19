"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[4212],{5680:(e,t,o)=>{o.d(t,{xA:()=>s,yg:()=>g});var r=o(6540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,g=u["".concat(p,".").concat(m)]||u[m]||h[m]||a;return o?r.createElement(g,i(i({ref:t},s),{},{components:o})):r.createElement(g,i({ref:t},s))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9416:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=o(8168),n=(o(6540),o(5680));const a={slug:"ReconHolo",title:"Reconstruct the Hologram",authors:["Benedict"],tags:["ESP32-CAM","Holography"]},i="Reconstruct the Hologram using PyScript",c={permalink:"/blog/ReconHolo",source:"@site/blog/ReconHolo.md",title:"Reconstruct the Hologram",description:"You can also visit this site//matchboxscope.github.io/pyscript/index_holo.html",date:"2024-04-19T06:44:40.000Z",formattedDate:"April 19, 2024",tags:[{label:"ESP32-CAM",permalink:"/blog/tags/esp-32-cam"},{label:"Holography",permalink:"/blog/tags/holography"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Benedict Diederich",title:"Maintainer of Matchboxscope",url:"https://github.com/beniroquai",imageURL:"https://openuc2.com/wp-content/uploads/2022/11/Benedict_Diederich_openUC2-2-929x1024.webp",key:"Benedict"}],frontMatter:{slug:"ReconHolo",title:"Reconstruct the Hologram",authors:["Benedict"],tags:["ESP32-CAM","Holography"]},nextItem:{title:"Using the ESP32 Camera in the Browser",permalink:"/blog/SerialCamera"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,r.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"You can also visit this site: ",(0,n.yg)("a",{parentName:"p",href:"https://matchboxscope.github.io/pyscript/index_holo.html"},"https://matchboxscope.github.io/pyscript/index_holo.html")),(0,n.yg)("p",null,"Wait a moment until pyscript loads and then upload your ESPHolo file:"),(0,n.yg)("iframe",{src:"https://matchboxscope.github.io/pyscript/index_holo.html",width:"100%",height:"100%"}),(0,n.yg)("p",null,"The parameters are:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-py"},"my_image_recon=reconstruct_inline_hologram(my_image[:,:,2], wavelength=450e-9, ps=5e-6 , distance=.007)\n")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Alternatively:")," Please visit the following website and upload your hologram: ",(0,n.yg)("a",{parentName:"p",href:"https://matchboxscope.github.io/pyscript/index_holo.html"},"https://matchboxscope.github.io/pyscript/index_holo.html")),(0,n.yg)("p",null,"The data won't leave your computer. Everything is implemented in pyodide/pyscript. The source code can be found here ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope.github.io/blob/main/static/pyscript/image_upload_pillow.py"},"https://github.com/Matchboxscope/matchboxscope.github.io/blob/main/static/pyscript/image_upload_pillow.py")),(0,n.yg)("p",null,"As of now: The reconstruction distance is constant as I don't know how to make this a parameter."))}h.isMDXComponent=!0}}]);