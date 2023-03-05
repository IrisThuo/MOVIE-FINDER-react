import React ,{useState} from "react";
import MovieView from "./views/MovieView";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
    <header>
     <h1>MOVIE FINDER</h1>
    </header>
      <Login/>
      <SearchBar/>
      <MovieView/>
      <footer>
      
      </footer>
    </div>
  );
}

export default App;
