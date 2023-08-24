<script
      type="module"
      src="https://unpkg.com/esp-web-tools@9.0.3/dist/web/install-button.js?module"
></script>

# Matchboxscope/Anglerfish Flashing Tool

User-friendly tool to flash/upload the firmware for the Matchboxscope/Anglerfish device in the browser:

- Install & update firmware
- Connect device to the WEB-USB Serial interface (work in progress)
- Visit the device's hosted web interface (work in progress)
- Access logs and send terminal commands (work in progress)

Pick your ESP32 PCB and flash the software using the browser! No programming or other software required.

**Note:** Ensure you have installed the CH340 driver and set the board into boot mode (press first reset => hold it and then reset at the same time).
<body>
<div class="radios">
      <label>
      <input type="radio" name="type" value="esp32-matchboxscope" checked />
      <img src="IMAGES/static/screenshots/render1.png" alt="ESP32 Generic" />
      </label>
      <label>
      <input type="radio" name="type" value="esp32-cameraserver" checked />
      <img src="IMAGES/https://raw.githubusercontent.com/easytarget/esp32-cam-webserver/master/Docs/logo.svg" alt="ESP32 Generic" />
      </label>
      <label>
      <input type="radio" name="type" value="esp32-espectrometer" checked />
      <img src="IMAGES/https://upload.wikimedia.org/wikipedia/commons/2/25/Spectrum-sRGB.svg" alt="ESP32 Spectrometer" />
      </label>
</div>
<p class="button-row" align="center">
      <esp-web-install-button></esp-web-install-button>
</p>
<div class="hidden info esp32-matchboxscope">
        <h3>ESP32 Camera board for ther matchboxscope</h3>
        <p>
          This is a ESP32 based board for the matchboxscope.
          More information can be found  <a href="https://github.com/Matchboxscope/Matchboxscope/blob/master/Matchboxscope.md"> here.</a>
        </p>
</div>
<div class="hidden info esp32-cameraserver">
        <h3>ESP32 Camera Simple Webcam Server</h3>
        <p>
          This flashes the ESP32 Camera Server to the board.
            <a href="https://github.com/easytarget/esp32-cam-webserver"> here.</a>
        </p>
</div>
<div class="hidden info esp32-espectrometer">
        <h3>ESP32 Camera Simple Webcam Server</h3>
        <p>
          This flashes the ESPectrometer software that hooks up the Device to the Spectrometr Website over USB Serial.
            The javascript installation-free website can be found  <a href="https://matchboxscope.github.io/spectrometer/espectrometer.html"> here.</a>.
            Just connect the board using the connect button and set the line according to the spectrometer.
        </p>
</div>
</body>