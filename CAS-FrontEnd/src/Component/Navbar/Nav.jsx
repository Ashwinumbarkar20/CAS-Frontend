import React from "react";
import styled from "styled-components";
import { NavLink,Link } from "react-router-dom";
import products from "../../Data/Products.json";
import Logo from "../Logo/Logo";

export default function Nav() {
  return (
    <Navmaindiv className="container-fluid p-0 Position-sticky">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           <Logo/>
          </Link>
          <button 
            className="navbar-toggler  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
          
            <ul className="mainmenu navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link  " to="/">Home</NavLink></li>

              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" 
              role="button"
              data-bs-auto-close="outside"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Products</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/AlmaQuote">AlmaQuote</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Almacamtube">Almacam Tube</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Almacamspacecut">Almacam space cut</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Almacamweld">Almacam weld</NavLink></li>
                <li><NavLink className="dropdown-item" to="/industry4">Almacam for industry 4.0</NavLink></li>
                <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Almacam</a>
                        <ul className="dropdown-menu">
                               <li><NavLink to="/Almacamcut" className="dropdown-item">Almacam cut</NavLink></li>
                               <li><NavLink to="/Almacampunch" className="dropdown-item">Almacam punch</NavLink></li>
                               <li><NavLink to="/Almacamcombi" className="dropdown-item">Almacam combi</NavLink></li>
                               <li><NavLink to="/Almacamrouting" className="dropdown-item">Almacam routing</NavLink></li>
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
              <NavLink className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" to="//Technology">Tubes and profile cutting</NavLink>
              <ul className="dropdown-menu">
                               <li><NavLink to="#" className="dropdown-item">3D cutting</NavLink></li>
                               <li><NavLink to="#" className="dropdown-item">Robotic welding </NavLink></li>
                              
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
        
              <li className="nav-item"><NavLink className="nav-link" to="/Services">Services</NavLink></li>
            
              <li className="nav-item"><NavLink className="nav-link" to="/Productsupport">Support & Training</NavLink></li>
           
              <li className="nav-item"><NavLink className="nav-link" to="/Contactus">Contact Us!</NavLink></li>
             
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
nav{
  padding:0px;
  background-color:var(--primary);
  .container-fluid{
    background-color:var(--primary);
    .navbar-brand{
      background-color:var(--primary);
    }
    .collapse{
      background-color:var(--primary);
      .mainmenu{
li{
  background-color:var(--primary);
  .active{
    border:1px solid var(--text-color);
    border-radius:35px;
      
      
    }
  .nav-link{
    color:var(--text-color);
    
  }
  
}
      }
    }
  }
}



`;
