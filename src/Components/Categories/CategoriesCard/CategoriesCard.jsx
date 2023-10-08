import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import {
  FaEye,
  FaHeart,
  FaInfoCircle,
  FaRegEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";

const CategoriesCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const { title, img, price, rating } = item;
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative h-[400px] w-[300px] bg-white-400 shadow-2xl   mx-auto rounded-lg transition duration-200 transform hover:translate-y-2 fadeIn">
        <img className="h-[300px] w-full rounded-lg" src={img}></img>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Price:${price}
        </h1>
        <div className="flex justify-between">
          <div>
            <p className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
              Rating:{rating}
            </p>
          </div>
          {isHovered && (
            <div className="absolute right-0 bg-gray-200 h-[80px] w-[50px] bottom-[100px]">
              <FaEye className="mt-[20px] ml-[20px]" />
              <FaHeart className="mt-[20px] ml-[20px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
