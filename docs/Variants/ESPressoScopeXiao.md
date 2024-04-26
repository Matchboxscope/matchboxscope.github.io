# ESPressoscope (Seeed Studio Xiao)

*A Cup-sized microscope that never sleeps.*

This is the latest version of the base assembly for any ESP32-based microscope.

:::warning
It is always advisable to first flash the software and then build the microscope around it. Please go here to flash the latest version: https://matchboxscope.github.io/firmware/FLASH.html
:::


Instead of the ESP32-CAM, we can also use the newer ESP32-S3-based camera from Seeed Studio. It's a lot smaller and more powerful. But beware: It gets hot! Plastic may start melting. For this board, choose the XIAO firmware in the flashing process.

These are the parts needed; You can retrieve them from here:
https://github.com/Matchboxscope/Matchboxscope/releases/tag/XIAOSeeedStudioV1
![](IMAGES/injectionmold/xiaovariation.jpeg)



## Improvements
This device is a work-in-progress instrument. Not everything is perfectly working yet. Bare with us. If you find something sneaky, please feel free to file an issue or start a discussion here: https://github.com/matchboxscope/Matchboxscope

:::info
The newest **3D Printing files** can be found in the ESPressoscope release here:
https://github.com/Matchboxscope/Matchboxscope/releases/
:::

## Flash the firmware

