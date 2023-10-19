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
import AuthProvider from './components/providers/AuthProvider';
import SignUp from './components/sign/SignUp';
import MyCart from './components/privateRoute/MyCart';
import AddProduct from './components/privateRoute/AddProduct';
import UpdateProduct from './components/privateRoute/UpdateProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: (() => fetch('/brands.json'))
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/updateProduct',
        element: <UpdateProduct></UpdateProduct>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
