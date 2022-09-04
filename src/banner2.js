import axios from "axios";
import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Banner2 = () => {
  const [Movies, setMovies] = useState([]);
  const [number, setnumber] = useState(0);
  const [a, seta] = useState(false);
  const burl = "http://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchdata = async () => {
      const reques = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=fc85b8aebcdd175a81c9ce4e23df26bf&language=en-US`
      );

      console.log(reques);

      setnumber(Math.floor(Math.random() * 4));
      setMovies(reques.data.results[number]);
      // setnumber(Math.floor(Math.random() * 5));
      console.log(Movies);
    };
    fetchdata();
  }, []);

  return (
    <header>
      <Banner />
      <div
        style={{
          backgroundImage: `url("http://image.tmdb.org/t/p/original/${Movies.backdrop_path}")`,
        }}
        className="bg-cover bg-center h-[500px] pt-15 md:w-1/2 lg:w-full sm:w-1/3 "
      >
        <div className="pl-12  pt-[200px] text-white  shadow-lg">
          <h1 className="text-3xl font-bold ">
            {Movies?.title || Movies.name}
          </h1>
          <div>
            <button
              className="text-xl  m-2 rounded w-32 h-10 
             bg-gray-700 text-white border- border-whie "
            >
              Play
            </button>
            <button
              className="text-xl  m-2 rounded w-32 h-10 
             bg-gray-700 text-white border- border-whie "
            >
              Play
            </button>
          </div>
          <h1 className="w-1/2 text-sm min-h-[100px] overflow-hidden ">
            {Movies.overview?.substring(0, 490)}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Banner2;
