import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
export default function Lasercutting() {
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("Laser cutting")},[]);
  return (
    <Laser_Cutting>
     <TechnologyTemplate Technology={TechnologyData}/>
    </Laser_Cutting>
  )
}

const Laser_Cutting=styled.main`
`