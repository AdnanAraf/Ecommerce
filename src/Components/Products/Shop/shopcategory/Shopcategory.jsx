import qs from "query-string";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shopcategory = ({ label, selected }) => {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  };
  return (
    <div
      onClick={handleClick}
      className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-3
      border-b-2
      hover:text-neutral-800
      transition
      cursor-pointer
      ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }
   
    `}
    >
      <div className="">
        <h1 className="text-[18px] font-titleFont ">{label}</h1>
      </div>
    </div>
  );
};

export default Shopcategory;
