import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <Footerdiv className='container-fluid'>
      
        <div className='companyName'><h5>Company Name</h5>
        <p className='companytext text-center'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore recusandae magnam rem, iusto quisquam praesentium amet? Eaque, fac
        </p>
        </div>
        <div className='Products'>
        <h5>Products</h5>
        <ul>
        <li><NavLink to="" className="product-link-item">Almacam</NavLink></li>
        <li><NavLink to="" className="product-link-item">AlmaQuote</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam Tube</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam Space cut</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam weld</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam for industry 4.0</NavLink></li>
        </ul>
        </div>
        <div className='ContactInfo'>
        <h5>Contact</h5>
        <ul>
            <li>Pune ravet kiwale</li>
            <li>Email:- email@email.com</li>
            <li>Contact Number:- +91 123456789</li>
            
        </ul>
        </div>
     
    </Footerdiv>
    <div className='p-2 bg-primary $blue-400 lastfooter '>
        <p className='bg-primary text-white text-center'>@2024 copyright</p>
      </div>
      </>
  )
}
const Footerdiv=styled.section`
margin-top:20px;
padding:10px 10px;
display:flex;
justify-content:space-around;
flex-direction: row;
align-items:center;
background-color:var(--primary);
.companyName,.Products,.ContactInfo{

width:230px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
h5{
    border-bottom:5px double var(--text-color);
    padding:10px;
    margin-bottom:20px;
    
}
.companytext{
    height:200px;
    line-height:20px;
    
}
}
*{
background-color:transparent;
color:var(--text-color);
}
ul{
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:10px;
    list-style: none;
    
li,.product-link-item{
    font-size:13px;
    line-height:20px;
    cursor: pointer;
    &:hover{
        color:var(--action)
    }
}
}

`