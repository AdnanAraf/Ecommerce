import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Background/Slider";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBars, FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useWish from "../hooks/useWish";

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
    <div className="sticky top-0 z-50">
      <div className=" lg:flex bg-gray-300 gap-[200px] ">
        <h1 className="lg:px-[60px] lg:p-[20px]    font-semibold">
          Enjoy 10% off everything with code GIFT2023
        </h1>
        <Link to="Shop">
          <button className="bg-white h-[30px] w-[120px] rounded-lg mt-[15px] lg:ml-[0px] ml-[100px] ">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="">
        <div className="flex justify-between bg-blue-600  h-[60px]  ">
          <div className=" lg:mt-[10px] mt-[20px] lg:mx-[80px] mx-[30px]">
            <h1 className="lg:text-[30px] font-titleFont font-semibold text-[18px]">
              <span className="text-white">Kiddo</span>FunFinds
            </h1>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end lg:hidden block mr-[30px] mt-[-5px]">
            <label tabIndex={0} className=" m-1">
              <FaBars className="h-[30px] w-[15px]"></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-black"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="p-[20px] font-bodyFont text-[16px] text-black"
                  to="Shop"
                >
                  Shop
                </Link>
              </li>
              {user?.email ? (
                <div className="ml-[20px] ">
                  <Link to="payment">
                    <div>
                      <h1 className=" text-center absolute  ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                        {cart?.length}
                      </h1>
                      <img
                        className="h-[35px] w-[35px] mt-[10px]"
                        src="https://i.ibb.co/4NsmRQZ/shopping-cart-FILL0-wght400-GRAD0-opsz24.png"
                      ></img>
                    </div>
                  </Link>
                  <div>
                    <h1 className=" text-center absolute mt-[10px] ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                      {Wish?.length}
                    </h1>
                    <FaHeart className="h-[30px] w-[30px] mt-[20px] "></FaHeart>
                  </div>
                  {/* <img
              onClick={() => handleImageClick(!open)}
              className="h-[50px] w-[50px] rounded-full cursor-pointer mt-[15px]"
              src={user?.auth.currentUser.photoURL}
            ></img> */}
                  <div
                    className="tooltip lg:mt-[10px] mr-[260px] mt-[20px]"
                    data-tip={user?.email}
                  >
                    {/* <button className="btn">Hover me</button> */}
                    <FaUserCircle
                      onClick={() => handleImageClick(!open)}
                      style={{ fontSize: "2rem" }}
                    ></FaUserCircle>
                  </div>

                  {open && (
                    <div className="dropdown-menu lg:mt-[60px] lg:ml-[45px] ml-[-26px]  z-10 h-[100px] absolute  w-[200px] bg-slate-50 shadow-black border-black flex flex-col rounded-lg text-center pt-[20px]">
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
                <div>
                  <Link
                    className="p-[10px] mr-[260px]  text-black font-LogoFont1 text-[20px] hover:text-red-500"
                    to="login"
                  >
                    <button className="h-[40px] w-[100px] bg-white">
                      {" "}
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>

          <div className="mt-[20px] lg:block hidden">
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
              Shop
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
          <div className="lg:block hidden">
            {user?.email ? (
              <div className="flex gap-[30px] ">
                <Link to="payment">
                  <div>
                    <h1 className=" text-center absolute  ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                      {cart?.length}
                    </h1>
                    <img
                      className="h-[35px] w-[35px] mt-[10px]"
                      src="https://i.ibb.co/4NsmRQZ/shopping-cart-FILL0-wght400-GRAD0-opsz24.png"
                    ></img>
                  </div>
                </Link>
                <div>
                  <h1 className=" text-center absolute mt-[10px] ml-[20px]    bg-green-300 h-[20px] w-[20px] rounded-full">
                    {Wish?.length}
                  </h1>
                  <FaHeart className="h-[30px] w-[30px] mt-[15px]"></FaHeart>
                </div>
                {/* <img
              onClick={() => handleImageClick(!open)}
              className="h-[50px] w-[50px] rounded-full cursor-pointer mt-[15px]"
              src={user?.auth.currentUser.photoURL}
            ></img> */}
                <div
                  className="tooltip lg:mt-[10px] mr-[260px] "
                  data-tip={user?.email}
                >
                  {/* <button className="btn">Hover me</button> */}
                  <FaUserCircle
                    onClick={() => handleImageClick(!open)}
                    style={{ fontSize: "2rem" }}
                  ></FaUserCircle>
                </div>

                {open && (
                  <div className="dropdown-menu mt-[60px] ml-[45px] z-10 h-[100px] absolute  w-[200px] bg-slate-50 shadow-black border-black flex flex-col rounded-lg text-center pt-[20px]">
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
                className="p-[10px] mr-[260px]  text-black font-LogoFont1 text-[20px] hover:text-red-500"
                to="login"
              >
                <button className="h-[40px] w-[100px] bg-white"> Login</button>
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
