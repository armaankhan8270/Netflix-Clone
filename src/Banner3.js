import React from "react";
import banner from "./Components/Images/stranger.jpg";
import banners from "./Components/Images/net.png";

const Banner3 = () => {
  return (
    <div className="b">
      <img src={banner} alt="" />
      <div className="top-0 fixed h-12 w-full bg-black ">
        <img className=" mt-2 ml-5 w-28 h-10" src={banners} alt="" />
      </div>
    </div>
  );
};

export default Banner3;
