"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=i.createContext({}),c=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=s,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||n;return a?i.createElement(m,r(r({ref:t},h),{},{components:a})):i.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,r=new Array(n);r[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:s,r[1]=l;for(var c=2;c<n;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(7462),s=(a(7294),a(3905));const n={},r="Anglerfish",l={unversionedId:"Anglerfish",id:"Anglerfish",title:"Anglerfish",description:'The Anglerfish is a derivative from the Matchboxscope. It has a "Angel" (German: fishing-rod) for hunting microbes, fishes, bacteria, algae...that can grow on a surface - under water! Yes! We want to capture the biofilm that will grow on transparent surfaces over time under water to get an idea what\'s happening. The core idea is to build an ESP32-based microscope, which fits into a watertight container. You focus it once to see the furface of the container sharp and release it into the wild, where it will capture images periodically.',source:"@site/docs/Anglerfish.md",sourceDirName:".",slug:"/Anglerfish",permalink:"/docs/Anglerfish",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"ESP32 CAM based on the SEEED Studio Xiao Sense",permalink:"/docs/ESP32SeeedXiao"}},o={},c=[{value:"CAD Files",id:"cad-files",level:2},{value:"Making it watertight",id:"making-it-watertight",level:2},{value:"Components",id:"components",level:2},{value:"Bill of material",id:"bill-of-material",level:3},{value:"3D printing files",id:"3d-printing-files",level:2},{value:"Assembly Process",id:"assembly-process",level:2},{value:"Removing camera lens",id:"removing-camera-lens",level:3},{value:"Mount the camera lens in the tube",id:"mount-the-camera-lens-in-the-tube",level:3},{value:"Assembling the case",id:"assembling-the-case",level:3},{value:"Assembling the electronics (optional)",id:"assembling-the-electronics-optional",level:3},{value:"Autofocus",id:"autofocus",level:4},{value:"<em>Assembly:</em>",id:"assembly-1",level:5},{value:"<em>Full Assembly in the Jar with Lens:</em>",id:"full-assembly-in-the-jar-with-lens",level:6},{value:"Powersupply",id:"powersupply",level:4},{value:"Microscope in the bottle =&gt; focus!",id:"microscope-in-the-bottle--focus",level:3},{value:"Final assembly",id:"final-assembly",level:3},{value:"Setting up the software",id:"setting-up-the-software",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"anglerfish"},"Anglerfish"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Anglerfish")," is a derivative from the ",(0,s.kt)("strong",{parentName:"p"},"Matchboxscope"),'. It has a "Angel" (German: fishing-rod) for hunting microbes, fishes, bacteria, algae...that can grow on a surface - under water! Yes! We want to capture the biofilm that will grow on transparent surfaces over time under water to get an idea what\'s happening. The core idea is to build an ESP32-based microscope, which fits into a watertight container. You focus it once to see the furface of the container sharp and release it into the wild, where it will capture images periodically.'),(0,s.kt)("p",null,'While designing the Anglerfish - which actually looks like an anglerfish considering the "Angle" - we experimented with many different design configurations and consdierations.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"One way of doing it, but way too complicated",src:a(5507).Z,width:"450",height:"169"})),(0,s.kt)("p",null,"There are great threads on building watertight assemblies using PVC tubes (LINK) or 3D rinted parts (LINK, PRUSA). However, one day (actually during cooking something) we came across the idea of using jars from jams."),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/OpenUc2/status/1528406118816534529"},"quick survey")," led to the point that most countries have Bonne Maman jars in their supermarket shelves. An ideal starting point for frugal microscope submarines! Still curious? Continue reading! :-)"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Anglerfish")," shares many aspects with the ",(0,s.kt)("strong",{parentName:"p"},"Matchboxscope"),", hence it may be worth to also have a look ",(0,s.kt)("a",{parentName:"p",href:"/docs/Matchboxscope"},"here")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",alt:"Logo"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NEW !!!!"))," We have a Youtube Video hat guides you through the process of building your own Anglerfish: ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=XuOOWYZesqA&feature=youtu.be"},"https://www.youtube.com/watch?v=XuOOWYZesqA&feature=youtu.be")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.youtube.com/vi/XuOOWYZesqA/maxresdefault.jpg",alt:"https://img.youtube.com/vi/XuOOWYZesqA/mqdefault.jpg "})),(0,s.kt)("h2",{id:"cad-files"},"CAD Files"),(0,s.kt)("p",null,"The release files can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_Anglerfish.zip"},"https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_Anglerfish.zip")),(0,s.kt)("h1",{id:"assembly"},"Assembly"),(0,s.kt)("p",null,"We will give you a step-by-step guide how to assemble the hole microscope. If anything fails or doesn't match as expected (most likely), please file an issue immediately. We will be there for you. Most of the steps below are very similar to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/Matchboxscope"},"Matchboxscope"),". only the way the screws for focusing the sample are oriented differently."),(0,s.kt)("h2",{id:"making-it-watertight"},"Making it watertight"),(0,s.kt)("p",null,"The jar is fun and all nice, but what if the glass shatters? Instead, we used one of these boxes ",(0,s.kt)("a",{parentName:"p",href:"https://www.hygi.de/emsa-clip-close-frischhaltedosen-3-teiliges-set-set-besteht-aus-3-x-550-ml-dosen-pd-65696?mcid=5&gclid=Cj0KCQjwn9CgBhDjARIsAD15h0AR1kv-CK-d5B0NS87yTNlyONGaPSpytpoQoar5avWwBswPgikKLVAaAgFZEALw_wcB"},"EMSA Clip & Close Frischhaltedosen 3-teiliges Set"),". They have been proven to be 100% waterproof! Yay!"),(0,s.kt)("p",null,'In order to observe biofilm growth on the surface, we need to add the "angel" or the illumination. For this the 3D printed holder that adapts the toslink fiber has to be added to the lid of the enclosure. We use hot glue, but need to make sure the surface is roughened in order to be sticky. For this we use sandpaper:'),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8894).Z,width:"2736",height:"3648"})),(0,s.kt)("p",null,"Once, done, the assembly, with the ESP32-based microscope inside the lunchbox looks like this:\n",(0,s.kt)("img",{src:a(1616).Z,width:"3648",height:"2736"})),(0,s.kt)("h2",{id:"components"},"Components"),(0,s.kt)("p",null,"This you will need for your device in order to work:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Explosion",src:a(5372).Z,width:"164",height:"500"})),(0,s.kt)("h3",{id:"bill-of-material"},"Bill of material"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Part"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Purpose"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Price"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"ESP32-CAM (MB)+USB board"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Better get two, one may break.."),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("a",{parentName:"td",href:"https://www.ebay.de/itm/274841850465?var=575090963555"},"Ebay")),(0,s.kt)("td",{parentName:"tr",align:"center"},"6-15\u20ac")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"USB Micro Cable"),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"},"1\u20ac")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"M3 Screws (Cylindrical head, 15mm, 8mm)"),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"3D printing material (PLA)"),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Aluminium foil (sticking if possible)"),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Sticky tape"),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Springs"),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Bonne Maman glass (empty)"),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"}),(0,s.kt)("td",{parentName:"tr",align:"center"},"0\u20ac")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"TP5400 USB/LiIon Adapter"),(0,s.kt)("td",{parentName:"tr",align:"center"},"For charging the battery/powering the ESP"),(0,s.kt)("td",{parentName:"tr",align:"center"},"[Ebay]","(",(0,s.kt)("a",{parentName:"td",href:"https://www.ebay.de/itm/143958030411?mkcid=16&mkevt=1&mkrid=707-127634-2357-0&ssspo=tg9hdLAtSmS&sssrc=204"},"https://www.ebay.de/itm/143958030411?mkcid=16&mkevt=1&mkrid=707-127634-2357-0&ssspo=tg9hdLAtSmS&sssrc=204")),(0,s.kt)("td",{parentName:"tr",align:"center"})))),(0,s.kt)("p",null,"[20:48, 19/03/2023]"," B\xe9n\xe9: e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://www.ebay.de/itm/324749044039?chn=ps&norover=1&mkevt=1&mkrid=707-159967-267642-0&mkcid=2&mkscid=101&itemid=324749044039&targetid=1325693166479&device=c&mktype=pla&googleloc=9042960&poi=&campaignid=12876320283&mkgroupid=125994436481&rlsatarget=pla-1325693166479&abcId=9300534&merchantid=7364532&gclid=CjwKCAjw5dqgBhBNEiwA7PryaPRjxD7U3CpUKItc_oP3fbxZbc0xvlxemE4Nx35z96mbkj4LcBbQ1xoCLX8QAvD_BwE"},"https://www.ebay.de/itm/324749044039?chn=ps&norover=1&mkevt=1&mkrid=707-159967-267642-0&mkcid=2&mkscid=101&itemid=324749044039&targetid=1325693166479&device=c&mktype=pla&googleloc=9042960&poi=&campaignid=12876320283&mkgroupid=125994436481&rlsatarget=pla-1325693166479&abcId=9300534&merchantid=7364532&gclid=CjwKCAjw5dqgBhBNEiwA7PryaPRjxD7U3CpUKItc_oP3fbxZbc0xvlxemE4Nx35z96mbkj4LcBbQ1xoCLX8QAvD_BwE"),"\n","[20:49, 19/03/2023]"," B\xe9n\xe9: will need to update this I gues..\n","[20:49, 19/03/2023]"," B\xe9n\xe9: ",(0,s.kt)("a",{parentName:"p",href:"https://matchboxscope.github.io/docs/Anglerfish#bill-of-material"},"https://matchboxscope.github.io/docs/Anglerfish#bill-of-material"),"\n","[20:50, 19/03/2023]"," B\xe9n\xe9: ",(0,s.kt)("a",{parentName:"p",href:"https://www.ebay.de/itm/182447564721?chn=ps&norover=1&mkevt=1&mkrid=707-134425-41852-0&mkcid=2&mkscid=101&itemid=182447564721&targetid=1404115578933&device=c&mktype=pla&googleloc=9042960&poi=&campaignid=17935704717&mkgroupid=139162549385&rlsatarget=pla-1404115578933&abcId=9301059&merchantid=112404474&gclid=CjwKCAjw5dqgBhBNEiwA7PryaPoy3WizWYFivmCYP5YPe8AC5FrwA42xULsq8vTyBEQsmordf_AhMRoCrP0QAvD_BwE"},"https://www.ebay.de/itm/182447564721?chn=ps&norover=1&mkevt=1&mkrid=707-134425-41852-0&mkcid=2&mkscid=101&itemid=182447564721&targetid=1404115578933&device=c&mktype=pla&googleloc=9042960&poi=&campaignid=17935704717&mkgroupid=139162549385&rlsatarget=pla-1404115578933&abcId=9301059&merchantid=112404474&gclid=CjwKCAjw5dqgBhBNEiwA7PryaPoy3WizWYFivmCYP5YPe8AC5FrwA42xULsq8vTyBEQsmordf_AhMRoCrP0QAvD_BwE")),(0,s.kt)("h2",{id:"3d-printing-files"},"3D printing files"),(0,s.kt)("p",null,"All design files can be found in the folder ",(0,s.kt)("a",{parentName:"p",href:"./INVENTOR"},"INVENTOR"),"."),(0,s.kt)("p",null,"All 3D-printable files can be found ",(0,s.kt)("a",{parentName:"p",href:"./STL/Anglerfish_JAR"},"here"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anglerfish_Jar_Adapterplate_v1_12.stl"),(0,s.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anblerfish_middle2_v1_1.stl"),(0,s.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anglerfish_bottom_v0_2.stl"),(0,s.kt)("li",{parentName:"ul"},"Anglerfish_JAR_Anglerfish_Lightperiscope_long_V0_21.stl")),(0,s.kt)("h2",{id:"assembly-process"},"Assembly Process"),(0,s.kt)("p",null,"These are the parts you need"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(921).Z,width:"338",height:"450"})),(0,s.kt)("h3",{id:"removing-camera-lens"},"Removing camera lens"),(0,s.kt)("p",null,"Be careful! This is the most crucial part! Hold the camera sensor and unswrew the lens. Try not to touch the Flatband cable.\n",(0,s.kt)("img",{src:a(3305).Z,width:"450",height:"338"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(814).Z,width:"450",height:"338"})),(0,s.kt)("h3",{id:"mount-the-camera-lens-in-the-tube"},"Mount the camera lens in the tube"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9688).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"If the tube doesn't match the diameter of the lens, warm the plastic to make it bendable."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2708).Z,width:"338",height:"450"})),(0,s.kt)("p",null,'Add the camera sensor to the hole. It should be "pressfit".'),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(571).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"The flatband has to be folded in the next step. Be careful: It may break and ruin the camera"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9989).Z,width:"450",height:"338"})),(0,s.kt)("h3",{id:"assembling-the-case"},"Assembling the case"),(0,s.kt)("p",null,"Close the casing with M3x20 screws"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(485).Z,width:"450",height:"338"})),(0,s.kt)("p",null,'For adding a "spring-loaded" mechanism, use the foam in the packaging of the ESP32 and cut a hole into the center'),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4427).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"Add the foam to the lens-tube assembly"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(688).Z,width:"450",height:"338"})),(0,s.kt)("p",null,'Add the baseplate to the JAR. This should be "press-fit"; if it doesn\'t work out of the box, place the jar on a hotplate (stove) and warm it up to ~50-80\xb0C, gently push the plate as close to the glass as possible.'),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6453).Z,width:"450",height:"338"})),(0,s.kt)("h3",{id:"assembling-the-electronics-optional"},"Assembling the electronics (optional)"),(0,s.kt)("h4",{id:"autofocus"},"Autofocus"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"What ou need:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"M12 CCTV Lens voice coil motor (",(0,s.kt)("a",{parentName:"li",href:"https://de.aliexpress.com/item/1005003268036027.html"},"Aliexpress Link"),", ca. 5-25\u20ac)"),(0,s.kt)("li",{parentName:"ul"},"BD809 or any NPN transistor that can run 100mA"),(0,s.kt)("li",{parentName:"ul"},"soldering skills"),(0,s.kt)("li",{parentName:"ul"},"some wires")),(0,s.kt)("p",null,"For the CCTV lens that can displace the objective lens, we create a simple electronic curcuit. It's task is to amplify the current from the GPIO12 that is limited to ~20-30mA. For this you can use any NPN transistor. Here we use the BD809. The 5V from USB are connected to the lens pin (solder it, be careful to not rip it apart). The lens- goes to the collector of the transistor. The base is connected to the singalling/PWM pin GPIO12. Emitter goes to GND:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9419).Z,width:"3575",height:"3630"})),(0,s.kt)("h5",{id:"assembly-1"},(0,s.kt)("em",{parentName:"h5"},"Assembly:")),(0,s.kt)("ol",{start:0},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"unscrew the lens\n",(0,s.kt)("img",{src:a(3074).Z,width:"3648",height:"2736"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Insert the lens from the ESP32 camera into the 3d printed M12 adapter\n",(0,s.kt)("img",{src:a(1041).Z,width:"3648",height:"2736"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Add the wires to the 3d printed assembly\n",(0,s.kt)("img",{src:a(6932).Z,width:"3648",height:"2736"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Organize the wires and make sure no blank wires (also transistor) are visible\n",(0,s.kt)("img",{src:a(1653).Z,width:"3648",height:"2736"})))),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(1582).Z,width:"640",height:"360"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9627).Z,width:"1280",height:"720"})),(0,s.kt)("h6",{id:"full-assembly-in-the-jar-with-lens"},(0,s.kt)("em",{parentName:"h6"},"Full Assembly in the Jar with Lens:")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3074).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4945).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3218).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,"Don't get confused. The green board is just a holder for the NPN transistor that matches the shape of the ESP32. The circuit diagramm stays the same."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2710).Z,width:"2736",height:"3648"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(1174).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5430).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6911).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6356).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(465).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3074).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(940).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2989).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6262).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6237).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9536).Z,width:"3648",height:"2736"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(979).Z,width:"2736",height:"3648"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8055).Z,width:"2736",height:"3648"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7811).Z,width:"2736",height:"3648"})),(0,s.kt)("h4",{id:"powersupply"},"Powersupply"),(0,s.kt)("p",null,"In one older design we used a home-made USB powerbank so that the full assembly fits into a jar. Alternatively you can use any powerbank that fits into your water tight assembly. The more mAh the better.  "),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Assembly:")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9422).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"Solder a USB cable or siply two wires to the 5V/GND of the ESP32 on one end. The other end goes to the large USB or 5V/GND of the TP5400. This is the supply voltage."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5395).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"The Litium Ion battery will be connected to the TP5400 input (B+/B-)"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(960).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"Make sure you do not create a shortcut! => Place everything in plastic bag."),(0,s.kt)("h3",{id:"microscope-in-the-bottle--focus"},"Microscope in the bottle => focus!"),(0,s.kt)("p",null,"Mount the camera assembly to the jar baseplate:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4419).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"Adjust the focus by first turning on the ESP32 and connect to the Wifi (",(0,s.kt)("inlineCode",{parentName:"p"},"SSID: Matchboxscope"),"). Open the page ",(0,s.kt)("a",{parentName:"p",href:"http://192.168.4.1."},"http://192.168.4.1.")," Make a mark on the glass surface in front of the objective lens (has to be removed afterwards!). Turn the three focusing screws such that you create a sharp image of the mark on the glass."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6228).Z,width:"450",height:"338"})),(0,s.kt)("h3",{id:"final-assembly"},"Final assembly"),(0,s.kt)("p",null,"Put everything together and close the lid. Only connect the USB cable if you are close to your experiment."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7871).Z,width:"450",height:"338"})),(0,s.kt)("p",null,"Mount the LED with hotglue (use a lot)"),(0,s.kt)("h2",{id:"setting-up-the-software"},"Setting up the software"),(0,s.kt)("p",null,"Comming soon"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8527).Z,width:"241",height:"500"})))}p.isMDXComponent=!0},9419:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/CircuitAnglerfish-a085c8c931f7a0e1fe851b287a51bcd9.png"},8894:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/IMG_20230129_163437-643919833c2ce308288ab5fde8251aab.jpg"},1616:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/IMG_20230129_164006-7f26b55cf01c06f6eed423d2eaf1c5b9.jpg"},8527:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Screenshot_20220419_184943_com.android.chrome-06e13e0b4722b58e3944c64cdd1f9533.jpg"},921:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0-fc3a7daabc8ffe6d775e8bb682d9fbed.jpg"},1582:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_0-282b89cdd9152a984442eda53e49d570.gif"},9627:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_1-e8ffa79006fd058dd9803a6c97dfc528.gif"},940:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_10-dd045dbd70c8aad80c6faf062e143706.jpg"},465:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_11-5ea7badc2fd8a9f380fe060dc647a8e1.jpg"},6356:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_12-1d177e2cb4a8e1e8b41e2ece9d961ecd.jpg"},6911:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_13-c528d04d835d0ed79e587c668d7a6561.jpg"},4945:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_14-763af1292ce926e2e9b862d4b4684dc1.jpg"},3074:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_15-725fa83a78775c18ebcc324cba3e6d62.jpg"},5430:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_16-be510724fc991bd1459ef74cf91bc6e4.jpg"},1174:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_17-f52fe86b54deb6136df1bde853e43e1f.jpg"},2710:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_18-df3cf0e7f777e446e912212caab5f494.jpg"},3218:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_19-2a136c7dd8e1d9ea55bc6e1e58559280.jpg"},6932:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_24-4f24510ff668664404402a5e7600f533.jpg"},1653:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_25-df373637d5d4e5ae101f33a74612ec35.jpg"},1041:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_27-3f73b5716e2ee5e05179dbc0ed2c3763.jpg"},7811:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_3-03d334659b53b638a6241f173298c571.jpg"},8055:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_4-43fe15165be234b94905de0a5747b54d.jpg"},979:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_5-80d2a25fd0bf0d1c33c83f4ef61c3c33.jpg"},9536:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_6-dfad7dcce17bd5e13e920cde2f28c37d.jpg"},6237:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_7-e56f44294e8c3322c3afad55d37d852d.jpg"},6262:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_8-d1729396ac98e25317b87144276ddfc5.jpg"},2989:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_0_9-e967e0c11339608f89b562c8943c3884.jpg"},3305:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_1-9f1aad4c01caee1c0c0fb7e44467fff1.jpg"},4419:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_10-e548dbe757c9d0c7ee5f49e2e96111c5.jpg"},6228:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_11-dbb0a60bb2d84ba097728292683ee41e.jpg"},5395:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_12-6ce745df6dd307b5eee1c7f23bc37c8c.jpg"},960:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_13-a666f465f47d05a1bae078c23a0cf37f.jpg"},6453:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_14-ecd14fa58a7a9538493954d27550d52d.jpg"},7871:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_16-2381b50e77e4c2c312da552c0d86c27a.jpg"},9422:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_18-babe9bda37272938ad403cf8505615a7.jpg"},814:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_2-6dceff553df9adc47b01471319fb3538.jpg"},9688:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_3-7d6ae065e9860893c5042a7fd3e0339a.jpg"},2708:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_4-01e158c72409eb089a29ae09b6a43abe.jpg"},571:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_5-ebe5bd2d59eaaac7ed1beb01050420e2.jpg"},9989:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_6-c1f9ce41b1a5648d206cef9d5c1a61b4.jpg"},485:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_7-edcdfc39a0d4f127af3dbee1bca65a7e.jpg"},4427:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_8-7165851b3d400ec805599f2129527972.jpg"},688:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_9-b8acc0a010b739f71d82855fdd893c68.jpg"},5507:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/anglerfish_explosion-fdc5cc91ece82db6ce9007fc76e8b69f.PNG"},5372:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/explosion-78f0e818bf1a39d09cb033a7389a7835.jpeg"}}]);