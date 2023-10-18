import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import ErrorPage from './../src/components/ErrorPage';
import Home from './components/home/Home';
import SignIn from './components/sign/SignIn';


const router = createBrowserRouter([
    {
      path: '/',
      element:<App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        }
      ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
