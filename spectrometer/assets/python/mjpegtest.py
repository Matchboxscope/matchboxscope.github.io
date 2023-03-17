import time
import numpy as np
import matplotlib.pyplot as plt
import cv2
from flask import Flask, Response
from flask_cors import CORS

app = Flask(__name__)
from flask_cors import CORS, cross_origin

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# setup camera and resolution
cam = cv2.VideoCapture(0)
cam.set(cv2.CAP_PROP_FRAME_WIDTH, 320)
cam.set(cv2.CAP_PROP_FRAME_HEIGHT, 240)
def gather_img():
    while True:
        time.sleep(0.1)
        _, img = cam.read()
        _, frame = cv2.imencode('.jpg', img)
        yield (b'--frame\r\nContent-Type: image/jpeg\r\n\r\n' + frame.tobytes() + b'\r\n')


@app.route("/mjpeg")
@cross_origin()
def mjpeg():
    response = Response(gather_img(), mimetype='multipart/x-mixed-replace; boundary=frame')
    # Enable Access-Control-Allow-Origin
    #response.headers.add("Access-Control-Allow-Origin", "*")
    return response

app.run(host='127.0.0.1', port=8124, threaded=True)