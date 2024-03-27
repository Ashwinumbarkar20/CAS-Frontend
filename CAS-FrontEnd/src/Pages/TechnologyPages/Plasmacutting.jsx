import React,{useEffect,useState} from 'react'
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';

export default function Plasmacutting() {
    console.log(Technology)
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("Plasma cutting")},[]);
  return (
    <Plasma_Cutting>
     <TechnologyTemplate Technology={TechnologyData}/>
    </Plasma_Cutting>
  )
}

const Plasma_Cutting=styled.main`
margin-top:90px;
`