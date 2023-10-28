import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useSearchParams } from "react-router-dom";
import ShopCard from "../Products/Shop/ShopCard/ShopCard";
import ShopModal from "../Products/Shop/ShopModal/ShopModal";
import Instock from "../Stock/Instock";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
let cnt = 0;
const Showproduct = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [showproduct, setshowproduct] = useState({});

  const [loading, setLoading] = useState(false);
  const [books, setbooks] = useState([]);
  const [book, setbook] = useState(false);
  const [instock, setinstock] = useState([]);
  const [select, setselect] = useState(false);
  const [select1, setselect1] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/AllProduct")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setbooks(filtered);
          setbook(false);
        } else {
          setbooks(data);
        }

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  const showModal = (id) => {
    fetch(`http://localhost:5000/AllProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setshowproduct(data));
  };
  // const outofstock = () => {
  //   // console.log("araf");
  //   fetch("http://localhost:5000/AllProduct")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const result = data.filter((item) => item.availability == "In stock");
  //       console.log(result);
  //       setinstock(result);
  //       setselect(true);
  //       setselect1(false);
  //       cnt++;
  //       if (cnt % 2 == 0) {
  //         setselect(false);
  //         setselect1(true);
  //       }
  //     });

  return (
    <div className="flex">
      {/* <div>
        <Tabs> */}
      <TabList>{/* <Tab onClick={outofstock}>Title 1</Tab> */}</TabList>

      {/* {select && (
            <TabPanel className="grid grid-cols-3 gap-[20px]">
              {instock.map((item) => (
                <Instock key={item._id} item={item} />
              ))}
            </TabPanel>
          )} */}
      {/* <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel> */}
      {/* </Tabs>
      </div> */}

      <div className="grid grid-cols-3 gap-[20px] mt-[150px]">
        {books.map((item) => (
          <ShopCard item={item} showModal={showModal} />
        ))}
      </div>

      <ShopModal showproduct={showproduct} />
    </div>
  );
};

export default Showproduct;
