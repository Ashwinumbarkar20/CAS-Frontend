import React from 'react'
import ProductsData from '../../Products.json'
import styled from 'styled-components';
export default function Almacamspacecut() {
  
  const getdata=ProductsData.find((p)=>p["Product_Name"]==="Almacam SPACECUT");
  
  return (
    <Maindiv>
    <img src="" alt="" />
    </Maindiv>
  )
}
const Maindiv=styled.section`
`