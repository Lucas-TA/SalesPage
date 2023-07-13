import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet,} from 'react-router-dom'
import Home from './routes/Home/home.component.jsx';
import NavigationBar from './routes/Navigation/navigation-bar.component.jsx';
import './index.scss'

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
