import React from "react";

const Modal = ({ singledata }) => {
  console.log(singledata);
  return (
    <div>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className=" ml-[400px] mt-[-50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>

            <img src={singledata.photo}></img>

            <h1 className="font-titleFont mt-[10px]">
              ToyName: {singledata.Toyname}
            </h1>
            <p className="font-titleFont mt-[10px]">
              SellerName: {singledata.SellerName}
            </p>
            <p className="font-titleFont mt-[10px]">Email:{singledata.email}</p>
            <p className="font-titleFont mt-[10px]">
              Price:${singledata.price}
            </p>
            <p className="font-titleFont mt-[10px]">
              Status:{singledata.details}
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Modal;
