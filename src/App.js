import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieView from "./views/MovieView";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      <header>
        <h1>MOVIE FINDER</h1>
      </header>

      <BrowserRouter>
        <Switch>
          <Route path="/movies">
            <MovieView />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* {currentForm == 'login' ? <Login onFormSwitch={toggleForm}/> : <Register  onFormSwitch={toggleForm}/> } */}

      <footer></footer>
    </div>
  );
}

export default App;
