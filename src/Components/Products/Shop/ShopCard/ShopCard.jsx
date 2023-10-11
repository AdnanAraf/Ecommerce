import React from "react";
import { useState } from "react";
import { FaEye, FaHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopCard = ({ item, showModal }) => {
  const { _id, img, title, price, rating } = item;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative h-[400px] w-[300px] bg-white-400 shadow-2xl   mx-auto rounded-lg transition duration-200 transform hover:translate-y-2 fadeIn">
        <img className="h-[300px] w-full rounded-lg" src={img}></img>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Name:{title}
        </h1>
        <h1 className="text-[18px] font-titleFont ml-[20px] mt-[10px]">
          Price:${price}
        </h1>
        <div className="flex justify-between">
          <div></div>
          {isHovered && (
            <div className="absolute right-0 bg-gray-200 h-[80px] w-[50px] bottom-[100px]">
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

              <FaHeart className="mt-[20px] ml-[20px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
