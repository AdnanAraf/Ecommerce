import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import UpdateCountCard from "./UpdateCountCard/UpdateCountCard";

const UpdateCount = () => {
  const Updatedata = useLoaderData();
  console.log(Updatedata);
  const [update, setupdate] = useState(Updatedata);

  //   console.log(Updatedata);
  //   const { _id, name, price, Count } = Updatedata;

  return (
    <div>
      <div>
        {update.map((item) => (
          <UpdateCountCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default UpdateCount;