Please visit the following explanation [Firmware](https://matchboxscope.github.io/firmware/FLASH.html)


## Assembly

These are the parts you need to build a Matchboxscope (**the sample plate is missing in the following image**):

![](IMAGES/injectionmold/xiao/espressoscope_xiao_12.png)



| Name                                       | Description                           | Amount | Price (USD) | URL                                                                                              |
|--------------------------------------------|---------------------------------------|--------|-------------|--------------------------------------------------------------------------------------------------|
| ESP32-Xiao Seed Studio |  ESP32 Camera Board with USB Serial    | 1      | $13         | [Link](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)                                                                  |
| Lid/bottom (printed)                       | 3D Printed Lid/bottom                 | 2      | $2 (each)   | [Link](https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2)                                                                  |
| Base (printed)                             | 3D Printed Base                       | 2      | $2 (each)   | [Link](https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2)                                                                  |
| Camera holder (printed)                    | 3D Printed Camera holder              | 1      | $3          | [Link](https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2)                                                                  |
| Lamp holder (printed)                      | 3D Printed Lamp holder                | 1      | $2          | [Link](https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2)                                                                  |
| Lens holder (printed)                      | 3D Printed Lens holder                | 1      | $2          | [Link](https://github.com/Matchboxscope/Matchboxscope/releases/tag/v2)                                                                  |
| LED Lamp                                   | LIHAO Mini LED Lamp (Waterproof)      | 1      | $5          | [Link](https://www.amazon.nl/LIHAO-mini-ledlampjes-lantaarns-batterijen-waterdicht/dp/B01FF07XFE) |
| Springs                                    | Pack of 3 Springs                     | 3      | $1 (pack)   | [Link](https://www.amazon.de/Druckfedern-Sortiment-Spirale-Druckfeder-Stahlfeder/dp/B079N7BMS3/ref=asc_df_B079N7BMS3/?tag=googshopde-21&linkCode=df0&hvadid=228048441988&hvpos=&hvnetw=g&hvrand=1914160452934365838&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-420561922299&psc=1&th=1&psc=1)                                                                  |
| M3x20 Cylindrical Headed Screws (DIN912)   | Pack of 8 M3x20 Screws                | 8      | $0.5 (pack) | [Link](https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1)                                                                  |
| M3x6mm Screws (DIN912)                     | Pack of 2 M3x6mm Screws               | 2      | $0.2 (pack) | [Link](https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1)                                                                  |
| M3x12mm Screws (DIN912)                    | Pack of 4 M3x12mm Screws              | 4      | $0.3 (pack) | [Link](https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1)                                                                  |
| M3x24mm Screws (DIN912)                    | Pack of 3 M3x24mm Screws              | 3      | $0.4 (pack) | [Link](https://www.amazon.de/Zylinderschrauben-Innensechskantschl%C3%BCsseln-Sechskantschraube-Sechskopf-Knopf-Aufbewahrungsbox/dp/B09ZPK9TYS/ref=asc_df_B09ZPK9TYS/?tag=googshopde-21&linkCode=df0&hvadid=604016468616&hvpos=&hvnetw=g&hvrand=15643686379972952873&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044063&hvtargid=pla-1700799556789&psc=1&th=1&psc=1)                                                                  |
| M3 threaded inserts (4x6mm)                | Pack of 6 M3 Threaded Inserts         | 6      | $1 (pack)   | [Link](https://www.amazon.de/-/en/Threaded-Bushings-Internal-Ultrasonic-Printers/dp/B0BFV5PXFY/ref=sr_1_5?crid=SQJMDVXKZ5EN&keywords=threaded+insert&qid=1690971183&s=industrial&sprefix=threaded+insert+%2Cindustrial%2C75&sr=1-5)                                                                  |
| USB micro cable                            | USB Micro Cable                       | 1      | $5          | [Link](https://www.amazon.de/Amazon-Basics-USB-C-USB-IF-Certified-black/dp/B085SBKFJR/ref=sr_1_1_ffob_sspa?crid=J2LWNNBLS3X6&keywords=usb+micro&qid=1690971197&s=industrial&sprefix=usb+micro%2Cindustrial%2C86&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1)                                                                  |

:::warning
***WARNING:*** It is advisable to have the USB cable disconnected from the camera board. This way the USB connector won't rip off the PCB and you won't induce any electro static discharges which may ultimatively destroy the board
:::

### Prepare the Camera

Unpack the camera from the plastic pouch:
![](IMAGES/injectionmold/xiao/espressoscope_xiao_3.jpg)


Add the Wifi Antenna to the board by clicking it together:
![](IMAGES/injectionmold/xiao/espressoscope_xiao_4.jpg)

Fold the Wifi antenna for better signal strength:
![](IMAGES/injectionmold/xiao/espressoscope_xiao_5.jpg)


![](IMAGES/injectionmold/xiao/espressoscope_xiao_9.jpg)

Now remove the camera from the camera board, This can be done by flipping the brown bar and removing the copper pcb. Be careful to not destroy the flexible PCB!

![](IMAGES/injectionmold/xiao/espressoscope_xiao_1.jpg)

**HINT/Warning:** Be careful while removing the lens. The flex cable is sensitive to tension. It may be easier to first remove the camera module using the snap-bar mechanism and then later add it again.
![](IMAGES/injectionmold/VID_20230504_104920.gif)


Removing the lens is easiest by tacking pliers and grib the lens. Then carefully unscrew it. There might be some glue, so that it may be a little tricky to untighten it. Be careful to not destroy the flexible PCB!
![](IMAGES/injectionmold/xiao/espressoscope_xiao_6.jpg)

Now, you can insert the lens into the lens holder by pressfitting it. The small aperture has to point asway from the little wings:
![](IMAGES/injectionmold/xiao/espressoscope_xiao_7.jpg)


Add the lens to the holder and remove the sticky tape (**Note**: This part looks a little different now since the screw has to move closer to the base board); **Hint:** The distance between the camera lens and the sensor determines the magnification, the further out the lens lurkes, the higher the magnification. You can tune it freely. **Hint :** Remove any sticker that may remain on the camera lens.
![](IMAGES/injectionmold/IMG_20230519_122130.jpg)

**HINT:** In Motion:
![](IMAGES/injectionmold/VID_20230504_105826.gif)





### Prepare the 3D printed parts


1. Add the threaded inserts to the base using a hot iron - don't burn yourself! Hint: You can have 3 inserts on the top and three on the bottom. A hot iron with a fine tip is better than one with a flat one. (**HINT:** This mechanism may change back to a non-threaded insert based version for better operatibility - this step looks a bit different since the base is a little different, but the idea is the same.)

![](IMAGES/injectionmold/seeedvariation_3.jpg)


2. Add the Xiao to the base after removing the lens from the camera. Make sure the camera is parallel to the surface; An SD card (dummy) may help

![](IMAGES/injectionmold/seeedvariation_1.jpg)

![](IMAGES/injectionmold/xiao/espressoscope_xiao_8.jpg)

3.1


Fix the lens on the base using M3x6mm screws (**Note**: The screws should not touch the PCB later when everything is fully assembled! Therefore, please use short screws. This looks different, but the core idea is the same)

![](IMAGES/injectionmold/matchboxscope_injectionmolding12.jpg)


3. Add the lid and short M3 screws to close it. Done.

![](IMAGES/injectionmold/seeedvariation_4.jpg)

Use screws that are not too long:
![](IMAGES/injectionmold/xiao/espressoscope_xiao_13.png)



4. Add the springs to the screws and mount the sample plate using M3x24mm screws;  Add the lamp holder using the M3x12 screw.

![](IMAGES/injectionmold/matchboxscope_injectionmolding17.jpg)

**HINT:** This is a bit tricky. Start with one screw+spring combination, fix it and continue with all others. In motion:

![](IMAGES/injectionmold/VID_20230504_111346.gif)

5. Add the lamp - done!

![](IMAGES/injectionmold/matchboxscope_injectionmolding18.jpg)


## Done

![](IMAGES/injectionmold/matchboxscope_injectionmolding19.jpg)


## Operation

### Find the focus

Turn on the light. Take a piece of paper and first try if you can sense any contrast variation in the camera stream. Try to turn the 3 spring-loaded screws such that the stage z-position becomes coincident with the position of best contrast with the piece of paper. Try to keep the stage parallel to the base.

## Software

### Capturing imates

If you start the stream and hit the Capture button, the image gets stored on the internal SD card (if inserted). For this, please flash it using the official SD card formatting tool: https://www.sdcard.org/downloads/formatter/

### Browser-based operation

You can connect to the ESP32 using a wifi-enabled device that runs a browser (mostly tested with Chrome). Find the device's IP address (e.g. by observing the Serial output) and enter this address into the browser's address bar. The UI comes in `simple` and `advanced` mode. Open `advanced`. Play around with the settings. You can tweak it to be fully manual, however, the image data will always be JPEG compressed (sorry).

#### ImJoy/ImageJ.js

When the stream is running, you can send an image to the in-built ImJoy/ImageJ.js plugin. There you can do all kinds of image processing tasks as you know from Fiji. **Note** This will only work if the stream is running. Once you hit the `send to ImJoy` button, the stream will pause. For another image, you have to restart the stream first.

#### GitHub upload

Similar to the ImageJ.js functionality, the ESP32 can trigger a `git push` of the latest frame from the camera stream to a gallery repository available here https://github.com/matchboxscope/Matchboxscope-gallery. The image resolution will be altered to a much smaller value, (320x240 pixels^2) so that the upload won't timeout (unknown reason??). This change in resolution leads to an over exposed image with previously adjusted settings.

The uploaded images get compiled into a JS-based gallery daily, available here: https://matchboxscope.github.io/gallery/matchboxgallery


### Autonomous operation

If a FAT formatted SD micro card is inserted, you can record timelapse image series with the previously entered settings. Two modes are available. One, where the network operatibility is still available, the other when it'S in deep-sleep mode (e.g. under water).

**HINT:** Please format the SD card using the official SD card formatter: https://www.sdcard.org/downloads/formatter/

#### Non-deepsleep timelapse

Adjust the value in the timelapse slider to something between 0-600s. The image gets stored on the SD card.

#### Deep-sleep timelapse

To enter this setting, you have to move the slider for Anglerfishmode all the way to the very right. A link appears that will activate the deep-sleep time lapse feature. It will use the previously set period in the timelapse slider. All settings that have been entered through the GUI will be used for imaging + an exposure series of 1,5,10,50,100,500ms will be acquired. Images get stored on the SD card. To exit the "boot loop", you simply remove the SD card and it will turn back to normal mode,where it tries to connect to the previously set wifi connection.


![](./IMAGES/injectionmold/Result of 2023_07_12-HeLaLongTermIncubator_Good.mpg)


## Imaging Results

*HeLa cells in an incubator while they are dying (sad but true)*
![](IMAGES/matchboxscope/ResultofSDkeptstack.gif)

![](IMAGES/matchboxscope/2023_06_23-HeLa_Timelapse-1.mpg)

## Showcase

![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_1.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_2.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_3.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_4.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_5.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_6.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_7.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_8.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_9.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_10.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_11.jpeg)
![](IMAGES/injectionmold/matchboxscope_injectionmolding_sample_12.jpeg)
