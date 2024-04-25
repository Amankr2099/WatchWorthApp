import React, { useContext, useState } from "react";
import { MovieCard } from "./MovieCard";
import MovieContext from "./Context/MovieContext";

export const TopMovies = () => {
  const { topMovies } = useContext(MovieContext);

  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-2 m-2">
      {topMovies.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </div>
  );
};
