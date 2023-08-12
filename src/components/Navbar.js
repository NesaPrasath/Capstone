import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({element,d_flex,gap,li_p}) {
  return (
    <div>
      <nav>
        <ul style={{flexDirection:d_flex,gap:`${gap}rem`}}>
        {element.map(data=>{
          if(data.name[0]==='/')
          {
            return <Link key={data.name} to={data.path} className='link'><li style={{padding:`${li_p}rem`}}>{data.name}</li></Link>
          }
          else
          {
            return <a key={data.name} href={data.path} className='link' target={(data.blank?'_blank':'_parent')}><li style={{padding:`${li_p}rem`}}>{data.name}</li></a>
          }
        })}
        </ul>
      </nav>
    </div>
  );
}
