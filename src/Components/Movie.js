import React from "react";
import Banner from "../Banner";
import Banner2 from "../banner2";
import Navbar from "../Navbar";
import NetflixHome from "../NetflixHome";
import Request from "../Request";

const Movie = () => {
  const apikey = `fc85b8aebcdd175a81c9ce4e23df26bf`;
  return (
    <div>
      <Navbar />
      <Banner2 />
      <NetflixHome
        Large={true}
        title={"Netflix Orignals"}
        fetctUrl="https://api.themoviedb.org/3/trending/all/week?api_key=fc85b8aebcdd175a81c9ce4e23df26bf&language=en-US"
      />
      <NetflixHome
        Large={false}
        title={"Trending"}
        fetctUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_networks=213`}
      />
      <NetflixHome
        Large={false}
        title={"Acction"}
        fetctUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US`}
      />
      <NetflixHome
        Large={false}
        title={"Comedy"}
        fetctUrl={`https://api.themoviedb.org/3/discover/movie/?api_key=${apikey}&with_networks=28`}
      />
      <NetflixHome
        title={"Horror"}
        fetctUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_networks=35`}
      />
      <NetflixHome
        Large={false}
        title={"Romance"}
        fetctUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=27`}
      />
      <NetflixHome
        Large={false}
        title={"documentry"}
        fetctUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_networks=99`}
      />
    </div>
  );
};

export default Movie;
