import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateCountCard = () => {
  const Updatedata = useLoaderData();
  // console.log(item);
  const { _id, img, Count, price } = Updatedata;
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const Count = form.Count.value;
    const updatedToys = {
      Count,
    };
    console.log(updatedToys);
    // send data to the server
    fetch(`https://toys-server-teal.vercel.app/carts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("🦄 Product updated Successfully..!", {
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
  };
  return (
    <div className="bg-[#f4f8f9] p-24">
      <h2 className="text-3xl font-extrabold"> </h2>
      <form onSubmit={handleUpdateToy}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control w-full  ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Count"
                defaultValue={Count}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Product"
          className="btn btn-block my-[20px]"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default UpdateCountCard;
