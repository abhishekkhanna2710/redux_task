import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from "../../reduxes/userData.js"

function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name: username,
            email: email,
            password: password,
            loggedIn: true
        }))
    }
    return (
        <div className='Login'>

            <form className='login_form'>
                <h1>Login Form</h1>

                <input
                    type="name"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type='submit' className='submit_form' onSubmit={(e) => handleSubmit(e)}>Submit</button>

            </form>

        </div>
    )
}

export default Login