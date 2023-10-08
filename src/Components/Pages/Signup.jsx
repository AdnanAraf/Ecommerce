import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex">
      <div className="lg:flex bg-blue-50">
        <div className="form-container border-2 w-[400px] h-[600px] m-auto my-[50px] lg:mx-[200px]">
          <h2 className="text-center text-3xl font-bold my-10">Sign Up</h2>
          <form className="text-center">
            {/*********************************NAME********************************************** */}
            <div className="mx-[50px] m-[20px]">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-black"
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            {/* ***************************EMAIL********************************************** */}
            <div className="mx-[50px] m-[20px]">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-black"
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            {/***************************** Password***************** */}
            <div className="mx-[50px] m-[20px]">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 border-black"
                type="password"
                name="password"
                required
              />
            </div>
            {/******************************** PHOTO URL************************************** */}
            <div className="mx-[50px] m-[20px]">
              <label className="block" htmlFor="text">
                Photo Url
              </label>
            </div>

            <div>
              <button className="btn btn-info w-[300px] p-2 mt-3">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center mt-[20px] ">
            <small>
              New to ToyMasterClass?
              <Link to="/login">Already Have an Account</Link>
            </small>
          </p>
          {/* <p className=" text-red-400 font-bold text-center">{error}</p> */}
        </div>
      </div>
      <div>
        <img
          className=""
          src="https://i.ibb.co/vJDtB46/app-installation-illustration-concept-114360-908.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Signup;
