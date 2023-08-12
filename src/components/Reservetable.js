import React from 'react';
import Tableform from './Tableform';
import Heading from './Heading';

export default function Reservetable({heading,subheading}) {
  return (
    <div className='reserve-table'>
        <Heading  heading={"Little Lemon"} subheading={"Chicago"}/>
        <Tableform/>
    </div>
  );
}
