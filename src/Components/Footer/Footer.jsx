import {
  faFacebook,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-black mt-[120px] lg:h-[400px] h-[700px]   w-full relative overflow-hidden">
        <div className="absolute top-[50px] left-[50px]">
          <div className="lg:flex gap-[200px]">
            <div>
              <h1 className="font-titleFont text-[30px] font-semibold text-white">
                KiddoFunFinds
              </h1>
              <p className="font-titleFont lg:w-[400px] mt-[20px] text-[16px] leading-[30px] text-white">
                Welcome To our Shop, We sell attractive toys for children and
                offer a vast selection of toys, games ans other things to the
                latest trends. Our mission is to help people have an impact with
                in the community they are part of.
              </p>

              <div className="flex gap-[20px] mt-[20px]">
                <div>
                  <FontAwesomeIcon
                    className=" facebook  text-[#3b5998] h-[40px] w-[40px] "
                    icon={faFacebook}
                  />
                </div>
                <div>
                  <Link to="https://www.linkedin.com/in/adnan-araf-554483202/">
                    {" "}
                    <FontAwesomeIcon
                      className="linkedin text-[#0072b1] h-[40px] w-[40px]"
                      icon={faLinkedin}
                    />
                  </Link>
                </div>

                <div>
                  <Link to="https://twitter.com/AdnanAraf3">
                    <FontAwesomeIcon
                      className=" twitter text-[#1DA1F2] h-[40px] w-[40px]"
                      icon={faTwitter}
                    />
                  </Link>
                </div>
                <div>
                  <FontAwesomeIcon
                    className=" youtube text-red-800 h-[40px] w-[40px]"
                    icon={faYoutube}
                  />
                </div>
              </div>
            </div>
            <div className="leading-[30px] ">
              <h1 className="text-white font-titleFont text-[30px] font-semibold lg:mt-[] mt-[5px]">
                Contact info{" "}
              </h1>
              <p className="lg:text-[16px] text-white font-titleFont mt-[5px]">
                +73634982739{" "}
              </p>
              <p className="lg:text-[16px] text-white font-titleFont">
                arafadnan10@gmail.com
              </p>
              <p className="lg:text-[16px] text-white font-titleFont">
                143 Williamson Plaza,MT 09514
              </p>
            </div>
            <div>
              <h1 className="lg:text-[30px] text-[24px] font-titleFont font-semibold text-white">
                Information
              </h1>
              <p className="lg:text-[16px] text-white font-titleFont">
                → About babydo{" "}
              </p>
              <p className="lg:text-[16px] text-white font-titleFont">
                → Career{" "}
              </p>
              <p className="lg:text-[16px] text-white font-titleFont">
                → Delivery Time{" "}
              </p>
              <p className="lg:text-[16px] text-white font-titleFont">
                → Help dask
              </p>
              <p className="lg:text-[16px] text-white font-titleFont ">
                {" "}
                → Tarms & Condition
              </p>
            </div>
          </div>
          <div>
            <h1 className="lg:text-[25px] text-[18px] font-semibold text-white lg:text-center font-titleFont">
              Copyright © 2023 - All right reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
