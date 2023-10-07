import React from "react";

const ExtraSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 mt-[100px] gap-[60px]">
        <div>
          <img
            className="rounded-lg ml-[40px] h-[700px]"
            src="https://i.ibb.co/q03ZrrC/teddy-bear-two-other-stuffed-animals-are-sitting-together-1340-36035.jpg"
          ></img>
        </div>

        <div className="w-[600px]">
          <img
            className="rounded-lg h-[400px]  "
            src="https://i.ibb.co/4S4RmqQ/cute-plush-toys-arrangement-23-2150312306.jpg"
          ></img>
        </div>

        <div>
          <img
            className="rounded-lg h-[400px] ml-[100px] w-[330px]"
            src="https://i.ibb.co/VStSs5j/cute-fluffy-monkey-toys-23-2149642394.jpg"
          ></img>
        </div>
      </div>
      <div className="flex mt-[-250px] ml-[540px] gap-[20px]">
        <div>
          <img
            className="h-[240px] w-[500px] rounded-lg"
            src="https://i.ibb.co/CJ34Rmy/Screenshot-4.png"
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
