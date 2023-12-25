/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Menu({menuitems}) {
   
  return (
    <div>
    <ul>
    {menuitems.map((menu)=>{
        return <li key={menu.Name}>{menu.Name}</li>
    })}
    </ul>
    </div>
  )
}
