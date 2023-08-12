import React from 'react';
import Primarybutton from './Primarybutton';
import Card from './Card';

export default function Specialsection() {
    const card_data=[{img:'card1.jpg',d_name:"Geek salad",description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",price:"$10.5"},
    {img:'card2.jpg',d_name:"Veg Buger",description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",price:"$12.5"},
    {img:'card3.jpg',d_name:"Creamy Boursin Pasta",description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",price:"$11"},
    {img:'card4.jpg',d_name:"Spaghetti Bolognese",description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",price:"$9.45"}]
  return (
    <div className='special_div'>
      <section className='head-special'>
        <h1 className='h1-spec'>Specials</h1>
        <Primarybutton text={"Online Menu"}/>
      </section>
      <section className='card_section'>{card_data.map(data=><Card key={data.d_name} dish_name={data.d_name} path={data.img} content={data.description} price={data.price}/>)}</section>
    </div>
  );
}
