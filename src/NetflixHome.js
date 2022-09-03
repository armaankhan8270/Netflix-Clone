import React, { useState, useEffect } from "react";
import axios from "axios";
const NetflixHome = ({ title, fetctUrl }) => {
  const [Movies, setMovies] = useState([]);
  const burl = "http://image.tmdb.org/t/p/w185/";
  useEffect(() => {
    const fetchdata = async () => {
      const reques = await axios.get(fetctUrl);
      setMovies(reques.data.results);
      console.log(Movies.poster_path);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <div className="oshadlow-lg text-white border-2 border-[#333333] bg-[#0000]">
        <h1 className="text-3xl">{title}</h1>
        <div className="flex flex-row flex-wrap">
          {Movies?.map((items, id) => {
            return (
              <div className="mr-2" key={id}>
                <img
                  width={"100%"}
                  src={`${burl}${items.poster_path}`}
                  alt={"a"}
                  className="object-contain w-full mr-2"
                />
                <h1>{items.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NetflixHome;
