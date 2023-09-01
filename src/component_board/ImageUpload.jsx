import React, { useState } from "react";
import axios from "axios";

function ImageUpload({ postId }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = async () => {
    if (!image) {
      return;
    }

    try {
      const apiAddress = `http://localhost:8080/api/posts/${postId}/image`;
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post(apiAddress, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("이미지 업로드 완료:", response.data);
    } catch (error) {
      console.error("이미지 업로드 실패", error);
    }
  };

  return (
    <div>
      <h2>이미지 업로드</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>이미지 업로드</button>
    </div>
  );
}

export default ImageUpload;
