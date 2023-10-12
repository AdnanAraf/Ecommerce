import React, { useContext } from "react";
import { useState } from "react";
import { FaEye, FaHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useWish from "../../../hooks/useWish";
import { ToastContainer, toast } from "react-toastify";

const ShopCard = ({ item, showModal }) => {
  const { _id, img, title, price, rating } = item;
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useContext(AuthContext);
  const [, refetch] = useWish();
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const wishList = (product) => {
    if (user && user.email) {
      const productitem = {
        MenuItemId: _id,
        img,
        title,
        price,
        email: user?.email,
      };
      fetch("http://localhost:5000/WishCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(productitem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast("🦄 Wish is added..!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        });
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative h-[400px] w-[300px] bg-white-400 shadow-2xl   mx-auto rounded-lg transition duration-200 transform hover:translate-y-2 fadeIn">
        <img className="h-[300px] w-full rounded-lg" src={img}></img>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Name:{title}
        </h1>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Price:${price}
        </h1>
        <div className="flex justify-between">
          <div></div>
          {isHovered && (
            <div className="absolute right-0 bg-gray-200 h-[80px] w-[50px] bottom-[100px]">
              <label
                className="cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <FaRegEye
                  className="ml-[20px] mt-[20px]"
                  onClick={() => showModal(_id)}
                />
              </label>

              <FaHeart
                onClick={() => wishList(item)}
                className="mt-[20px] ml-[20px] cursor-pointer"
              />
              <ToastContainer></ToastContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
