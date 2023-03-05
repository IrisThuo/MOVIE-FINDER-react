import React from 'react';



function Movie({title, description,runtime, year }) {
    return (
        <div className="movie">
        
            <img src= "https://loremflickr.com/320/250" alt= "movie poster"/>
        
        <div className="movie-info">
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{runtime}</p>
        </div>

        <div className='movie-over'>
            <h2>Overview</h2>
            <p>{description}</p>
        </div>

        </div>
    );
}

export default Movie;

