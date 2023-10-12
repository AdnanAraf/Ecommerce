import React, { useContext } from "react";
import { useState } from "react";
import { FaEye, FaHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useWish from "../../../hooks/useWish";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Horizontal = ({ item }) => {
  const { _id, img, title, price, rating } = item;
  const [isHovered, setIsHovered] = useState(false);

  const [, refetch] = useWish();
  const [count, setcount] = useState(1);
  const [, refetch1] = useCart();

  const { user } = useContext(AuthContext);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    count < 2 ? setcount(count) : setcount(count - 1);
  };

  const Handlecart = (showproduct) => {
    if (user && user.email) {
      const cartItem = {
        MenuItemID: showproduct._id,
        Count: count,
        image: showproduct.img,
        price: showproduct.price,
        email: user.email,
      };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch1();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Toys added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const wishList1 = (product) => {
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
            // toast("🦄 Wish is added..!", {
            //   position: "top-center",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "dark",
            // });
          }
        });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex"
    >
      <div className="relative h-[400px] w-[600px] bg-white-400 shadow-2xl  ml-[100px]  transition duration-200 transform hover:translate-y-2 fadeIn">
        <img className="h-full w-full " src={img}></img>
        <div className="flex justify-between">
          <div></div>
          {isHovered && (
            <div className="absolute right-0 bg-gray-200 h-[80px] w-[50px] bottom-[100px]">
              {/* <label
                className="cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <FaRegEye
                  className="ml-[20px] mt-[20px]"
                  onClick={() => showModal(_id)}
                />
              </label> */}

              <FaHeart
                onClick={() => wishList1(item)}
                className="mt-[30px] ml-[20px] cursor-pointer"
              />
              <ToastContainer></ToastContainer>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[50px] ml-[50px]">
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Name:{title}
        </h1>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Price:${price}
        </h1>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Rating:{rating}
        </h1>
      </div>
      <div>
        <div className="ml-[-110px] mt-[180px]">
          <FontAwesomeIcon
            onClick={decrement}
            className="mr-[10px]"
            icon={faMinus}
          />
          <input
            className="border-2 border-gray-700 w-[100px] text-black pl-[40px]"
            type="text"
            placeholder="1"
            value={count}
          ></input>
          <FontAwesomeIcon
            onClick={increment}
            className="ml-[10px]"
            icon={faPlus}
          />
        </div>
        <div className="mt-[30px] text-center ml-[-100px]">
          <button
            onClick={() => Handlecart(item)}
            className="h-[40px] w-[140px] bg-black text-white font-titleFont"
          >
            Save Cart
            <ToastContainer />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Horizontal;
