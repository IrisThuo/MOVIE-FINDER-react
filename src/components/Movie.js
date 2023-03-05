import React from 'react';



function Movie({title, description,runtime, year }) {
    return (
        <div className="movies">
        
            <img src= "https://loremflickr.com/320/240" alt= "movie poster"/>
        
        <div className='movieInfo'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

        </div>
    );
}

export default Movie;