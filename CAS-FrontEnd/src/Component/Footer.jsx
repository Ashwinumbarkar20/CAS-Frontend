import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import svg from '../assets/svg.png'
export default function Footer() {
  return (
    <>
    <Footerdiv className='container-fluid'>
      <div className='row justify-content-center'>
      <div className='companyName col-lg-3 d-lg-block d-md-none d-sm-none d-xs-none'>
        <h5 className='footer-header'>Company Name</h5>
        <p className='companytext text-center'>s
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore recusandae magnam rem, iusto quisquam praesentium amet? Eaque, fac
        </p>
        </div>

        <div className='Products col-xs-12 col-sm-12 col-md-6 col-lg-4   '>
        <h5 className='footer-header'>Products</h5>
        <ul>
        <li><NavLink to="" className="product-link-item">Almacam</NavLink></li>
        <li><NavLink to="" className="product-link-item">AlmaQuote</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam Tube</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam Space cut</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam weld</NavLink></li>
        <li><NavLink to="" className="product-link-item">Almacam for industry 4.0</NavLink></li>
        </ul>
        </div>

        <div className='Technology col-lg-3 d-lg-block d-md-none d-sm-none d-xs-none' >
        <h5 className='footer-header'>Technology</h5>
            <ul>
                <li><NavLink to="" className="product-link-item">Sheet Metal Working</NavLink></li>
                <li><NavLink to="" className="product-link-item">Tubes and profile cutting</NavLink></li>
            </ul>
        </div>

        <div className='ContactInfo col-lg-4 col-md-6 col-sm-12 col-xs-12'>
        <h5 className='footer-header' >Contact</h5>
        <ul>
            <li>Pune ravet kiwale</li>
            <li>Email:- email@email.com</li>
            <li>Contact Number:- +91 123456789</li>
            
        </ul>
        </div>
     
      </div>
       
    </Footerdiv>

    <div className='p-2 bg-transparant $blue-400 lastfooter '>
        <p className='bg-transparant text-center'>@2024 copyright</p>
      </div>
      </>
  )
}
const Footerdiv=styled.section`
background-image:url(${svg});
background-size: cover;
background-repeat:no-repeat;
margin-top:20px;
padding:10px 10px;
display:flex;
justify-content:space-around;
flex-direction: row;
align-items:center;
/* background-color:var(--primary); */
.companyName,.Products,.ContactInfo,.Technology{

width:230px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

.footer-header{
    border-bottom:5px double #F78DA7;
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

}
ul{
    width:auto;
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:10px;
    list-style: none;
    
li,.product-link-item{
    font-size:18px;
    line-height:20px;
    color:inherit;
    cursor: pointer;
    &:hover{
       font-weight:bold;
    }
}
}
@media (max-width: 460px) {
    /* Styles for small screens (e.g., mobile devices) */

    .companyName {
      display: none; /* Hide Company Div on small screens */
    }

    .Technology {
      display: none; /* Hide Technology Div on small screens */
    }
  }
`