# Variation of Imaging Contrast in ESPressoscope Illumination

![](./IMAGES/illutable.png)
**Supplementary Figure 2**: Variation of imaging contrast as a function of the illumination unit.

The ESPressoscope platform offers different choices for illumination source wielding a significant influence over the illuminated field of view, contrast, homogeneity, and overall signal quality. To demonstrate this phenomenon, we conducted experiments utilizing a prepared slide from a Gossypium stem, unveiling distinct contrast variations contingent upon the illumination unit employed.

**Simplest Periscope Illumination:**

In its most basic periscope configuration, the illumination source resides in proximity to the camera lens. This arrangement bestows optimal homogeneity and usable field of view, rendering it a desirable choice for particular applications. However, a limitation emerges in terms of available sample space, as the LED flashlight's proximity restricts the area for the sample. This close positioning results in a highly coherent illumination, contributing to improved contrast within the field of view.

**Battery-Driven LED Illumination:**

The utilization of a battery-driven LED introduces an elevated degree of freedom in illumination placement. This dynamic positioning allows for enhanced contrast due to the LED's more coherent illumination characteristics. While delivering improved contrast, this method does not offer trigger capabilities.

**Toslink Illumination:**

The Toslink illumination source offers heightened flexibility, akin to the Ikea USB Lamp. However, it illuminates only a specific subset of the field of view. While adaptable in placement, it sacrifices comprehensive coverage for enhanced flexibility.

**Neopixel LED Matrix Illumination:**

The Neopixel LED matrix provides notable contrast and the potential for advanced digital contrast techniques such as differential phase contrast or Fourier Ptychography Microscopy (FPM). However, its implementation necessitates soldering skills, introducing a technical requirement.

## Implications and Considerations

The choice of illumination source within the ESPressoscope ecosystem bears intricate implications for imaging outcomes. Depending on the desired outcome, the field of view's coverage, coherence of illumination, and practical constraints must be meticulously weighed. Users are encouraged to assess the specific requirements of their microscopy application and select an illumination source aligned with their goals. The ESPressoscope's modularity enables the swift interchange of illumination units, facilitating experimentation and optimization for distinct imaging scenarios.
