import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Login from "../Pages/Login";
import Home from "../Home/Home";
import Home1 from "../Home/Home1";
import Signup from "../Pages/Signup";
// import CategoriesDetailsCard from "../Categories/CategoriesDetailsCard/CategoriesDetailsCard";

import UpdateProduct from "../Products/UpdateProduct/UpdateProduct";
import Shop from "../Products/Shop/Shop";
import Payment from "../Payment/Payment";
import SingleCard from "../Products/Shop/SingleCard/SingleCard";
import UpdateCount from "../Products/UpdateCount/UpdateCount";
// import FeatureProductCard from "../FeaturedProduct/featureProductCard";
import UpdateCountCard from "../Products/UpdateCount/UpdateCountCard/UpdateCountCard";
import WishListCard from "../WishList/WishListCard";
import FeatureProductCard from "../FeaturedProduct/FeatureProductCard";
import PrivateRoute from "../Private/PrivateRoute";

import Blogcard from "../Blog/Blogcard";
import Contract from "../Contract/Contract";

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
        path: "contract",
        element: <Contract />,
      },
      // {
      //   path: "/details/:_id",
      //   element: (
      //     <PrivateRoute>
      //       <CategoriesDetailsCard />
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://toys-server-teal.vercel.app/CategoriesCollection/${params.id}`
      //     ),
      // },

      {
        path: "update/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`https://toys-server-teal.vercel.app/ToysData/${params.id}`),
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "Heart",
        element: <WishListCard />,
      },
      {
        path: "addcard/:id",
        element: (
          <PrivateRoute>
            <SingleCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-server-teal.vercel.app/AllProduct/${params.id}`),
      },
      {
        path: "updateCount/:id",
        element: (
          <PrivateRoute>
            <UpdateCountCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-server-teal.vercel.app/carts/${params.id}`),
      },
      {
        path: "detailscart/:id",
        element: (
          <PrivateRoute>
            <FeatureProductCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-teal.vercel.app/FeatureProduct/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blogcard />,
      },
    ],
  },
]);
export default Routes;
