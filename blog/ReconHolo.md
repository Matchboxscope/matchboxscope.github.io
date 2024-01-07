---
slug: ReconHolo
title: Reconstruct the Hologram
authors: [Benedict]
tags: [ESP32-CAM, Holography]
---

# Reconstruct the Hologram using PyScript

You can also visit this site: https://matchboxscope.github.io/pyscript/index_holo.html

Wait a moment until pyscript loads and then upload your ESPHolo file:

<iframe src='https://matchboxscope.github.io/pyscript/index_holo.html' width='100%' height='100%'></iframe>

The parameters are:
```py
my_image_recon=reconstruct_inline_hologram(my_image[:,:,2], wavelength=450e-9, ps=5e-6 , distance=.007)
``````

*Alternatively:* Please visit the following website and upload your hologram: https://matchboxscope.github.io/pyscript/index_holo.html

The data won't leave your computer. Everything is implemented in pyodide/pyscript. The source code can be found here https://github.com/Matchboxscope/matchboxscope.github.io/blob/main/static/pyscript/image_upload_pillow.py

As of now: The reconstruction distance is constant as I don't know how to make this a parameter. 

