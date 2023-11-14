import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import useCart from "../hooks/useCart";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaUser } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
// import Rating from "react-rating";

import { render } from "react-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReviewDetails from "./ReviewDetails";
import useReview from "../hooks/useReview";

const Review = () => {
  const carddata = useLoaderData();
  // const { _id } = carddata;
  // // console.log(carddata._id);
  const [review, setReview] = useState([]);

  let cnt = 0;

  const { user } = useContext(AuthContext);
  const { _id, name, description, img, rating, price, availability } = carddata;
  const [reviews, refetch, loading] = useReview();
  console.log(reviews);
  const ratingChanged = (newRating) => {
    setstar(newRating);
  };
  // State to store the value of the textarea
  const [reviewText, setReviewText] = useState("");
  const [star, setstar] = useState("");

  const handleInputChange = (event) => {
    // Update the state with the content of the textarea
    setReviewText(event.target.value);
  };

  const handleClick = () => {
    console.log(star);
    // Access the content of the textarea through the state
    console.log(reviewText);
    if (user && user.email) {
      const reviewItem = {
        ReviewitemID: _id,
        email: user.email,
        review: reviewText,
        star: star,
      };

      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(reviewItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            console.log("araf");
            toast("🦄 Thanks for giving your feedback....", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            // alert("Data Geche");
          }
        });
    }
  };
  useEffect(() => {
    const product = reviews.filter(
      (item) => item.ReviewitemID === carddata._id
    );
    setReview(product);
  }, [loading, reviews, carddata._id]);

  return (
    <div>
      <div>
        <div className="ml-[50px] mt-[300px]">
          <div>
            <h1 className="text-[20px] font-titleFont">
              Please Give Your Feedback
            </h1>
          </div>
          <div className="flex gap-[100px] mt-[50px]">
            <div>
              <h1 className="mt-[10px] font-titleFont font-bold text-[18px] ">
                Review
              </h1>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>

            <div>
              <div>
                <h1 className="font-titleFont">Comments:</h1>
              </div>
              <label htmlFor="w3review"></label>
              {/* Use value and onChange to manage the state of the textarea */}
              <textarea
                id="w3review"
                name="text"
                rows="4"
                cols="50"
                value={reviewText}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-success ml-[250px]" onClick={handleClick}>
          Thank You
          <ToastContainer />
        </button>
      </div>
      <div className="">
        <div className="bg-black w-[50%] mt-[100px] mx-[50px]">
          <h1 className="text-[20px] font-titleFont text-white text-center">
            Review
          </h1>
        </div>
        <div>
          {review.map((item) => (
            <div>
              <div>{item.length}</div>
              <div className="ml-[50px] mt-[30px] flex gap-[400px]">
                <div className="flex gap-[30px]">
                  <div>
                    <FaUser className="h-[30px] w-[30px]" />
                  </div>
                  <div>
                    <h1 className="font-titleFont">{item.email}</h1>

                    <h1 className="w-[150px]" key={item._id}>
                      {item.review}
                    </h1>
                  </div>
                </div>
                <div>
                  <Rating
                    className="text-orange-600 mt-[10px] ml-[15px] text-[20px] "
                    placeholderRating={item.star}
                    emptySymbol={<FaRegStar />}
                    readonly
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <ReviewDetails />
      </div> */}
    </div>
  );
};

export default Review;
