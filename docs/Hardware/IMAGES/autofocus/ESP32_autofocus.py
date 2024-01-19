#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May  7 03:22:49 2023

@author: bene
"""

import matplotlib.pyplot as plt
import numpy as np
import csv 
import os
mPath = '/Users/bene/Dropbox/Dokumente/Promotion/PROJECTS/matchboxscope.github.io/docs/Hardware/IMAGES/autofocus/'
mFileName = 'FocusValues.csv'
mStepsizePhysical = 0.3125 # [um] physical stepsize of the lens

# read csv file and extract column 3 and 5 as focus and stepsize
with open(os.path.join(mPath, mFileName), 'r') as csvfile:
        plots = csv.reader(csvfile, delimiter=';')
        focus = []
        stepsize = []
        for row in plots:
                focus.append(float(row[2]))
                stepsize.append(float(row[5])*mStepsizePhysical)
                

# Create the plot
fig, ax = plt.subplots()

# Set the line colors and styles
ax.plot(stepsize, focus, label='Sharpenss', color='red', linestyle='solid')

# Set the title and axis labels
ax.set_title('Sharpness as a function of lens position in z-direction')
ax.set_xlabel('lens position [um]')
ax.set_ylabel('Sharpness [A.U.]')

# Customize the tick marks and axis scales
#ax.set_xticks(np.arange(0, np.max(x)+2, 5))
#ax.set_yticks(np.arange(-1, 1.1, 0.5))
ax.set_yscale('linear')


# Add a legend and gridlines
ax.legend()
ax.grid(True)

# Save the plot as a PDF file for publication
plt.show()
plt.savefig('ESP32Autofocus.png', dpi=300, format='pdf', bbox_inches='tight')
