import React, { useState } from 'react'
import DownloadModel from '../Component/DownloadModel'
import styled from 'styled-components'

export default function Services() {
  const [toggle,setToggle]=useState(false)
  const handleModel=()=>{
setToggle(!toggle)
  }

  return (

    <Maindiv className='container'>
     
     <button className="btn m-2 border border-dark" type="button" onClick={handleModel}>Download</button>
     {toggle&&<DownloadModel handleModel={handleModel}/>}
     
    </Maindiv>  
  )
}
const Maindiv=styled.section`
height:50vh;
width:100vw;
`