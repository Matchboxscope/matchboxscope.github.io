#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on  Sept 7 03:22:49 2023

@author: bene
"""

#%%
import matplotlib.pyplot as plt
import numpy as np

# load image
mImage = plt.imread('espectrometer_2.png')

#%%
mImageMono = np.mean(mImage, -1)
plt.imshow(mImageMono, cmap='gray')

mLineplot2D = mImageMono[:,1100:1200]
plt.imshow(mLineplot2D, cmap='gray')

mLineplot1D = np.mean(mLineplot2D, -1)

plt.figure()
plt.plot(mLineplot1D)

mLineplot1D1stOrder = mLineplot1D[1000:]
plt.figure()
plt.plot(mLineplot1D1stOrder)

#%%

x = 0.7*np.linspace(1,mLineplot1D1stOrder.shape[0], mLineplot1D1stOrder.shape[0])

# Create the plot
fig, ax = plt.subplots()

# Set the line colors and styles
ax.plot(mLineplot1D1stOrder, label='1st Order Lineplot (mean)', color='red', linestyle='solid')

# Set the title and axis labels
ax.set_title('ESPectrometer lineplot')
ax.set_xlabel('pixelnumbers ')
ax.set_ylabel('Mean Intensity [A.U.]')

# Customize the tick marks and axis scales
#ax.set_xticks(np.arange(0, np.max(x)+2, 5))
#ax.set_yticks(np.arange(-1, 1.1, 0.5))
ax.set_yscale('linear')


# Add a legend and gridlines
ax.legend()
ax.grid(True)

# Save the plot as a PDF file for publication
plt.savefig('ESPectrometer_lineplot.png', dpi=300, format='pdf', bbox_inches='tight')

# %%
