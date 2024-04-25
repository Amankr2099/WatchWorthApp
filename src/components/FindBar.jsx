import React, { useContext, useState } from "react";
import MovieContext from "./Context/MovieContext";
import { useNavigate } from "react-router-dom";

export const FindBar = () => {

  const [searchedMovie, setSearchedMovie] = useState("");
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchedMovie) {
      navigate(`/search/${searchedMovie}`)
    }
  };

  return (
    <div className="container text-center mb-3">
      <div className="mx-auto" style={{ maxWidth: "230px"}}> 
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search your movie"
                aria-label="Search"
                value={searchedMovie}
                onChange={(e) => {
                  setSearchedMovie(e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => {
                  handleSearch();
                }}
              >
                <i className="fas fa-search" />
              </button>
            </form>
          </div>

    </div>
  );
};
