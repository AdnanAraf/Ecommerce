import React from "react";
import useWish from "../hooks/useWish";
import WishListCardDetails from "./WishListCardDetails";

const WishListCard = () => {
  const [Wish] = useWish();

  return (
    // <div>
    //   <div>

    //   </div>
    // </div>

    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="text-[18px] font-titleFont">Index</th>
            <th className="text-[18px] font-titleFont">Image</th>
            <th className="text-[18px] font-titleFont">Name</th>
            <th className="text-[18px] font-titleFont">Email</th>
            <th className="text-[18px] font-titleFont">Price</th>
            <th className="text-[18px] font-titleFont">Action</th>
          </tr>
        </thead>
        <tbody>
          {Wish.map((item, index) => (
            <WishListCardDetails key={item._id} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishListCard;
