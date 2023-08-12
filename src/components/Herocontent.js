import React from 'react';
import Primarybutton from './Primarybutton';
import Heading from './Heading';

export default function Herocontent({heading,subheading,content}) {
  return (
    <div className='hero_text'>
      <Heading  heading={"Little Lemon"} subheading={"Chicago"} h_color={"rgba(237, 239, 238, 1)"}/>
      <p className='p-l'>{content}</p><br></br>
      <Primarybutton text={"Reserve Table"} path={'/bookingtable'}/>
    </div>
  );
}
