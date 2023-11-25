#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jun 22 22:00:20 2023

@author: bene
"""
import os
import os
import tifffile as tiff
import numpy as np
import matplotlib.pyplot as plt
import NanoImagingPack as nip

def reconstruct_inline_hologram(hologram, wavelength, ps, distance):

# Inverse space
     Nx = hologram.shape[1]
     Ny = hologram.shape[0]
     fx = np.linspace(-(Nx-1)/2*(1/(Nx*ps)), (Nx-1)/2*(1/(ps*Nx)), Nx)
     fy = np.linspace(-(Ny-1)/2*(1/(ps*Ny)), (Ny-1)/2*(1/(ps*Ny)), Ny)
     Fx, Fy = np.meshgrid(fx, fy)
     
     kernel = np.exp(1j*(2 * np.pi / wavelength) * distance) * np.exp(1j * np.pi * wavelength * distance * (Fx**2 + Fy**2))

     # Compute FFT centered about 0
     E0fft = np.fft.fftshift(np.fft.fft2(hologram)) 
     
     # Multiply spectrum with fresnel phase-factor
     G = kernel*E0fft
     Ef = np.fft.ifft2(np.fft.ifftshift(G))
     return Ef


#imgHolo = plt.imread('/Users/bene/Downloads/ecoli.jpeg')
# get current working directory of this script

currentFileFolder = os.path.dirname(os.path.abspath(__file__))
fileName = '2023_11_14-Holo_Laser_USAF_2.jpg'
imgHolo = plt.imread(os.path.join(currentFileFolder, fileName))
imgHolo = imgHolo/nip.gaussf(imgHolo, 25)

lambda0 = 650e-9


for iz in np.linspace(1,100,50):
     print(iz)
     img=reconstruct_inline_hologram(imgHolo[:,:,2], wavelength=lambda0, ps=5e-6 , distance=iz*1e-3)
     if 0:
          plt.imshow(np.abs(img), cmap='gray'), plt.title("dz"+str(iz*1e-3))
          plt.savefig("ecoliDefocusEsp32"+str(iz)+".png")
          # plt.show()
     else:
          tiff.imwrite(fileName.split('jpg')[0]+"tif", np.abs(img), append=True)