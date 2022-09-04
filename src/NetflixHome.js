import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const NetflixHome = ({ title, fetctUrl, Large }) => {
  const [Movies, setMovies] = useState([]);
  const [pop, setpop] = useState(false);
  const [ids, setids] = useState("");
  const [popup, setpopup] = useState(false);
  const [MovieName, setMovieName] = useState("armaan");
  const [MovieImg, setMovieImg] = useState("");
  const [date, setdate] = useState(2022);
  const [overviews, setoverviews] = useState("");
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
              setids(items.id);
              setpopup(true);
              setpop(true);
              setMovieName(items.original_name || items.title || Movies.name);
              setMovieImg(`${burl}${items.poster_path}`);
              setdate(items.release_date);
              setoverviews(items.overview);
            }}
          />
        ))}
        {Movies.map((items, id) => {
          return <div>{Movies.id === ids ? Movies.id : "khan"}</div>;
        })}
        {/*  */}
      </div>
      <div>
        {/* <button onClick={() => setpop(true)}>ok</button> */}
        {pop ? (
          <div
            class="relative z-10  md:w-1/2 lg:w-full sm:w-1/3"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bg-"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg  md:w-1/2 lg:w-full  bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-black text-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          class="leading-6 text-center text-2xl text-center font-bold text-white"
                          id="modal-title "
                        >
                          {MovieName}
                          {"  "}
                          {date?.substring(0, 4)}
                        </h3>
                        <div class="ml-20 mt-4 w-[400px]">
                          <img className="bg-cover" src={MovieImg} alt="" />
                        </div>
                        <h1 className="text-sm mt-4 w-full  md:w-1/2 lg:w-full sm:h-12">
                          {overviews}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-200 px-4 justify-center py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        alert("kaisa laga mera mazaak");
                      }}
                      type="button"
                      class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Watch
                    </button>
                    <button
                      onClick={() => setpop(false)}
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
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
