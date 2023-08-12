import React from 'react';
import { Link } from 'react-router-dom';

export default function Primarybutton({text,path}) {
  return (
    <>
      <Link to={path}><button className='primary_btn'>{text}</button></Link>
    </>
  );
}
