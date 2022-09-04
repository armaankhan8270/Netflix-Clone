import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header6 = () => {
  const [Active, setActive] = useState(false);
  const [Active2, setActive2] = useState(false);
  const [Active3, setActive3] = useState(false);
  const [Active4, setActive4] = useState(false);
  const [Active5, setActive5] = useState(false);
  const [Active6, setActive6] = useState(false);
  return (
    <div className="w-[1519px] text-white text-[26px] h-full  justify-center bg-[#000000] border-[2px] border-[#333333]">
      <div className="w-[1429px] h]  mt-[70px] ml-[45px] mr-[45px] bg-[#000000] border-[px] border-[#333333]">
        <div className="w-[1429px] h-[55px]  bg-[#000000] border-[px] border-[#333333]">
          <h1 className="text-white text-[50px] text-center text-bold">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          <div className="w-[815px] h-[76px] ml-[307px] bg-[#303030] flex flex-wrap mr-[307px] mt-14 mb-4 border-2 border-[#333333]">
            <h1 className="mt-3 ml-4">What is Netflix</h1>
            <button
              onClick={() => setActive(!Active)}
              className="ml-[500px] text-5xl"
            >
              {Active ? "🗙" : "+"}
            </button>
          </div>
          {Active ? (
            <div className="w-[815px] text-[26px] h-[331px] ml-[307px] mr-[307px] -mt-3  shadow-lg border-2 border-[#333333]">
              <h1 className="mt-5 ml-5">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="w-[815px] h-[76px] ml-[307px] bg-[#303030] flex flex-wrap mr-[307px] mt-1 mb-4 border-2 border-[#333333]">
            <h1 className="mt-3 ml-4">What is Netflix</h1>
            <button
              onClick={() => setActive2(!Active2)}
              className="ml-[500px] text-5xl"
            >
              {Active2 ? "🗙" : "+"}
            </button>
          </div>
          {Active2 ? (
            <div className="w-[815px] text-[26px] h-[331px] ml-[307px] mr-[307px] -mt-3  shadow-lg border-2 border-[#333333]">
              <h1 className="mt-5 ml-5">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="w-[815px] h-[76px] ml-[307px] bg-[#303030] flex flex-wrap mr-[307px] mt-1 mb-4 border-2 border-[#333333]">
            <h1 className="mt-3 ml-4">What is Netflix</h1>
            <button
              onClick={() => setActive3(!Active3)}
              className="ml-[500px] text-5xl"
            >
              {Active3 ? "🗙" : "+"}
            </button>
          </div>
          {Active3 ? (
            <div className="w-[815px] text-[26px] h-[331px] ml-[307px] mr-[307px] -mt-3  shadow-lg border-2 border-[#333333]">
              <h1 className="mt-5 ml-5">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="w-[815px] h-[76px] ml-[307px] bg-[#303030] flex flex-wrap mr-[307px] mt-1 mb-4 border-2 border-[#333333]">
            <h1 className="mt-3 ml-4">What is Netflix</h1>
            <button
              onClick={() => setActive4(!Active4)}
              className="ml-[500px] text-5xl"
            >
              {Active4 ? "🗙" : "+"}
            </button>
          </div>
          {Active4 ? (
            <div className="w-[815px] text-[26px] h-[331px] ml-[307px] mr-[307px] -mt-3  shadow-lg border-2 border-[#333333]">
              <h1 className="mt-5 ml-5">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="w-[815px] h-[76px] ml-[307px] bg-[#303030] flex flex-wrap mr-[307px] mt-1 mb-4 border-2 border-[#333333]">
            <h1 className="mt-3 ml-4">What is Netflix</h1>
            <button
              onClick={() => setActive5(!Active5)}
              className="ml-[500px] text-5xl"
            >
              {Active5 ? "🗙" : "+"}
            </button>
          </div>
          {Active5 ? (
            <div className="w-[815px] text-[26px] h-[331px] ml-[307px] mr-[307px] -mt-3  shadow-lg border-2 border-[#333333]">
              <h1 className="mt-5 ml-5">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="w-[815px] h-[76px] ml-[307px] bg-[#303030] flex flex-wrap mr-[307px] mt-1 mb-4 border-2 border-[#333333]">
            <h1 className="mt-3 ml-4">What is Netflix</h1>
            <button
              onClick={() => setActive6(!Active6)}
              className="ml-[500px] text-5xl"
            >
              {Active6 ? "🗙" : "+"}
            </button>
          </div>
          {Active6 ? (
            <div className="w-[815px] text-[26px] h-[331px] ml-[307px] mr-[307px] -mt-3  shadow-lg border-2 border-[#333333]">
              <h1 className="mt-5 ml-5">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <Link to="./signin">
          <button className="text-center  ml-[35%] mt-12 mb-24 bg-[#e50914] p-4 rounded w-[380px] text-[30px]">
            Finish Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header6;
