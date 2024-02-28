
import React,{useEffect,useState} from 'react'
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
import styled from 'styled-components'
import Technology from '../../Data/Technology.json';
export default function RoutingMilling() 
{console.log(Technology)
    const[TechnologyData,setTechnologyData]=useState({});
    
    const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology("Routing/Milling of metal")},[]);
  return (
    <Routing_Milling>
     <TechnologyTemplate Technology={TechnologyData}/>
    </Routing_Milling>
  )
}
const Routing_Milling=styled.main`
`

 