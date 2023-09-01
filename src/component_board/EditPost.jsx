import React, { useState } from "react";
import axios from "axios";

function EditPost({ post_Id }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdate = async () => {
    try {
      const apiAddress = `http://localhost:8080/api/posts/${post_Id}`;
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
    <div>
      <h2>글 수정</h2>
      <div>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content: </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>수정</button>
    </div>
  );
}

export default EditPost;
