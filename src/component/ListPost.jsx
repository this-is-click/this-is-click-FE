import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const apiAddress = "http://localhost:8080/api/posts"; 
        const response = await axios.get(apiAddress);
        setPosts(response.data);
      } catch (error) {
        console.error("Error Occurred", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
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

export default App;
