# Matchboxscope (!Outdated Warning!)

:::warning
***UPDATE*** Even though the classic Matchboxscope is still working, we recommend you to have a loot at the updated and more comprehensive documentation under [Matchboxscope Injection Molded Version](../Matchboxscope_IM.md). Thanks!
:::



This device is not much larger than a matchbox (hence its name - surprise..). Besides the ESP32-CAM it only needs 3D printed components, screws, aluminum foil, and a couple of magnets (or optional springs).
Below, we will guide you through the process of building the full device

![](IMAGES/matchboxscope/IMG_20220328_133003.jpg)

The Matchboxscope needs some 5V juice from USB and can work using a power bank. It has wifi capabilities, and it can live stream to whatever device you want :)

![](IMAGES/matchboxscope/Roti.gif)

![](IMAGES/matchboxscope/lice.gif)

## CAD Files

The release files can be found https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_Matchboxscope.zip


## Z Stage

In the Matchboxscope, the Z stage is controlled by magnets and by three screws. The magnets between the middle part and the top part are repelling each other and, in this way, keeping the sample stage in place:

![](IMAGES/matchboxscope/Zstage.gif)

If you are, somehow averse to magnets, you can also use springs. In this case, we suggest using a nut for safety (and not shooting the spring-loaded glass slide in the sky).

![](IMAGES/matchboxscope/spring.jpeg)

## Components

This you will need for your device to work:

![](IMAGES/matchboxscope/render2.png)
![](IMAGES/matchboxscope/render1.png)


### Bill of materials

Part |  Purpose | Source | Price |
:----------------:|:------------:|:----------------:|:------------:
ESP32-CAM (MB) | Min board| Aliexpress | 6€
USB Micro Cable |Connection|Aliexpress| 1€
M3 Screws (Cylindrical head, 20mm, 12mm)|Structural|Hardware store|
Allen key 2.5 |Z focus|Hardware store|
3D printing material (PLA) |Structural|3D printing store|
Aluminum foil or silver spray paint |Structural|Craft store|
Neodymium magnets round 12x2 or 12x3|Structural|Aliexpress|
Springs (for the spring version) |Structural|Hardware store|



## 3D printing files

All 3D-printable files can be found [here](https://github.com/Matchboxscope/Matchboxscope/tree/master/STL/Matchboxscope)

The Matchboxscope is composed of three parts:

The bottom part, a case for the ESP32 board

The middle part, which acts as a spacer between the lens and the camera sensor
(**this should be printed in black**)

The top part (the sample part) holds the glass slide and the illumination periscope.


# Assembly of the microscope

A video of the build can be found here: [here](https://www.youtube.com/watch?v=iw_hoDRlnpg)  

Before starting, please check for updates at the end of this page.

Once you have obtained the parts, the assembly can be done in 5 minutes.

![](IMAGES/matchboxscope/guidev1001.jpeg)

You need: the ESP32 cam, the 3D printed parts, 3 M3x20 or M3x25 screws, 3 M3x16 screws, 12x2 or 12x3 neodymium magnets, superglue, M3 Allen Key, plier, and tweezers.

![](IMAGES/matchboxscope/guidev1002.jpeg)

With a plier and very gently unscrew the lens from the ESP32 camera and, if not connected yet, connect it to the board.

![](IMAGES/matchboxscope/guidev1003.jpeg)

Put the lens on the 3D-printed "middle" part and the board in the 3D-printed "bottom" part. Alling the middle part and the bottom part.

![](IMAGES/matchboxscope/guidev1004.jpeg)


Once aligned, push the middle part to fix the camera on the 3D-printed part. Once the camera is in the 3D-printed middle part, bend the cable to align the two 3D-printed parts.

![](IMAGES/matchboxscope/guidev1005.jpeg)

Screw the two parts using 3 M3x16 (or M3x12) screws, and glue the magnets in position (both with polarity pointing in the same direction)

![](IMAGES/matchboxscope/guidev1006.jpeg)


Glue the other two magnets on the 3D-printed sample part, and remember that the magnet should repel the ones on the middle part.

![](IMAGES/matchboxscope/guidev1007.jpeg)

Screw the M3x20 in position and attach the illumination periscope. If needed, add more magnets to make the repulsion sturdier.

![](IMAGES/matchboxscope/guidev1008.jpeg)

And here you go. Enjoy your new tiny scope. Use an extra magnet to keep your slide stable on the holder.

![](IMAGES/matchboxscope/powerbank.jpg)

## Assembly of the illumination unit

The idea of the illumination unit is to re-use the LED torch that is mounted on the ESP32-CAM and can be controlled through GPIO4. Don't look directly into the LED. As I said, it's bright!

One option is to glue or stick aluminum foil in the "periscope". Another option is to use silver spray paint to paint it (or use any silver paint you want). Both options worked fine:

![](IMAGES/matchboxscope/periscope.jpeg)

Print the little periscope and add aluminum foil inside the little channel, but keep the round holes open. Double-sided sticky tape will help you to mount the aluminum foil. Alternatively, use self-sticky aluminum foil. Tweezers help you in the process of placing the foil.

![](IMAGES/matchboxscope/IMG_20220329_093734.jpg)

![](IMAGES/matchboxscope/IMG_20220329_093902.jpg)

You can also seal the "light channel" with additional aluminum foil. A small piece of diffuse Sticky-tape/scotch tape (3M) on the end of the channel will make the illumination much smoother but is not necessary (actually not visible on the photo).

## Pictures taken with the Matchboxscope

*div=0.01mm*

![](IMAGES/matchboxscope/example1.jpg)

*Rotifer*

![](IMAGES/matchboxscope/example2.jpg)

*Mosquito larvae*

![](IMAGES/matchboxscope/example3.jpg)

![](IMAGES/matchboxscope/example4.jpg)

![](IMAGES/matchboxscope/example5.jpg)

*Rotifers and Tardigrade*

![](IMAGES/matchboxscope/example6.jpg)

And a video recorded from the Matchboxscope is [here](https://www.youtube.com/watch?v=x27QPLMVoFQ)


# Updates

________________________
*update April 2023 - we are testing external (battery-powered) LED. These LEDs are usually used for decorations, can be on for 2 weeks, and are quite cheap. See for example ["LIHAO mini LED"](https://www.amazon.nl/LIHAO-mini-ledlampjes-lantaarns-batterijen-waterdicht/dp/B01FF07XFE).
Using these LEDs we have obtained a bit more contrast than the standard periscope, and we don't heat the ESP32 using the onboard LED. The clear glass can be scratched with some sandpaper to make the light more homogeneous.
The STL file can be downloaded from [the STL folder in the repository](https://github.com/Matchboxscope/Matchboxscope/blob/master/STL/Matchboxscope/Matchboxscope_VCM_v1_Matchboxscope_Lightperiscope_externalLED12mm_v3.stl).


the matchboxscope with the external LED:
![](IMAGES/matchboxscope/extLED.jpg)

Image taken with the periscope:
![](IMAGES/matchboxscope/extLED1.JPG)

Image taken with the external LED:
![](IMAGES/matchboxscope/extLED2.JPG)

________________________
*update Feb 2023 - You can 3D print a spacer for the camera on the board. This spacer will alleviate the cable stress. You can find the file in the STL folder.

![](IMAGES/matchboxscope/guidev1003_b.jpeg)

________________________
*update March 2023 - We have found these M3x30 screw with a flat part. Being in contact with the 3D-Printed top part for the Z focussing, they work better because of less friction.

![](IMAGES/matchboxscope/guidev_update01.jpeg)
