import React, { useState } from 'react'
import styled from 'styled-components'

import ReactPlayer from 'react-player'
import ExpertiseData from '../Data/Expertise.json'
import Card from '../Component/Card'

export default function Home() {

  return (
    <>
    <HeroSection>
      <div className='container-fluid justify-content-center'>
<img src="/Images/Hero Image.webp" className='Hero-image img-fluid' alt="Heroimage"/>
<h1 className="Hero-heading ">CAD-CAM Software Solutions for Sheet Metal Manufacturing  </h1>
      </div>
     </HeroSection>

<Subheading className='contianer m-5'>
<h3 className='text-justify'>
Right around the world, our CAD/CAM software products and automatic nesting applications are improving the productivity of cutting systems, sheet metal machines and welding robots, by meeting the demands of industry 4.0.
</h3>
</Subheading>

<AlmacamVideo className="VideoWrapper">
    <h1 className="heading">Discover Almacam in video</h1>
    <div className="React-player-wrapper">
      <ReactPlayer className="React-player" controls url="https://www.youtube.com/watch?v=3A40GtWEMEA" />
    </div>
  </AlmacamVideo>

<Expertise className='container-fluid'>
<div className='container m-3 d-flex flex-column justify-content-center align-items-center'>
  <h2 className='mb-5 position-sticky heading'>Our Expertise</h2>
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
margin-top:90px;
.container-fluid{
  position:relative;
}

.Hero-image{
  
  width:100%;
  object-fit:cover;
  height:70vh;
  filter: brightness(60%) blur(1px);
  
  
}
.Hero-heading{
  width:90%;
  font-size:70px;
  font-family: "Roboto Slab", serif;
  font-weight:700;
  font-stretch: semi-expanded;
  position: absolute;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
    background-color:transparent;
    color: #fff;
 text-align:center;
 

}
@media only screen and (max-width: 900px) {
  .Hero-heading {
    font-size: 40px;
  }
}
`
const Subheading=styled.section`

`
const AlmacamVideo=styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
  margin: 5rem;

  h1 {
    margin-bottom: 1rem;
    background-image: linear-gradient(to right, #006072, #1e7682, #008B74, #50a4a0, #008B74);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 900;
  }

  .React-player-wrapper {
    width: 760px;
    height: 520px;
    max-width: 100%;
    max-height: 100%;
  }

  .React-player {
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 1024px) {
    .React-player-wrapper {
      width: 80%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    margin: 2rem;
    
    h1 {
      font-size: 1.5rem;
    }

    .React-player-wrapper {
      width: 100%;
      height: auto;
      aspect-ratio: 1.46; /* Maintain the aspect ratio */
    }
  }

  @media (max-width: 480px) {
    margin: 1rem;
    
    h1 {
      font-size: 1.2rem;
    }

    .React-player-wrapper {
      width: 100%;
      height: auto;
      aspect-ratio: 1.46; /* Maintain the aspect ratio */
    }
  }
`
const Expertise=styled.section`
display:flex;
justify-content:center;
align-items:center;
.heading{
  background-image:linear-gradient(to right, #006072, #1e7682, #008B74, #50a4a0, #008B74);
      -webkit-background-clip: text;
      color: transparent;
     font-weight:900;
}
.Expertise-cards{
  display:flex;
  
  justify-content:center;
  align-items:center;
  
}

`