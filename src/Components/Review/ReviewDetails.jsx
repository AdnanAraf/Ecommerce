import React from "react";
import useReview from "../hooks/useReview";

const ReviewDetails = () => {
  const [reviews] = useReview();
  console.log(reviews.length);
  return <div></div>;
};

export default ReviewDetails;
