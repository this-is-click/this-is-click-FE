import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './pages/auth/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>Home</div>
    )
  },
  {
    // 설정할 url 주소
    path: 'auth',
    // 페이지에 보여줄 파일
    element: <Auth />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);