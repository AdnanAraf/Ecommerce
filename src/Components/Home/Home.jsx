import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
