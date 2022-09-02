import React from "react";
import { useState, useEffect } from "react";

const Header2 = () => {
  const [number, setnumber] = useState(3);
  useEffect(() => {
    setInterval(setnumber(0), 3000);
  }, []);
  const img = [
    "data:image/jpeg;base64,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",
    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/AmazonVideo/2021/X-site/SingleTitle/UAP-Launch-Synergy/379x304__alexa._SY304_CB611911053_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/AmazonVideo/2021/X-site/SingleTitle/UAP-Launch-Synergy/379x304_music._SY304_CB611601058_.jpg",
    "https://occ-0-3374-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420",
  ];
  return (
    <div>
      <div className="w-[1519px] h-[465px] justify-center bg-[#000000] border-[8px] border-[#333333]  ">
        <div className="flex w-[1100px] h-[325px] ml-[270px] mr-[270px]  mt-[70px]">
         
          
          <div className="w-[50%] mt-12">
            <h1 className="text-[50px] text-white text-start font-bold mb-4">
              Enjoy on your TV.
            </h1>
            <p className="text-white text-[26px]">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className='bg-white w-[40%] bg-[url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png")] bg-no-repeat bg-cover overflow-hidden'>
            <img
              width={"321px"}
              height={"10px"}
              src={img[number]}
              alt=""
              className="mt-14 ml-[58px] h-[180px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
