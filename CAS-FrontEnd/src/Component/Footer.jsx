// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { IoCallOutline } from "react-icons/io5";
// import { MdMailOutline } from "react-icons/md";
// import { TbDeviceLandlinePhone } from "react-icons/tb";
// export default function Footer() {
//   const handleClick = () => {
//     const url = `https://wa.me/919156739830`;
//     window.open(url, '_blank');
//   };
//   return (
    
//     <>
//       <Footerdiv className="container-fluid">
    
//         <div className="companyName">
//           <h3 className="footer-header">About CADCAMSYS</h3>
          
//           <p>
//             Your premier provider of sheet metal manufacturing software
//             solutions. Empowering precision and efficiency in fabrication
//             processes worldwide.
//           </p>
//         </div>

//         <div className="Products">
//           <h3 className="footer-header">Popular Links</h3>
        
//           <div>
//             <Link to="/Products" className="product-item">
//               Application Softwares
//             </Link>

//             <Link to="/Technology" className="product-item">
//              Process Technologies
//             </Link>

//             <Link to="/Services" className="product-item">
//             Software Service
//             </Link>

//             <Link to="/Productsupport" className="product-item">
//               Software Support
//             </Link>

//             <Link to="/Contactus" className="product-item">
//               Contact Us
//             </Link>
            
//             <Link to="/TermsAndConditions" className="product-item">
//             Copyrights & Terms & Conditions
//             </Link>
//           </div>
//         </div>

//         <div className="ContactInfo" >
//           <h3 className="footer-header">Wanna Connect?</h3>
//             <p style={{fontFamily:"sans-serif",margin:"0px", fontSize:"18px",textWrap:"nowrap"}}><MdMailOutline style={{fontSize:"24px",color:"yellow"}}/> <a style={{color:"inherit",textDecoration:"none"}} href="mailto:sales@cadcamsys.com">sales@cadcamsys.com</a></p>
//             <p style={{fontFamily:"sans-serif",margin:"0px", fontSize:"18px",textWrap:"nowrap"}}><MdMailOutline style={{fontSize:"24px",color:"yellow"}}/> <a style={{color:"inherit",textDecoration:"none"}} href="mailto:sales@cadcamsys.com">abhilash.nasre@cadcamsys.com</a></p>
//             <p style={{fontFamily:"sans-serif",margin:"0px", fontSize:"18px",textWrap:"nowrap"}}><IoCallOutline style={{fontSize:"24px",color:"yellow"}}/> +91-9156739830</p>
//           <p style={{fontFamily:"sans-serif",margin:"0px", fontSize:"18px",textWrap:"nowrap"}}><TbDeviceLandlinePhone style={{fontSize:"24px",color:"yellow"}}/> 020-41016097</p>
            
          
         
//           <button className="freedemo" onClick={handleClick}>Free Demo</button>
//         </div>
//       </Footerdiv>

//       <Copyrightdiv className="p-2">
//         <p className=" text-center">
//           @2024 copyright
//         </p>
//       </Copyrightdiv>
//     </>
//   );
// }
// const Footerdiv = styled.section`
// margin-top:95px;
// background-image: linear-gradient(to left bottom, #000028, #00002e, #010034, #00003a, #000040);
//   display: flex;
  
//   justify-content: space-evenly;
//   align-items: start;
//   gap: 20px;
//   flex-wrap:wrap;
//   .companyName,
//   .Products,
//   .ContactInfo {
//     width: 350px;
//     display: flex;
//     align-items: start;
//     justify-content: flex-start;
//     flex-direction: column;
//     color:white;
//     padding: 10px;
//     .footer-header {
//       text-align: left;
//       padding: 10px;
//       font-weight:900;
//       background-image:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
//       -webkit-background-clip: text;
//       color: transparent;
           
//     }
//     .freedemo{
//       margin:10px;
//       padding: 10px;
//       border-radius:31px;
//       font-weight:bold;
//       background:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
//       color:white;
//       border:2px solid #006072;
//             width:300px;
//             letter-spacing:1px;
//             transition:all 0.4s ease-in-out;
//       &:hover{
//         color:white;
//         background:linear-gradient(to left, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
//         box-shadow:0px 0px 15px rgba(107, 187, 174,0.9);
        
//       }
//     }
//     p {
//       text-align: left;
//       margin: 5px;
//       padding: 10px;
//       font-weight: 600;
//       font-size: 20px;
      
//       flex-wrap:nowrap;
      
//     }
//   }
//   .product-item {
//     color: inherit;
//     text-decoration: none;
//     display: block;
//     margin: 5px;
//     padding: 5px;
//     font-weight: 600;
//       font-size: 20px;
//       &:hover{
// font-weight:800;
// color:white;
// background-image:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
//       -webkit-background-clip: text;
//       color: transparent;

//       }
//   }


// `;
// const Copyrightdiv = styled.section`
// background-image: linear-gradient(to top, #000028, #00002e, #010034, #00003a, #000040);
// color:white;
// font-weight:900;
// `
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
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
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
          <button className="demo-button">Book A Free Demo Now!</button>
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
    font-size: 24px;
    margin: 10px 0;
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

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
      text-align: left;
    }
    .footer-section {
      text-align: left;
    }
  }
`;
