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

const Footer = () => {
  return (
    <div>
      <div className="bg-black mt-[100px] h-[400px] w-full relative">
        <div className="absolute top-[50px] left-[50px]">
          <div className="flex gap-[200px]">
            <div>
              <h1 className="font-titleFont text-[30px] font-semibold text-white">
                KiddoFunFinds
              </h1>
              <p className="font-titleFont w-[400px] mt-[20px] text-[16px] leading-[30px] text-white">
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
                  <FontAwesomeIcon
                    className="linkedin text-[#0072b1] h-[40px] w-[40px]"
                    icon={faLinkedin}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    className=" twitter text-[#1DA1F2] h-[40px] w-[40px]"
                    icon={faTwitter}
                  />
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
              <h1 className="text-white font-titleFont text-[30px] font-semibold ">
                Contact info{" "}
              </h1>
              <p className="text-[16px] text-white font-titleFont mt-[20px]">
                +73634982739{" "}
              </p>
              <p className="text-[16px] text-white font-titleFont">
                arafadnan10@gmail.com
              </p>
              <p className="text-[16px] text-white font-titleFont">
                143 Williamson Plaza,MT 09514
              </p>
            </div>
            <div>
              <h1 className="text-[30px] font-titleFont font-semibold text-white">
                Information
              </h1>
              <p className="text-[16px] text-white font-titleFont">
                → About babydo{" "}
              </p>
              <p className="text-[16px] text-white font-titleFont">→ Career </p>
              <p className="text-[16px] text-white font-titleFont">
                → Delivery Time{" "}
              </p>
              <p className="text-[16px] text-white font-titleFont">
                → Help dask
              </p>
              <p className="text-[16px] text-white font-titleFont">
                {" "}
                → Tarms & Condition
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[25px] text-white text-center font-titleFont">
              Copyright © 2023 - All right reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
