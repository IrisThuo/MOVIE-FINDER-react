import React, {useState,useEffect}from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddMovie from '../components/AddMovie';
import Movie from '../components/Movie';


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

    const movieArray = movies.map((movie) => {
        return(
        <div className="movie-container" style={{ display: "flex" , flex_wrap: "wrap", justify_content: "center"}}>
        <div className="col-2 mb-3">
       <div className="card " style={{width: "18rem"}}>
        <img src= "https://loremflickr.com/360/450" className="card-img.top" alt= "movie poster"/>
   
           <div className="card-body">
   
           <h3 className="card-text">{movie.title}</h3>
           <p className="card-text">Release-year: {movie.year}</p>
           <p className="card-text">Runtime: {movie.runtime}</p>
           <p className="card-text">{movie.description}</p>
           </div>
   
       </div>
</div>
        </div>
        )
      })

    return (
    <div>
     
    <BrowserRouter>
    <Switch>
     <Route path="/newMovie">
     <AddMovie onAddMovie={handleAddMovie} onUpdateMovie={handleUpdateMovie} />
     </Route>
    </Switch>
  </BrowserRouter>
       {movieArray}
 </div>
    )
}

export default Home;