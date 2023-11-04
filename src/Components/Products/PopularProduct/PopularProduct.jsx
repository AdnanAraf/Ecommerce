import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight, FaRegStar, FaStar } from "react-icons/fa";
import "./style.css";
import Rating from "react-rating";

const PopularProduct = () => {
  const swiperRef = useRef(null);
  const [popularproduct, setpopularproduct] = useState([]);

  useEffect(() => {
    fetch("PopularProduct.json")
      .then((res) => res.json())
      .then((data) => setpopularproduct(data));
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      // Initialize the Swiper instance
      const swiper = swiperRef.current.swiper;
      swiper.update(); // Call the update method on the initialized Swiper instance
    }
  }, []);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slidePrev();
    }
  };

  return (
    <div className="mt-[100px]  overflow-hidden">
      <div>
        <div className="flex justify-end">
          <div className="prev text-[25px]" onClick={goToPrevSlide}>
            <FaAngleLeft />
          </div>
          <div className="next text-[25px]" onClick={goToNextSlide}>
            <FaAngleRight />
          </div>
        </div>
        <div className="">
          <div>
            <img
              className="h-[600px] w-[300px]"
              src="https://i.ibb.co/C1TYHTD/super-sale-offer-banner-with-editable-text-template-3d-render-47987-12746.jpg"
            ></img>
          </div>
          <div className="mt-[-600px] ml-[400px]">
            <Swiper
              className="myswiper h-[200px] w-[200px]"
              // navigation={true}
              slidesPerView={3}
              spaceBetween={60}
              modules={[Pagination, Navigation]}
              ref={swiperRef}
            >
              <div>
                {popularproduct.map((item) => (
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] mt-[100px]"
                      src={item.image}
                    ></img>
                    <h1 className="font-titleFont text-[16px]  pt-[20px] pl-[10px]">
                      {item.name.substring(0, 50)}.......
                    </h1>
                    <p className="font-titleFont font-bold text-yellow-800 pt-[20px] pl-[10px]">
                      {item.brand}
                    </p>
                    <div className="flex gap-[30px] pt-[20px] pl-[10px]">
                      <p className="font-titleFont font-semibold">
                        {" "}
                        Rating: {item.review}
                      </p>
                      <Rating
                        className="text-orange-600  text-[20px] "
                        placeholderRating={item.review}
                        emptySymbol={<FaRegStar />}
                        readonly
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
