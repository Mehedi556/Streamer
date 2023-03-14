import React from 'react';

const SingleMovie = ({movie}) => {
    const image_path = "https://image.tmdb.org/t/p/w500/"
    console.log(movie);
    return (
        <div>
            {movie.poster_path ? <img src={`${image_path}${movie.poster_path}`} alt=""/>
            :
            null
        }
            <h1>{movie.title}</h1>
        </div>
    );
};

export default SingleMovie;