import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const Updatedata = useLoaderData();
  // console.log(Updatedata);
  const { _id, Toyname, price, quantity, details } = Updatedata;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const details = form.details.value;

    const updatedToys = {
      quantity,
      price,
      details,
    };
    console.log(updatedToys);
    // send data to the server
    fetch(`https://toys-server-teal.vercel.app/ToysData/${_id}`, {
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
          Swal.fire({
            title: "Success!",
            text: "Toys Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f8f9] p-24">
      <h2 className="text-3xl font-extrabold">Update Toy:{Toyname} </h2>
      <form onSubmit={handleUpdateToy}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}

        <div className="form-control  m-auto">
          <div className="form-control  ml-4">
            <label className="label">
              <span className="label-text text-center">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Toy"
          className="btn btn-block my-[20px]"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
