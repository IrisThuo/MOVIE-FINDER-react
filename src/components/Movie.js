import React from 'react';



function Movie({title, description,runtime, year }) {
    return (
        <div className="movie">
        
            <img src= "https://loremflickr.com/320/240" alt= "movie poster"/>
        
        <div className="movie-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <h3>{year}</h3>
            <h3>{runtime}</h3>
        </div>

        </div>
    );
}

export default Movie;

