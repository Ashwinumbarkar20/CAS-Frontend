  import React,{useState} from 'react';
  import { GiHamburgerMenu } from "react-icons/gi";
  import { NavLink } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  import './Navbar.css'; // Import your CSS file for styling
import AlmaQuote from '../../Pages/Products/AlmaQuote';
// eslint-disable-next-line no-unused-vars
import Almacamcombi from '../../Pages/Products/Almacam/Almacamcombi';
import Almacamcut from '../../Pages/Products/Almacam/Almacamcut';
import Almacampunch from '../../Pages/Products/Almacam/Almacampunch';
import Almacamrouting from '../../Pages/Products/Almacam/Almacamrouting';
import Almacamweld from '../../Pages/Products/Almacamweld';
import Almacamtube from '../../Pages/Products/Almacamtube';
import Almacamspacecut from '../../Pages/Products/Almacamspacecut';
import Industry4 from '../../Pages/Products/Industry4';
import products from '../../Pages/Products'
const Navbar = () => {

    return (
      <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">LOGO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
       
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
          <div className="dropdown-menu">
     

          <ul>
              <li>Almacam</li>   
              <li><Link to="/Almacamcut">Almacam cut</Link></li>
               <li><Link to="/Almacampunch">Almacam punch</Link></li>
               <li><Link to="/Almacamcombi">Almacam combi</Link></li>             
               <li><Link to="/Almacamrouting">Almacam routing</Link></li> 
          </ul>

            <ul>
            <li>Other</li>
                <li><Link to="/AlmaQuote">AlmaQuote</Link></li>
                <li><Link to="/Almacamweld">Almacam weld</Link></li>
                <li><Link to="/Almacamtube">Almacam Tube</Link></li>
                <li><Link to="/Almacamspacecut">Almacam space cut</Link></li>
            </ul>

            <ul>
                <li>Almacam for industry 4.0</li>
                <li><Link to="/Industry4">Workshop and planner module</Link></li>
                <li><Link to="/Industry4">ERP or production management system integration</Link>
                                </li>
            </ul>
              
          </div>
        </li>
            
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Technology
          </a>
          <div className="dropdown-menu">
          <ul>
                    <li>Sheetmetal working</li>
                     <li><Link to="#">Laser cutting</Link></li>
                     <li><Link to="#">Plasma cutting</Link></li>
                     <li><Link to="#">Oxy cutting</Link></li>
                     <li><Link to="#">Waterjet cutting</Link></li>
                     <li><Link to="#">Punching nibbling</Link></li>
                     <li><Link to="#">Routing/milling of metal</Link></li>
          </ul>

          <ul>
                   <li>Tubes and profile cutting</li>
                     <li><Link to="#">3D cutting</Link>
                      
                       <li><Link to="#"> Tube & Profile cutting</Link></li>
                         <li><Link to="#"> 3D 5-Axis Profile cutting</Link></li>
                       
                     </li>
                     <li><Link to="#">Robotic welding</Link></li>
                   </ul>
   
            
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <div className="dropdown-menu">
            <ul>
            <li>All Services</li>
            <li><Link to="#">Software consultancy for Manufacturing industries’</Link></li>
            <li><Link to="#">Custom development services</Link></li>
            </ul>
            
          </div>
        </li>


        <li className="nav-item">
          <a className="nav-link" >Product support and training</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" >Contact Us</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

      </>



      // <nav classNameNameName="navbar">
      //   <div classNameNameName="navbar-logo">Logo</div>
      //   <div classNameNameName={`toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}> <GiHamburgerMenu/></div>
      //   <div classNameNameName={`navbar-menu ${menuOpen ? 'open' : ''}`}>
      //     <ul>
      //       <li><Link to="/">Home</Link></li>
      //       <li>
      //         <Link to="/products">Products</Link>
      //         <div classNameNameName="mega-menu">

      //           <div classNameNameName="mega-menu-column">
      //             <h4>Almacam</h4>
      //             <ul>
      //               <li><Link to="/Almacamcut">Almacam cut</Link></li>
      //               <li><Link to="/Almacampunch">Almacam punch</Link></li>
      //               <li><Link to="/Almacamcombi">Almacam combi</Link></li>
      //               <li><Link to="/Almacamrouting">Almacam routing</Link></li>
      //             </ul>
      //           </div>
      //           <div classNameNameName="mega-menu-column">
      //           <h4>Other</h4>
      //               <ul>
      //               <li><Link to="/AlmaQuote">AlmaQuote</Link></li>
      //               <li><Link to="/Almacamweld">Almacam weld</Link></li>
      //               <li><Link to="/Almacamtube">Almacam Tube</Link></li>
      //               <li><Link to="/Almacamspacecut">Almacam space cut</Link></li>
      //             </ul>
      //           </div>
      //           <div classNameNameName="mega-menu-column">
      //             <h4>Almacam for industry 4.0</h4>
      //             <ul>
      //               <li><Link to="/Industry4">Workshop and planner module</Link></li>
      //               <li><Link to="/Industry4">ERP or production management system integration</Link></li>
      //             </ul>
      //           </div>
      //         </div>
      //       </li>
      //       <li>
      //         <Link to="#">Technology</Link>
      //         <div classNameNameName="mega-menu">
      //           <div classNameNameName="mega-menu-column">
      //             <h4>Sheetmetal working</h4>
      //             <ul>
      //               <li><Link to="#">Laser cutting</Link></li>
      //               <li><Link to="#">Plasma cutting</Link></li>
      //               <li><Link to="#">Oxy cutting</Link></li>
      //               <li><Link to="#">Waterjet cutting</Link></li>
      //               <li><Link to="#">Punching nibbling</Link></li>
      //               <li><Link to="#">Routing/milling of metal</Link></li>
      //             </ul>
      //           </div>
      //           <div classNameNameName="mega-menu-column">
      //             <h4>Tubes and profile cutting</h4>
      //             <ul>
      //               <li><Link to="#">3D cutting</Link></li>
      //               <li>
      //                 <Link to="#">Tube & Profile cutting</Link>
      //                 <ul>
      //                   <li><Link to="#">3D 5-Axis Profile cutting</Link></li>
      //                 </ul>
      //               </li>
      //               <li><Link to="#">Robotic welding</Link></li>
      //             </ul>
      //           </div>
      //         </div>
      //       </li>
      //       <li><Link to="#">Services</Link></li>
      //       <li><Link to="#">Product Support and Training</Link></li>
      //       <li><Link to="#">Contact Us</Link></li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }

  export default Navbar;
