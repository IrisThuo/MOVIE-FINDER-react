import React from "react";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import Home from "./views/Home";
import SearchBar from "./components/SearchBar";

function App() {



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
    <div className="lil-searchy-search">
    <SearchBar/>
    <a href = "/newMovie">
    <button>+ ADD MOVIE</button>
    </a>
    </div>
    <Home/>
    

      {/* {currentForm == 'login' ? <Login onFormSwitch={toggleForm}/> : <Register  onFormSwitch={toggleForm}/> } */}

  
    </div>
  );
        }

export default App;
