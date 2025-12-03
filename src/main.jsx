import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AllProducts from './components/AllProducts/AllProducts.jsx';
import Login from './page/Login.jsx';
import Regester from './page/Regester.jsx';
import AuthProvider from './context/AuthProvider.jsx';
// import { ToastContainer } from 'react-toastify';
import ProductsDetails from './components/productDetails/ProductsDetails.jsx';
import PrivetRout from './context/PrivetRout.jsx';
import AddCar from './components/addCrops/AddCrops.jsx';
import MyPost from './components/posts/MyPost.jsx';
import MyProfile from './components/profile/MyProfile.jsx';
import IntererstForm from './components/productDetails/IntererstForm.jsx';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
    
      {
        index: true,
        Component: Home
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>
      },
      {
        path: "/allProducts",
        Component: AllProducts
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Regester
      },
      {
        path: "/productsDetails/:id",
        loader: ({params}) => fetch(`https://3d-models-server-coral.vercel.app/products/${params.id}`),
        element: <PrivetRout> 
                    <ProductsDetails></ProductsDetails>
                </PrivetRout>
      },
      {
        path: "/addCrops",
        element: <PrivetRout>
                    <AddCar></AddCar>
                 </PrivetRout>
      },
      {
        path: "/myPost",
        element: <PrivetRout>
                    <MyPost></MyPost>
                 </PrivetRout>
      },
      {
        path: "/myProfile",
        element: <PrivetRout>
                   <MyProfile></MyProfile>
                 </PrivetRout>
      },
      {
        path: "/myInterest",
        element: <PrivetRout>
                    <IntererstForm></IntererstForm>
                 </PrivetRout>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
