import React from "react";

const Allproductcard = ({ item, index, showModal }) => {
  const { _id, Toyname, SellerName, category, quantity, email, price, photo } =
    item;

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24"></div>
        </div>
      </td>
      <td className="font-titleFont">{index + 1}</td>
      <td className="font-titleFont">{SellerName}</td>
      <td className="font-titleFont">{Toyname}</td>
      <td className="font-titleFont">{category}</td>
      <td className="font-titleFont pl-[30px]">${price}</td>
      <td className="font-titleFont pl-[100px]">{quantity}</td>
      <td>
        <label
          className="cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <button
            onClick={() => showModal(_id)}
            className="btn btn-info font-titleFont"
          >
            Details
          </button>
        </label>
      </td>
    </tr>
  );
};

export default Allproductcard;
