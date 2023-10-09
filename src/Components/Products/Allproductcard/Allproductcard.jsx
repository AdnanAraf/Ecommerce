import React from "react";
import { Link } from "react-router-dom";

const Allproductcard = ({ item, index }) => {
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
        <Link to={`/singletoys/${_id}`}>
          <button className="btn btn-info">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default Allproductcard;
