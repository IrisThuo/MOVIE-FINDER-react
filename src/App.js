import React from "react";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import Home from "./views/Home";

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
    <Home/>
    

      {/* {currentForm == 'login' ? <Login onFormSwitch={toggleForm}/> : <Register  onFormSwitch={toggleForm}/> } */}

  
    </div>
  );
        }

export default App;
