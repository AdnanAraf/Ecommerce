import React from "react";

const Instock = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div>
        <img className="h-[300px] w-[250px]" src={item.img}></img>
      </div>
    </div>
  );
};

export default Instock;
