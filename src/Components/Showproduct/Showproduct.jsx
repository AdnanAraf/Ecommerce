import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaGripHorizontal, FaGripVertical } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import ShopCard from "../Products/Shop/ShopCard/ShopCard";
import ShopModal from "../Products/Shop/ShopModal/ShopModal";
import Instock from "../Stock/Instock";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OutStock from "../Stock/OutStock";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Outstockmodal from "../Stock/Outstockmodal";
import Horizontal from "../Products/Shop/Horizontal/Horizontal";
let cnt = 0,
  cnt1 = 0;
const Showproduct = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [showproduct, setshowproduct] = useState({});
  const [asc, setAsc] = useState(true);
  const [loading, setLoading] = useState(false);
  const [books, setbooks] = useState([]);
  const [book, setbook] = useState(false);
  const [instock, setinstock] = useState([]);
  const [outstock, setoutstock] = useState([]);
  const [select, setselect] = useState(false);
  const [outselect, setoutselect] = useState(false);
  const [select1, setselect1] = useState(true);
  const [select2, setselect2] = useState(true);
  const [fourColumn, setgrid] = useState(true);
  useEffect(() => {
    fetch(
      `https://toys-server-teal.vercel.app/AllProduct?sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setbooks(filtered);
          setinstock(data);

          setbook(false);
          setselect1(true);
          setselect(false);
          setoutselect(false);
        } else {
          const instock = data.filter(
            (item) => item.availability === "In stock"
          );
          const outstock = data.filter(
            (item) => item.availability === "OutofStock"
          );
          if (cnt > 0) {
            setoutstock(outstock);
            // cnt1 = 0;
          }
          if (cnt1 > 0) {
            setinstock(instock);
            // cnt = 0;
          }
          setbooks(data);
          // console.log(outstock);
        }

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category, asc]);

  const showModal = (id) => {
    fetch(`https://toys-server-teal.vercel.app/AllProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setshowproduct(data));
  };
  const InStock = () => {
    // console.log("araf");
    fetch(
      `https://toys-server-teal.vercel.app/AllProduct?sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((item) => item.availability == "In stock");

        setinstock(result);
        setselect(true);
        setselect1(false);
        setoutselect(false);
        cnt1++;
      });
  };

  const handleSortChange = (event) => {
    const sortOrder = event.target.value === "asc" ? true : false;
    setAsc(sortOrder);
  };

  const OutofStock = () => {
    fetch(
      `https://toys-server-teal.vercel.app/AllProduct?sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((item) => item.availability == "OutofStock");

        setoutstock(result);
        setselect(false);
        setselect1(false);
        setoutselect(true);
        cnt++;
      });
  };
  const horizontal = () => {
    setgrid(true);
  };
  const Vertical = () => {
    setgrid(false);
  };

  return (
    <div className="">
      <div className=" absolute  lg:top-[770px] top-[550px]  lg:left-[1200px]  ">
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
      <div className="flex gap-[30px] absolute lg:ml-[480px] mt-[90px]  ml-[260px]  ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={horizontal}
            className="h-[30px] w-[30px] lg:ml-[600px] mt-[-5px] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div>
          <FaGripVertical
            onClick={Vertical}
            className="h-[25px] w-[25px] lg:block hidden"
          ></FaGripVertical>
        </div>
      </div>
      <div>
        <Tabs className="">
          <div className="h-[200px] w-[400px] bg-white shadow-lg mx-[50px] mt-[50px]">
            <h1 className="text-center font-titleFont text-[20px] font-bold">
              Filter By
            </h1>
            <h1 className="font-titleFont text-[18px] font-bold ml-[20px]">
              Availability
            </h1>
            <TabList className="flex gap-[30px]">
              <Tab
                className="text-[20px] ml-[20px] mt-[20px] cursor-pointer"
                onClick={InStock}
              >
                Instock (21)
              </Tab>
              <FaArrowDown className="mt-[25px] h-[20px] text-green-900"></FaArrowDown>
            </TabList>
            <TabList className="flex gap-[30px]">
              <Tab
                className="text-[20px] ml-[20px] mt-[20px] cursor-pointer"
                onClick={OutofStock}
              >
                Out Of Stock (6)
              </Tab>
              <FaArrowUp className="mt-[25px] h-[20px] text-red-900" />
            </TabList>
          </div>
          {fourColumn ? (
            <>
              <div>
                {select && (
                  <TabPanel className="grid grid-cols-4 gap-[20px] mt-[150px]  ml-[35px]">
                    {instock.map((item) => (
                      <Instock key={item._id} item={item} />
                    ))}
                  </TabPanel>
                )}
              </div>
            </>
          ) : (
            <>
              {" "}
              <div>
                {select && (
                  <TabPanel className="grid grid-cols-1 gap-[20px] mt-[150px]  ml-[35px]">
                    {instock.map((item) => (
                      <Horizontal key={item._id} item={item} />
                    ))}
                  </TabPanel>
                )}
              </div>{" "}
            </>
          )}

          <div>
            {outselect && (
              <TabPanel className="grid grid-cols-4 gap-[20px] mt-[150px] ml-[35px]">
                {outstock.map((item) => (
                  <OutStock key={item._id} item={item} showModal={showModal} />
                ))}
              </TabPanel>
            )}
          </div>
          {/* <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel> */}
        </Tabs>
      </div>

      {fourColumn ? (
        <>
          {" "}
          <div className="grid grid-cols-4 gap-[20px] mt-[50px]  ml-[50px]">
            {select1 &&
              books.map((item) => (
                <ShopCard item={item} showModal={showModal} />
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-[20px] mt-[50px]  ml-[50px]">
            {select1 &&
              books.map((item) => (
                <Horizontal item={item} showModal={showModal} />
              ))}
          </div>
        </>
      )}

      <ShopModal showproduct={showproduct} />
    </div>
  );
};

export default Showproduct;
