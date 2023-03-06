import React, { useState ,useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieView from "./views/MovieView";
import Login from "./components/Login";
import "./App.css";
import Movie from "./components/Movie";
import SearchBar from "./components/SearchBar";
import Register from "./components/Register";
import AddMovie from "./components/AddMovie";

function App() {

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

  {/*const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };*/}

 {/* const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
*/}
  return (
    <div className="App">
     
    <header>
    <h1>MOVIE FINDER</h1>
    </header>

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

      {/* {currentForm == 'login' ? <Login onFormSwitch={toggleForm}/> : <Register  onFormSwitch={toggleForm}/> } */}

      <div>

      
      
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
          </div>

      <footer></footer>
    </div>
  );
        }

export default App;
