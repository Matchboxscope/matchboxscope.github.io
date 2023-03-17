import numpy as np
import cv2
import base64


# Create a black image


# Write some Text

font                   = cv2.FONT_HERSHEY_SIMPLEX
bottomLeftCornerOfText = (10,200)
fontScale              = 5
fontColor              = (255,255,255)
thickness              = 5
lineType               = 2

for i in range(10):
    img = np.zeros((200,200,3), np.uint8)
    cv2.putText(img, str(i),
        bottomLeftCornerOfText,
        font,
        fontScale,
        fontColor,
        thickness,
        lineType)

    #Display the image
    cv2.imshow("img",img)

    #Save image
    cv2.imwrite(str(i)+".jpg", img)

    with open(str(i)+".jpg", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
        print(encoded_string)
