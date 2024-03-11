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
        <li><NavLink to="/almacam" className="product-link-item">Almacam</NavLink></li>
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
        <h5 className='footer-header' >Contact Us</h5>
        <ul>
            <li>Pune ravet kiwale</li>
            <li>Email:- email@email.com</li>
            <li>Contact Number:- +91 123456789</li>
            
        </ul>
        </div>
     
      </div>
       
    </Footerdiv>

    <div className='p-2 lastfooter 'style={{color:"#FFF",background:"#000028"}}>
        <p className=' text-center' style={{color:"#FFF",background:"#000028"}}>@2024 copyright</p>
      </div>
      </>
  )
}
const Footerdiv=styled.section`
*{    background-color: var(--Dark-bg);  }
background-color: var(--Dark-bg);
margin-top:20px;
padding:10px 10px;
display:flex;
justify-content:space-around;
flex-direction: row;
align-items:center;

.companyName,.Products,.ContactInfo,.Technology{
width:230px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
flex-wrap: nowrap;
.footer-header{
color:var(--TextOnDark);
line-height: 50px;
border-bottom:2px solid var(--HoverOnDarkText);
margin-bottom: 20px;
}
.companytext{
    
    height:200px;
    line-height:20px;
    color:var(--TextOnDark);
    text-align:justify;
    font-size:12px;
}
}
.lastfooter{
  background-color:var(--Dark-bg);
 p{
  background-color:var(--Dark-bg);
  color:var(--HoverOnDarkText);
 }
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
    font-size:12px;
    text-decoration:none;
    color:var(--TextOnDark);
    line-height:20px;
    padding:none;
    cursor: pointer;
    &:hover{
       color:var(--HoverOnDarkText);
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