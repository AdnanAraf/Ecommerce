import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Allproductcard from "../Allproductcard/Allproductcard";
import Modal from "../Modal/Modal";

const AllProducts = () => {
  const [allproduct, setallproduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [singleData, setSingleData] = useState({});
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://toys-server-adnanaraf.vercel.app/ToysData")
      .then((res) => res.json())
      .then((data) => setallproduct(data));
  }, []);
  const showModal = (id) => {
    fetch(`https://toys-server-adnanaraf.vercel.app/ToysData/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  };
  const handleSearch = () => {
    fetch(
      `https://toys-server-adnanaraf.vercel.app/getJobsByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setallproduct(data);
      });
  };
  return (
    <div>
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
      <div className="overflow-x-auto w-full mt-[150px]">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>

              <th className="text-[18px] font-titleFont text-black font-semibold">
                No
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Seller
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Toys Name
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Sub Category
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Price
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Available Quantity
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {allproduct.map((item, index) => (
              <Allproductcard
                key={item._id}
                item={item}
                index={index}
                showModal={showModal}
              />
            ))}
          </tbody>
        </table>
        <div>
          <Modal singledata={singleData} />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
