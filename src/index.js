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
    path: 'auth',
    element: <Auth />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);