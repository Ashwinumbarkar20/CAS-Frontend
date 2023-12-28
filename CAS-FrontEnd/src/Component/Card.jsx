/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import Heroimg from '../assets/Hero.png'

export default function Card({data}) {
  return (
    <ExpertiseCard className='mb-3 '>
      <div className='card'>
        <img className='image card-img-top' src={Heroimg} alt="cardimg" />
        <p className='card-title fw-bold text-center p-2'>{data.Name}</p>
        <p className='card-text text-justify p-2'>{data.Desc}</p>
      </div>
    </ExpertiseCard>
  )
}
const ExpertiseCard=styled.div`
width:300px;
height:400px;
box-shadow:0 0 10px rgba(0,0,0,0.8);

/* border:2px solid black;
border-radius:25px; */

.image{
    
    object-fit: cover;
   
}
.card-text{
background-color:transparent;
    
}
.card{
    /* border:2px solid black; */

border:none;
background-color:transparent;
}
`