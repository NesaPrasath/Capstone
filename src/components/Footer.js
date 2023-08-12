import React from 'react';
import Navbar from './Navbar';

export default function Footer() {

  const data=[{heading:"Doormat Navigation",element:[{name:"Home",path:"/",blank:false},{name:"About",path:'#about',blank:false},{name:"Menu",path:'/',blank:false},{name:"Reservation",path:'/bookingtable',blank:false},{name:"Order Online",path:'/',blank:false},{name:"Login",path:'/login',blank:false}]},
{heading:"Contact",element:[{name:"Address"},{name:"littlemon@gmail.com"},{name:"6234-3432"}]},{heading:"Social Media Links",element:[{name:"Facebook",path:"https://www.facebook.com/",blank:true},{name:"Instagram",path:"https://www.instagram.com/",blank:true},{name:"twitter",path:"https://www.twitter.com/",blank:true}]}]
  return (
    <div>
      <footer>
        <img src='/logo/Asset 18@4x.png' alt='footer_logo' style={{height:"200px",width:"auto"}}/>
          {data.map(data=><section><h3>{data.heading}</h3><Navbar element={data.element} d_flex={"column"} gap={0} li_p={.25}/></section>)}
      </footer>
    </div>
  );
}
