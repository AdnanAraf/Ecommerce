import React, { useContext } from "react";
import { useState } from "react";
import { FaEye, FaHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useWish from "../../../hooks/useWish";
import { ToastContainer, toast } from "react-toastify";
import Rating from "react-rating";

const ShopCard = ({ item, showModal }) => {
  const { _id, img, title, price, rating, name } = item;
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
    if (user && user?.email) {
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
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative ">
          <Link className="" to={`/addcard/${_id}`}>
            <div
              className="h-[350px] mt-[150px] w-[300px] bg-white shadow-2xl m-[20px] lg:m-[0px]  mx-auto  transition duration-200 transform hover:translate-y-2 "
              data-aos="fade-right"
            >
              <img className="h-[200px] w-[200px] m-auto " src={img}></img>
              <h1 className="text-[16px] font-titleFont ml-[20px] mt-[10px] font-semibold">
                {name.substring(0, 50)}
              </h1>
              <Rating
                className="text-orange-600 mt-[10px] ml-[15px] text-[20px]"
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                readonly
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
              <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px] font-semibold">
                ${price}
              </h1>
              <div className="flex justify-between">
                <div></div>
              </div>
            </div>
          </Link>
          {isHovered && (
            <div className="absolute right-0 bg-gray-200 h-[80px] w-[50px] bottom-[100px] lg:block hidden">
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
