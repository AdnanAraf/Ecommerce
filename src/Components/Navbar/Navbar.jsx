import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Background/Slider";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setopen] = useState();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleImageClick = (open) => {
    setopen(open);
  };
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
          <Link className="p-[20px] font-bodyFont text-[16px]" to="Allproduct">
            All Products
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="Addproduct">
            Add Product
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="mytoys">
            My Toys
          </Link>
          <Link className="p-[20px] font-bodyFont text-[16px]" to="/">
            Blog
          </Link>
        </div>
        {/* <div className="mt-[40px]  mr-[80px]">
          <Link className="p-[20px]" to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
          <Link className="p-[20px]" to="/">
            LogOut
          </Link>
        </div> */}
        {user?.email ? (
          <div className="flex ">
            {/* <img
              onClick={() => handleImageClick(!open)}
              className="h-[50px] w-[50px] rounded-full cursor-pointer mt-[15px]"
              src={user?.auth.currentUser.photoURL}
            ></img> */}
            <div
              className="tooltip lg:mt-[30px] mr-[260px] "
              data-tip={user?.email}
            >
              {/* <button className="btn">Hover me</button> */}
              <FaUserCircle
                onClick={() => handleImageClick(!open)}
                style={{ fontSize: "2rem" }}
              ></FaUserCircle>
            </div>

            {open && (
              <div className="dropdown-menu mt-[80px] ml-[-54px] z-10 h-[100px] absolute  w-[200px] bg-slate-50 shadow-black border-black flex flex-col rounded-lg text-center pt-[20px]">
                {/* Add the items for the dropdown menu here */}
                {/* <button onClick={handleLogOut} className="dropdown-item">
                  Logout
                </button> */}

                <Link
                  className="text-[18px] p-[10px] font-titleFont font-semibold hover:bg-blue-800 hover:text-white text-black"
                  onClick={handleLogOut}
                  to=""
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link
            className="p-[30px] mr-[260px]  text-black font-LogoFont1 text-[20px] hover:text-red-500"
            to="login"
          >
            <button className="btn btn-success"> Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
