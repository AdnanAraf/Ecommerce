import React, { useContext } from "react";
import { useState } from "react";
import { FaEye, FaHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useWish from "../../../hooks/useWish";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Horizontal = ({ item }) => {
  const { _id, img, title, price, rating, name, description } = item;
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

      fetch("https://toys-server-teal.vercel.app/carts", {
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
      fetch("https://toys-server-teal.vercel.app/WishCart", {
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
      <div className="relative h-[400px] w-[300px] bg-white shadow-2xl  ml-[50px]  transition duration-200 transform hover:translate-y-2 fadeIn">
        <img className="h-[200px] w-[250px] m-auto " src={img}></img>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          {name.substring(0, 50)}
        </h1>

        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          ${price}
        </h1>
        <h1 className="text-[18px] font-titleFont ml-[20px] ">
          {rating}
          <Rating
            className="text-orange-600  ml-[15px] text-[20px]"
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            readonly
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
        </h1>
        <div className="flex">
          <div></div>
          {isHovered && (
            <div className="absolute right-0 bg-gray-200 h-[80px] w-[50px] bottom-[100px]">
              <FaHeart
                onClick={() => wishList1(item)}
                className="mt-[30px] ml-[20px] cursor-pointer"
              />
              <ToastContainer></ToastContainer>
            </div>
          )}
        </div>
      </div>
      <div>
        <div>
          <h1 className="w-[600px] ml-[20px] font-titleFont">
            {description.substring(0, 1000)}
          </h1>
        </div>
        <div className="flex ml-[20px]">
          <div className="">
            <div className="mt-[50px]  ">
              <div className="flex ">
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
              <div className=" text-center mt-[-30px]  ml-[170px]">
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
        </div>
      </div>
    </div>
  );
};
export default Horizontal;
