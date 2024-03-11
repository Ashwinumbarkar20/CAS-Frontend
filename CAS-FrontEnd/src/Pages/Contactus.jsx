import React from 'react'
import styled from 'styled-components'
import contactimg from '../assets/Contact_us_re_4qqt.png'

export default function Contactus() {
  return (
    <Contactusdiv className='container'>
      <div className='row justify-content-center'>
      <div className='Img-div bg-primary d-none d-sm-none d-md-block col-md-6 col-lg-6 '></div>
      <div className='Contact-Form d-flex flex-column justify-content-center align-items-center gap-2 col-xs-12 col-sm-12 col-md-6 col-lg-6'>
      <h1 className='text-center'>Contact Us!</h1>
      
        <form className="Contact d-flex flex-column justify-content-center align-items-center gap-2">
        <div> <label htmlFor="">Name</label> <input type="text" required/></div>
        <div> <label htmlFor="">Phone Number</label> <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/></div>
        <div> <label htmlFor="">Company</label> <input type="text" required/></div>
        <div> <label htmlFor="">Email id</label> <input type="email" required/></div>
        <div> <label htmlFor="">Message</label> <textarea cols="10" rows="5" required/></div>
        <div><button className="mt-3" type="submit">Send Message</button></div>
        
        </form>
      </div>
      </div>
   
    </Contactusdiv>
  )
}
const Contactusdiv=styled.section`
.Img-div{
  
  background:url(${contactimg});
  background-repeat: no-repeat;
  background-size: 100% 100%  ;

    height: 50vh;
}
.Contact-Form{
margin-top:45px;
  .Contact{
    width:100%;
    div{
      padding:2px;
      display:flex;
      flex-direction: row;
      width:100%;
      justify-content:center; 
      align-items:center;
      
    }
    label,input,textarea{
  width:100%;
  padding:3px;
  display:block;
  border-radius:5px;
}
label{
  font-weight:bolder;
}
button{
padding:10px 15px;
border-radius: 10px;
background-color:var(--Dark-bg);
color:var(--text-color);
font-weight:bold;
box-shadow:2px 2px 6px rgba(0,0,0,0.4);
border: none;
transition:all 0.3s ease;
&:hover{
  color:var(--Dark-bg);
  background-color:var(--text-color);
  border:2px solid var(--Dark-bg);
}
}
  }

}
`