  import React from 'react';
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
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="#">Products</Link>
              <div className="mega-menu">

                <div className="mega-menu-column">
                  <h4>Almacam</h4>
                  <ul>
                    <li><Link to="/Almacamcut">Almacam cut</Link></li>
                    <li><Link to="/Almacampunch">Almacam punch</Link></li>
                    <li><Link to="/Almacamcombi">Almacam combi</Link></li>
                    <li><Link to="/Almacamrouting">Almacam routing</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                <h4>Other</h4>
                    <ul>
                    <li><Link to="/AlmaQuote">AlmaQuote</Link></li>
                    <li><Link to="/Almacamweld">Almacam weld</Link></li>
                    <li><Link to="/Almacamtube">Almacam Tube</Link></li>
                    <li><Link to="/Almacamspacecut">Almacam space cut</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Almacam for industry 4.0</h4>
                  <ul>
                    <li><Link to="/Industry4">Workshop and planner module</Link></li>
                    <li><Link to="/Industry4">ERP or production management system integration</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="#">Technology</Link>
              <div className="mega-menu">
                <div className="mega-menu-column">
                  <h4>Sheetmetal working</h4>
                  <ul>
                    <li><Link to="#">Laser cutting</Link></li>
                    <li><Link to="#">Plasma cutting</Link></li>
                    <li><Link to="#">Oxy cutting</Link></li>
                    <li><Link to="#">Waterjet cutting</Link></li>
                    <li><Link to="#">Punching nibbling</Link></li>
                    <li><Link to="#">Routing/milling of metal</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Tubes and profile cutting</h4>
                  <ul>
                    <li><Link to="#">3D cutting</Link></li>
                    <li>
                      <Link to="#">Tube & Profile cutting</Link>
                      <ul>
                        <li><Link to="#">3D 5-Axis Profile cutting</Link></li>
                      </ul>
                    </li>
                    <li><Link to="#">Robotic welding</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Product Support and Training</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;
