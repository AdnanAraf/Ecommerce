import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Gallery from "../Gallery/Gallery";

const Slider = () => {
  const imgSrc = [
    "https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=1060&t=st=1688345830~exp=1688346430~hmac=c849651665ae22fdc66ac760fda599350c617eccf74774d8f71da0453892396b",
    "https://img.freepik.com/free-photo/easter-car-with-white-egg-pink-ribbon_23-2149301315.jpg?w=1060&t=st=1688360476~exp=1688361076~hmac=bf5d678ba655b717053411cfefd0fbca7aaf537befb9ee9c8d42946b7c94eda7",
    "https://img.freepik.com/free-photo/warm-blankets-plush-toy_23-2147698733.jpg?w=1060&t=st=1688345980~exp=1688346580~hmac=1cf89df5880d131545ff6ae73e4f291a1f6c4b31d2b56877aa29bb8d920ca1bb",
  ];
  return (
    <div>
      <div className="flex gap-[20px]">
        <div>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="mt-[10px] h-[500px] rounded-lg"
                  src={imgSrc[0]}
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="mt-[10px] h-[500px] rounded-lg "
                  src={imgSrc[1]}
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="mt-[10px] h-[500px] rounded-lg "
                  src={imgSrc[2]}
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="mt-[90px] ">
          <img
            className="h-[250px] rounded-lg  w-[600px]"
            src="https://i.ibb.co/sJ2BBPg/cute-plush-toys-arrangement-23-2150312316.jpg"
          ></img>
        </div>
      </div>
      <div className=" flex gap-[10px] ml-[870px] mt-[-240px]">
        <img
          className="h-[240px] w-[300px] rounded-lg"
          src="https://i.ibb.co/CJ34Rmy/Screenshot-4.png"
        ></img>
        <img
          className="h-[240px] w-[295px] rounded-lg"
          src="https://i.ibb.co/DbkKB1G/Screenshot-5.png"
        ></img>
      </div>
      <Gallery />
    </div>
  );
};

export default Slider;
