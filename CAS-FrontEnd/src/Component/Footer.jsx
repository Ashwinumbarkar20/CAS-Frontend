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
          <h3 className="footer-header">Popular Links</h3>
        
          <div>
            <Link to="/Almacamcut" className="product-item">
              Application Softwares
            </Link>

            <Link to="/AlmaQuote" className="product-item">
             Process Technologies
            </Link>

            <Link to="/Almacamtube" className="product-item">
              Service
            </Link>

            <Link to="/Almacamspacecut" className="product-item">
              Support
            </Link>

            <Link to="/Almacamspacecut" className="product-item">
              Contact Us
            </Link>
            
          </div>
        </div>

        <div className="ContactInfo">
          <h3 className="footer-header">Wanna Connect?</h3>
          
          <p>
            Email:- abhilash.nasre@cadcamsys.com
            <br />
            sales@cadcamsys.com
            <br />
            Contact: +91-9156739830
          </p>
          <br />
          <button className="freedemo">Free Demo</button>
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
margin-top:95px;
background-image: linear-gradient(to left bottom, #000028, #00002e, #010034, #00003a, #000040);
  display: flex;
  
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
           
    }
    .freedemo{
      margin:10px;
      padding: 10px;
      border-radius:31px;
      font-weight:bold;
      background:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
      color:white;
      border:2px solid #006072;
            width:300px;
            letter-spacing:1px;
            transition:all 0.4s ease-in-out;
      &:hover{
        color:white;
        background:linear-gradient(to left, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
        box-shadow:0px 0px 15px rgba(107, 187, 174,0.9);
        
      }
    }
    p {
      text-align: left;
      margin: 5px;
      padding: 10px;
      font-weight: 600;
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
    font-weight: 600;
      font-size: 20px;
      &:hover{
font-weight:800;
color:white;
background-image:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
      -webkit-background-clip: text;
      color: transparent;

      }
  }


`;
const Copyrightdiv = styled.section`
background-image: linear-gradient(to top, #000028, #00002e, #010034, #00003a, #000040);
color:white;
font-weight:900;
`