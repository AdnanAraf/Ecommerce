import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Allproductcard from "../Allproductcard/Allproductcard";

const AllProducts = () => {
  const [allproduct, setallproduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ToysData")
      .then((res) => res.json())
      .then((data) => setallproduct(data));
  }, []);
  return (
    <div>
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
              <Allproductcard key={item._id} item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
