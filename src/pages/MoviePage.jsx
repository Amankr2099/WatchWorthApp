import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";

export const MoviePage = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/")[2];

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const [movie, setMovie] = useState({});
  const url = import.meta.env.VITE_API_BASE_URL + `movie/${movieId}?&api_key=` + import.meta.env.VITE_API_KEY ;

  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(url);
      if (data) {
        setMovie(data);
        setLoading(false);
        // console.log(movie);
      }
    } catch (error) {
      setErrorMessage(error.message)
      setError(true)
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <div className="container">
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
          <div>
            {isError ? (
              <ErrorMessage errorMessage={errorMessage} />
            ) : (
              <>
                <div className="mt-5">
                  <Link to={"/"}>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-3"
                    >
                      Go home
                    </button>
                  </Link>
                </div>
                <div
                  className="card mt-5 mx-auto"
                  style={{ maxWidth: "1040px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : "https://via.placeholder.com/600x500?text=Image is not available"
                        }
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title my-4 fs-3">
                          {movie.original_title}
                        </h5>

                        <p className="card-text my-4 fw-light">
                          {movie.tagline}
                        </p>
                        <p className="card-text my-4 fw-light">
                          {movie.overview}
                        </p>

                        <div className="flex justify-content-around">
                          <small className="text-body-secondary card-text">
                            Genre
                          </small>
                          {movie.genres.map((item, index) => {
                            return (
                              <p
                                className="badge border border-grey bg-secondary bg-gradient rounded-5 fw-light mx-2"
                                key={index}
                              >
                                {item.name}
                              </p>
                            );
                          })}
                        </div>

                        {movie.release_date && (
                          <p className="card-text">
                            <small className="text-body-secondary">
                              Realise Date : {movie.release_date}
                            </small>
                          </p>
                        )}

                        {movie.runtime && (
                          <p className="card-text">
                            <small className="text-muted">
                              Runtime : {movie.runtime} m
                            </small>
                          </p>
                        )}

                        {movie.homepage && (
                          <p className="card-text">
                            <small className="text-body-secondary">
                              Visit Production :{" "}
                              <a href={`${movie.homepage}`} target="blank">
                                {movie.homepage}
                              </a>
                            </small>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
