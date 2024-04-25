import React, { useContext, useEffect, useState } from "react";
import { TopMovies } from "../components/TopMovies";
import MovieContext from "../components/Context/MovieContext";
import axios from "axios";
import { ErrorMessage } from "../components/ErrorMessage";

export const Home = () => {
  const { setTopMovies } = useContext(MovieContext);

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [homeFilter, setHomeFilter] = useState("now_playing");

  const getTopMovies = async (homeFilter) => {
    const url =
      import.meta.env.VITE_API_BASE_URL +
      `movie/${homeFilter}?language=en-US&page=1&api_key=` +
      import.meta.env.VITE_API_KEY;
    try {
      const { data } = await axios.get(url);
      if (data) {
        setLoading(false);
        setTopMovies(data.results);
        // console.log(topMovies);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setError(true);
    }
  };

  useEffect(() => {
    getTopMovies(homeFilter);
  }, [homeFilter]);

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
                <select
                  className="form-select text-center mb-4"
                  style={{ maxWidth: "180px" }}
                  aria-label="Default select example"
                  value={homeFilter}
                  onChange={(e) => {
                    setHomeFilter(e.target.value);
                  }}
                >
                  <option value="now_playing">Now Playing</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="popular">Popular</option>
                  <option value="top_rated">Top Rated</option>
                </select>
                <TopMovies />
              </>
            )}
          </>
        )}
      </div>
    </>
   
  );
};
