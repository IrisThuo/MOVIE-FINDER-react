import React,{ useEffect, useState} from 'react';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';

function MovieView() {

    const [movies, setMovies] = useState()
    
    useEffect(()=> {
        fetch("http://localhost:9292/movies")
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setMovies(data)
            
        })
    },[])

//    const moviesR = movies.map((movie , index) => {
//     return (
//         <div>
//         <Movie
//             key={index}
//             movie={movie}
//             />
//         </div>
//     )
//    })

    return (
        <div>
        <SearchBar/>
        <button>+ ADD MOVIE</button>
        <div className="movie-container">
            {movies.map((movie, index) => (
                <Movie
                key={index}
                data={movie}
                />
            ))}
        </div>
        </div>
    );
}

export default MovieView;