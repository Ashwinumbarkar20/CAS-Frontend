import React, { useState } from "react";
import serviceimg from "../assets/service.jpg";
import styled from "styled-components";

export default function Services() {
  return (
    <Maindiv>
      <div className="Heroimg">
        <img className="hero-img" src={serviceimg} alt="Support Hero image" />
      </div>

      <div className="container">
        <h1 className="Mainheading"> Customization and Solution Development</h1>
        <p className="content">
          As committed to meeting the diverse needs of your daily operations in
          the metal manufacturing industry, we offer a comprehensive suite of
          customization and solution development services. Whether you're
          seeking to optimize your CAD/CAM software or require digital solutions
          to address specific manufacturing challenges, we're here to help.
        </p>

        <h4 style={{color:"var(--primary)"}}>CAD/CAM Customization Services:</h4>
        <ul className="list" style={{ margin: "10px" }}>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Tailored Configurations:</span>
            Collaborate with our team of experts to customize your CAD/CAM
            software to match your unique workflow and requirements.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Feature Enhancement:</span>
            Unlock additional functionalities and capabilities within your
            CAD/CAM software through custom development and integration.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>
              User Interface Optimization:
            </span>
            Streamline your user experience and improve efficiency with a
            customized user interface tailored to your preferences.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Workflow Automation: </span>
            Automate repetitive tasks and streamline your design and
            manufacturing processes for increased productivity and accuracy.
          </li>
        </ul>

        <h4 style={{color:"var(--primary)"}}>Digital Solution Development:</h4>
        <ul className="list" style={{ margin: "10px" }}>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>
              Problem-Solving Approach:
            </span>{" "}
            Work with our team to develop bespoke digital solutions tailored to
            address your specific manufacturing challenges and pain points
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Process Optimization:</span>
            Leverage advanced algorithms and data analytics to optimize your
            manufacturing processes and maximize efficiency.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>IoT Integration:</span>
            Integrate Internet of Things (IoT) technologies to enable real-time
            monitoring and control of manufacturing equipment and processes.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Predictive Maintenance: </span>{" "}
            Implement predictive maintenance solutions to minimize downtime,
            reduce costs, and prolong the lifespan of equipment{" "}
          </li>
        </ul>

        <h4 style={{color:"var(--primary)"}}>Why Choose Us?</h4>
        <ul className="list" style={{ margin: "10px" }}>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Expertise: </span> Benefit from
            our extensive experience and expertise in CAD/CAM customization and
            digital solution development.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Customized Approach </span> We
            understand that every business is unique. Our services are tailored
            to your specific requirements and objectives.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Innovative Solutions </span>{" "}
            Stay ahead of the curve with cutting-edge digital solutions designed
            to address the evolving needs of the manufacturing industry.
          </li>
          <li className="list-item" style={{ margin: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Customer-Centric Focus:</span>{" "}
            Your satisfaction is our top priority. We're committed to delivering
            solutions that exceed your expectations and drive tangible results.{" "}
          </li>
        </ul>

        <h4 style={{color:"var(--primary)"}}>Get Started Today!</h4>

        <p>
          Ready to unlock the full potential of your manufacturing operations?
          Contact us today to discuss your customization and solution
          development needs. Let's collaborate to empower your business with
          tailored solutions that drive efficiency, productivity, and growth.
        </p>
        <p>
          Thank you for considering us as your partner in customization and
          solution development. We look forward to helping you achieve your
          goals and overcome your manufacturing challenges.
        </p>
      </div>
    </Maindiv>
  );
}
const Maindiv = styled.section`
  margin-top: 90px;
  .Mainheading {
   margin:20px;
    text-align: center;
    color: var(--primary);
    font-weight: 900;
    text-align: center;
  }
  .content {
    margin: 20px 0px;
    font-weight: 500;
    text-align: justify;
  }
  
  .list {
    list-style-type: square;
    li {
      &::marker {
        color: var(--primary);
        font-size: 24px;
      }
    }
  }
  .Heroimg {
    width: 100%;
    height: 500px;
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 768px) {
    .Heroimg {
      width: 100%;
      height: 225px;
      .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
