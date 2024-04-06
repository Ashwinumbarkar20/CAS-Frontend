import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
export default function Footer() {
  return (
    <>
      <Footerdiv className="container-fluid">
        <div className="companyName col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <h3 className="footer-header">About CADCAMSYS</h3>
          <br />
          <p>
            Your premier provider of sheet metal manufacturing software
            solutions. Empowering precision and efficiency in fabrication
            processes worldwide.
          </p>
        </div>

        <div className="Products col-xs-12 col-sm-12 col-md-6 col-lg-4   ">
          <h3 className="footer-header">Products</h3>
          <br />
          <ul>
            <li>
              <NavLink to="/almacam" className="product-link-item" style={{ color: "inherit",backgroundColor:"inherit" }}>
                Almacam
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="product-link-item" style={{ color: "inherit",backgroundColor:"inherit" }}>
                AlmaQuote
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="product-link-item" style={{ color: "inherit",backgroundColor:"inherit" }}>
                Almacam Tube
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="product-link-item" style={{ color: "inherit",backgroundColor:"inherit" }}>
                Almacam Space cut
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="product-link-item" style={{ color: "inherit",backgroundColor:"inherit" }}>
                Almacam weld
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="product-link-item" style={{ color: "inherit",backgroundColor:"inherit" }}>
                Almacam for industry 4.0
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="ContactInfo col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <h3 className="footer-header">Contact Us</h3>
          <br />
          <p style={{ textAlign: "left" }}>
            Pune ravet kiwale
            <br />
            Email:- email@email.com
            <br />
            Contact Number:- +91 123456789
          </p>
        </div>
      </Footerdiv>

      <div
        className="p-2 lastfooter "
        style={{ color: "#FFF", background: "#000028" }}
      >
        <p
          className=" text-center"
          style={{ color: "#FFF", background: "#000028" }}
        >
          @2024 copyright
        </p>
      </div>
    </>
  );
}
const Footerdiv = styled.section`
display:flex;
margin:auto;

justify-content:space-between;
align-items:start;
gap:20px;
background-image: linear-gradient(to right, #f1f1f1, #eeeeef, #eaebec, #e6e9e9, #e2e6e5);
  .companyName,
  .Products,
  .ContactInfo {
    width:300px;
    display:flex;
    align-items:start;
    justify-content:flex-start ;
    flex-direction:column;

     
        padding: 10px;
    .footer-header {
      text-align: left;
   
     padding:10px;
    }
    p {
        text-align: left;
        margin:5px;
     padding:10px;
     font-weight:500;
     font-size:20px;
     text-align:justify;
    }
  }
  .Products >ul>li{
    list-style:none;
    color:black;
    
  }
  

  @media (max-width: 460px) {
    /* Styles for small screens (e.g., mobile devices) */

    .companyName {
      display: none; /* Hide Company Div on small screens */
    }

    .Technology {
      display: none; /* Hide Technology Div on small screens */
    }
  }
`;
