import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import List from "../../pages/home/List";
import "../../pages/home/List.css"
import "./Home.css"

function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [dummyPost, setDummyPost] = useState([
    {
      post_id: 1,
      title: '글제목1',
      content: '내용1',
      imageUrl: 'https://blog.kakaocdn.net/dn/nIxZe/btq8aZUDa8c/0pZCTurE0TUPFu9Dq5u8K0/img.jpg'
    },
    {
      post_id: 2,
      title: '글제목2',
      content: '내용2',
      imageUrl: 'https://blog.kakaocdn.net/dn/nIxZe/btq8aZUDa8c/0pZCTurE0TUPFu9Dq5u8K0/img.jpg'
    },
    {
      post_id: 3,
      title: '글제목3',
      content: '내용3',
      imageUrl: 'https://blog.kakaocdn.net/dn/nIxZe/btq8aZUDa8c/0pZCTurE0TUPFu9Dq5u8K0/img.jpg'
        
    }
  ]);

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
    <div className="app">
      <div><Link className="createBtn button" to="/createPost">Create Post</Link></div>
      <List data={dummyPost} setData={setDummyPost} />
    </div>
  );
}


export default FetchPosts;
