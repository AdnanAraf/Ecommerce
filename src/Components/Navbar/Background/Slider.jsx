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
    "https://i.ibb.co/4FvHWdM/little-basketball-player-sportswear-holding-ball-studio-isolated-dark-textured-background-613910-182.jpg",
    "https://img.freepik.com/free-photo/easter-car-with-white-egg-pink-ribbon_23-2149301315.jpg?w=1060&t=st=1688360476~exp=1688361076~hmac=bf5d678ba655b717053411cfefd0fbca7aaf537befb9ee9c8d42946b7c94eda7",
    "https://img.freepik.com/free-photo/warm-blankets-plush-toy_23-2147698733.jpg?w=1060&t=st=1688345980~exp=1688346580~hmac=1cf89df5880d131545ff6ae73e4f291a1f6c4b31d2b56877aa29bb8d920ca1bb",
  ];
  return (
    <div>
      <div>
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
                <div className="bg-gray-900 flex justify-between">
                  <div>
                    <h1 className="w-[300px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod obcaecati porro omnis tenetur nesciunt, optio
                      eligendi. Officiis soluta consequatur laborum?
                    </h1>
                  </div>
                  <div>
                    <img
                      className="mt-[10px] h-[300px] w-[300px] rounded-lg"
                      src={imgSrc[0]}
                    ></img>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
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
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>

      {/* <div className="mt-[90px] ">
          <img
            className="h-[250px] rounded-lg  w-[600px]"
            src="https://i.ibb.co/sJ2BBPg/cute-plush-toys-arrangement-23-2150312316.jpg"
          ></img>
        </div>
      </div>
      <div className=" flex gap-[10px] ml-[870px] mt-[-240px]">
        
      </div> */}
      <Gallery />
    </div>
  );
};

export default Slider;
