/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function TechnologyCard({ Technology_name,Heading }) {
  return (
    <TechnologyCards className="d-flex align-items-center jsutify-content-center">
      <div className="Product-Card d-flex gap-3 p-3 flex-column align-items-center jsutify-content-center">
        
        <div className="Product-image">
          <img src={""} alt="Alamcam Technology" />
        </div>
        <h2 className="Tech-Heading">{Technology_name}</h2>
        <p className="Tech-Desc text-center lh-5">{Heading}</p>
        <button className="btn bg-inherit"><Link to="/">Explore More</Link></button>
      </div>
  
    </TechnologyCards>
  );
}

const TechnologyCards = styled.section`
width:350px;
margin:10px;
padding:10px;
border-radius:15px;
box-shadow:2px 6px 10px rgba(0,0,0,0.8);
transition:all 0.4s ease;
.Product-Card,.Product-Heading,.Product-Desc,.Product-image{
  background-color:transparent;
}
.Tech-Heading{
    text-align:center;
  color:var(--Dark-bg);
}
.Tech-image
{
  width:100%;
  img{
    width:100%;
  }
}
.Tech-Desc{
  font-weight:700;
}
.btn 
{
 border:1px solid black;
  background-color:#fff;;
a{

  background-color:inherit;
   text-decoration:none;
   padding: 5px 10px;
   font-weight:800;
    
   color:var(--HoverOnDarkText);
}
&:hover{
  background-color:var(--Dark-bg);
  color:var(--HoverOnDarkText);

}
}
&:hover{
  transform: scale(1.1);
}
`;
