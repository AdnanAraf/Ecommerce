import React from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import MyProductCard from "../Routes/MyProductCard/MyProductCard";
import Swal from "sweetalert2";

const MyProducts = () => {
  const [booking, setbooking] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setbooking(data));
  }, [user]);
  const HandleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/ToysData/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = booking.filter(
                (bookings) => bookings._id !== _id
              );
              setbooking(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4  ml-[50px] mt-[100px]">
        {booking.map((item) => (
          <MyProductCard
            item={item}
            key={item._id}
            HandleDelete={HandleDelete}
          ></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
