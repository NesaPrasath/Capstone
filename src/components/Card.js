import React from 'react';
import Secondarybutton from './Secondarybutton';

export default function Card({path,dish_name,price,content}) {
  return (
    <div className='card'>
      <figure><img src={path} alt={dish_name} className='card_img'/></figure>
      <section className='card_heading'>
        <h3>{dish_name}</h3>
        <h5 className='price'>{price}</h5>
      </section>
      <p className='p-l'>{content}</p>
      <Secondarybutton text={"Order Online"} style={{display:"inline"}} />
    </div>
  );
}
