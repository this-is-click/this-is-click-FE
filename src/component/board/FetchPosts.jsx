import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handlePost = async () => {
      try {
        const apiAddress = "http://localhost:8080/api/posts"; 
        const response = await axios.get(apiAddress);
        setPosts(response.data);
      } catch (error) {
        console.error("에러", error);
      }
    };

    handlePost();
  }, []);

  return (
    <div>
      <h1>포스트</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPosts;
