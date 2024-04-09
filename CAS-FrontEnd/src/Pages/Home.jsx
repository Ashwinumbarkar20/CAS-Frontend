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
<img src="https://i.postimg.cc/xCB068Yp/Hero-Image.jpg" className='Hero-image img-fluid' alt="Heroimage"/>
<h1 className="Hero-heading ">CAD-CAM Software Solutions for Sheet Metal Manufacturing  </h1>
      </div>
     </HeroSection>

<Subheading className='contianer m-5'>
<h3 className='text-justify'>
Right around the world, our CAD/CAM software products and automatic nesting applications are improving the productivity of cutting systems, sheet metal machines and welding robots, by meeting the demands of industry 4.0.
</h3>
</Subheading>

<AlmacamVideo className='m-5'>
<div className="contianer d-flex flex-column justify-content-center align-items-center">
  <h1 className='heading'>Discover Almacam in video</h1>
  <div className='m-3'>
    <ReactPlayer controls  url="https://www.youtube.com/watch?v=3A40GtWEMEA"></ReactPlayer>
  </div>
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
  background-image:linear-gradient(to right, #006072, #1e7682, #008B74, #50a4a0, #008B74);
      -webkit-background-clip: text;
      color: transparent;
     font-weight:900;
}

.react-player {
  width: 100%;
  height: auto;
  max-width: 800px; 
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