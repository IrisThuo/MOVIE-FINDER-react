import React, {useState,useEffect}from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieView from "./MovieView";
import AddMovie from '../components/AddMovie';


function Home() {
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
  
    function handleUpdateMovie(updatedMovieObj) {
      const updatedMovies = movies.map((movie) => {
        if (movie.id === updatedMovieObj.id) {
          return updatedMovieObj;
        } else {
          return movie;
        }
      });
      setMovies(updatedMovies);
    }
  
    function handleDeleteMovie(id) {
      const updatedMovies = movies.filter((movie) => movie.id !== id);
      setMovies(updatedMovies);
    }
    return (
    <div>

    <BrowserRouter>
    <Switch>
      <Route path="/movies">
        <MovieView onMovieDelete={handleDeleteMovie}/>
      </Route>
     <Route path="/newMovie">
     <AddMovie onAddMovie={handleAddMovie} onUpdateMovie={handleUpdateMovie} />
     </Route>
    </Switch>
  </BrowserRouter>
       
    </div>
    )
}

export default Home;