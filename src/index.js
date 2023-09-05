import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Auth from './pages/auth/auth';
import CreatePost from './component/board/CreatePost';
import DeletePost from './component/board/DeletePost';
import EditPost from './component/board/EditPost';
import FetchPosts from './component/board/FetchPosts';
import Home from './component/board/Home';



const router = createBrowserRouter([
  {
    "path": '/',
    "element": <Home />
  },
  {
    // 설정할 url 주소
    path: 'auth',
    // 페이지에 보여줄 파일
    element: <Auth />
  },
  {
    // 설정할 url 주소
    path: 'createPost',
    // 페이지에 보여줄 파일
    element: <CreatePost />
  },
  {
    // 설정할 url 주소
    path: 'deletePost',
    // 페이지에 보여줄 파일
    element: <DeletePost />
  },  
  {
    // 설정할 url 주소
    path: 'editPost',
    // 페이지에 보여줄 파일
    element: <EditPost />
  },
  {
    // 설정할 url 주소
    path: 'fetchPosts',
    // 페이지에 보여줄 파일
    element: <FetchPosts />
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);