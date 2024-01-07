// src/components/PyScriptComponent.jsx
import React, { useEffect } from 'react';

const PyScriptComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "pyscript/pyscript.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pyscript-container">
      <label htmlFor="file-upload-pillow">
        Upload the image and Reconstruct it as a Hologram
      </label>
      <br />
      <input type="file" id="file-upload-pillow" />
      <div id="output_upload_pillow"></div>
      <py-script src="pyscript/image_upload_pillow.py"></py-script>
    </div>
  );
};

export default PyScriptComponent;
