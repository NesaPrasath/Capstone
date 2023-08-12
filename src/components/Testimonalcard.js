import React from 'react';

export default function Testimonalcard({rating,review,name,image}) {
  return (
    <div className='test_card'>
      <h3>&#11088;{rating}/5</h3>
      <article style={{display:"flex",justifyContent:"flex-start",gap:"2rem",margin:"1rem 0px"}}><section style={{height:"100px",width:"100px",overflow:"hidden",borderRadius:"50%"}}><img src='profile.jpg' alt='pic' style={{height :"100%",width:"100%",objectFit:"cover"}}/></section>
      <h3 style={{padding:"2rem 0rem"}}>{name}</h3></article>
      <p className='p-l'>{review}</p>
    </div>
  );
}
