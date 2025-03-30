// import React, { useState } from "react";
// import logo from "../../assets/Logo.png";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { RxHamburgerMenu } from "react-icons/rx";

// const Navbar = () => {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//   const closeNav = () => setIsNavCollapsed(true);

//   return (
//     <>
//       <nav className="navbar fixed-top navbar-expand-lg ">
//         <div className="container-fluid internal">
//           <Link className="navbar-brand" to="/">
//             <div className="brand">
//               <img className="logoimg" src={logo} alt="Logo" />
//             </div>
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded={!isNavCollapsed ? true : false}
//             aria-label="Toggle navigation"
//             onClick={handleNavCollapse}
//           >
//             <RxHamburgerMenu className="hamburger" />
//           </button>

//           <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/" onClick={closeNav}>
//                   Home
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/Products" onClick={closeNav}>
//                   Products
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/Technology" onClick={closeNav}>
//                   Technology
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/Services" onClick={closeNav}>
//                   Services
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/Productsupport" onClick={closeNav}>
//                   Support
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/Contactus" onClick={closeNav}>
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid internal">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <div className="brand">
              <img className="logoimg" src={logo} alt="Logo" />
            </div>
          </Link>

          <div className="mobile-info">
          <div style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"5px"}}>
              
              <Link to="/contactUs" className="book-demo-btn" onClick={closeNav}>
                Book a Demo
              </Link>
              </div>
            </div>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
          >
            {isNavCollapsed ? (
              <RxHamburgerMenu className="hamburger-icon" />
            ) : (
              <IoClose className="close-icon" />
            )}
          </button>

          {/* Navbar Items */}
          <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={closeNav}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products" onClick={closeNav}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Technology" onClick={closeNav}>
                  Technology
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services" onClick={closeNav}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Productsupport" onClick={closeNav}>
                  Support
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contactus" onClick={closeNav}>
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Extra Info (Only in Mobile View) */}
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
