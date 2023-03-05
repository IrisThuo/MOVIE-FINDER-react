
import React , {useState} from 'react';

function Login(props) {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')


    function handleSubmit(e){
        e.preventDefault()
  }

   

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
            <label>USERNAME</label>
            <input
             className="username"
             type="text" 
             placeholder="Enter Username"
             name="username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             />
             </div>
             <div>
            <label>PASSWORD</label>
            <input
             className="password"
             type="password" 
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button >LOG IN</button>
            </form>
            <a href="">New Here? Register</a>
        </div>
    );
}

export default Login;