import React from 'react'
import './Movie.css';
const API = process.env.REACT_APP_API_KEY
const  IMG_API = `https://image.tmdb.org/t/p/w500/`;
 
function Movie( {title, poster_path, overview, vote_average}) {
  return (
    <div className='movie'>
        <div className="movie-header">
            <img src={IMG_API + poster_path} alt={title}/>
        </div>
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
  )
}

export default Movie