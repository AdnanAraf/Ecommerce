import React, { useEffect, useState } from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import Modal from "../Modal/Modal";

const Gallery = () => {
  const [picture, setpicture] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setpicture(data));
  }, []);
  return (
    <div className="flex justify-between gap-[70px]">
      <div className="">
        <div>
          <div className="relative">
            <img
              className="ml-[50px] rounded-lg mt-[70px]  relative "
              src="https://i.ibb.co/9Hp47KB/group-stuffed-animals-with-one-that-says-bear-front-1340-36127.jpg"
            ></img>
            <div className="absolute top-[10px] left-[80px] text-white ">
              <h1 className="text-[18px]">
                Shop Now <br></br>
                <span className="text-[50px] font-titleFont">60% off!</span>
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-[90px] text-[30px] font-titleFont font-semibold ml-[25px] ">
            Hand Pick Pieces
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3  gap-[50px] mr-[100px]  ">
        {picture.map((item) => (
          <GalleryCard item={item} />
        ))}
      </div>
      <div>
        <Modal />
      </div>
    </div>
  );
};

export default Gallery;
5;
