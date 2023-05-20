# ESPressoscope (Injection Molded Version of the Matchboxscope)

*A Cup-sized microscope that never sleeps.*

This is the latest version of the base assembly for any ESP32-based microscope.

## Improvements
This device is a work-in-progress instrument. Not everything is perfectly working yet. Bare with us. If you find something sneaky, please feel free to file an issue or start a discussion here: https://github.com/matchboxscope/Matchboxscope

**Known Issues:**
- Hole for led holder larger
- Do we really want threaded inserts?
- Case of ESP32 may be pushing the boot/reset button causing issues while turning on?

**Improvements:**
- removing threaded inserts saves a hot iron, but removes smooth operation while focussing
- one of the insert holes is a little off, does not have enough printing material/support
- make hole round assembly larger in diameter to have moroe support for the threaded inserts?
- diffuser for the led






[10:07, 20/05/2023] Vittorio Saggiamo: especially if for layman, they get overwhelmed by a labyrinthic github
[10:08, 20/05/2023] Vittorio Saggiamo: "That the upper part allows better mobility of the slide" this suggestion make sense
[10:09, 20/05/2023] Vittorio Saggiamo: and if we dont need the LED periscope, we can have the whole upper part for the slide

## Flash the firmware

:::warning
***UPDATE*** We have created a quick video to show every step from connecting the device to displaying the video on screen. Please consider watching the following [**YOUTUBE VIDEO**](https://youtu.be/ji-f1ymRpAs).
:::
![https://youtu.be/ji-f1ymRpAs](https://i3.ytimg.com/vi/ji-f1ymRpAs/maxresdefault.jpg)


### Step-by-step guide

1. Connect the ESP32-CAM board to the USB and press the ***RESET*** (in the rear of the ESP32-CAM board) and ***BOOT*** (or sometimes ***IO0***) button (on the USB-side). Then first release the ***RESET*** and then the ***BOOT*** button. The device will be in `download mode`

In motion (push RST -> CAM board, push Boot/IO0 Serial board, release RST, release Boot)
![](IMAGES/injectionmold/VID_20230519_114908.gif)

2. Go to https://matchboxscope.github.io/firmware/FLASH.html and select the `ESP32 Camera Simple Webcam Server Advanced` firmware
![](IMAGES/injectionmold/matchboxscope_injectionmolding5.jpg)

3. Hit the `Connect` button and select the ESP32-CAM
![](IMAGES/injectionmold/matchboxscope_injectionmolding6.jpg)

4. Select `Install ESP32...`
![](IMAGES/injectionmold/matchboxscope_injectionmolding7.jpg)

5. Hit `Install`
![](IMAGES/injectionmold/matchboxscope_injectionmolding8.jpg)

6. Wait for it...
![](IMAGES/injectionmold/matchboxscope_injectionmolding9.jpg)

7. Open the serial Minitor afterwards and hit the ```RESET```button on the ESP32
![](IMAGES/injectionmold/matchboxscope_injectionmolding10.jpg)

8. The output should look something like this
![](IMAGES/injectionmold/matchboxscope_injectionmolding13.jpg)

9. By default the ESP32 will connect to a WIFI hotspot using the following default:

```
SSID: Blynk
PW: 12345678
```

If this is not available, it will create a stand-alone Access Point (AP) to which you would need to connect to with your cellphone/tablet/PC/laptop... The address to reach the device becomes http://192.168.4.1

You can add your own by setting it in the GUI. The following flow-chart gives more insight :

![](IMAGES/injectionmold/flowchartwifi.png)


The firmware is based on this code: https://github.com/Matchboxscope/matchboxscope-simplecamera/tree/matchboxscope and now heavily modified.


10. finding the ESP in the network may become tricky. You can install the Fing APP (https://play.google.com/store/apps/details?id=com.overlook.android.fing) and scan your local network for its IP. In case you prepared an access point (AP) using Windows, you can spot the IP address in the hotspot  settings.

### Creating an access point / wifi hotspot

You can use the Android AP or Windows hotspot, perhaps also the iPhone thingy to create an access point with the following credentials:
```
SSID: Blynk
PW: 12345678
```
and the ESP32 will automatically connect

The log will look like this:

```
Connecting to Wifi Network 1: [F6:D1:08:4A:51:F0] Blynk
[ 13000][V][WiFiGeneric.cpp:97] set_esp_interface_ip(): Configuring Station static IP: 0.0.0.0, MASK: 0.0.0.0, GW: 0.0.0.0
.[ 13632][V][WiFiGeneric.cpp:355] _arduino_event_cb(): STA Connected: SSID: Blynk, BSSID: f6:d1:08:4a:51:f0, Channel: 1, Auth: WPA2_PSK
[ 13633][D][WiFiGeneric.cpp:931] _eventCallback(): Arduino Event: 4 - STA_CONNECTED
[ 13674][V][WiFiGeneric.cpp:369] _arduino_event_cb(): STA Got New IP:192.168.137.217
[ 13675][D][WiFiGeneric.cpp:931] _eventCallback(): Arduino Event: 7 - STA_GOT_IP
[ 13678][D][WiFiGeneric.cpp:996] _eventCallback(): STA IP: 192.168.137.217, MASK: 255.255.255.0, GW: 192.168.137.1
.Client connection succeeded
IP address: 192.168.137.217
Netmask   : 255.255.255.0
Gateway   : 192.168.137.1
Setting httpURL
Setting up OTA

No OTA password has been set! (insecure)

[ 16024][I][ArduinoOTA.cpp:141] begin(): OTA server at: Matchboxscope.local:3232
Added HTTP service to MDNS server
Time functions disabled
Starting web server on port: '80'
Starting stream server on port: '81'

Camera Ready!
Use 'http://192.168.137.217/' to connect
Stream viewer available at 'http://192.168.137.217:81/view'
Raw stream URL is 'http://192.168.137.217:81/'
Camera debug data is disabled (send 'd' for status dump, or any other char to enable debug)
```


Go to the device's ip address, in this case  http://192.168.137.217/ and open the stream.
### Troubleshoot

#### Not connecting
Possible causes:
- Did you install the driver/is the driver installed (Usually it's preinstalled in Windows/Mac)
- Antivirus software running?
- USB Cable is actually a data-cable not a charging-only cable?

#### Stream stops
- lower the resolution (e.g. VGA)
- reflash the firmware

#### Bootloop
Causes:
- faulty esp32 camera
- error while uploading firmware
- camera broken
Solutions:
- reflash the firmware
- get a new board
- get a new camera module


## Assembly

These are the parts you need to build a Matchboxscope:

![](IMAGES/injectionmold/matchboxscope_injectionmolding2.jpg)

- ESP32-Camera board + USB Serial adapter
- 2x Lid/bottom (printed)
- 2x Base (printed)
- 1x camera holder (printed)
- 1x lamp holder (printed)
- 1x lens holder (printed)
- 1x led lamp
- 3x Springs
- 8x M3x20 Cylindrical Headed Screws (DIN912, 2x M3x6mm, 4x M3x12mm, 3x M3x24mm)
- 6x M3 threaded inserts (4x6mm)
- 1x USB micro cable

:::warning
***WARNING:*** It is advisable to have the USB cable disconnected from the camera board. This way the USB connector won't rip off the PCB and you won't induce any electro static discharges which may ultimatively destroy the board
:::

1. Add the threaded inserts to the base using a hot iron - don't burn yourself! Hint: You can have 3 inserts on the top and three on the bottom. A hot iron with a fine tip is better than one with a flat one. (**HINT:** This mechanism may change back to a non-threaded insert based version for better operatibility)
![](IMAGES/injectionmold/matchboxscope_injectionmolding3.jpg)

2. Repeat this for all 6 slots (or 5 if you only use 2 on the bottom)
![](IMAGES/injectionmold/matchboxscope_injectionmolding1.jpg)

3. Remove the lens from the camera module using pliers
![](IMAGES/injectionmold/matchboxscope_injectionmolding4.jpg)

**HINT/Warning:** Be careful while removing the lens. The flex cable is sensitive to tension. It may be easier to first remove the camera module using the snap-bar mechanism and then later add it again.
![](IMAGES/injectionmold/VID_20230504_104920.gif)

4. Add the lens to the holder and remove the sticky tape (**Note**: This part looks a little different now since the screw has to move closer to the base board); **Hint:** The distance between the camera lens and the sensor determines the magnification, the further out the lens lurkes, the higher the magnification. You can tune it freely. **Hint :** Remove any sticker that may remain on the camera lens.
![](IMAGES/injectionmold/IMG_20230519_122130.jpg)

**HINT:** In Motion:
![](IMAGES/injectionmold/VID_20230504_105826.gif)

5. Fix the lens on the base using M3x6mm screws (**Note**: The screws should not touch the PCB later when everything is fully assembled! Therefore, please use short screws. )
![](IMAGES/injectionmold/matchboxscope_injectionmolding12.jpg)

6. Add the camera holder to the board and fix the camera in place (**Hint**: If the Camera is not holding properly, you could use blutek or double sided sticky tape to fix it temporally. **WARNING:** be careful with the flex-pcb (copper one) since this easily breaks if not handled with care); Make sure the flatband cable is oriented correctly and the camera sensor (round, shingy side) points to the SD card slot as indicated in the image below. Make sure you have a good mechanical connection between the flat-band cable and the snap-bar-like mechanism of the ESP-CAM board. Carefuly pull the connection and see if it won't go off.
![](IMAGES/injectionmold/matchboxscope_injectionmolding14.jpg)

7. Add the ESP32 board to the base so that the camera tube fits into the hole in the base
![](IMAGES/injectionmold/matchboxscope_injectionmolding15.jpg)

8. Close the base with the lid from below using M3x12mm screws (not using too long screws); **HINT:** Make sure the lid(s) are oriented such that the screw holes are pointing outwards as indicated in the image below:
![](IMAGES/injectionmold/matchboxscope_injectionmolding16.jpg)

9. Add the springs to the screws and mount the sample plate using M3x24mm screws;  Add the lamp holder using the M3x12 screw.
![](IMAGES/injectionmold/matchboxscope_injectionmolding17.jpg)

**HINT:** This is a bit tricky. Start with one screw+spring combination, fix it and continue with all others. In motion:
![](IMAGES/injectionmold/VID_20230504_111346.gif)


10. Add the lamp - done!
![](IMAGES/injectionmold/matchboxscope_injectionmolding18.jpg)


## Done

![](IMAGES/injectionmold/matchboxscope_injectionmolding19.jpg)

## Operation

### Find the focus

Turn on the light. Take a piece of paper and first try if you can sense any contrast variation in the camera stream. Try to turn the 3 spring-loaded screws such that the stage z-position becomes coincident with the position of best contrast with the piece of paper. Try to keep the stage parallel to the base.

## Software

### Browser-based operation

You can connect to the ESP32 using a wifi-enabled device that runs a browser (mostly tested with Chrome). Find the device's IP address (e.g. by observing the Serial output) and enter this address into the browser's address bar. The UI comes in `simple` and `advanced` mode. Open `advanced`. Play around with the settings. You can tweak it to be fully manual, however, the image data will always be JPEG compressed (sorry).

#### ImJoy/ImageJ.js

When the stream is running, you can send an image to the in-built ImJoy/ImageJ.js plugin. There you can do all kinds of image processing tasks as you know from Fiji. **Note** This will only work if the stream is running. Once you hit the `send to ImJoy` button, the stream will pause. For another image, you have to restart the stream first.

#### GitHub upload

Similar to the ImageJ.js functionality, the ESP32 can trigger a `git push` of the latest frame from the camera stream to a gallery repository available here https://github.com/matchboxscope/Matchboxscope-gallery. The image resolution will be altered to a much smaller value, (320x240 pixels^2) so that the upload won't timeout (unknown reason??). This change in resolution leads to an over exposed image with previously adjusted settings.

The uploaded images get compiled into a JS-based gallery daily, available here: https://matchboxscope.github.io/gallery/matchboxgallery

### Autonomous operation

If a FAT formated SD micro card is inserted, you can record timelapse image series with the previously entered settings. Two modes are available. One, where the network operatibility is still available, the other when it'S in deep-sleep mode (e.g. under water).

#### Non-deepsleep timelapse

Adjust the value in the timelapse slider to something between 0-600s. The image gets stored on the SD card.

#### Deep-sleep timelapse

To enter this setting, you have to move the slider for Anglerfishmode all the way to the very right. A link appears that will activate the deep-sleep time lapse feature. It will use the previously set period in the timelapse slider. All settings that have been entered through the GUI will be used for imaging + an exposure series of 1,5,10,50,100,500ms will be acquired. Images get stored on the SD card. To exit the "boot loop", you simply remove the SD card and it will turn back to normal mode,where it tries to connect to the previously set wifi connection.




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
