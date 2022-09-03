 const apikey = `fc85b8aebcdd175a81c9ce4e23df26bf`;

 const Request={
    fetchTrending : `https://api.themoviedb.org/3/trending/all/week?api_key=fc85b8aebcdd175a81c9ce4e23df26bf&language=en-US `,
    fetchNetflixOriginals : `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_networks=213` ,
    fetchTopRated : `/movie/top_rated?api_key=${apikey}&language=en-US` ,
    fetchActionMoies:`/disover/movie/?api_key=${apikey}&with_generes=28`,
    fetchComedyMoies:`/disover/movie/?api_key=${apikey}&with_generes=35`,
    fetchHorrorMoies:`/disover/movie/?api_key=${apikey}&with_generes=27`,
    fetchRomanticMoies:`/disover/movie/?api_key=${apikey}&with_generes=10479`,
   
 }
 export default Request