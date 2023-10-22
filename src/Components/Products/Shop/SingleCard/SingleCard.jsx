import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const SingleCard = () => {
  const carddata = useLoaderData();
  const { _id, name, description, img, rating, price } = carddata;
  const [count, setcount] = useState(1);
  const [, refetch] = useCart();

  const { user } = useContext(AuthContext);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    count < 2 ? setcount(count) : setcount(count - 1);
  };
  const Handlecart = (showproduct) => {
    console.log(showproduct);
    if (user && user.email) {
      const cartItem = {
        MenuItemID: showproduct._id,
        Count: count,
        image: img,
        price: price,
        email: user.email,
      };

      fetch("https://toys-server-adnanaraf.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
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

  return (
    <div className="flex justify-between ">
      <div className="mx-[80px] mt-[60px] w-[500px] h-[500px] z-10 ">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: img,
            },
            largeImage: {
              src: img,
              width: 500,
              height: 1200,
            },
          }}
        />
      </div>
      <div className="mr-[250px] mt-[60px]">
        <h1 className="text-[30px] w-[400px] font-titleFont font-semibold">
          {name}
        </h1>
        <p className="font-titleFont w-[500px] text-[14px] ">{description}</p>
        <div className="flex">
          <p className="text-[20px] mt-[10px]">{rating}</p>
          <Rating
            className="text-orange-600 mt-[10px] ml-[15px] text-[20px] "
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            readonly
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
        </div>
        <p className="text-[25px] font-semibold">${price}</p>
        <div>
          <div className=" mt-[20px]">
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
          <div className=" text-center  mr-[320px] mt-[20px]">
            <button
              onClick={() => Handlecart(carddata)}
              className="h-[40px] w-[140px] bg-black text-white font-titleFont"
            >
              Save Cart
              <ToastContainer />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
