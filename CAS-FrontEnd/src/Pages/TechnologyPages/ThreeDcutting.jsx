import React,{useEffect,useState} from 'react'
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';

export default function Threecutting() {
    console.log(Technology)
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("3D cutting of shaped parts")},[]);
  return (
    <ThreeD_Cutting>
     <TechnologyTemplate Technology={TechnologyData}/>
    </ThreeD_Cutting>
  )
}

const ThreeD_Cutting=styled.main`
`
