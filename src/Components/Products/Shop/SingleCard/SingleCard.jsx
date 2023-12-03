import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { FaCheck, FaRegStar, FaStar } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import Review from "../../../Review/Review";
import useReview from "../../../hooks/useReview";
import Messenger from "../../../Messenger/Messenger";
// import Review from "../../../Review/Review";
let cnt = 0;
const SingleCard = () => {
  const carddata = useLoaderData();
  const [reviews, loading] = useReview();
  const [review, setReview] = useState([]);
  // console.log(carddata);
  const [sum, setsum] = useState(0);
  const [color, setcolor] = useState(carddata.color[0]);

  const { _id, name, description, img, rating, price, availability } = carddata;
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
        color: color,
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
            refetch();
            toast("🦄 Product is added on the cart..!", {
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

  const disable = (showproduct) => {
    toast("🦄 Product is out of stock..!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    const product = reviews.filter(
      (item) => item.ReviewitemID === carddata._id
    );
    const sum = product.reduce(
      (accumulator, item) => accumulator + parseFloat(item.star),
      0
    );
    setsum(sum / product.length);

    console.log(product);
    setReview(product);
  }, [loading, reviews, carddata._id]);

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between overflow-hidden">
        <div className="mx-[80px] mt-[60px] w-[500px] h-[500px] z-10  hidden lg:block">
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
        <div>
          <div className="lg:hidden block mt-[30px] ml-[30px] ">
            <img className="h-[200px]" src={img}></img>
          </div>
          <div className="mr-[250px] mt-[60px]">
            <h1 className="lg:text-[30px] text-[20px] w-[350px] lg:w-[500px] lg:ml-[0px] ml-[20px] font-titleFont font-semibold">
              {name}
            </h1>{" "}
            <span className="font-titleFont font-bold text-[18px]">
              Reviews:{review.length}
            </span>
            {/* <span className="font-titleFont font-bold text-[18px]">{sum}</span> */}
            <Rating
              className="text-orange-600 mt-[10px] ml-[15px] text-[20px] "
              placeholderRating={sum}
              emptySymbol={<FaRegStar />}
              readonly
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            <p className="font-titleFont lg:w-[500px] w-[300px] lg:ml-[0px] ml-[20px] lg:mt-[30px] mt-[20px] text-[14px]">
              {description}
            </p>
            <div className="flex lg:ml-[0px]  ml-[100px]">
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
            <p className="text-[25px] font-semibold lg:ml-[0px] ml-[150px]">
              ${price}
            </p>
            <div>
              <div className=" mt-[20px] lg:ml-[0px] ml-[100px]">
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
              <div className=" mt-[20px]">
                {carddata.color.map((colors, index) => {
                  return (
                    <button
                      onClick={() => setcolor(colors)}
                      className={
                        color === colors ? "btnStyle active" : "btnStyle"
                      }
                      key={index}
                      style={{ backgroundColor: colors }}
                    >
                      {color === colors ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="  text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      ) : null}
                    </button>
                  );
                })}
              </div>
              <div className=" text-center  mr-[320px] mt-[20px] lg:ml-[0px] ml-[100px]">
                {availability == "OutofStock" ? (
                  <>
                    <button
                      onClick={() => disable(carddata)}
                      className="h-[40px] w-[140px] bg-black text-white font-titleFont"
                    >
                      Save Cart
                      <ToastContainer />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => Handlecart(carddata)}
                      className="h-[40px] w-[140px] bg-black text-white font-titleFont"
                    >
                      Save Cart
                      <ToastContainer />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Messenger />
        <Review />
      </div>
    </div>
  );
};

export default SingleCard;
