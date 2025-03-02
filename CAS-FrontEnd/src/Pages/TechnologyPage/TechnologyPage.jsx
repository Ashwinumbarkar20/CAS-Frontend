import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Technology from '../../Data/Technology.json';
import TechnologyTemplate from '../../Component/Technology/TechnologyTemplate';
export default function TechnologyPage() {
    const {Techname}=useParams();
     const[TechnologyData,setTechnologyData]=useState({});

     const getTechnology=(Tech)=>{
        const CurrentTech=Technology.find((t)=>t.Technology_name===Tech);
        setTechnologyData(CurrentTech);
    }
    useEffect(()=>{getTechnology(Techname)},[]);
  return (
    <>
        <TechnologyTemplate Technology={TechnologyData}/>
    </>
  )
}
