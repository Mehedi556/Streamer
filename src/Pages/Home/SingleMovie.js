import React from 'react';

const SingleMovie = ({movie}) => {
    const image_path = "https://image.tmdb.org/t/p/w500/"
    // console.log(movie);
    return (
        <div>
            {movie.poster_path ? <img src={`${image_path}${movie.poster_path}`} alt=""/>
            :
            <div className='w-full min-h-[84%] text-center bg-white text-2xl items-center flex justify-center '>
                No image found
            </div>
        }
            <h1 className='pt-4 pb-7 text-white text-2xl'>{movie.title}</h1>
        </div>
    );
};

export default SingleMovie;