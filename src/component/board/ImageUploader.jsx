import React, { useState } from "react";

function ImageUploader({ onImageUpload }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
      onImageUpload(selectedImage); 
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && <img src={image} alt="Preview" style={{ maxWidth: "200px" }} />}
    </div>
  );
}

export default ImageUploader;


