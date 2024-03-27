import React from 'react'
import styled from 'styled-components'

export default function Logo() {
  return (
    <Logodiv className=''>
      CAS
    </Logodiv>
  )
}
const Logodiv=styled.div`
height:55px;
width:55px;
border-radius:100%;
display:flex;
border:5px double var(--primary);
color:var(--primary);
justify-content:center;
align-items:center;
font-weight:bolder;
`