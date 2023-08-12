import React from 'react';
import Herocontent from './Herocontent';

export default function Herocard() {
    const data={
        heading:"Little Lemon",
        subheading:"Chicago",
        content:`We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.Savor every moment as our skilled chefs meticulously craft each dish, using only the freshest, locally-sourced ingredients to ensure a symphony of flavors in every bite. From delectable appetizers to sumptuous main courses and divine desserts, our menu is a celebration of culinary artistry, designed to delight even the most discerning palates.`
    };
  return (
    <div className='hero_card'>
      <Herocontent heading={data.heading} subheading={data.subheading} content={data.content}/>
      <img src='hero_image.webp' className='hero_image' alt='hero_image'/>
    </div>
  );
}
