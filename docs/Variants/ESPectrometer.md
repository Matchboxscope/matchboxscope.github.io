# ESPectrometer

## Introduction

The ESPectrometer is an innovative, cost-effective tool for spectroscopy, ideal for educational purposes. It combines the power of the ESP32-CAM module with simple yet effective components to create a spectrometer. The key elements include a low-cost diffraction grating, a nozzle from a 3D printer to serve as a slit, and a fiber optic cable from an audio amplifier to direct light. This setup is inspired by similar projects, such as the one by Public Lab, making it an accessible choice for those interested in exploring the world of spectroscopy.

## Working Principle

A spectrometer works by splitting light into its constituent wavelengths. In a grating spectrometer, a diffraction grating does this job. When light passes through the grating, it's diffracted at different angles depending on its wavelength. This results in a spectrum, where each color (or wavelength) is spread out spatially. This spread is then captured by the ESP32-CAM's sensor, allowing for analysis of the light's spectral composition.

![](./IMAGES/espectrometer/Spectrometer.png)

### Bill of Materials

| Item | Link | Cost |
| --- | --- | --- |
| Diffraction Grating, 1000l/mm | [Amazon](https://www.amazon.de/Astromedia-Durchlicht-Beugungsgitter-1-000-Linien/dp/B076XWCLCR) | 5€ |
| 0.1mm 3D Printing Nozzle | [Amazon](https://www.amazon.de/Astromedia-Durchlicht-Beugungsgitter-1-000-Linien/dp/B076XWCLCR) | 1€ |
| ESP32 CAM | [BerryBase](https://www.berrybase.de/esp32-cam-development-board-inkl.-ov2640-kameramodul) | 10€ |

## 3D Printing Files

The 3D printing files for the spectrometer components are available at:

[Matchboxscope Releases](https://github.com/Matchboxscope/Matchboxscope/releases/download/ESPMicroscopeCollectionv2/CAD_ESPECTROMETER.zip)

Here's a model in Autodesk Inventor:

![](IMAGES/espectrometer/Spectroscope_v0.png)

## Assembly of the Spectrometer

### Parts and Initial Setup

1. **Parts Overview**:

    ![](IMAGES/espectrometer/IMG_20230305_093523.jpg)

2. **Attaching the Camera Spacer**:

    Attach the camera spacer to the ESP32 board.

    ![](IMAGES/espectrometer/IMG_20230305_093612.jpg)

3. **Camera Installation**:

    Place the camera into the base.

    ![](IMAGES/espectrometer/IMG_20230305_093624.jpg)

4. **Assembling the Top Layer**:

    Attach the top layer to the baseplate, ensuring the camera is visible through the hole.

    ![](IMAGES/espectrometer/IMG_20230305_093717.jpg)

5. **Adding the Grating**:

    Install the diffraction grating onto the top layer, making sure it is correctly oriented.

    ![](IMAGES/espectrometer/IMG_20230305_093938.jpg)

6. **Slit Layer Installation**:

    Slide the slit layer (3D printed nozzle) over the grating.

    ![](IMAGES/espectrometer/IMG_20230305_093746.jpg)

7. **Optional Fiber Optic Setup**:

    For directional independence, attach the fiber optic cable.

    ![](IMAGES/espectrometer/IMG_20230305_112823.jpg)

    Then add the adapter and fiber.

    ![](IMAGES/espectrometer/IMG_20230305_112935.jpg)

8. **Final Assembly**:

    With all components in place, the spectrometer assembly is complete.

    ![](IMAGES/espectrometer/IMG_20230305_114140.jpg)

## Software

- **Firmware Installation**:

    Flash the firmware on the ESP32-CAM (not suitable for XIAO) from [Matchboxscope Firmware](https://matchboxscope.github.io/firmware/FLASH.html).

- **Web Interface**:

    Access the ESPectrometer interface through Chrome at [Matchboxscope Spectrometer](https://matchboxscope.github.io/blob/main/static/spectrometer/espectrometer.html). The camera stream should appear on the left.

- **Using the Spectrometer**:

    Move the lineplot section to where you see the "rainbow". This lineplot represents the spectrum.

    ![](IMAGES/espectrometer/espectrometer_2.png)

- **Calibration**:

    Calibrate the spectrometer using a known light source, such as a halogen lamp.

- **Visualizing Different Light Sources**:

    Compare the spectra of different light sources,

 such as LED vs. Laser, and observe how the camera image changes.

    ![](IMAGES/espectrometer/espectrometer_5.gif)

This tutorial provides a comprehensive guide to building and operating your own ESPectrometer, a fantastic tool for educational and hobbyist applications in spectroscopy.
