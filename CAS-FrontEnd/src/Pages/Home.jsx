import React, { useState } from 'react'
import styled from 'styled-components'
import Heroimg from '../assets/Hero.png'
import ReactPlayer from 'react-player'
import ExpertiseData from '../Data/Expertise.json'
import Card from '../Component/Card'


export default function Home() {

  return (
    <>
    <HeroSection>
      <div className='container-fluid justify-content-center'>
<img src={Heroimg} className='Hero-image img-fluid' alt="Heroimage"/>
<h1 className="Hero-heading">Lorem ipsum dolor  amet consectetur, adipisicing elit. Aliquam eligendi quam eum quo nihil, quos, dolor sit amet commodi consectetur,commodi maiores fuga, rem  .</h1>
      </div>
     </HeroSection>

<Subheading className='contianer m-5'>
<h3 className='text-center'>
Right around the world, our CAD/CAM software products and automatic nesting applications are improving the productivity of cutting systems, sheet metal machines and welding robots, by meeting the demands of industry 4.0.
</h3>
</Subheading>

<AlmacamVideo className='m-5'>
<div className="contianer d-flex flex-column justify-content-center align-items-center">
  <h1>Discover Almacam in video</h1>
  <div className='m-3'>
    <ReactPlayer controls  url="https://www.youtube.com/watch?v=3A40GtWEMEA"></ReactPlayer>
  </div>
</div>

</AlmacamVideo>

<Expertise className='container-fluid'>
<div className='container m-3 d-flex flex-column justify-content-center align-items-center'>
  <h2 className='mb-5 position-sticky'>Our Expertise</h2>
  <div className='contianer Expertise-cards'>
  <div className='row d-flex justify-content-center align-items-center gap-5'>
  {
    ExpertiseData.map((data)=><Card className="col col-xxl-4  col-lg-4 col-md-6 col-sm-12 col-xs-12" key={data.Name} data={data}/>)
  }

  </div>
      
  </div>
</div>


</Expertise>
</>
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
const Subheading=styled.section`

`
const AlmacamVideo=styled.section`


display:flex;
justify-content:center;
align-items:center;
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-bottom: 1rem;
}

.react-player {
  width: 100%;
  height: auto;
  max-width: 800px; /* Set max-width to prevent video from becoming too large */
}
`
const Expertise=styled.section`
display:flex;
justify-content:center;
align-items:center;

.Expertise-cards{
  display:flex;
  
  justify-content:center;
  align-items:center;
  
}
`