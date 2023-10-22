import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const Toyname = form.name.value;
    const SellerName = form.sellername.value;
    const quantity = form.quantity.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const booking = {
      Toyname,
      SellerName,
      quantity,
      email,
      price,
      rating,
      category,
      details,
      photo,
    };
    // console.log(booking);
    fetch("https://toys-server-adnanaraf.vercel.app/ToysData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    if (data.insertedID) {
      Swal.fire({
        title: "Success!",
        text: "Successfully AddedBook",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a Toys</h2>
        <form onSubmit={handleAddBook}>
          {/* Toys  name and Seller Name row */}
          <div className="md:flex mb-8 gap-[10px]">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Toy's Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Toy's Name "
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="sellername"
                  placeholder="Seller Name"
                  // defaultValue={user.name}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/************Email and Available Quantity*************** */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
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
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/*Price and Rating row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">SubCategory</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Toys" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};
export default AddProducts;
