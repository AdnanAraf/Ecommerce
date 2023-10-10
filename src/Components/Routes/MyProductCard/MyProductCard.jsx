import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyProductCard = ({ item, HandleDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const {
    _id,
    price,
    quantity,
    SellerName,
    Rating,
    Toyname,
    category,
    details,
    email,
    photo,
  } = item;
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="h-[400px] w-[300px] bg-white shadow-lg rounded-lg relative">
        <img className="h-[200px] w-full" src={photo}></img>
        <h1 className="font-titleFont pt-[10px] pl-[10px]">
          Toy'sName: {Toyname}
        </h1>
        <h1 className="font-titleFont pt-[10px] pl-[10px]">
          Name: {SellerName}
        </h1>
        <h1 className="font-titleFont pt-[10px] pl-[10px]">
          Category: {category}
        </h1>
        <div className="flex">
          <div>
            <h1 className="font-titleFont pt-[10px] pl-[10px]">
              Quantity: {quantity}
            </h1>
            <h1 className="font-titleFont pt-[10px] pl-[10px]">
              Price:{price}
            </h1>
          </div>
          <div>
            {isHovered && (
              <div className="absolute right-0   top-[250px] bg-gray-200 h-[80px] w-[50px] bottom-[100px]">
                <Link to={`/update/${_id}`}>
                  <FontAwesomeIcon
                    className="mt-[20px] ml-[20px]"
                    icon={faPenToSquare}
                  />
                </Link>
                <FontAwesomeIcon
                  onClick={() => HandleDelete(_id)}
                  className="mt-[20px] ml-[20px]"
                  icon={faTrash}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyProductCard;
