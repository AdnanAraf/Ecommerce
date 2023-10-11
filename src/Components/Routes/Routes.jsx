import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Login from "../Pages/Login";
import Home from "../Home/Home";
import Home1 from "../Home/Home1";
import Signup from "../Pages/Signup";
import CategoriesDetailsCard from "../Categories/CategoriesDetailsCard/CategoriesDetailsCard";
import AddProducts from "../Products/AddProducts/AddProducts";
import AllProducts from "../Products/AllProducts/AllProducts";
import MyProducts from "../Products/MyProducts";
import UpdateProduct from "../Products/UpdateProduct/UpdateProduct";
import Shop from "../Products/Shop/Shop";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "/details/:_id",
        element: <CategoriesDetailsCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/CategoriesCollection/${params.id}`),
      },
      {
        path: "Addproduct",
        element: <AddProducts />,
      },
      {
        path: "Allproduct",
        element: <AllProducts />,
      },
      {
        path: "mytoys",
        element: <MyProducts />,
      },
      {
        path: "update/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/ToysData/${params.id}`),
      },
      {
        path: "Shop",
        element: <Shop />,
      },
    ],
  },
]);
export default Routes;
