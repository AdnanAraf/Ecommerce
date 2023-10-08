import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Background/Slider";

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-300 flex">
        <h1 className="px-[60px] p-[20px] font-semibold">
          Enjoy 10% off everything with code GIFT2023
        </h1>
        <button className="bg-white h-[30px] w-[120px] rounded-lg mt-[15px] ">
          Shop Now
        </button>
      </div>
      <div className="flex gap-[50px] justify-between container ">
        <div className=" mt-[30px] mx-[80px]">
          <h1 className="text-[30px] font-titleFont font-semibold">
            <span className="text-blue-500">Kiddo</span>FunFinds
          </h1>
        </div>
        <div className="mt-[40px] ">
          <Link className="p-[20px] font-bodyFont text-[16px]" to="/">
            Home
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="/">
            Shop
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="/">
            All Products
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="/">
            Add Product
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="/">
            My Toys
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="/">
            Blog
          </Link>
        </div>
        <div className="mt-[40px]  mr-[80px]">
          <Link className="p-[20px]" to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
          <Link className="p-[20px]" to="/">
            LogOut
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
