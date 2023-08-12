import React from 'react';

export default function Submitbtn({type,text}) {
  return (
    <>
    <button className='submit_btn' type={type}>{text}</button>
    </>
  );
}
