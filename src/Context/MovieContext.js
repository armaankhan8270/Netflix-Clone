import { createContext } from "react";

const MovieContext=createContext()

const StateMovieContext=(children)=>{
const title='armaanssss'


    return(
        <MovieContext.Provider value={{title}}>
{children}
        </MovieContext.Provider>
    )
}
export default StateMovieContext