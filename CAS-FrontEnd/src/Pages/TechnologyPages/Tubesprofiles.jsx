import React,{useEffect,useState} from 'react'
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';

export default function Tubesprofiles() {
    console.log(Technology)
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("Tubes & profiles cutting")},[]);
  return (
    <Tubes_profile_cutting>
     <TechnologyTemplate Technology={TechnologyData}/>
    </Tubes_profile_cutting>
  )
}
const Tubes_profile_cutting=styled.main`
margin-top:90px;
`

