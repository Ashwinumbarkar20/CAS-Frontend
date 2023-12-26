import React from "react";
import styled from "styled-components";
import products from "../../Data/Products.json";

export default function Nav() {
  return (
    <Navmaindiv className="container-fluid m-0 p-1">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CAS LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>

              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" 
              href="#"
              role="button"
              data-bs-auto-close="outside"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Products</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">AlmaQuote</a></li>
                <li><a className="dropdown-item" href="#">Almacam Tube</a></li>
                <li><a className="dropdown-item" href="#">Almacam space cut</a></li>
                <li><a className="dropdown-item" href="#">Almacam weld</a></li>
                <li><a className="dropdown-item" href="#">Almacam for industry 4.0</a></li>
                <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Almacam</a>
                        <ul className="dropdown-menu">
                               <li><a href="" className="dropdown-item">Almacam cut</a></li>
                               <li><a href="" className="dropdown-item">Almacam punch</a></li>
                               <li><a href="" className="dropdown-item">Almacam combi</a></li>
                               <li><a href="" className="dropdown-item">Almacam routing</a></li>
                        </ul>
                </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" 
              href="#"
              role="button"
              data-bs-auto-close="outside"
              data-bs-toggle="dropdown"
              aria-expanded="false">Technology</a>
              <ul className="dropdown-menu">
              <li className="dropend">
              <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Tubes and profile cutting</a>
              <ul className="dropdown-menu">
                               <li><a href="" className="dropdown-item">3D cutting</a></li>
                               <li><a href="" className="dropdown-item">Robotic welding </a></li>
                              
                        </ul></li>
              <li className="dropend"><a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Sheetmetal working</a>
              <ul className="dropdown-menu">
                               <li><a href="" className="dropdown-item">Laser cutting</a></li>
                               <li><a href="" className="dropdown-item">Plasma cutting</a></li>
                               <li><a href="" className="dropdown-item">Oxy cutting</a></li>
                               <li><a href="" className="dropdown-item">Waterjet cutting</a></li>
                               <li><a href="" className="dropdown-item">Punching nibbling</a></li>
                               <li><a href="" className="dropdown-item">Routing/milling of metal</a></li>
                        </ul></li>
              </ul>
              </li>



              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Support & Training</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us!</a></li>
             
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li className="dropend">
                    <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#" >New menu</a>
                        <ul className="dropdown-menu">
                               <li><a href="" className="dropdown-item">item1</a></li>
                               <li><a href="" className="dropdown-item">item2</a></li>
                               <li><a href="" className="dropdown-item">item3</a></li>
                               <li><a href="" className="dropdown-item">item4</a></li>
                        </ul>
                  </li>
                </ul>
              </li>
   */}
              
            </ul>
          </div>
        </div>
      </nav>
    </Navmaindiv>
  );
}
const Navmaindiv = styled.div`
ul{
  border:none;
}

`;
