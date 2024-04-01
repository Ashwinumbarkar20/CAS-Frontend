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
        <button className="btn bg-inherit" title="Explore More"><Link to={pageurl}><FaArrowRight style={{fontSize:"24px"}}/></Link></button>
      </div>
  
    </TechnologyCards>
  );
}

const TechnologyCards = styled.section`
width:350px;
margin:10px;
padding:10px;
background-color:var(--shade);
border-radius:5px;
box-shadow:2px 6px 10px rgba(0,0,0,0.8);
transition:all 0.4s ease;
.Product-Card,.Product-Heading,.Product-Desc,.Product-image{
  background-color:transparent;
}
.Tech-Heading{
    text-align:center;
  color:var(--Dark-bg);
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
  font-weight:700;
}
.btn 
{
 border:1px solid black;
 height:60px;;width:60px;
 border-radius:100%;
 
 background-color:var(--primary);
 color:#FFF;
a{
  height:60px;;width:60px;
  background-color:inherit;
   text-decoration:none;
    
   font-weight:800;
   color:#FFF;
}
&:hover{
  background-color:var(--accent);
  color:var(--accent);
}
}
&:hover{
  transform: scale(1.025);
}
`;
