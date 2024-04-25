import React, { useContext } from 'react'
import MovieContext from './Context/MovieContext';
import { MovieCard } from './MovieCard';

export const SearchedMovies = () => {
  const {searchMovies} = useContext(MovieContext)

  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-2 m-2"> 
          {searchMovies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
   
  )
} 
