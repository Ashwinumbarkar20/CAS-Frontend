import React,{useEffect,useState} from 'react'
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';
export default function Oxycutting() {
    console.log(Technology)
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("Oxy cutting")},[]);
  return (
    <Oxy_Cutting>
     <TechnologyTemplate Technology={TechnologyData}/>
    </Oxy_Cutting>
  )
}

const Oxy_Cutting=styled.main`
margin-top:90px;
`