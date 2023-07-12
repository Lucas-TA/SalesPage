import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    action: () => import('./routes/home/home.component.jsx'),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
