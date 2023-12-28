import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Footerdiv className='container-fluid'>
      
        <div className='companyName'><h5>Company Name</h5>
        <p className='text-center'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore recusandae magnam rem, iusto quisquam praesentium amet? Eaque, fac
        </p>
        </div>
        <div className='Products'>
        <h5>Products</h5>
        <ul>
        <li>Almacam</li>
        <li>AlmaQuote</li>
        <li>Almacam Tube</li>
        <li>Almacam Space cut</li>
        <li>Almacam weld</li>
        <li>Almacam for industry 4.0</li>
        </ul>
        </div>
        <div className='contectinfo'>
        <h5>Contact</h5>
        <ul>
            <li>Pune ravet kiwale</li>
            <li>Email:- email@email.com</li>
            <li>Contact Number:- +91 123456789</li>
            
        </ul>
        </div>
      
    </Footerdiv>
  )
}
const Footerdiv=styled.section`
margin-top:20px;
padding:50px;
display:flex;
justify-content:space-between;
flex-direction: row;
align-items:center;
background-color:var(--primary);
div{
 width:300px;   
}
*{
background-color:transparent;
color:var(--text-color);
}
ul{
    list-style: none;
}
`