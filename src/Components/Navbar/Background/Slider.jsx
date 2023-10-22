import React from "react";

// import required modules

import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div className="relative">
                <img
                  className="w-full"
                  src="https://i.ibb.co/42WHfTb/banner-14716c36.jpg"
                ></img>

                <div className="absolute top-0">
                  <h1 className=" text-justify absolute top-[100px] pl-[300px] w-[1200px] text-[55px] font-titleFont  font-semibold text-gray-800">
                    Best Collection For <br></br>Home Decoration
                  </h1>
                  <p className="w-[1200px] pl-[300px] pt-[270px] text-justify text-gray-800 text-[16px] font-titleFont font-medium">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    esse obcaecati aut assumenda repudiandae voluptatum tempore
                    eveniet quaerat eaque hic libero sapiente. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Ab esse obcaecati
                    aut assumenda repudiandae voluptatum tempore eveniet quaerat
                    eaque hic libero sapiente.
                  </p>
                  <Link to="Shop">
                    <button className="h-[50px] ml-[300px] w-[180px] mt-[30px] text-white font-titleFont bg-orange-500 rounded-lg">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
