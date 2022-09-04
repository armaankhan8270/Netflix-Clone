import React from "react";
import Banner from "../Banner";
import Footer from "./Footer";
import Home from "./Home";

const Signin = () => {
  return (
    <>
      <Banner />
      <div className="home grid justify-center text-white">
        <div className="bg-black w-[450px] rounded h-[700px] mt-[91px] ">
          <div className=" w-[314px] border-2 border-[#333333] rounded-lg h-[378px] m-[64px]">
            <h1 className="text-3xl pt-1 h-9"> Sign In</h1>
            <input
              type="text"
              className="mt-[28px] text-sm pl-4  h-12 rounded bg-white w-[310px] outline-none shadow-lg"
              placeholder="username"
            />
            <input
              type="password"
              className="mt-[28px] text-sm pl-4 h-12 rounded bg-white w-[310px] outline-none shadow-lg"
              placeholder="Password"
            />
            <button className="bg-[#e50914] w-full h-12 mt-10 rounded">
              Sign in
            </button>
            <div className="text-sm mt-3">
              <p className="text-gray-600 ">
                {" "}
                <input type="checkbox" name="" id="" /> Remember me
              </p>
              <p className="ml-[220px] -mt-5 text-gray-600">Needhelp</p>
            </div>
          </div>
          <div className=" w-[314px] border- -mt-[64px] h-[182px] m-[64px]">
            <p className="pt-[100px] text-gray-700 text-[17px]">
              New To Ntflix?{" "}
              <span className="text-white font-bold pl-3">Sign in Now</span>
            </p>
            <p className="text-[13px] text-gray-500 pt-3">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
