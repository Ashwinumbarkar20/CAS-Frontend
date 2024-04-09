import React from 'react'
import styled from 'styled-components'
import Alltechs from '../Data/Technology.json'
import TechnologyCard from '../Component/TechnologyCard'

export default function Technology() {
  return (
   <AllTechnologies>
    <h1 className='Technology-Heading m-5'>Technologies for Sheet Metal Cutting </h1>
<div className='container'>
  <div className='row'>
{
    Alltechs.map((Tech)=>
      <div key={Tech.Technology_name} className='d-flex justify-content-center align-items-center col-12 col-sm-6 col-md-6 col-lg-4'>
      <TechnologyCard Technology_name={Tech.Technology_name} Heading={Tech.Heading} pageurl={Tech.pageurl} imgurl={Tech.imgurl}/>
      </div>
    )
  }
  </div>
</div>
   </AllTechnologies>
  )
}
const AllTechnologies=styled.main`
margin-top:120px;
.Technology-Heading{
  text-align:center;
  background-image:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #50a4b6);
      -webkit-background-clip: text;
      color: transparent;
     font-weight:900;
    
}
  .row{
display:flex;
justify-content:center;
align-items:center;
} 
  

`
