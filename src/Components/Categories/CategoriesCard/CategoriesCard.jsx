import { Rating } from "@smastrom/react-rating";
import React from "react";
import {
  FaEye,
  FaInfoCircle,
  FaRegEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";

const CategoriesCard = ({ item }) => {
  const { title, img, price, rating } = item;
  return (
    <div>
      <div className="h-[400px] w-[300px] bg-white-400 shadow-2xl   mx-auto rounded-lg transition duration-200 transform hover:translate-y-2 fadeIn">
        <img className="h-[300px] w-full rounded-lg" src={img}></img>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Price:${price}
        </h1>
        <div className="flex justify-between">
          <p className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
            Rating:{rating}
          </p>
          <FaEye />
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
