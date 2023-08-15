
---

# Retrieving RAW Frames from the ESP32 Camera using Python

## Introduction

The ESP32 camera module is a versatile piece of hardware that offers both wireless and wired connectivity options. While it's common to use it with JPEG compression for ease of streaming, sometimes, we need the highest quality of images, especially for scientific applications. In such scenarios, RAW frames become critical.

This tutorial will guide you through the process of setting up your ESP32 camera to capture and send RAW frames via USB Serial to a Python application running on a PC.

## Prerequisites

### Hardware:
- ESP32 camera module (Tested with Seeed Studio XIAO Sense with the OV2640 camera)
- PC with a USB port

### Software:
- [Platform.io](https://platformio.org/install/cli) or [Arduino IDE](https://www.arduino.cc/en/software)
- Python with packages: numpy, pyserial, and cv2. You can install them using:
  ```bash
  pip install numpy pyserial opencv-python
  ```

## ESP32 Setup

### Step 1: Clone the Repository

Clone the code from the [repository](https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/main/main.ino).

### Step 2: Flashing the Code

#### Using Platform.io:
1. Open the project in Platform.io.
2. Connect the ESP32 camera module to your PC.
3. Select the correct board and port.
4. Build and upload the code.

#### Using Arduino IDE:
1. Open the Arduino IDE and select the correct board and port.
2. Open the `.ino` file from the cloned repository.
3. Compile and upload.

### Step 3: Check the Serial Monitor

Ensure the code is running correctly by opening the Serial Monitor. You should see logs if everything is set up correctly. If there are any errors, they will be displayed here.



### ESP32 Code

- The code can be found here: https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/main/main.ino
- We use Platform.io to compile and flash the code to the Seeed Studio XIAO Sense that uses the OV2640 camera with the ESP32S3 chip
- Alternatively, one can use the Arduino IDE
- Further details on the camera can be found here https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html
- The serial will only send images once requested, for this we have a very basic interface where commands are send over serial:
```
setting expsorue time: t1000\n
setting gain: g1\n
getting frame: \n
restarting: r0\n */
```

- In a previous version we had problems with frame synchronizsation, therefore we manipulated the frame buffer to eventually detect the offset. Therfore the frame-grabber function looks like this:

```cpp
void grabImage()
{
  camera_fb_t *fb = NULL;
  fb = esp_camera_fb_get();

  if (!fb || fb->format != PIXFORMAT_GRAYSCALE) // PIXFORMAT_JPEG)
  {
    Serial.println("Failed to capture image");
    ESP.restart();
  }
  else
  {
    // Modify the first 10 pixels of the buffer to indicate framesync
    // PRoblem: The reference frame will move over time at random places
    // It'S not clear if this is an issue on the client or server side
    // Solution: To align for it we intoduce a known pattern that we can search for
    // in order to align for this on the client side
    // (actually something funky goes on here: We don't even need to align for that on the client side if we introduce these pixels..)
    for(int i = 0; i < 10; i++){
    fb->buf[i] = i % 2;  // Alternates between 0 and 1
    }
    // delay(40);

    // String encoded = base64::encode(fb->buf, fb->len);
    // Serial.write(encoded.c_str(), encoded.length());
    if(0){
      Serial.write(fb->buf, fb->len);
    }
    else{
        // Encode the buffer in base64 and send it
      String encoded = base64::encode((uint8_t*)fb->buf, fb->len);
      Serial.println(encoded);
      //free(encoded); // Remember to free the encoded buffer after using it

    }
    //Serial.println();
  }

  esp_camera_fb_return(fb);
}
```


## Python Setup

### Step 1: Clone the Python Script

Clone the Python implementation from [here](https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/PYTHON/ESP32SerialCamGrayBytebuffer.py).

### Step 2: Running the Python Script

1. Navigate to the directory containing the script.
2. Run the script:
   ```bash
   python ESP32SerialCamGrayBytebuffer.py
   ```

### Step 3: View the Results

If everything is set up correctly, you should see RAW frames being displayed.

## Optimizations & Advanced Topics

To get the most out of this setup, consider the following:

1. **Optimizing the Framerate**: Try adjusting the baud rate or optimizing the code further to achieve higher frame rates.
2. **Image Processing**: Use OpenCV to perform real-time image processing. This can include autofocus, image recognition, or any other computer vision task.
3. **Camera Settings**: Explore the camera settings interface in the ESP32 code to adjust exposure time, gain, or even restart the camera.


### Python code

- The python implementation comes with a minimum number of dependencies (only numpy, and pyserial and cv2 for displaying)
- The code can be found here https://github.com/Matchboxscope/matchboxscope-simplecamera/blob/rawframereadout/PYTHON/ESP32SerialCamGrayBytebuffer.py
- The ImSwitch Implementation can be found here [Manager](https://github.com/openUC2/ImSwitch/blob/cac306aaa2c1f10b771854b07ff509bab5575c53/imswitch/imcontrol/model/managers/detectors/ESP32SerialCamManager.py#L15) and [Interface](https://github.com/openUC2/ImSwitch/blob/cac306aaa2c1f10b771854b07ff509bab5575c53/imswitch/imcontrol/model/interfaces/CameraESP32CamSerial.py#L11)
The basic idea is to request a frame:

```py
        # Command the camera to capture an image
        serialdevice.write(('\n').encode())
        time.sleep(.05)  # Allow some time for the image to be captured
```

then read the information from serial to have a full frame
```py
      time.sleep(.05)  # Allow some time for the image to be captured

        # Calculate the length of the base64 string
        base64_length = calculate_base64_length(320, 240)

        # Read the base64 string from the serial port
        lineBreakLength = 2
        base64_image_string  = serialdevice.read(base64_length+lineBreakLength)
  ```

and then decode the frame into a numpy array

```py
        # Decode the base64 string into a 1D numpy array
        image_bytes = base64.b64decode(base64_image_string)
        image_1d = np.frombuffer(image_bytes, dtype=np.uint8)

        # Reshape the 1D array into a 2D image
        frame = image_1d.reshape(240, 320)
```

That's all the magic.



## Conclusion

This tutorial provided a step-by-step guide to capturing RAW frames from the ESP32 camera and processing them with a Python application. The capability to handle RAW frames can open up a wide range of possibilities, especially for scientific and precision tasks.

For further exploration, check out the [openUC2 project](https://github.com/openUC2/openUC2-Hackathon-BluFocus) which utilizes this setup for hardware autofocusing with the ESP32 camera.

## Feedback & Community

Your feedback and contributions are valuable! Share your results, ask questions, or suggest improvements by creating an issue in the [repository](https://github.com/Matchboxscope/matchboxscope-simplecamera/issues). Join the community and collaborate to push the boundaries of what's possible with the ESP32 camera.

---

There you have it—a full tutorial based on the provided input and suggestions. Modify as you see fit and ensure all links are functioning correctly.
