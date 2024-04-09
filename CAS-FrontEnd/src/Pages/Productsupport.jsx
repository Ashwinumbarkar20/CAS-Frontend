import React from 'react'
import supportimg from '../assets/Support.png'
import styled from "styled-components";
export default function Productsupport() {
  return (
    <Maindiv className="container-fluid">
    <div className="Heroimg"><img className="hero-img" src={supportimg} alt="Support Hero image" /></div>
     <div className="container">
     <h1 className="Mainheading"> Welcome to AlmaCAM Support!</h1>
      <p className="content">
        At CADCAMSYS, we are committed to providing exceptional support to
        ensure that your experience with AlmaCAM&#39;s industry-leading CAD/CAM
        software for sheet metal manufacturing is seamless and productive.
        Below, you&#39;ll find information on how to access support resources
        for AlmaCAM&#39;s products, as well as how to navigate any inquiries or
        concerns you may have.
      </p>

      <h3 className="heading">Customer Support</h3>
      <ul className="list" style={{ margin: "10px" }}>
        <span>
          For any assistance, questions, or feedback related to AlmaCAM&#39;s
          CAD/CAM software, please feel free to reach out to our dedicated
          support team:
        </span>

        <li className="list-item"style={{ margin: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#1e7682",
              fontWeight: "600",
            }}
            href="mailto:support@cadcamsys.com"
          >
            support@cadcamsys.com
          </a>{" "}
        </li>
        <li className="list-item" style={{ margin: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Phone:</span> +020 41016097
        </li>
      </ul>

      <h3 className="heading">Resources for Our Customers</h3>
      <ul className="list" style={{ margin: "10px" }}>
        <span>
          We understand the importance of providing you with the necessary
          resources to maximize your experience with AlmaCAM's software. Here
          are some resources available for our customers:
        </span>

        <li className="list-item" style={{ margin: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Product Information: </span>{" "}
          Access detailed information about AlmaCAM's CAD/CAM software,
          including features, specifications, and benefits, to enhance your
          understanding and utilization of the product from the product page.
        </li>
        <li className="list-item" style={{ margin: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Training Materials: </span> By
          contacting CADCAMSYS team, utilize comprehensive training materials
          and documentation to expand your knowledge and proficiency in
          utilizing AlmaCAM's software effectively.
        </li>
        <li className="list-item" style={{ margin: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Technical Documentation: </span>{" "}
          Browse through technical documentation, manuals, and guides to
          troubleshoot common issues and optimize your use of AlmaCAM's software
          through the software help menu.
        </li>
        <li className="list-item" style={{ margin: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Community Forums: </span> Join
          our community forums to connect with fellow users, share insights, and
          exchange best practices for maximizing your productivity with
          AlmaCAM's software.{" "}
        </li>
      </ul>

      <h3 className="heading">Technical Support for Our Customers:</h3>
      <ul className="list" style={{ margin: "10px" }}>
        <span>
          If you encounter any technical challenges or require assistance with
          AlmaCAM's software, our skilled technical support team is here to
          assist you with:
        </span>

        <li className="list-item" style={{ margin: "10px" }}>
          Resolving software installation and setup issues
        </li>
        <li className="list-item" style={{ margin: "10px" }}>
          Providing guidance on troubleshooting errors or technical
          complications
        </li>
        <li className="list-item" style={{ margin: "10px" }}>
          Assisting with software updates, patches, and compatibility concerns
        </li>
        <li className="list-item" style={{ margin: "10px" }}>
          Addressing any other technical inquiries or challenges you may
          encounter{" "}
        </li>
      </ul>
      <h3 className="heading">Feedback and Suggestions</h3>
     
      <p>
        Your feedback is invaluable to us as we strive to enhance our support
        services and ensure your satisfaction with AlmaCAM's software. Please
        don't hesitate to share any suggestions or ideas you may have for
        improving the support experience for our customers.
      </p>
      <p>
        Thank you for choosing CADCAMSYS as your trusted partner for AlmaCAM's
        CAD/CAM software. We are dedicated to providing you with exceptional
        support and assistance to ensure your success in sheet metal
        manufacturing.
      </p>
     </div>
      
    </Maindiv>
  )
}
const Maindiv = styled.section`
  margin-top: 90px;
  .Mainheading {
    background-image: linear-gradient(
      to right,
      #006072,
      #1e7682,
      #008b74,
      #50a4a0,
      #008b74
    );
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 900;
    text-align: center;
    margin-top:20px;
  }
  .content {
    margin: 20px 0px;
    font-weight: 500;
    text-align: justify;
  }
  .heading {
    background-image: linear-gradient(
      to right,
      #006072,
      #1e7682,
      #008b74,
      #50a4a0,
      #008b74
    );
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 900;
    text-align: left;
  }
  .list{
    list-style-type: square; 
    li{
      &::marker{
        color:#50a4a0;
        font-size:24px;
      }
    }
  }
  .Heroimg{
    width:100%;
    height:400px;
    .hero-img{
      width:100%;
    height:100%;
    object-fit:cover; 
    }
  }
  @media only screen and (max-width: 768px) {
    .Heroimg{
    width:100%;
    height:225px;
    .hero-img{
      width:100%;
    height:100%;
    object-fit:cover; 
    }
  }
  }
`