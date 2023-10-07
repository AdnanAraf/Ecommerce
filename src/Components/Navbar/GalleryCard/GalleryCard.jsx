import React from "react";
import { FaEye } from "react-icons/fa";
import ExtraSection from "../ExtraSection/ExtraSection";

const GalleryCard = ({ item }) => {
  const { image, title, price, rating } = item;
  return (
    <div>
      <div>
        <div className="card w-[290px] h-[480px] bg-base-100 shadow-xl mt-[200px]">
          <figure className="">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl h-[356px] w-[290px]"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-titleFont">Name : {title}</h2>
            <p className="text-[16px] font-titleFont">Price:${price}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-[16px] font-titleFont">Rating:{rating}</p>
              </div>
              <div>
                <FaEye
                  className="h-[20px] w-[20px]"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
