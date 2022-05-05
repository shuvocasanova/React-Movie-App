import {useState, useContext} from 'react';
import './Header.css';

const API = process.env.REACT_APP_API_KEY
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=`

function Header({setStateofParrent}) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(searchTerm) {
            const movieList = await fetch(SEARCH_API+searchTerm);
            const movieJson = await movieList.json();
            const data = movieJson.results
            setStateofParrent(data);
            setSearchTerm("");
        }
        
    }
    // console.log(setStateofParrent, "clicked")
  return (
      <div>
          <div></div>
    <div className='search'>

        <button className='button' ><a href='/'>Home</a></button>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search' 
        value={searchTerm}
        onChange={handleChange}
        />
        </form>
    </div>
    </div>
  )
}


export default Header
