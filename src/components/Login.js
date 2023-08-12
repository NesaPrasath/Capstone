import React from 'react';
import Submitbtn from './Submitbtn';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='reserve-table'>
      <form>
        <h1>Login</h1><br/>
        <label htmlFor='Username' className='f-label'>Username<span className='req'>*</span></label>
        <input type='text' placeholder='Username' required className='input'/>
        <label htmlFor='password' className='f-label'>Password<span className='req'>*</span></label>
        <input type='password' placeholder='enter 6 digit password' required className='input'/>
        <Submitbtn type={"submit"} text={"login"}/><br/>
        <p className='p-l p-w'>new user click here</p>
        <Link to={'/signup'} className='p-w p-l'>Create Account</Link>
      </form>
    </div>
  );
}
