import './App.css';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Header3 from './Components/Header3';
import Header4 from './Components/Header4';
import Header5 from './Components/Header5';
import Header6 from './Components/Header6';
import Home from './Components/Home';

function App() {
  const apikey=`fc85b8aebcdd175a81c9ce4e23df26bf`
  const url=`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`
  return (
    <div className="">
      <Home/>
      <Header2/>
      <Header3/>
      <Header4/>
      <Header5/>
      <Header6/>
      
      <h1 className="text-3xl font-bold underline">

    </h1>
    
    </div>
  );
}

export default App;
