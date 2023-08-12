import React from 'react';
import Heading from './Heading';

export default function About() {
  return (
    <div className='about'>
    <h2 style={{textDecorationLine:"underline"}}>About us</h2>
    <section id='about' className='about-cont'>
      <article className='hero_text'>
      <Heading  heading={"Little Lemon"} subheading={"Chicago"} h_color={"rgba(73, 94, 87, 1)"}/>
      <p className='p-l'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p></article>
      <img src='hero_image.webp' className='hero_image' style={{float:'right'}} alt='about'/>
    </section></div>
  );
}
