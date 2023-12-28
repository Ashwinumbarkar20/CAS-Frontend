import React from 'react'
import styled from 'styled-components'

export default function ProductMenu() {
  return (
    <Products>
      <div className='ProductsMenu'>
      <ul className='Almacam'>
          <li>Almacam</li>
          <li>Almacam cut</li>
          <li>Almacam Punch</li>
          <li>Almacam Combi</li>
          <li>Almacam Routing</li>
      </ul>

    <ul className='Other'>
    <li>Other</li>
        <li>AlmaQuote</li>
        <li>Almacam Tube</li>
        <li>Almacam space cut</li>
        <li>Almacam weld</li>
    </ul>

    <ul className='Industry'>
        <li>Almacam for industry 4.0</li>
        <li>Workshop and plnner module</li>
        <li>ERP or production management system integration</li>
    </ul>
             
      </div>
    </Products>
  )
}
const Products=styled.div`
display:flex;
justify-content: center;
align-items:center;
.ProductsMenu{
  display:flex;
justify-content: space-around;
align-items:center;
flex-direction:row;

}
`

{/* <li className="products nav-item dropdown">
              <a className="nav-link dropdown-toggle" 
              role="button"
              data-bs-auto-close="outside"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Products</a>
              <ProductMenu className='dropdown-menu'/>
              {/* <ul className="dropdown-menu">
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
              </li> */}