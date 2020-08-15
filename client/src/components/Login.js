import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const history = useHistory()

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    localStorage.getItem('bubbleToken') && history.push('/bubbles')
  })

  const handleLogin = e => {
    e.preventDefault()
    Axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        setError('')
        localStorage.setItem('bubbleToken', res.data.payload)
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <label htmlFor='username' onSubmit={handleLogin}>
          Username:
          <input type='text' name='username' value={credentials.username} onChange={handleChange} label='username' />
        </label>
        <label htmlFor='password'>
          Password:
          <input type='password' name='password' value={credentials.password} onChange={handleChange} label='password' />
        </label>
        <button onClick={handleLogin}>Log in</button>
        {error && <p style={{ color: 'red' }}>Sorry, that login didn't seem to work</p>}
      </form>
    </>
  );
};

export default Login;
