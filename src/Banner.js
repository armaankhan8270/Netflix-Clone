import React from "react";
import banner from "./Components/Images/stranger.jpg";
import banners from "./Components/Images/net.png";

const Banner = () => {
  return (
    <div className="b">
      {/* <img src={banner} alt="" /> */}
      <div className="top-0 fixed h-12 w-full bg-transparent brightness-100 shadow-2xl  md:w-1/2 lg:w-full sm:w-1/3 ">
        <img className=" mt-2 ml-5 w-[167px] h-14 " src={banners} alt="" />
      </div>
    </div>
  );
};

export default Banner;
