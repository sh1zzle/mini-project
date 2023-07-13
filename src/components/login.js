import React, { useState } from 'react';
import style from './style.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='form-container'>
      <h1 className='text-3xl font-bold'>Sign In</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='wrapper'>
          <label htmlFor='email'>Sign in with email address</label>
          <input
            type='email'
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='********'
            id='password'
            name='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            className='border-solid border-2 border-fuchsia-200 text-white bg-[#00a47c]'
            type='submit'
          >
            Log in????
          </button>
        </div>
      </form>
      <button
        className='border-none w-full'
        onClick={() => props.onFormSwitch('register')}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
