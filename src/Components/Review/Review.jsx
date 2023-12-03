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
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Review = () => {
  const carddata = useLoaderData();

  const [cart] = useCart();
  const [review, setReview] = useState([]);

  // let cnt = 0;

  const { user } = useContext(AuthContext);
  const { _id, name, description, img, rating, price, availability } = carddata;
  const [reviews, refetch, loading] = useReview();
  // console.log(reviews);
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

      console.log(reviewItem);

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
        <div className="ml-[50px] mt-[10px]">
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
      <div className=" flex">
        <div className="">
          <div>
            <h1></h1>
          </div>

          <Tabs className="mt-[50px]">
            <TabList className="flex justify-between  ">
              <Tab className="text-[20px] cursor-pointer ml-[50px] bg-black w-[750px]   font-titleFont text-white text-center ">
                Review
              </Tab>

              <Tab className="text-[20px] cursor-pointer ml-[10px] bg-black w-[650px]   font-titleFont text-white text-center ">
                Description
              </Tab>
            </TabList>

            <TabPanel className="cursor-pointer">
              {review.map((item) => (
                <div>
                  <div>{item.length}</div>
                  <div className="ml-[50px] mt-[30px] ">
                    <div className="flex gap-[30px]">
                      <div>
                        <FaUser className="h-[30px] w-[30px]" />
                      </div>
                      <div>
                        <h1 className="font-titleFont">{item.email}</h1>

                        <h1 className="w-[350px]" key={item._id}>
                          {item.review}
                        </h1>
                      </div>
                    </div>

                    <div className="mt-[-20px]">
                      <Rating
                        className="text-orange-600  ml-[600px] text-[20px] "
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
            </TabPanel>
            <TabPanel className="">
              <h2 className="ml-[820px] w-[600px] font-titleFont ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                aspernatur in impedit assumenda similique perferendis aliquid
                provident itaque, enim accusamus laudantium voluptatem ut ipsum
                perspiciatis sed molestias quibusdam laboriosam autem rem,
                magni, veniam ea optio. Sapiente voluptates nam molestiae
                excepturi! Voluptates eligendi, eos illum repellendus veritatis
                quidem deleniti suscipit excepturi aliquid debitis quasi ea a.
                Voluptate recusandae natus repellendus. Dolore laborum quod
                tenetur nostrum necessitatibus fugit neque deserunt possimus ea
                commodi, quas odio! Ex illum aliquam eius magni voluptates, fuga
                in ratione doloremque reiciendis consequatur optio, similique
                placeat dolor blanditiis tenetur nesciunt neque debitis error
                modi aut quisquam culpa? Dolores perspiciatis doloribus
                blanditiis praesentium provident tenetur sint, magnam a sequi
                amet? Fuga et minus voluptatum eaque eum quasi iusto accusamus
                aliquam ullam quas, dolor corrupti, accusantium id est? Magni
                voluptatum labore at assumenda commodi ea voluptates esse hic
                pariatur, reprehenderit optio laudantium voluptatibus
                reiciendis? Nostrum enim quia illum ad aliquid aperiam dolorem,
                itaque distinctio laboriosam! Consectetur possimus itaque a,
                fugiat placeat, tempore ipsam molestias dolorum, dolores
                molestiae amet id iste veniam assumenda necessitatibus? Placeat
                magnam iusto voluptates. Iure ea fugiat cupiditate nostrum esse
                praesentium nobis similique fugit necessitatibus amet ipsum
                incidunt ducimus porro reprehenderit quisquam aliquid expedita
                quibusdam id, error modi? In quo impedit tempore doloremque
                voluptate error totam laborum fugit commodi necessitatibus porro
                non libero nostrum, ea enim, laudantium culpa dolorem. Debitis
                ipsam assumenda qui modi ex magni nemo, quam similique
                voluptates, sequi rem. Assumenda corporis in blanditiis illum!
                Ducimus modi amet nostrum rerum assumenda doloremque culpa error
                deserunt. Praesentium perspiciatis blanditiis sint placeat
                voluptates cupiditate magni fugiat in ipsum saepe exercitationem
                quia dicta animi incidunt ad culpa iure, qui illum quasi
                consectetur sit vitae inventore! Cupiditate sunt necessitatibus
                fugiat obcaecati facilis assumenda, accusamus optio nostrum
                dolorum quisquam porro error aperiam voluptates dolor fugit
                dolores quasi. Ipsum, molestiae error.
              </h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Review;
