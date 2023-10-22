import React from "react";
import Swal from "sweetalert2";

const UpdateCountCard = ({ item }) => {
  console.log(item);
  const { _id, img, Count, price } = item;
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const Count = form.Count.value;
    const updatedToys = {
      Count,
    };
    console.log(updatedToys);
    // send data to the server
    fetch(`http://localhost:5000/carts/${_id}`, {
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
          value="Update Toy"
          className="btn btn-block my-[20px]"
        />
      </form>
    </div>
  );
};

export default UpdateCountCard;