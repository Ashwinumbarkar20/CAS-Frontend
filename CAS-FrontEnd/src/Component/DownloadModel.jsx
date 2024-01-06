import React from 'react'
import styled from 'styled-components'

export default function DownloadModel({handleModel}) {
  const handleDownload=()=>{
    handleModel();
  }
  return (
    <Modal className='overlay' >


        <div className='internalmodel'>
       
        <div className='d-flex flex-row justify-content-center align-items-center'>
        <h4 className='text-center width-80'>Please Fill the Details for download</h4>
        </div>
        
        <div className='form d-flex flex-column justify-content-center align-items-center g-2'>
            <input className="p-2 m-2 rounded " type="text" placeholder='Enter your Email Address' required/>
            <input className="p-2 m-2 rounded " type="text" placeholder='Enter your Company Name' required/>
            <input className="p-2 m-2 rounded " type="text" placeholder='Enter your Contact Number' />
            <button className="p-2 m-2 rounded " type='submit'onClick={handleModel}> Download</button>
           </div>    
    </div>
   
    </Modal>
  )
}
const Modal =styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color:rgba(0,0,0,0.7);
display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
.internalmodel{
    padding: 10px;;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:#F7F7F7;
    border:2px solid whitesmoke;
    border-radius: 10px;
    
}
`

