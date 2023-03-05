import React,{ useEffect, useState} from 'react';
import Movie from '../components/Movie';

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
            {movies.map((movie) => (
                <Movie/>
            ))}
        </div>
    );
}

export default MovieView;