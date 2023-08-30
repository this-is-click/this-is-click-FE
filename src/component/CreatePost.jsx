import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const apiAddress = "http://localhost:8080/api/posts"; 
      const response = await axios.post(apiAddress, {
        title: title,
        content: content,
      });
      console.log("Post Created:", response.data);
    } catch (error) {
      console.error("Error Occured", error);
    }
  };

  useEffect(() => {
    // 원래의 백엔드 연결 테스트 코드
    const testBackendConnection = async () => {
      try {
        const apiAddress = "http://localhost:8080";
        const response = await axios.get(apiAddress);
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error Occured", error);
      }
    };

    testBackendConnection();
  }, []);

  return (
    <div>
      <h1>Create a New Post</h1>
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
      <button onClick={handleSubmit}>Create Post</button>
    </div>
  );
}

export default App;
