import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const PaymentCard = ({ item, index }) => {
  const { _id, image, email, price, Count, color } = item;
  const [booking, setbooking] = useState([]);
  const [, refetch] = useCart();

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
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
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
    <tr>
      <td className="font-titleFont">{index + 1}</td>
      <td className="font-titleFont flex">
        <img className="h-[50px] w-[50px] rounded-full" src={image}></img>
        <p
          src={color}
          style={{ backgroundColor: color }}
          className="btnStyle active opacity-1 h-[15px] w-[15px] mt-[20px]"
        ></p>
      </td>
      <td className="font-titleFont">{email}</td>

      <td className="font-titleFont pl-[30px]">${price}</td>
      <td className="font-titleFont pl-[30px]">{Count}</td>

      <div>
        <td>
          <FontAwesomeIcon
            onClick={() => HandleDelete(_id)}
            className="mt-[20px] ml-[20px]"
            icon={faTrash}
          />
        </td>
        <td>
          <Link to={`/updateCount/${_id}`}>
            <FontAwesomeIcon className="mt-[20px] " icon={faPenToSquare} />
          </Link>
        </td>
      </div>
    </tr>
  );
};

export default PaymentCard;
