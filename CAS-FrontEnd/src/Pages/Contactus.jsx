import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

export default function Contactus() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    interest: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceID = 'YOUR_SERVICE_ID'
    const templateID = 'YOUR_TEMPLATE_ID'
    const userID = 'YOUR_USER_ID'

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        alert('Message sent successfully!')
      })
      .catch((err) => {
        console.error('FAILED...', err)
        alert('Failed to send message. Please try again later.')
      })
  }

  return (
    <Contactusdiv className='container'>
      <div className='Contact-Form d-flex flex-column justify-content-center align-items-center gap-3'>
        <h1 className='text-center heading'>Contact Us!</h1>
        
        <form className="Contact d-flex flex-column justify-content-center align-items-center gap-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first-name">First Name<span className='MandetoryFeild'>*</span></label>
            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name<span className='MandetoryFeild'>*</span></label>
            <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email<span className='MandetoryFeild'>*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number<span className='MandetoryFeild'>*</span></label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="company">Company<span className='MandetoryFeild'>*</span></label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country" name="country" value={formData.country} onChange={handleChange}>
              <option value="india">India</option>
              <option value="middle-east">Middle East</option>
              <option value="uae">UAE</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interest">Level of Interest</label>
            <select id="interest" name="interest" value={formData.interest} onChange={handleChange}>
              <option value="browsing">Browsing</option>
              <option value="ready-to-purchase">Ready to Purchase</option>
              <option value="beginning-investigation">Beginning Investigation</option>
              <option value="evaluating-product">Evaluating Product</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message<span className='MandetoryFeild'>*</span></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} cols="30" rows="5" required/>
          </div>
          <button className="mt-3" type="submit">Send Message</button>
        </form>
      </div>
    </Contactusdiv>
  )
}

const Contactusdiv = styled.section`
  margin-top: 95px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 95px);
  background: linear-gradient(145deg, #6bbae0, #006072);
  margin-bottom: 95px;
  .MandetoryFeild{
    color: red;
    font-size: 20px;
  }
  .Contact-Form {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-bottom: 95px;
    .heading {
      background-image: linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #006072);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 900;
    }
    .Contact {
      width: 100%;
      .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      label {
        font-weight: bold;
        margin-bottom: 5px;
      }
      input, select, textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-bottom: 15px;
      }
      button {
        padding: 10px 15px;
        border-radius: 10px;
        background-image: linear-gradient(to right, #006072, #1e7682, #378d92, #1e7682, #1e7682);
        color: white;
        font-weight: bold;
        border: none;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
        transition: all 0.3s ease;
        &:hover {
          background-image: linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
  }
`
