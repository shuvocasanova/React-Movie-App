import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';


const API = process.env.REACT_APP_API_KEY
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API}`;
function App() {
const [movies, setMovies] = useState([]);

const movieList = async () => {
  const movieList = await fetch(FEATURED_API);
  const movieJson = await movieList.json();
  setMovies(movieJson.results)

  // await fetch(FEATURED_API)
  //  .then((res) => res.json())
  //   .then((data)=> {
  //    console.log(data.results)
  //    setMovies(data.results)
  //  })
}

const setStateofParrent = (data) => {
  setMovies(data);
}

useEffect(() => {
  movieList();
}, [])

console.log(movies)

  return (
    <>
    <Header setStateofParrent={setStateofParrent}/>
    <div className='movie-container'>
      
      {movies?.map((movie) => (
        <Movie {...movie} key={movie.id}/>
      ))}

    </div>
    </>
  )
}

export default App
