import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixHome from "./NetflixHome";
import Movie from "./Components/Movie";
import Pop from "./Pop";
import Signin from "./Components/Signin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Lo" element={"Login"} />
      <Route path="/Net" element={<NetflixHome />} />
      <Route path="/Movie" element={<Movie />} />
      <Route path="/M" element={<Pop />} />
      <Route path="/signin" element={<Signin />} />

      {/* <h1>Armaa</h1> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
