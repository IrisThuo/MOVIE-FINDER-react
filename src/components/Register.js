import React,{useState} from 'react';

function Register(props) {

    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
        <div>
        <label>SET USERNAME</label>
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
        <label>SET PASSWORD</label>
        <input
         className="password"
         type="password" 
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button >WELCOME</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already Have An Account? Login</button>
        </div>
    );
}

export default Register;