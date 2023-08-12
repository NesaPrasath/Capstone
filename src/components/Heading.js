import React from 'react';

export default function Heading({heading,subheading,h_color}) {
  return (
    <div className='c-head'>
      <h1 className='h1-cl'>{heading}</h1>
      <h3 className='h3-cl' style={{color:h_color}}>{subheading}</h3>
    </div>
  );
}
