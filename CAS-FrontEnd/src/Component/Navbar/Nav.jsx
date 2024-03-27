import React from "react";
import logo from '../../assets/Logo.png'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top  navbar-expand-lg ">

        <div className="container-fluid internal">
        
          <Link className="navbar-brand" to="/">
            <div className="brand"><img className ="logoimg" src={logo} alt="Logo" /></div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RxHamburgerMenu className="hamburger"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Products">
                  Products
                </NavLink>
               
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link" aria-current="page" to="/Technology">
                  Technology
                </NavLink>
               
              </li>

              <li className="nav-item">
                <NavLink
                    className="nav-link" aria-current="page" to="/Services">
                
                  Services
                </NavLink>
                
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Support">Support</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page"  to="/Contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );

};

export default Navbar;
