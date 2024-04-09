/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
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
        <p className="Product-Desc text-center lh-5">{Product_Heading}</p>
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
  width: 350px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow:0px 0px 2px rgba(0,0,0,0.8);
  transition: all 0.4s ease;
  .Product-Card,
  .Product-Heading,
  .Product-Desc,
  .Product-image {
    background-color: transparent;
  }
  .Product-Heading {
    
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
  .Product-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .Product-Desc {
    font-weight: 500;
  }
  .btn {
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
    transform: scale(1.04);
    box-shadow:2px 4px 4px rgba(0,0,0,0.8);
  }
`;
