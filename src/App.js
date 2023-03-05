import React from "react";
import MovieView from "./views/MovieView";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <MovieView/>
    </div>
  );
}

export default App;
