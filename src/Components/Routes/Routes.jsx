import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
]);
export default Routes;
