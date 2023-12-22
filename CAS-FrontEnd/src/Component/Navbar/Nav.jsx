import React from 'react'
import styled from 'styled-components'

export default function Nav() {
  return (
    <>
      <Navbar>
        <div className='Logo'>
        <div className='logodic'>
CAS
        </div>
        </div>
        <div className='Menu'>
            <ul className='Menus'>
                <li>Home</li>
                <li>Products</li>
                <li>Technology</li>
                <li>Services</li>
                <li>Product Support and Training</li>
                <li>Contact Us!</li>

            </ul>
        </div>
        
      </Navbar>
    </>
  )
}
const Navbar=styled.nav`
width:1334px;
margin:0px auto;
display:flex;
justify-content:space-between;
align-items:center;
height:50px;
box-shadow:0 6px 6px rgba(0,0,0,0.3);
padding:10px 20px;
background-color:var(--primary);
.Logo{
    cursor: pointer;
    background-color: transparent; 
    .logodic{
        background-color:var(--primary); 
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:100%;
        height:50px;
        width:50px;
        border:2px solid var(--text-color);
        color:var(--text-color);
        font-weight:800;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif


    }
}
.Menu{
    background-color:var(--primary); 
    .Menus{
    display:flex;
    justify-content:space-between;
    align-items:center; 
    gap:20px;
    list-style:none;
    background-color:var(--primary); 
li{
    cursor: pointer;
    background-color: transparent; 
    color:var(--text-color);
    font-weight:500;
    padding:5px 10px;
    border:1px solid var(--text-color);
    border-radius:5px;

}
}
}

`
