/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function ProductCard({
  Product_Name,
  Product_image,
  Product_Heading,
  page_url,
}) 
{
  
    return (
    <Productcard className="d-flex align-items-center jsutify-content-center">
    
      <div className="Product-Card d-flex gap-3 p-3 flex-column align-items-center jsutify-content-center">
        <div className="Product-image">
          <img src={Product_image} alt="Almacam img" />
        </div>
        <h2 className="Product-Heading">{Product_Name}</h2>
        <p className="Product-Desc text-left lh-5">{Product_Heading}</p>
        <button className="btn bg-inherit">
          <Link to={page_url}>
            Read More{"  "}
            <FaArrowRight style={{ fontSize: "24px", fontWeight: "500" }} />
          </Link>
        </button>
      </div>
    </Productcard>
  );
}

const Productcard = styled.section`
  width: 300px;
  height:400px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #4d72ad ;
  transition: all 0.4s ease;
  .Product-Card,
  .Product-Heading,
  .Product-Desc,
  .Product-image {
    background-color: transparent;
  }
  .Product-Heading {
    
 
      color: #2A5CAA;
      font-weight:600;
      text-align:center;
   
  }
  .Product-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .Product-Desc {
    font-weight: 500;
    height:120px;
    text-align:center
  }
  .btn {
    border-radius: 5px;
background-color:#2A5CAA;
  width:100%;
    border: none;
    color: white;
   

    a {
      color: var(--Secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.3;
    }
    &:hover {
      filter: brightness(1.1);
    }
  }
  &:hover {
    transform: scale(1.01);
    
  }
`;
