import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

export default function Header() {
    const ele=[{name:"Home",path:"/",blank:false},{name:"About",path:'#about',blank:false},{name:"Menu",path:'/',blank:false},{name:"Reservation",path:'/bookingtable',blank:false},{name:"Order Online",path:'/',blank:false},{name:"Login",path:'/login',blank:false}]
  return (
    <>
      <header>
        <img src="/logo/Asset 16@4x.png" alt="header_logo" className='logo'/>
        <Navbar element={ele} gap={2} li_p={1}/>
      </header>
      <Outlet/>
      <Footer></Footer>
    </>
  );
}
