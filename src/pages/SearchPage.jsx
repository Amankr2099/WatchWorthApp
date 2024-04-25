import React, { useContext, useEffect, useState } from "react";
import { SearchedMovies } from "../components/SearchedMovies";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ErrorMessage } from "../components/ErrorMessage";
import MovieContext from "../components/Context/MovieContext";

export const SearchPage = () => {
  const location = useLocation();
  const movieName = location.pathname.split("/")[2];

  const { searchMovies, setSearchMovies } = useContext(MovieContext);

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getSearchedMovies = async (movieName) => {
    const url =
      import.meta.env.VITE_API_BASE_URL +
      `search/movie?query=${movieName}&language=en-US&page=1&api_key=` +
      import.meta.env.VITE_API_KEY;
    try {
      const { data } = await axios.get(url);
      if (data) {
        setSearchMovies(data.results);
        // console.log(data.results);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);

      setError(true);
    }
  };

  useEffect(() => {
    // console.log(movieName);
    getSearchedMovies(movieName);
  }, [movieName]);

  return (
    <>
      <div className="container text-center border border-tertiary rounded-4 p-3">
        {isLoading ? (
          <div>
            <div className="spinner-border my-5  text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border my-5  text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border my-5  text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {isError ? (
              <ErrorMessage errorMessage={errorMessage} />
            ) : (
              <>
                {searchMovies.length === 0 && 
                  <div className="my-5 bg-secondary text-center text-white p-5 rounded-3">
                    <h1>No such movie found</h1>
                  </div>
                }
                <SearchedMovies />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
