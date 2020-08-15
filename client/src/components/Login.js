import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {

  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <label htmlFor='username'>
          Username:
          <input type='text' name='username' value={credentials.username} onChange={handleChange} label='username' />
        </label>
        <label htmlFor='password'>
          Password:
          <input type='text' name='password' value={credentials.password} onChange={handleChange} label='password' />
        </label>
      </form>
    </>
  );
};

export default Login;
