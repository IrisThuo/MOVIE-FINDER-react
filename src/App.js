import React from "react";
import MovieView from "./views/MovieView";
import "./App.css";

function App() {
  return (
    <div className="App">
    <header>
      <input className="search" type="text" placeholder="Search..."/>
    </header>
      <MovieView/>
    </div>
  );
}

export default App;
