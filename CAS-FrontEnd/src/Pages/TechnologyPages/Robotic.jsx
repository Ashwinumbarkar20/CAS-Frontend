import React,{useEffect,useState} from 'react'
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';

export default function Robotic() {
    console.log(Technology)
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("Robotic welding")},[]);
  return (
    <Robotic_Cutting>
     <TechnologyTemplate Technology={TechnologyData}/>
    </Robotic_Cutting>
  )
}

const Robotic_Cutting=styled.main`
margin-top:90px;
`
