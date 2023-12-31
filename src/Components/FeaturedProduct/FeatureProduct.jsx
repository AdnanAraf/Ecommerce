import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeatureProduct = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://toys-server-teal.vercel.app/FeatureProduct")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <div>
      <div className="lg:block hidden">
        <div>
          <h1 className="font-titleFont text-[30px] font-bold ml-[100px] mt-[50px]">
            Featured Products
          </h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-3">
            {product.map((item) => (
              <SwiperSlide className="mt-[50px]">
                <img className="" src={item.img}></img>
                <h1 className="text-[20px] font-titleFont font-medium text-center mt-[10px]">
                  {item.title}
                </h1>
                <div className="text-center">
                  <p>${item.price}</p>
                  <Rating
                    className="text-orange-600 mt-[10px] ml-[15px] text-[20px] "
                    placeholderRating={item.rating}
                    emptySymbol={<FaRegStar />}
                    readonly
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                </div>
                <div>
                  <Link to={`/detailscart/${item._id}`}>
                    <button className="btn btn-info w-[164px] ml-[160px]">
                      Details Information
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="lg:hidden block">
        <div>
          <h1 className="font-titleFont text-[30px] font-bold ml-[50px] mt-[50px]">
            Featured Products
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-3">
            {product.map((item) => (
              <SwiperSlide className="mt-[50px]">
                <img className="" src={item.img}></img>
                <h1 className="text-[20px] font-titleFont font-medium text-center mt-[10px]">
                  {item.title}
                </h1>
                <div className="text-center">
                  <p>${item.price}</p>
                  <Rating
                    className="text-orange-600 mt-[10px] ml-[15px] text-[20px] "
                    placeholderRating={item.rating}
                    emptySymbol={<FaRegStar />}
                    readonly
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                </div>
                <div>
                  <Link to={`/detailscart/${item._id}`}>
                    <button className="btn btn-info w-[164px] ml-[110px]">
                      Details Information
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProduct;
