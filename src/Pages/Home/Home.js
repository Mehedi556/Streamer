import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SingleMovie from './SingleMovie';

const Home = () => {
    const [movies, setMovies]= useState([]);
    const [searchState, setSearchState] = useState("");
    const [selected, setSelected] = useState({});

    console.log(movies);

    const api_url = "https://api.themoviedb.org/3";
    const image_path = "https://image.tmdb.org/t/p/original";

    const fetchMovies = async () => {
    const type = searchState ? "search" : "discover"
    const {data: {results}} = await axios.get(`${api_url}/${type}/movie`, {
        params: {
            api_key: process.env.REACT_APP_movie_api_key,
            query: searchState
        }
    })

    console.log(results[0]);
    setMovies(results)

    setSelected(results[0])

    }

    useEffect(() => {
    fetchMovies()
    } , [])

    const renderMovies = () => {
    movies.map(movie => <SingleMovie key={movie.id} movie={movie}></SingleMovie>
    )
   }

   const searchFunction = (event) => {
    event.preventDefault();
    fetchMovies(searchState)
  }

    return (
        <>
        <div className="navbar bg-base-100 flex justify-between fixed w-full max-w-screen-2xl m-auto bg-gradient-to-r from-slate-600 to-slate-800 py-5 mb-32">
          <div className="">
            <p className="normal-case text-5xl font-bold text-white">Streamer</p>
          </div>

          <div className='mt-5'>
              <form onSubmit={searchFunction}>
                  <input type="text" className='input input-bordered rounded text-white px-10 bg-transparent text-black search item border-red-600' onChange={(e) => setSearchState(e.target.value)} />
                  <button className='btn bg-red-600 border-none ml-2 rounded' type='submit'>Search</button>
              </form>
          </div>

          <div className="mt-5 ">
            <ul className="menu menu-horizontal px-1 gap-1">
              <li className='bg-red-600 text-white font-bold rounded'><a>Login</a></li>
              <li className='bg-red-600 text-white font-bold rounded'><a>Register</a></li>
            </ul>
          </div>
        </div>


        <div className='hero pt-[50%]' style={{backgroundImage:`url('${image_path}${selected.backdrop_path}')`}}>
          <div className=' text-white' >
          <button className="btn bg-red-600 border-none rounded btn-sm">Play Trailer</button>
          <h1 className='hero-title'>{selected?.title}</h1>
          {selected.overview ? <p>{selected.overview}</p> : null}
        </div>
        </div>
        








        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-16'>
            {/* {renderMovies()} */}
            {
                movies.map(movie => <SingleMovie key={movie.id} movie={movie}></SingleMovie>
                )
            }
        </div>
        </>
        
    );
};

export default Home;