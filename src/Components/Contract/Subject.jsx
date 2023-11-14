import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Subject = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_x1os5of",
      "template_80100bb",
      form.current,
      "H0U2muS2J695OVA10"
    );
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Email has been Sent",
      showConfirmButton: false,
      timer: 1500,
    }).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <h1 className="text-white text-[18px] font-titleFont">Name</h1>
          <input
            className="w-[450px] h-[40px] mt-2 "
            type="text"
            placeholder="Enter Your Name "
          ></input>
        </div>
        <div className="mt-[15px]">
          <h1 className=" text-white text-[18px] font-titleFont">Email</h1>
          <input
            className="w-[450px] h-[40px] mt-2 "
            type="email"
            placeholder="Enter Your Email"
          ></input>
        </div>
        <div>
          <div className="mt-[15px]">
            <h1 className=" text-white text-[18px] font-titleFont">Message</h1>
            <textarea name="message" rows="5" cols="60"></textarea>
          </div>
        </div>
        <div className="h-[50px] w-[140px] bg-green-500 mt-[20px]">
          <button className="text-white p-[10px] pl-[40px] text-[18px] font-titleFont">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subject;
