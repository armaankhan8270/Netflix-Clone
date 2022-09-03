import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Header2 from "./Components/Header2";
import Header3 from "./Components/Header3";
import Header4 from "./Components/Header4";
import Header5 from "./Components/Header5";
import Header6 from "./Components/Header6";
import Home from "./Components/Home";
import NetflixHome from "./NetflixHome";
import Request from "./Request";

function App() {
  const apikey = `fc85b8aebcdd175a81c9ce4e23df26bf`;
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${apikey}`;

  return (
    <div className="">
      <div className="">
        <NetflixHome
          title={"Netflix Orignals"}
          fetctUrl="https://api.themoviedb.org/3/trending/all/week?api_key=fc85b8aebcdd175a81c9ce4e23df26bf&language=en-US"
        />
      </div>
      <NetflixHome
        title={"Trending"}
        fetctUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_networks=213`}
      />
      <Home />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Header6 />
      <Footer />
    </div>
  );
}

export default App;
