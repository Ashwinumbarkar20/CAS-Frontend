
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaFacebookF,  FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate=useNavigate()
  return (
    <FooterContainer>
      <div className="footer-content">
        {/* Popular Links */}
        <div className="footer-section">
          <h3>Popular Links</h3>
          <Link to="/products">Application Softwares</Link>
          <Link to="/technology">Process Technologies</Link>
          <Link to="/services">Service</Link>
          <Link to="/Productsupport">Support</Link>
          <Link to="/TermsAndConditions" className="product-item">Copyrights & Terms & Conditions</Link>
        </div>
        
        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><IoCallOutline /> +91-9156739830</p>
          <p><TbDeviceLandlinePhone /> 020 - 41016097</p>
          <p><MdMailOutline /> sales@cadcamsys.com</p>
          <p><MdMailOutline /> abhilash.nasre@cadcamsys.com</p>
        </div>
        
        {/* Logo & Social Media */}
        <div className="footer-section logo-section">
          <h2>CADCAMSYS</h2>
          <div className="social-icons">
            <Link to="https://www.facebook.com/profile.php?id=61573646797270"><FaFacebookF /></Link>
            
            <Link to="https://www.linkedin.com/company/cadcam-automation-systems/?viewAsMember=true"><FaLinkedinIn /></Link>
            <Link to="https://www.youtube.com/user/almacamsoftware"><FaYoutube /></Link>
            
          </div>
          <button className="demo-button" onClick={()=>{navigate("/Contactus")}}>Book A Free Demo Now!</button>
        </div>
      </div>
      <p className="copyright">@{new Date().getFullYear()} copyright</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: #2A5CAA;
  color: white;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
  }

  .footer-section {
    flex: 1;
    min-width: 250px;
    margin: 10px;
    text-align:left;
  }

  .footer-section h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  .footer-section p, .footer-section a {
    display: block;
    font-size: 16px;
    margin: 5px 0;
    color: white;
    text-decoration: none;

  }

  .logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
  }

  .social-icons {
    display: flex;
    gap: 15px;
   
    margin: 10px 0;
    a{
      font-size: 24px;
    }
  }

  .demo-button {
    background: white;
    color: #2A5CAA;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  .demo-button:hover {
    color: white;
    background-color: #2A5CAA;
    border:1px solid white
  }

  .copyright {
    margin-top: 10px;
    font-size: 14px;
    padding:10px;
  }
  .footer-section a:hover{
font-weight:600;
    }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
      text-align: left;
    }
    .footer-section {
      text-align: left;
    }
    .logo-section{
      text-align: left;
    }
  }
`;
