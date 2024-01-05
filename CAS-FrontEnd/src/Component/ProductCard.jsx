/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import prodimage from "../ProductData/AlmacamCUT/Almacamcut.png";
import BgProd from '../assets/Productcardbg1.png'

// eslint-disable-next-line react/prop-types
export default function ProductCard({ Product }) {
  return (
    <Productcard className="d-flex align-items-center jsutify-content-center">
      <div className="Product-Card d-flex gap-3 p-3 flex-column align-items-center jsutify-content-center">
        
        <div className="Product-image">
          <img src={prodimage} alt="Almacut img" />
        </div>
        <h2 className="Product-Heading">{Product.Product_Name}</h2>
        <p className="Product-Desc text-center lh-5">{Product.Heading}</p>
        <button className="btn bg-inherit">Explore More</button>
      </div>
  
    </Productcard>
  );
}

const Productcard = styled.section`
cursor: pointer;
width:350px;
height:350px;
margin-top:10px;
padding:20px;

background-image: url(${BgProd});
background-repeat: no-repeat;
background-position: center;
background-size:cover ;
border-radius:35px;
box-shadow:0px 0px 10px rgba(0,0,0,0.8);
.Product-Card,.Product-Heading,.Product-Desc,.Product-image{
  background-color:transparent;
}
.Product-image{
  width:100%;
  img{
    width:100%;
  }
}
`;
