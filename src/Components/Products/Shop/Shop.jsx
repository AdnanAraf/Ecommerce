import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./Shop.css";
import ShopCard from "./ShopCard/ShopCard";
import ShopModal from "./ShopModal/ShopModal";
import { FaGripHorizontal, FaGripVertical } from "react-icons/fa";
import Horizontal from "./Horizontal/Horizontal";

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
  const handleSearch = () => {
    fetch(`http://localhost:5000/getJobsByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setproduct(data);
      });
  };
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

  const dolls = product.filter((item) => item.title === "Dolls");
  const sports = product.filter((item) => item.title === "sports");
  const musical = product.filter((item) => item.title === "musical");
  const engineering = product.filter((item) => item.title === "Engineering");
  const cars = product.filter((item) => item.title === "cars");
  const allproduct = product.filter((item) => item.category === "allproduct");
  const handleSortChange = (event) => {
    const sortOrder = event.target.value === "asc" ? true : false;
    setAsc(sortOrder);
  };

  return (
    <div>
      <div>
        <img
          className=" h-[700px] w-full mt-[0px]"
          src="https://i.ibb.co/TbD53fz/6608951-AMZ-play-doh.jpg"
        ></img>
      </div>
      <div>
        <div className=" absolute  top-[900px] left-[1200px]  ">
          {/* <button onClick={() => setAsc(!asc)}>
            {asc ? "Price: Low to High" : "Price: High to Low"}
          </button> */}
          <select
            className=" select  bg-gray-100 font-titleFont text-[16px]"
            onChange={handleSortChange}
          >
            <option value="asc">Price: Low to High</option>

            <option className="h-[60px] w-[160px]" value="desc ">
              Price: High To Low
            </option>
          </select>
        </div>
        <div className="flex gap-[30px] absolute ml-[480px] mt-[70px]">
          <div>
            <FaGripHorizontal
              onClick={horizontal}
              className="h-[25px] w-[25px]"
            ></FaGripHorizontal>
          </div>
          <div>
            <FaGripVertical
              onClick={Vertical}
              className="h-[25px] w-[25px]"
            ></FaGripVertical>
          </div>
        </div>

        <div class>
          <Tabs>
            <TabList>
              <div className="dropdown dropdown-bottom cursor-pointer mt-[50px] divide-y mx-[100px]  ">
                <label
                  tabIndex={0}
                  className="btn m-1 w-[300px] bg-blue-500 font-medium"
                >
                  <h1 className="font-titleFont text-[18px] font-normal ">
                    Product Categories
                  </h1>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-[250px]"
                >
                  {/* <Tab className="pt-[15px] pl-[15px]   text-[18px] font-bodyFont hover:bg-blue-300  h-[50px]">
                    Sofa
                  </Tab>
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont hover-underline hover:bg-blue-300  h-[50px]">
                    Watch
                  </Tab>

                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover-underline hover:bg-blue-300  h-[50px]">
                    Mobile
                  </Tab>
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover:bg-blue-300   h-[50px]">
                    HeadPhone
                  </Tab> */}
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover:bg-blue-300   h-[50px]">
                    All Product
                  </Tab>
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover:bg-blue-300   h-[50px]">
                    Dolls
                  </Tab>
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover:bg-blue-300   h-[50px]">
                    Cars
                  </Tab>
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover:bg-blue-300   h-[50px]">
                    Engineering Toys
                  </Tab>
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover:bg-blue-300   h-[50px]">
                    Musical
                  </Tab>
                  <Tab className=" pt-[15px]  pl-[15px]  text-[16px] font-bodyFont  hover:bg-blue-300   h-[50px]">
                    Sports
                  </Tab>
                </ul>
              </div>
            </TabList>
            <div className="search-box p-2 text-center mt-[80px] ">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                className="p-1  border-2 w-[800px] border-blue-300 h-[40px]"
              />
              <button
                onClick={handleSearch}
                className="mx-[10px] h-[40px] w-[164px] bg-black text-white font-titleFont"
              >
                Search
              </button>
            </div>
            <div>
              {fourColumn ? (
                <div>
                  <TabPanel className="grid grid-cols-4 mt-[100px] gap-[40px]">
                    {allproduct.map((item) => (
                      <ShopCard
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                  <TabPanel className="grid grid-cols-4  gap-[40px]">
                    {dolls.map((item) => (
                      <ShopCard
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                  <TabPanel className="grid grid-cols-4 gap-[40px]">
                    {cars.map((item) => (
                      <ShopCard
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                  <TabPanel className="grid grid-cols-4  gap-[40px]">
                    {engineering.map((item) => (
                      <ShopCard
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>

                  <TabPanel className="grid grid-cols-4  gap-[40px]">
                    {musical.map((item) => (
                      <ShopCard
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>

                  <TabPanel className="grid grid-cols-4  gap-[40px]">
                    {sports.map((item) => (
                      <ShopCard
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                </div>
              ) : (
                <div>
                  <TabPanel className="grid grid-cols-1 gap-[20px]  mt-[100px] ">
                    {allproduct.map((item) => (
                      <Horizontal
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                  <TabPanel className="grid grid-cols-1  gap-[40px]">
                    {dolls.map((item) => (
                      <Horizontal
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                  <TabPanel className="grid grid-cols-1 gap-[40px]">
                    {cars.map((item) => (
                      <Horizontal
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                  <TabPanel className="grid grid-cols-1  gap-[40px]">
                    {engineering.map((item) => (
                      <Horizontal
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>

                  <TabPanel className="grid grid-cols-1  gap-[40px]">
                    {musical.map((item) => (
                      <Horizontal
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>

                  <TabPanel className="grid grid-cols-1  gap-[40px]">
                    {sports.map((item) => (
                      <Horizontal
                        key={item._id}
                        item={item}
                        showModal={showModal}
                      />
                    ))}
                    {/* {sofa.map((item1) => (
              <CategoriesCard key ={item1._id}></CategoriesCard>
            ))} */}
                  </TabPanel>
                </div>
              )}
            </div>
          </Tabs>
        </div>
        <ShopModal showproduct={showproduct} />
      </div>
    </div>
  );
};

export default Shop;
