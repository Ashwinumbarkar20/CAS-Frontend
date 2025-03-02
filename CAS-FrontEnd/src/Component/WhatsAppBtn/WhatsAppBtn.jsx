import React from 'react'
import './WhatsAppBtn.css'
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppBtn() {
    const whatsappNumber = "+919156739830";  
    const message = "Hello! I need assistance."; 
    
    const handleClick = () => {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    };
  return (
    
    <div 
    onClick={handleClick}
    style={{
       
         position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 1000,
        background:'whitesmoke',
        display: "flex",                
        justifyContent: "center",       
        alignItems: "center",   
    }}>
        <FaWhatsapp 
        style={{
       width: "50px",
       height: "50px",
       color:"#25D366",
          }}/>
    </div>
      
        
      
    
  )
}
