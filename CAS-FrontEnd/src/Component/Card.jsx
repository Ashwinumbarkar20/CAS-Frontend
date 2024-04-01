/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import Heroimg from '../assets/Hero.png'
import Cardimg from '../assets/Cardimg.png'
import { Link } from 'react-router-dom'

export default function Card({data}) {
  return (
    <ExpertiseCard className='mb-3 '>
      <Link to={data.url}>
      <div className='card'>
        <img className='image card-img-top' src={data.imgurl} alt="cardimg" />
        <p className='card-title fw-bold text-center p-2'>{data.Name}</p>
        <p className='card-text text-justify p-2'>{data.Desc}</p>
        
      </div>
      </Link>
    </ExpertiseCard>
  )
}
const ExpertiseCard=styled.div`
background-color:var(--Secondary);
width:300px;
height:400px;
box-shadow:0 0 10px rgba(0,0,0,0.8);

a{
  text-decoration:none
}
.image{
    
    object-fit: cover;
   
}
.card-title{
color:var(--primary);
font-size:20px;
border-bottom:2px solid var(--accent);
}
.card-text{
background-color:transparent;

text-decoration:none;
font-weight:500;
text-align:justify;
}
.card{
  text-decoration:none;
    /* border:2px solid black; */

border:none;
background-color:transparent;

}
transition:all 0.3s ease-in-out;
&:hover{
transform:scale(1.1);
}
`