import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import './EditPost.css'; 

function EditPost() {
  const location = useLocation();
  const data = location.state ? location.state.data : null;

  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);

  const handleUpdate = async () => {
    try {
      const apiAddress = `http://localhost:8080/api/posts/${data?.post_Id}`;
      const response = await axios.put(apiAddress, {
        title: title,
        content: content,
      });
      console.log("글 수정 완료:", response.data);
    } catch (error) {
      console.error("글 수정 실패", error);
    }
  };

  return (
    <div className="edit-post-container">
      <h2 className="edit-post-title">글 수정</h2>
      <div className="edit-post-input">
        <label className="edit-post-label">Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="edit-post-text-input"
        />
      </div>
      <div className="edit-post-input">
        <label className="edit-post-label">Content: </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="edit-post-textarea"
        />
      </div>
      <button onClick={handleUpdate} className="edit-post-button">수정</button>
    </div>
  );
}

export default EditPost;
