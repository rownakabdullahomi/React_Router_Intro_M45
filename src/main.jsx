import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <div>Hello React Router</div>
  },
  {
    path: "/about",
    element: <div>I am in the about page</div>,
  },
  {
    path: "/contact",
    element: <div>Call me Now</div>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
