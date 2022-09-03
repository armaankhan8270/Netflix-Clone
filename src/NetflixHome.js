import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const NetflixHome = ({ title, fetctUrl, Large }) => {
  const [Movies, setMovies] = useState([]);
  const [id, setid] = useState("");
  const burl = "http://image.tmdb.org/t/p/w185/";
  useEffect(() => {
    const fetchdata = async () => {
      const reques = await axios.get(fetctUrl);
      setMovies(reques.data.results);
      console.log(reques);
    };
    fetchdata();
  }, []);
  return (
    <div className="w-screen bg-[#000000] text-white  shadow-2xl  ">
      <h1 className="text-2xl font-bold text-start ml-3 pt-2 overflow-hidden ">
        {title}
      </h1>
      <div className="flex grid-cols-4 border-2 border-[#333333]  p-5">
        {Movies.map((items, id) => (
          <img
            className={` mr-3 w-full object-contain hover:border-2 border-[#333333] rounded p-2  ${
              Large
                ? "max-h-64 hover:scale-[1.09]"
                : "max-h-24 hover:scale-[1.10] "
            } `}
            src={`${burl}${Large ? items.poster_path : items.backdrop_path}`}
            alt=""
            onClick={() => {
              setid(items.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NetflixHome;
// {Movies?.map((items, id) => {
//   return (
//     <div className="flex flex-row m-2" key={id}>
//       <img
//         width={"225px"}
//         src={`${burl}${items.poster_path}`}
//         alt={"a"}
//         className="w-96"
//       />
//       <h1>{items.title}</h1>
//     </div>
//   );
// })}
{
  /* <div className="shadlow-lg text-whit border-2 border-[#333333] bg-[#00000]">
        <h1 className="text-3xl">{title}</h1>
        <div className="w-screen  flex flex-row mr-2 hover:scale-[1.08] overflow-x-scroll ">
          
        </div>
      </div> */
}
