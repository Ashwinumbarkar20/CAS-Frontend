import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contactus() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country_code:"",
    company: '',
    Job_Title: '',
    country: '',
    interest: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_5mz28ee';
    const templateID = 'template_fb8q01n';
    const userID = 'ZPGN5dqDDpQMONGtA';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        toast.success('Message sent successfully!');
      })
      .catch((err) => {
        toast.error('Failed to send message. Please try again later');
      });

    setFormData(initialValues);
  };

  return (
    <ContactusContainer>
      <div className='Contact-Form'>
        <h1 className='text-center heading'>Contact Us!</h1>
        <form className='Contact' onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='first-name'>
                First Name<span className='MandetoryFeild'>*</span>
              </label>
              <input
                type='text'
                id='first-name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='last-name'>
                Last Name<span className='MandetoryFeild'>*</span>
              </label>
              <input
                type='text'
                id='last-name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='form-row'>
          <div className='form-group'>
          <label htmlFor='country_code'>
                Country code<span className='MandetoryFeild'>*</span>
              </label>
              <input
                type='text'
                id='country_code'
                name='country_code'
                value={formData.country_code}
                onChange={handleChange}
                required
              />
          </div>
         
            
            <div className='form-group'>
               <label htmlFor='phone'>
                Phone Number<span className='MandetoryFeild'>*</span>
              </label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='form-group'>
              <label htmlFor='email'>
                Email<span className='MandetoryFeild'>*</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='company'>
                Company<span className='MandetoryFeild'>*</span>
              </label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Job_Title'>
                Job Title<span className='MandetoryFeild'>*</span>
              </label>
              <input
                type='text'
                id='Job_Title'
                name='Job_Title'
                value={formData.Job_Title}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='country'>Country</label>
              <select
                id='country'
                name='country'
                value={formData.country}
                onChange={handleChange}
              >
                <option value='india'>India</option>
                <option value='middle-east'>Middle East</option>
                <option value='uae'>UAE</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='interest'>Level of Interest</label>
              <select
                id='interest'
                name='interest'
                value={formData.interest}
                onChange={handleChange}
              >
                <option value='browsing'>Browsing</option>
                <option value='ready-to-purchase'>Ready to Purchase</option>
                <option value='beginning-investigation'>
                  Beginning Investigation
                </option>
                <option value='evaluating-product'>Evaluating Product</option>
              </select>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='message'>
              Message<span className='MandetoryFeild'>*</span>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              cols='30'
              rows='5'
              required
            />
          </div>

          <button type='submit'>Send Message</button>
        </form>
      </div>
      <ToastContainer position='bottom-center' />
    </ContactusContainer>
  );
}

const ContactusContainer = styled.section`
  margin-top: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 95px);
  background: linear-gradient(145deg, #6bbae0, #006072);
  margin-bottom: 95px;

  .MandetoryFeild {
    color: red;
    font-size: 20px;
  }

  .Contact-Form {
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .heading {
      background-image: linear-gradient(
        to right,
        #006072,
        #1e7682,
        #378d92,
        #50a4a0,
        #006072
      );
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 900;
    }

    .Contact {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
      }

      label {
        font-weight: bold;
        margin-bottom: 5px;
      }

      input,
      textarea,
      select {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      button {
        margin-top: 10px;
        padding: 10px 15px;
        border-radius: 10px;
        background-image: linear-gradient(
          to right,
          #006072,
          #1e7682,
          #378d92,
          #1e7682,
          #1e7682
        );
        color: white;
        font-weight: bold;
        border: none;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
        transition: all 0.3s ease;
        &:hover {
          background-image: linear-gradient(
            to right,
            #006072,
            #1e7682,
            #378d92,
            #50a4a0,
            #6bbbae
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
  }
`;
