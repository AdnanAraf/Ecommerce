import React from "react";
import useCart from "../hooks/useCart";
import { useState } from "react";
import PaymentCard from "./PaymentCard/PaymentCard";

const Payment = () => {
  const [cart] = useCart();
  // const total = cart.reduce((sum, item) => sum + item.price, 0);
  // const price = parseFloat(total.toFixed(2));
  // const total = cart.reduce((sum, item) => sum + item.price * item.Count, 0);
  const sum = cart.reduce(
    (accumulator, item) => accumulator + parseFloat(item.price) * item.Count,
    0
  );
  console.log("The sum is: " + sum);
  console.log(cart);

  return (
    <div>
      <div className="overflow-x-auto w-full mt-[150px]">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                No
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                image
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Email
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Price
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Count
              </th>
              <th className="text-[18px] font-titleFont text-black font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <PaymentCard key={item._id} item={item} index={index} />
            ))}
          </tbody>
        </table>
        <div>
          <hr className=" border-1 border-blue-800"></hr>
        </div>
        <div>
          <h1 className="ml-[850px] font-titleFont text-[16px]">
            Total=${sum}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Payment;
