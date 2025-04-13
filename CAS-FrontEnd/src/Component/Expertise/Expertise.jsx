import React from 'react'
import Slider from "react-slick";
import ExpertiseData from '../../Data/Expertise.json'
import './Expertise.css'
import Card from '../Card';
export default function Expertise() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
       
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };
    
  return (
    <>
    <h2 style={{color:"var(--primary)",textAlign:"center"}}>Our Expertise</h2>
    <div
      className="slider-container "
      
    >
      <Slider {...settings}>
        {ExpertiseData?.map((data, i) => (
          <div key={i} className="slide-item">
            <Card
             key={data.Name} data={data}
            />
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}
