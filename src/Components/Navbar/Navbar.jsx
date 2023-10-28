import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Background/Slider";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBars, FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useWish from "../hooks/useWish";
import Shop from "../Products/Shop/Shop";
import Shopcategories from "../Products/Shop/Shopcategories/Shopcategories";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setopen] = useState();
  const [cart] = useCart();
  const [Wish] = useWish();
  console.log(Wish);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleImageClick = (open) => {
    setopen(open);
  };
  return (
    <div className="sticky top-0 z-50 ">
      <div className=" lg:flex  justify-between h-[60px] bg-gray-800 gap-[200px] ">
        <div className=" lg:mt-[10px] mt-[20px] lg:mx-[50px] mx-[30px]">
          <h1 className="lg:text-[30px] font-titleFont font-semibold text-[18px] text-green-300">
            <span className="text-white">Kiddo</span>FunFinds
          </h1>
        </div>
        <h1 className="lg:pt-[20px] text-center     font-semibold text-white">
          Enjoy 10% off everything with code GIFT2023
        </h1>

        <Link to="Shop">
          <button className="bg-white lg:mr-[100px] ml-[250px] h-[30px] w-[120px] rounded-lg lg:mt-[15px] lg:relative absolute mt-[-30px] ">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="">
        <div className="flex justify-between bg-black  h-[80px]  ">
          {/* <div className="dropdown dropdown-bottom dropdown-end lg:hidden  block mr-[10px] mt-[-5px]">
            <label tabIndex={0} className=" m-1">
              <FaBars className="h-[30px] w-[15px] "></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1]   p-2  shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-black overflow-hidden "
                  to="/"
                >
                  Home
                </Link>
              </li>
              <br></br>
              <li>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-black overflow-hidden "
                  to="Shop"
                >
                  Shop
                </Link>
              </li>
              {user?.email ? (
                <div className="ml-[20px] overflow-hidden ">
                  <Link to="payment">
                    <div>
                      <h1 className=" text-center absolute  ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                        {cart?.length}
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>
                  </Link>

                  <Link to="Heart">
                    <div>
                      <h1 className=" text-center absolute mt-[10px] ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                        {Wish?.length}
                      </h1>

                      <FaHeart className="h-[30px] w-[30px] mt-[20px] "></FaHeart>
                    </div>
                  </Link>
        
       
                  <div
                    className="tooltip lg:mt-[10px] mr-[260px] mt-[20px]"
                    data-tip={user?.email}
                  >
                
                    <FaUserCircle
                      className="bg-white"
                      onClick={() => handleImageClick(!open)}
                      style={{ fontSize: "2rem" }}
                    ></FaUserCircle>
                  </div>

                  {open && (
                    <div className="dropdown-menu lg:mt-[60px] lg:ml-[45px] ml-[-26px]  z-10 h-[100px] absolute  w-[200px] bg-slate-50 shadow-black border-black flex flex-col rounded-lg text-center pt-[20px]">
          

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
                <div>
                  <Link
                    className="lg:p-[10px] pt-[40px]  lg:mr-[260px]  text-black font-LogoFont1 text-[20px] hover:text-red-500"
                    to="login"
                  >
                    <button className="h-[40px] mt-[20px]  w-[100px] bg-white ml-[-5px] ] ">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div> */}
          <div className="bg-gray-700 w-[250px] h-[50px] ml-[50px] mt-[30px] rounded-t-lg">
            <Shopcategories className="  font-bodyFont text-[16px] text-white shadow-lg " />
          </div>

          <div className=" lg:block hidden">
            <div className=" pt-[40px] pl-[100px]">
              <div>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-white"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-white"
                  to="Shop"
                >
                  Our Store
                </Link>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-white"
                  to="blog"
                >
                  Blog
                </Link>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-white"
                  to="contract"
                >
                  Contract
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:block hidden mt-[20px] overflow-hidden">
            {user?.email ? (
              <div className="flex gap-[30px] ">
                <Link to="payment">
                  <div>
                    <h1 className=" text-center absolute  ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                      {cart?.length}
                    </h1>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[35px] h-[35px] text-white mt-[10px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </Link>
                <Link to="Heart">
                  <div>
                    <h1 className=" text-center absolute mt-[px] ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                      {Wish?.length}
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[35px] h-[35px] text-white mt-[10px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                </Link>

                <div
                  className="tooltip lg:mt-[10px] mr-[260px] "
                  data-tip={user?.email}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" text-white h-[35px] w-[35px]"
                    onClick={() => handleImageClick(!open)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                {open && (
                  <div className="dropdown-menu mt-[60px] ml-[45px] z-10 h-[100px] absolute  w-[200px] bg-slate-50 shadow-black border-black flex flex-col rounded-lg text-center pt-[20px]">
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
                className="p-[10px] mr-[260px]  text-black font-LogoFont1 text-[20px] hover:text-red-500"
                to="login"
              >
                <button className="h-[40px] w-[100px] bg-white mt-[10px]">
                  {" "}
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <Link
              className="p-[20px] font-bodyFont text-[16px] text-white"
              to="Allproduct"
            >
              All Products
            </Link>
            <Link
              className="p-[20px] font-bodyFont text-[16px] text-white"
              to="Addproduct"
            >
              Add Product
            </Link>
            <Link
              className="p-[20px] font-bodyFont text-[16px] text-white"
              to="mytoys"
            >
              My Toys
            </Link> */
}
{
  /* <Link
              className="p-[20px] font-bodyFont text-[16px] text-white"
              to="/"
            >
              Blog
            </Link> */
}
