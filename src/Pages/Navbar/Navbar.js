import axios from 'axios';
import React, { useState } from 'react';

const Navbar = () => {
  const [searchState, setSearchState] = useState("");

  const api_url = "https://api.themoviedb.org/3"

    const fetchMovies = async (searchState) => {

    const {data: {results}} = await axios.get(`${api_url}/search/movie`, {
        params: {
            api_key: process.env.REACT_APP_movie_api_key,
            query: searchState
        }
    })

    // console.log(data);
    }




  const searchFunction = (event) => {
    event.preventDefault();
    fetchMovies(searchState)
  }
    return (
        <div>
            
        </div>
    );
};

export default Navbar;