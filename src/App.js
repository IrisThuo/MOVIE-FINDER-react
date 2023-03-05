import React from "react";
import MovieView from "./views/MovieView";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
    <header>
     <h1>MOVIE FINDER</h1>
    </header>
      <SearchBar/>
      <MovieView/>
      <footer>
      
      </footer>
    </div>
  );
}

export default App;
