import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./Shop.css";
import ShopCard from "./ShopCard/ShopCard";
import ShopModal from "./ShopModal/ShopModal";
import { FaGripHorizontal, FaGripVertical } from "react-icons/fa";
import Horizontal from "./Horizontal/Horizontal";
import { categories } from "../../Categories/Categoriesdata";
import Shopcategory from "./shopcategory/Shopcategory";
import Showproduct from "../../Showproduct/Showproduct";

const Shop = () => {
  const [product, setproduct] = useState([]);
  const [asc, setAsc] = useState(true);
  const [searchText, setSearchText] = useState("");

  const [showproduct, setshowproduct] = useState({});
  const [fourColumn, setgrid] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/AllProduct?sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, [asc]);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/AllProduct?sort=${asc ? "asc" : "desc"}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setcategory(data);
  //       });
  //   }, [asc]);

  const showModal = (id) => {
    fetch(`http://localhost:5000/AllProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setshowproduct(data));
  };

  const horizontal = () => {
    setgrid(true);
  };
  const Vertical = () => {
    setgrid(false);
  };

  const handleSortChange = (event) => {
    const sortOrder = event.target.value === "asc" ? true : false;
    setAsc(sortOrder);
  };
  // const handleSearch = () => {
  //   fetch(
  //     `http://localhost:5000/getJobsByText/${searchText}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setproduct(data);
  //     });
  // };

  return (
    <div className="overflow-hidden">
      <div>
        <div className="bg-cyan-700 lg:h-[500px] w-full ">
          <div className="flex justify-between lg:pt-[0px] pt-[50px]">
            <div>
              <h1 className="font-titleFont text-white lg:text-[35px] lg:w-[900px] w-[400px] font-semibold lg:pt-[100px] lg:pl-[100px] pl-[10px]">
                Let's feel the music with best sound quality Black Corded
                Headset
              </h1>
              <p className="lg:pl-[100px] font-titleFont font-semibold lg:text-[16px] lg:pt-[20px]  pl-[10px]  text-white w-[180px]  lg:w-[700px] pt-[30px]">
                Shop is the Latest technology available here in e-shop , Sales &
                discount offers everyday and Connect your conversations with the
                tools and services that you use to get the job done.
              </p>
            </div>
            <img
              className="lg:h-[500px] h-[200px] lg:mr-[100px] ml-[-500px] rotate-12 lg:mt-[0px] mt-[70px]"
              src="https://i.ibb.co/3y2hGws/black-headphones-digital-device-53876-96805-removebg-preview.png"
            ></img>
          </div>
        </div>
      </div>
      <div>
        <div className="flex ">
          {/* <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1  border-2 w-[300px] border-blue-300 h-[40px]"
          />
          <button
            onClick={handleSearch}
            className="mx-[10px] h-[40px] w-[164px] bg-black text-white font-titleFont"
          >
            Search
          </button> */}
          {/* <div className=" absolute  lg:top-[670px] top-[550px]  lg:left-[1200px]  ">
       
            <select
              className=" select  bg-gray-100 font-titleFont text-[16px]"
              onChange={handleSortChange}
            >
              <option value="asc">Price: Low to High</option>

              <option className="h-[60px] w-[160px]" value="desc ">
                Price: High To Low
              </option>
            </select>
          </div> */}
          <div></div>
        </div>

        <Showproduct />
      </div>
    </div>
  );
};

export default Shop;
