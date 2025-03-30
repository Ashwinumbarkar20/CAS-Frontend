import React from 'react'
import styled from 'styled-components'
import Alltechs from '../Data/Technology.json'
import TechnologyCard from '../Component/TechnologyCard'
import { motion } from 'framer-motion';
export default function Technology() {
  return (
    <AllTechnologies>
      {/* Heading Animation */}
      <motion.h1 
        className='Technology-Heading m-5'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Technologies for Sheet Metal Cutting
      </motion.h1>

      <div className='container'>
        <div className='row'>
          {
            Alltechs.map((Tech, index) => (
              <motion.div
                key={Tech.Technology_name}
                className='d-flex justify-content-center align-items-center col-12 col-sm-6 col-md-6 col-lg-4'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <TechnologyCard 
                  Technology_name={Tech.Technology_name} 
                  Heading={Tech.Heading} 
                  pageurl={Tech.pageurl} 
                  imgurl={Tech.imgurl}
                />
              </motion.div>
            ))
          }
        </div>
      </div>
    </AllTechnologies>
  )
}
const AllTechnologies=styled.main`
margin-top:120px;
.Technology-Heading{
  text-align:center;
 
      color: var(--primary);
     font-weight:900;
    
}
  .row{
display:flex;
justify-content:center;
align-items:center;
} 
  

`
