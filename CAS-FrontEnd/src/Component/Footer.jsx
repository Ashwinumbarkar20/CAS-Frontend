import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
export default function Footer() {
  return (
    <>
      <Footerdiv className="container-fluid">
    
        <div className="companyName">
          <h3 className="footer-header">About CADCAMSYS</h3>
          
          <p>
            Your premier provider of sheet metal manufacturing software
            solutions. Empowering precision and efficiency in fabrication
            processes worldwide.
          </p>
        </div>

        <div className="Products">
          <h3 className="footer-header">Products</h3>
        
          <div>
            <Link to="/almacam" className="product-item">
              Almacam
            </Link>

            <Link to="/" className="product-item">
              AlmaQuote
            </Link>

            <Link to="/" className="product-item">
              Almacam Tube
            </Link>

            <Link to="/" className="product-item">
              Almacam Space cut
            </Link>

            <Link to="/" className="product-item">
              Almacam weld
            </Link>

            <Link to="/" className="product-item">
              Almacam for industry 4.0
            </Link>
          </div>
        </div>

        <div className="ContactInfo">
          <h3 className="footer-header">Contact Us</h3>
          
          <p>
            Email:- email@email.com
            <br />
            Contact: +91 123456789
          </p>
        </div>
      </Footerdiv>

      <Copyrightdiv className="p-2">
        <p className=" text-center">
          @2024 copyright
        </p>
      </Copyrightdiv>
    </>
  );
}
const Footerdiv = styled.section`
background-image: linear-gradient(to left bottom, #000028, #00002e, #010034, #00003a, #000040);
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: start;
  gap: 20px;
  flex-wrap:wrap;
  .companyName,
  .Products,
  .ContactInfo {
    width: 300px;
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
    color:white;
    padding: 10px;
    .footer-header {
      text-align: left;
      padding: 10px;
      font-weight:900;
      background-image:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
      -webkit-background-clip: text;
      color: transparent;
      color:transparent;
      
    }
    p {
      text-align: left;
      margin: 5px;
      padding: 10px;
      font-weight: 500;
      font-size: 20px;
      text-align: justify;
      flex-wrap:nowrap;
    }
  }
  .product-item {
    color: inherit;
    text-decoration: none;
    display: block;
    margin: 5px;
    padding: 5px;
    font-weight: 500;
      font-size: 20px;
      &:hover{
font-weight:800;

      }
  }


`;
const Copyrightdiv = styled.section`
background-image: linear-gradient(to top, #000028, #00002e, #010034, #00003a, #000040);
color:white;
font-weight:900;
`