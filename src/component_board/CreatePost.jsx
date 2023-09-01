import React, { useState, useEffect } from "react";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  
  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const apiAddress = "http://localhost:8080/api/posts"; 
        const response = await axios.post(apiAddress, {
          title: title,
          content: content,
        });
        console.log("글쓰기 완료:", response.data);
      } catch (error) {
        console.error("글쓰기 실패", error);
      }
    };
  

    handleSubmit();
  }, []);

  return (
    <div>
      <h1>글쓰기</h1>
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
      <button onClick={handleSubmit}>글쓰기</button>
    </div>
  );
}

export default CreatePost;
