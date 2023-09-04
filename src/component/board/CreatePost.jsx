import React, { useState } from "react";
import axios from "axios";
import ImageUploader from "./ImageUploader";
import "./CreatePost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (image) => {
    setImageFile(image);
  };

  const handleCreatePost = async () => {
    try {
      let imageUrl = null;

      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("image", imageFile);
        const imageResponse = await axios.post(
          "http://localhost:8080/api/image",
          imageFormData
        );
        console.log("이미지 업로드 완료:", imageResponse.data.imageUrl);
        imageUrl = imageResponse.data.imageUrl;
      }

     
      const postData = {
        title: title,
        content: content,
        imageUrl: imageUrl
      };

      const apiAddress = "http://localhost:8080/api/posts";
      const response = await axios.post(apiAddress, postData);
      console.log("글쓰기 완료:", response.data);

    
      setTitle("");
      setContent("");
      setImageFile(null);
    } catch (error) {
      console.error("글쓰기 실패", error);
    }
  };

  return (
    <div className="create-post-container">
      <h1 className="create-post-title">글쓰기</h1>
      <div className="create-post-input">
        <label className="create-post-label">Title: </label>
        <input
          className="create-post-text-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="create-post-input">
        <label className="create-post-label">Content: </label>
        <textarea
          className="create-post-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="ImageUploader-container">
      <ImageUploader onImageUpload={handleImageUpload} />
      </div>
      <div className="create-post-button-container">
      <button className="create-post-button" onClick={handleCreatePost}>
        글쓰기
      </button>
      </div>
    </div>
  );
}


export default CreatePost;

