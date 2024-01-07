from js import document, console, Uint8Array, window, File
from pyodide import create_proxy
import asyncio
import io
import numpy as np
from PIL import Image

def rgb2gray(rgb):
    return np.dot(rgb[...,:3], [0.2989, 0.5870, 0.1140])

def reconstruct_inline_hologram(hologram, wavelength, ps, distance):
    # Inverse space
    console.log("Reconstructing inline hologram...")
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

    console.log("Done!")
    return np.abs(Ef)


async def _upload_change_and_show(e):
    #Get the first file from upload
    console.log("Uploading file...")
    file_list = e.target.files
    first_item = file_list.item(0)

    #Get the data from the files arrayBuffer as an array of unsigned bytes
    array_buf = Uint8Array.new(await first_item.arrayBuffer())

    #BytesIO wants a bytes-like object, so convert to bytearray first
    bytes_list = bytearray(array_buf)
    my_bytes = io.BytesIO(bytes_list) 

    #Create PIL image from np array
    my_image = Image.open(my_bytes)

    #Log some of the image data for testing
    console.log(f"{my_image.format= } {my_image.width= } {my_image.height= }")
    console.log(f"{my_image.mode= } {my_image.size= }")
    
    # convert pillow to numpy array
    my_image = np.array(my_image)
    my_image_recon=reconstruct_inline_hologram(my_image[:,:,2], wavelength=450e-9, ps=5e-6 , distance=.007)

    # convert numpy array to pillow JPEG
    my_image_recon = Image.fromarray(my_image_recon)
    my_image_recon = my_image_recon.convert("L")
    console.log(f"{my_image_recon.format= } {my_image_recon.width= } {my_image_recon.height= }")
    #Convert Pillow object array back into File type that createObjectURL will take
    my_stream = io.BytesIO()
    my_image_recon.save(my_stream, format="PNG")

    #Create a JS File object with our data and the proper mime type
    image_file = File.new([Uint8Array.new(my_stream.getvalue())], "new_image_file.png", {type: "image/png"})

    #Create new tag and insert into page
    new_image = document.createElement('img')
    new_image.src = window.URL.createObjectURL(image_file)
    document.getElementById("output_upload_pillow").appendChild(new_image)

# Run image processing code above whenever file is uploaded    
upload_file = create_proxy(_upload_change_and_show)
document.getElementById("file-upload-pillow").addEventListener("change", upload_file)