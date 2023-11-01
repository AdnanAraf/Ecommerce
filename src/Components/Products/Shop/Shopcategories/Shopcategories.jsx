import React from "react";
import Shopcategory from "../shopcategory/Shopcategory";
import { categories } from "../../../Categories/Categoriesdata";

const Shopcategories = () => {
  return (
    <div>
      <div className="dropdown ">
        <label tabIndex={0} className="">
          <h1 className="text-[20px] font-titleFont text-white text-center pl-[50px] pt-[10px] ">
            Shop Category
          </h1>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1]  shadow bg-base-100  w-[250px] mt-[10px] "
        >
          <li>
            <div className=" ">
              {categories.map((item) => (
                <Shopcategory label={item.label} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shopcategories;
