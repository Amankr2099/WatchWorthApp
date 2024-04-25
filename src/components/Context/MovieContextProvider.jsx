import { useState } from "react";
import MovieContext from "./MovieContext";

const MovieContextProvider = ({ children }) => {

  const [searchMovies, setSearchMovies] = useState([]); //to store searched movie result
  const [topMovies, setTopMovies] = useState([]);        //to store home movie result
  


  return (
   
    <MovieContext.Provider
      value={{
        searchMovies,
        setSearchMovies,
        topMovies,
        setTopMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContextProvider };
