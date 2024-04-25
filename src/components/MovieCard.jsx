import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({movie}) => {



  return (
    <Link to={`/movie/${movie.id}`} className='text-decoration-none'>
    <div className="col ">
    <div className="card ">
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/600x500?text=Image is not available'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p className="card-text fw-lighter">Realise date : {movie.release_date}</p>
      </div>
    </div>
  </div>
    </Link>
     

  )
}
  // https://via.placeholder.com/600x300?text=Image"
