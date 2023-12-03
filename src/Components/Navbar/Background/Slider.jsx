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
              <div className="relative overflow-hidden mt-[50px]">
                <img
                  className="w-full"
                  src="https://i.ibb.co/42WHfTb/banner-14716c36.jpg"
                ></img>

                <div className="absolute top-0">
                  <h1 className=" text-justify absolute top-[10px] pl-[20px]  lg:top-[100px] lg:pl-[300px] w-[1200px] lg:text-[55px] font-titleFont  font-semibold text-gray-800">
                    Best Collection For <br></br>Home Decoration
                  </h1>
                  <p className="lg:w-[1200px]    lg:pl-[300px] lg:pt-[270px] text-justify text-gray-800 text-[16px] font-titleFont font-medium lg:block hidden ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    esse obcaecati aut assumenda repudiandae voluptatum tempore
                    eveniet quaerat eaque hic libero sapiente. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Ab esse obcaecati
                    aut assumenda repudiandae voluptatum tempore eveniet quaerat
                    eaque hic libero sapiente.
                  </p>
                  <Link to="Shop">
                    <button className="lg:h-[50px] h-[30px] ml-[20px]  lg:ml-[300px] lg:w-[180px]  w-[100px] mt-[60px] lg:mt-[30px] text-white font-titleFont bg-orange-500 rounded-lg">
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
