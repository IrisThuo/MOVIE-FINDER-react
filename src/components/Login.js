
import React , {useState} from 'react';

function Login(props) {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')


    function handleSubmit(e){
        e.preventDefault()
    }

   

    return (
        <div className='auth-form-container'>
            <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
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
            <button onClick={() => props.onFormSwitch('register')}>New Here? Register</button>
        </div>
    );
}

export default Login;