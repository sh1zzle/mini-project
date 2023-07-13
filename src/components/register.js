import React, { useState } from 'react';
import './style.css';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='form-container'>
      <h1 class='text-3xl font-bold'>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='wrapper'>
          <label>Full Name</label>
          <input
            type='name'
            placeholder='Full Name'
            id='name'
            name='name'
            value={name}
          />
        </div>
        <div className='wrapper'>
          <label htmlFor='email'>Email address</label>
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
            Register
          </button>
        </div>
      </form>
      <button
        className='w-full border-none'
        onClick={() => {
          props.onFormSwitch('login');
        }}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
