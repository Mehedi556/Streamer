import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleMovie from './SingleMovie';

const Home = () => {
    const [movies, setMovies]= useState([]);
    console.log(movies);

    const api_url = "https://api.themoviedb.org/3"

   const fetchMovies = async () => {

    const {data: {results}} = await axios.get(`${api_url}/discover/movie`, {
        params: {
            api_key: process.env.REACT_APP_movie_api_key
        }
    })

    // console.log(data);
    setMovies(results)

   }

   useEffect(() => {
    fetchMovies()
   } , [])

   const renderMovies = () => {
    movies.map(movie => <SingleMovie key={movie.id} movie={movie}></SingleMovie>
    )
   }

    return (
        <div className='container'>
            {/* {renderMovies()} */}
            {
                movies.map(movie => <SingleMovie key={movie.id} movie={movie}></SingleMovie>
                )
            }
        </div>
    );
};

export default Home;