import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const PopularModal = ({ populardata }) => {
  const [count, setcount] = useState(1);
  const [, refetch] = useCart();

  const { user } = useContext(AuthContext);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    count < 2 ? setcount(count) : setcount(count - 1);
  };
  const Handlecross = () => {
    setcount(1);
  };
  const Handlecart = (populardata) => {
    if (user && user.email) {
      const cartItem = {
        MenuItemID: populardata._id,
        Count: count,
        image: populardata.image,
        price: populardata.price,
        email: user.email,
        name: populardata.name,
      };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast("🦄 Product is added on the cart..!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        });
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-[600px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className=" absolute right-2 top-2">✕</button>
        </form>
        <img className="h-[200px] m-auto" src={populardata.image}></img>
        <img className="mt-[20px]" src={populardata.description}></img>
        <div className="ml-[160px] mt-[10px]">
          <FontAwesomeIcon
            onClick={decrement}
            className="mr-[10px]"
            icon={faMinus}
          />
          <input
            className="border-2 border-gray-700 w-[100px] text-black pl-[40px]"
            type="text"
            placeholder="1"
            value={count}
          ></input>
          <FontAwesomeIcon
            onClick={increment}
            className="ml-[10px]"
            icon={faPlus}
          />
        </div>
        <div className="mt-[30px] text-center ">
          <button
            onClick={() => Handlecart(populardata)}
            className="h-[40px] w-[140px]   bg-black text-white font-titleFont"
          >
            Save Cart
            <ToastContainer />
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PopularModal;
