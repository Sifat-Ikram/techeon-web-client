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
import BrandProducts from './components/privateRoute/BrandProducts';
import ProductDetails from './components/privateRoute/ProductDetails';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import About from './components/others/About';


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
        element: <MyCart></MyCart>,
        loader: (()=> fetch('https://techeon-web-server-41gzrlvkn-md-sifat-ikrams-projects.vercel.app/product'))
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://techeon-web-server-41gzrlvkn-md-sifat-ikrams-projects.vercel.app/product/${params.id}`)
      },
      {
        path: "/:id",
        element: <PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>,
        loader: (()=> fetch('https://techeon-web-server-41gzrlvkn-md-sifat-ikrams-projects.vercel.app/product'))
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: (() => fetch('https://techeon-web-server-41gzrlvkn-md-sifat-ikrams-projects.vercel.app/product'))
      },
      {
        path: '/about',
        element: <About></About>
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
