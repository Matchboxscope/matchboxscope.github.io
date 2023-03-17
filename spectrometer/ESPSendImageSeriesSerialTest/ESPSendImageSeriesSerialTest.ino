
#include "images.h"
#define BAUD_RATE 2000000
#include "BluetoothSerial.h"


BluetoothSerial SerialBT;

void setup()
{
  Serial.begin(BAUD_RATE);
  Serial.println("Start the programm");
  SerialBT.begin("ESP32test"); //Bluetooth device name

}

int iindex = 1;
void loop() {
  grabImage(iindex);
  iindex++;
}


void grabImage(int iindex) {
  delay(40);
  //Serial.print("+++++");
  String tmpImage = laodImage(iindex % 10);
  //Serial.write(tmpImage.c_str(), tmpImage.length());
    String a = "page1ok";
  //uint8_t buf[a.length()];
  //memcpy(buf,a.c_str(),a.length());
  //SerialBT.write(buf,a.length());
  SerialBT.println(tmpImage); 
  //SerialBT.write( tmpImage, tmpImage.length());
  //Serial.println("-----");
}


String laodImage(int i) {
  if (i == 1)
    return image_1;
  if (i == 2)
    return image_2;
  if (i == 3)
    return image_3;
  if (i == 4)
    return image_4;
  if (i == 5)
    return image_5;
  if (i == 6)
    return image_6;
  if (i == 7)
    return image_7;
  if (i == 8)
    return image_8;
  if (i == 9)
    return image_9;
  if (i == 0)
    return image_10;

}
