import React, { useState } from "react";

const Blogcard = ({ item }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(true);
  };

  const handleReadLess = () => {
    setReadMore(false);
  };

  return (
    <div>
      <div className="bg-white shadow-lg w-[630px]">
        <div>
          <img
            className="h-[400px] w-full"
            src="https://i.ibb.co/LRBsHq0/man-enjoy-shopping-online-53876-79445.jpg"
          />

          <div className="pl-[20px] flex justify-between">
            <h1 className="font-titleFont font-bold text-[20px]">
              A Beautiful Sunday Morning
            </h1>
            <h1 className="text-[16px] font-bold pr-[20px]">11/5/2023</h1>
          </div>
        </div>
        <div className="pl-[20px]">
          <h1 className="w-[600px] mt-[10px] font-titleFont">
            Virtual reality (VR) is a simulated experience that employs pose
            tracking and 3D near-eye displays to give the user an immersive feel
            of a virtual world.......
          </h1>
          {item.description.length > 100 && (
            <button
              onClick={readMore ? handleReadLess : handleReadMore}
              className="h-[40px] w-[100px] mx-[200px] bg-black text-white rounded-lg"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
