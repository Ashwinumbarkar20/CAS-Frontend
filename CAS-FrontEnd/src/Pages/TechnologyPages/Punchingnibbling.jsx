import React,{useEffect,useState} from 'react'
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';

export default function Punchingnibbling() {
    console.log(Technology);
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        console.log(CurrentTech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("Punching-nibbling")},[]);
  return (
    <Punchingnibbling_cutting>
     <TechnologyTemplate Technology={TechnologyData}/>
    </Punchingnibbling_cutting>
  )
}

const Punchingnibbling_cutting=styled.main`
margin-top:90px;
`
