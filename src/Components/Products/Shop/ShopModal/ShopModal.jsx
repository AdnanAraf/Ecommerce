import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const ShopModal = ({ showproduct }) => {
  // console.log(showproduct);
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
  const Handlecart = (showproduct) => {
    if (user && user.email) {
      const cartItem = {
        MenuItemID: showproduct._id,
        Count: count,
        image: showproduct.img,
        price: showproduct.price,
        email: user.email,
        name: showproduct.name,
      };

      fetch("https://toys-server-teal.vercel.app/carts", {
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

  const disable = (showproduct) => {
    if (user && user.email) {
      toast("🦄 Product is out of stock..!", {
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
  };
  return (
    <div>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box  h-[600px]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={Handlecross}
                className=" w-[50px] bg-black text-white font-bold absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <div>
              <div>
                <img
                  className="h-[200px] w-[200px] m-auto"
                  src={showproduct.img}
                ></img>
              </div>
              <div className="mt-[20px] ml-[30px]">
                <h1 className="text-[20px] font-titleFont font-semibold">
                  {showproduct.name}
                </h1>
                <h1 className="text-[20px] font-titleFont font-semibold">
                  <span className="text-[16px] font-titleFont font-normal">
                    {showproduct.description}
                  </span>
                </h1>
                <p className="text-[16px] font-titleFont mt-[20px] font-semibold">
                  <span className="text-[18px] font-titleFont mt-[20px] font-semibold">
                    ${showproduct.price}
                  </span>
                </p>
              </div>
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
              {showproduct.availability == "OutofStock" ? (
                <>
                  <div className="mt-[30px] text-center ">
                    <button
                      onClick={() => disable(showproduct)}
                      className="h-[40px] w-[140px]   bg-black text-white font-titleFont"
                    >
                      Save Cart
                      <ToastContainer />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-[30px] text-center ">
                    <button
                      onClick={() => Handlecart(showproduct)}
                      className="h-[40px] w-[140px] bg-black text-white font-titleFont"
                    >
                      Save Cart
                      <ToastContainer />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ShopModal;
