import React from 'react'
import styled from 'styled-components'
import Heroimg from '../assets/Hero.png'
export default function Home() {
  return (
    <HeroSection>
      <div className='container-fluid'>
<img src={Heroimg} className='Hero-image img-fluid' alt="Heroimage"/>
<h1 className="Hero-heading">Lorem ipsum dolor  amet consectetur, adipisicing elit. Aliquam eligendi quam eum quo nihil, quos, dolor sit amet commodi consectetur,commodi maiores fuga, rem  .</h1>
      </div>
    </HeroSection>
  )
}
const HeroSection =styled.section`
.container-fluid{
  position:relative;
}
.Hero-image{
  
  width:100%;
  object-fit:cover;
  height:70vh;
  filter: brightness(40%) blur(6px);
 
  
  
}
.Hero-heading{
  width:90%;
  position:absolute;
  position: absolute;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
    background-color:transparent;
    color: #fff;
 text-align:center;

}
`
