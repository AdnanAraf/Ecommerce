import React from "react";
import Categories from "../../Categories/Categories";

const ExtraSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 mt-[100px] gap-[60px]">
        <div>
          <div className="relative">
            <img
              className="rounded-lg ml-[40px] h-[700px]"
              src="https://i.ibb.co/q03ZrrC/teddy-bear-two-other-stuffed-animals-are-sitting-together-1340-36035.jpg"
            ></img>

            <div className="absolute top-[30px] left-[70px] ">
              <h1 className="text-[25px] font-titleFont font-semibold">
                Special Offer Now! <br></br>Hurry Up.......
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[600px] relative">
          <img
            className="rounded-lg h-[400px] hover:scale-105 transition duration-500 cursor-pointer "
            src="https://i.ibb.co/4S4RmqQ/cute-plush-toys-arrangement-23-2150312306.jpg"
          ></img>
          <div className="absolute top-[30px] left-[30px]">
            <h1 className="font-titleFont text-[30px] font-semibold">
              <button className="h-[64px] w-[100px] rounded-lg bg-pink-700">
                Kids
              </button>
              Toys
            </h1>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="rounded-lg h-[400px] ml-[100px] w-[330px]"
              src="https://i.ibb.co/VStSs5j/cute-fluffy-monkey-toys-23-2149642394.jpg"
            ></img>
            <div className="absolute top-[30px] left-[120px]">
              <h1 className="font-titleFont text-[25px] text-white font-semibold">
                50% Special Offer!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[-250px] ml-[540px] gap-[20px]">
        <div>
          <img
            className="h-[240px] w-[500px] rounded-lg"
            src="https://i.ibb.co/sgqmhTg/top-view-ping-pong-paddles-with-boxing-gloves-sport-essentials-23-2148523213.jpg"
          ></img>
        </div>
        <div className="">
          <img
            className="h-[240px]  rounded-lg w-[420px]"
            src="https://i.ibb.co/DbkKB1G/Screenshot-5.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
