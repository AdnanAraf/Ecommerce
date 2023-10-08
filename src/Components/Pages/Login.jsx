import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import SocialLoginbtn from "../SocialLoginbtn/SocialLoginbtn";

const Login = () => {
  return (
    <div className="flex bg-gray-400">
      <div className="form-container border-2 w-[400px] h-[400px] m-auto my-[100px]">
        <h2 className="text-center text-3xl font-bold my-10">Login</h2>
        <form className="text-center">
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

          <div className="mx-[50px]">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-black"
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div>
            <button className="btn btn-info w-[300px] p-2 mt-3">Login</button>
          </div>
        </form>
        <p className="text-center mt-[20px] ">
          <small>
            New to ToyMasterClass?
            <Link to="/register">Create New Account</Link>
          </small>
        </p>
        {/* <p className=" text-red-400 font-bold text-center">{error}</p> */}
        <div className="mt-[10px] ml-[50px]">
          <SocialLoginbtn />
        </div>
      </div>
      <div className="col-md-6 ">
        <img
          className="w-100 h-[600px]"
          src="https://i.ibb.co/zmg77Sc/user-interface-entering-personal-information-login-into-website-account-concept-secure-login-passwor.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
