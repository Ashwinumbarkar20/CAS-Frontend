import React from 'react'
import styled from 'styled-components'
import Alltechs from '../Data/Technology.json'
import TechnologyCard from '../Component/TechnologyCard'
console.log(Alltechs)
export default function Technology() {
  return (
   <AllTechnologies>
    <h1 className='Technology-Heading m-5'>Technlogies </h1>
<div className='container'>
  <div className='row'>
{
    Alltechs.map((Tech)=>
      <div key={Tech.Technology_name} className='d-flex justify-content-center align-items-center col-12 col-sm-6 col-md-6 col-lg-4'>
      <TechnologyCard Technology_name={Tech.Technology_name} Heading={Tech.Heading}/>
      </div>
    )
  
}

  </div>
</div>
   </AllTechnologies>
  )
}
const AllTechnologies=styled.main`
margin-top:40px;
.Technology-Heading{
  text-align:center;
  .row{
display:flex;
justify-content:center;
align-items:center;
} 
  
}
`
