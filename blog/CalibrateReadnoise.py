import NanoImagingPack as nip
import numpy as np
from scipy.linalg import lstsq
import matplotlib.pyplot as plt

# read fore ground images
fg = []
for i in range(6):
    fg.append(np.mean(plt.imread("blog/readnoise/w%d.jpg" % i), -1))

# read background images
bg = []
for i in range(5):
    bg.append(np.mean(plt.imread("blog/readnoise/bg%d.jpg" % i), -1))

nip.cal_readnoise(fg, bg) #

# lstsq()
# meanvarvar =

# b=nip.readtimeseries(r"C:\NoBackup\Data\FrankGarwe\tritium\neu3\\")
# nip.v5(b*1.0-b[-1])

if True:
    fg = nip.readim(r"C:\Users\pi96doc\Documents\MATLAB\Hamamatsu\10ms.BTF")
    bg = nip.readim(r"C:\Users\pi96doc\Documents\MATLAB\Hamamatsu\10msdark.BTF").squeeze()
    qq=nip.cal_readnoise(fg, bg) # validRange=[80,30000]
