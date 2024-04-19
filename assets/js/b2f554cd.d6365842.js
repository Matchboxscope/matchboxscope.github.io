"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[5894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"ReconHolo","metadata":{"permalink":"/blog/ReconHolo","source":"@site/blog/ReconHolo.md","title":"Reconstruct the Hologram","description":"You can also visit this site//matchboxscope.github.io/pyscript/index_holo.html","date":"2024-04-19T06:44:40.000Z","formattedDate":"April 19, 2024","tags":[{"label":"ESP32-CAM","permalink":"/blog/tags/esp-32-cam"},{"label":"Holography","permalink":"/blog/tags/holography"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"Benedict Diederich","title":"Maintainer of Matchboxscope","url":"https://github.com/beniroquai","imageURL":"https://openuc2.com/wp-content/uploads/2022/11/Benedict_Diederich_openUC2-2-929x1024.webp","key":"Benedict"}],"frontMatter":{"slug":"ReconHolo","title":"Reconstruct the Hologram","authors":["Benedict"],"tags":["ESP32-CAM","Holography"]},"nextItem":{"title":"Using the ESP32 Camera in the Browser","permalink":"/blog/SerialCamera"}},"content":"You can also visit this site: https://matchboxscope.github.io/pyscript/index_holo.html\\n\\nWait a moment until pyscript loads and then upload your ESPHolo file:\\n\\n<iframe src=\'https://matchboxscope.github.io/pyscript/index_holo.html\' width=\'100%\' height=\'100%\'></iframe>\\n\\nThe parameters are:\\n```py\\nmy_image_recon=reconstruct_inline_hologram(my_image[:,:,2], wavelength=450e-9, ps=5e-6 , distance=.007)\\n``````\\n\\n*Alternatively:* Please visit the following website and upload your hologram: https://matchboxscope.github.io/pyscript/index_holo.html\\n\\nThe data won\'t leave your computer. Everything is implemented in pyodide/pyscript. The source code can be found here https://github.com/Matchboxscope/matchboxscope.github.io/blob/main/static/pyscript/image_upload_pillow.py\\n\\nAs of now: The reconstruction distance is constant as I don\'t know how to make this a parameter."},{"id":"SerialCamera","metadata":{"permalink":"/blog/SerialCamera","source":"@site/blog/SerialCamera.md","title":"Using the ESP32 Camera in the Browser","description":"Here you can use the ESP32 camera in the browser","date":"2024-04-19T06:44:40.000Z","formattedDate":"April 19, 2024","tags":[{"label":"ESP32-CAM","permalink":"/blog/tags/esp-32-cam"},{"label":"WEB-SERIAL","permalink":"/blog/tags/web-serial"},{"label":"Wired","permalink":"/blog/tags/wired"}],"readingTime":0.07,"hasTruncateMarker":false,"authors":[{"name":"Benedict Diederich","title":"Maintainer of Matchboxscope","url":"https://github.com/beniroquai","imageURL":"https://openuc2.com/wp-content/uploads/2022/11/Benedict_Diederich_openUC2-2-929x1024.webp","key":"Benedict"}],"frontMatter":{"slug":"SerialCamera","title":"Using the ESP32 Camera in the Browser","authors":["Benedict"],"tags":["ESP32-CAM","WEB-SERIAL","Wired"]},"prevItem":{"title":"Reconstruct the Hologram","permalink":"/blog/ReconHolo"},"nextItem":{"title":"Flashing the Firmware","permalink":"/blog/Flashing"}},"content":"Here you can use the ESP32 camera in the browser\\n\\n<iframe src=\'https://matchboxscope.github.io/cameraserial/index.html\' width=\'100%\' height=\'100%\'></iframe>"},{"id":"Flashing","metadata":{"permalink":"/blog/Flashing","source":"@site/blog/Software.md","title":"Flashing the Firmware","description":"Here you can flash the firmware for the different hardware versions:","date":"2024-04-19T06:44:40.000Z","formattedDate":"April 19, 2024","tags":[{"label":"ESP32-CAM","permalink":"/blog/tags/esp-32-cam"},{"label":"WEB-SERIAL","permalink":"/blog/tags/web-serial"}],"readingTime":0.115,"hasTruncateMarker":false,"authors":[{"name":"Benedict Diederich","title":"Maintainer of Matchboxscope","url":"https://github.com/beniroquai","imageURL":"https://openuc2.com/wp-content/uploads/2022/11/Benedict_Diederich_openUC2-2-929x1024.webp","key":"Benedict"}],"frontMatter":{"slug":"Flashing","title":"Flashing the Firmware","authors":["Benedict"],"tags":["ESP32-CAM","WEB-SERIAL"]},"prevItem":{"title":"Using the ESP32 Camera in the Browser","permalink":"/blog/SerialCamera"}},"content":"Here you can flash the firmware for the different hardware versions:\\n\\n![](../static/img/firmware-update-1.png)\\n\\nYou can also visit this site: https://matchboxscope.github.io/firmware/FLASH.html\\n\\n<iframe src=\'https://matchboxscope.github.io/firmware/FLASH.html\' width=\'100%\' height=\'100%\'></iframe>"}]}')}}]);