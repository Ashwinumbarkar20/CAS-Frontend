/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import prodimage from "../ProductData/AlmacamCUT/Almacamcut.png";
import BgProd from '../assets/Productcardbg1.png'
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProductCard({ Product_Name,Product_image,Product_Heading }) {
  return (
    <Productcard className="d-flex align-items-center jsutify-content-center">
      <div className="Product-Card d-flex gap-3 p-3 flex-column align-items-center jsutify-content-center">
        
        <div className="Product-image">
          <img src={Product_image} alt="Almacam img" />
        </div>
        <h2 className="Product-Heading">{Product_Name}</h2>
        <p className="Product-Desc text-center lh-5">{Product_Heading}</p>
        <button className="btn bg-inherit"><Link to="/almacut">Explore More</Link></button>
      </div>
  
    </Productcard>
  );
}

const Productcard = styled.section`
width:350px;
margin:10px;
padding:10px;
border-radius:15px;
box-shadow:2px 6px 10px rgba(0,0,0,0.8);
transition:all 0.4s ease;
.Product-Card,.Product-Heading,.Product-Desc,.Product-image{
  background-color:transparent;
}
.Product-Heading{
  color:var(--Dark-bg);
}
.Product-image
{
  width:100%;
  img{
    width:100%;
  }
}
.Product-Desc{
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
