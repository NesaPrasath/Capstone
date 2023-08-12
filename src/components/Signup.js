import React from 'react';
import Submitbtn from './Submitbtn';

export default function Signup() {
  return (
    <div className='reserve-table'>
      <form>
        <h1>Sign up</h1><br/>
        <label htmlFor='Username' className='f-label'>Username<span className='req'>*</span></label>
        <input type='text' placeholder='Username' required className='input'/>
        <label htmlFor='password' className='f-label'>Password<span className='req'>*</span></label>
        <input type='password' placeholder='enter 6 digit password' required className='input'/>
        <label htmlFor='email' className='f-label'>Email<span className='req'>*</span></label>
        <input type='email' placeholder='enter 6 digit password' required className='input'/>
        <Submitbtn type={"submit"} text={"Creat Account"}/>
      </form>
    </div>
  );
}
