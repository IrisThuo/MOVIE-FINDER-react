import React,{ useEffect, useState} from 'react';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';

function MovieView() {
    const [movies, setMovies] = useState()
    
    
    useEffect(()=> {
        fetch("http://localhost:9292/movies")
        .then(res => res.json())
        .then((movies) => {
            console.log(movies)
            setMovies(movies)
            
        })
    },[])
  
    function handleAddMovie(newMovie) {
      setMovies([...movies, newMovie]);
    }

return(
    <div className="movie-container">
    <div className="lil-searchy-search">
    <SearchBar/>
    <a href = "/newMovie">
    <button>+ ADD MOVIE</button>
    </a>
    </div>
      {movies.map((movie, index) => (
          <Movie
          key={index}
          data={movie}
          />
      ))}
      </div>

)
{/*
    const [movies, setMovies] = useState()
    
    
    useEffect(()=> {
        fetch("http://localhost:9292/movies")
        .then(res => res.json())
        .then((movies) => {
            console.log(movies)
            setMovies(movies)
            
        })
    },[])

    function handleAddMovie(newMovie) {
        setMovie([...movies, newMovie]);
      }


    return (
        <div>

        <SearchBar/>
        <a href = "/newMovie">
        <button>+ ADD MOVIE</button>
        </a>
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
            */}
}

export default MovieView;