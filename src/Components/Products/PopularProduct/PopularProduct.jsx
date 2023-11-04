import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PopularProduct = () => {
  const swiperRef = useRef(null);

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
    <div className="mt-[100px]">
      <div className="flex justify-end">
        <div className="prev text-[25px]" onClick={goToPrevSlide}>
          <FaAngleLeft />
        </div>
        <div className="next text-[25px]" onClick={goToNextSlide}>
          <FaAngleRight />
        </div>
      </div>
      <Swiper
        className="myswiper"
        // navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        ref={swiperRef}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularProduct;
