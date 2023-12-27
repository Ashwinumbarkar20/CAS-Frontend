import React from 'react'
import styled from 'styled-components'
import Heroimg from '../assets/Hero.png'
import ReactPlayer from 'react-player'
export default function Home() {
  return (
    <>
    <HeroSection>
      <div className='container-fluid'>
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
    <ReactPlayer controls width="900px" height="600px" url="https://www.youtube.com/watch?v=3A40GtWEMEA"></ReactPlayer>
  </div>
</div>

</AlmacamVideo>

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

`
