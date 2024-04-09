/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function TechnologyCard({ Technology_name,Heading,pageurl,imgurl }) {
  return (
    <TechnologyCards className="d-flex align-items-center jsutify-content-center">
      <div className="Product-Card d-flex gap-3 p-3 flex-column align-items-center jsutify-content-center">
        
        <div className="Product-image">
          <img src={imgurl} alt="Alamcam Technology" />
        </div>
        <h2 className="Tech-Heading">{Technology_name}</h2>
        <p className="Tech-Desc text-center lh-5">{Heading}</p>
        <button className="btn bg-inherit" title="Explore More"><Link to={pageurl}>Read More <FaArrowRight style={{fontSize:"24px"}}/></Link></button>
      </div>
  
    </TechnologyCards>
  );
}

const TechnologyCards = styled.section`
width:350px;
margin:10px;
padding:10px;
border-radius:5px;
box-shadow:0px 0px 2px rgba(0,0,0,0.8);
transition:all 0.4s ease;
.Product-Card,.Product-Heading,.Product-Desc,.Product-image{
  background-color:transparent;
}
.Tech-Heading{
  background-image: linear-gradient(
      to right,
      #006072,
      #1e7682,
      #378d92,
      #50a4a0,
      #6bbbae
    );
      -webkit-background-clip: text;
      color: transparent;
      font-weight:900;
      text-align:center;
}
.Product-image
{
  width:100%;
  border-radius:10px;
  img{
    width:100%;
    border-radius:10px;
  }
}
.Tech-Desc{
  font-weight:500;
}
.btn 
{
  border-radius: 15px;
    border: none;
    color: white;
    background-image: linear-gradient(
      to right,
      #006072,
      #1e7682,
      #378d92,
      #50a4a0,
      #6bbbae
    );
a{
  color: var(--Secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.3;
}
&:hover{
 filter:brightness(1.1)
}
}
&:hover{
  transform: scale(1.025);
  box-shadow:2px 4px 4px rgba(0,0,0,0.8);
}
`;
