import React from 'react';
import Testimonalcard from './Testimonalcard';

export default function Testmonals() {
  const testimonals=[{
    name:"john",
    rating:"5",
    review:`We were at The French Gourmet a few weeks ago with some clients from Texas . I am finally getting back to tell you that we had a wonderful evening! The food, the service, the host, EVERYTHING was perfect! Thank you again for making TFG such a special place to be.
    We hope to see you again soon. Keep up the good work !`
  },{
    name:"Ravi",
    rating:"4.5",
    review:`Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment. My husband was very impressed and we can’t wait for our parents to come visit so that we can share our new favorite place with them.`
  },{
    name:"Senthil",
    rating:"5",
    review:`WOW!!! What an outstanding dinner you prepared at the Johnstons on Friday evening!!! It was an honor for me to be invited and experience firsthand your incredible culinary gift! MERCI BEAUCOUP seems soooooooo inadequate!
    Count on me for spreading the good word about THE FRENCH GOURMET! Thank you again for offering such a gift of self to support IVC San Diego’s Della Strada.`
  },
{
  name:"Sathish",
  rating:"4",
  review:`Thanks again this year for having our TCSD at your fine restaurant last Monday evening.

  The food, service, ambience and more was all superb!!! On behalf of us all, fight on!`
}]
  return (
    <div className='testimonals'>
      <h2 className='h2-w' style={{textDecorationLine:"underline"}}>Testmonals</h2>
      <section style={{display:"flex",gap:".5rem",justifyContent:"space-evenly"}}>
        {testimonals.map((data,index)=><Testimonalcard key={index} name={data.name} review={data.review} rating={data.rating}/>)}
      </section>
      {/*  */}
    </div>
  );
}
