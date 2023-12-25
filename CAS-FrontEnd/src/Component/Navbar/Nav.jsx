import React from 'react'
import styled from 'styled-components'
import products from '../../Data/Products.json'
import Menu from './Menu'
import { useState } from 'react'
export default function Nav() {
  const[showsubMenu,setShowsubMenu]=useState(false);
  const handleEnter=()=>{setShowsubMenu(true)};
  const handleleave=()=>{setShowsubMenu(false)};
  return (
    <Navmaindiv className='container-fluid m-0 p-1  '>
 
    <nav className='bg-primary container-fluid d-flex justify-content-between align-items-center'>
 
  <div className='logo bg-primary text-white'>CAS</div>
 
  <div className='Search d-none d-md-block bg-primary text-white '>
  <input className="p-2 rounded text-center" type="text" name="Search" placeholder='Search Product' /></div>
 
  <div className='Menu'><ul className='navbar-nav flex-row justify-content-center align-items-center gap-4 bg-primary text-white'>
<li className='bg-primary text-white'>Home</li>
<li className='bg-primary text-white' onMouseEnter={handleEnter} onMouseLeave={handleleave}>Products
{showsubMenu&& (<Menu menuitems={products}></Menu>)}
</li>
<li className='bg-primary text-white'>Technology</li>
<li className='bg-primary text-white'>Services</li>
<li className='bg-primary text-white'>Product support and training</li>
<li className='bg-primary text-white'>Contact us</li>

  </ul></div>

  {/* <Menu menuitems={products}></Menu> */}
  </nav>
    </Navmaindiv>
  )
}
const Navmaindiv=styled.div`
nav{
  height:54px;
}

container{

}
.Menu ul li{
cursor: pointer;
}

`