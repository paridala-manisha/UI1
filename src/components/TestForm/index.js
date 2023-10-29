import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import './TestForm.css';

const initialValues = {
  
  Symptoms: '',
  fever: '',
  cough: '',
  headache: '',
  bodyPains: '',
  breathing: '',
  taste: '',
  sourThroat: ''
};
const genders = ['Male', 'Female'];

const TestForm = () => {
  const [user, setUser] = useState(initialValues);
  const { fever, cough, headache, bodyPains, breathing, taste, sourThroat } = user;
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((fever === "Yes") && (cough === "Yes") && (headache === "Yes") && (bodyPains === "Yes") && (breathing === "Yes") && (taste === "Yes") && (sourThroat === "Yes")) {
      window.alert("COVID-19 is Positive");
      navigate('/patient');
    } else if ((fever === "Yes") && (bodyPains === "Yes") && (breathing === "Yes")) {
      window.alert("COVID-19 is Positive");
      navigate('/patient');
    } else {
      window.alert("COVID-19 is Negative");
      navigate('/logout');
    }
  };

  return (
    <div className="background">
    <div className="form-container"
    style={{
      backgroundColor: 'rgba(77, 184, 255, 0.5)', // Blue color with 50% opacity
      backgroundImage: 'url(/images/testform1.jpeg)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed', 
      width: '100vw', 
      height: '100vh', 
      position: 'relative',
      overflow: 'hidden',
    }}
    
    
    >

      <Navbar2 />
      <br />
      <h4 style={{marginTop:'45px',fontSize:"40px",fontWeight:'bold',fontFamily:'revert-layer',color:'#990000'}}>Test Form</h4>
      <form className="test-form" onSubmit={handleSubmit}>
      
                
                
                 <label className='flabel' style={{fontSize:'18px'}}>Do you have Fever?</label>
                <select name="fever" id="fever" onChange={onChangeHandler} >
                <option value="">Choose the option</option>
                    <option value="Yes" key="Yes">Yes</option>
                    <option value="No" key="No">No</option>
                </select>
                
                <label className='flabel'style={{fontSize:'18px'}}>Do you have Cough?</label>
                <select name="cough" id="cough"   onChange={onChangeHandler} >
                <option value="">Choose the option</option>
                    <option value="Yes" key="Yes">Yes</option>
                    <option value="No" key="No">No</option>
                </select>
               
                <label className='flabel'style={{fontSize:'18px'}}>Do you have Headache?</label>
                <select name="headache" id="headache" onChange={onChangeHandler} >
                <option value="">Choose the option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
               
                <label className='flabel'style={{fontSize:'18px'}}>Do you have body Pains?</label>
                <select name="bodyPains" id="bodyPains"  onChange={onChangeHandler} >
                <option value="">Choose the option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                
                <label className='flabel'style={{fontSize:'18px'}}>Do you have Difficulty in breathing?</label>
                <select name="breathing" id="breathing"  onChange={onChangeHandler} >
                <option value="">Choose the option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                
                <label className='flabel'style={{fontSize:'18px'}}>Do you loss your taste or smell?</label>
                <select name="taste" id="taste" onChange={onChangeHandler} >
                <option value="">Choose the option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                
                <label className='flabel'style={{fontSize:'18px'}}>Do you have Sour throat?</label>
                <select name="sourThroat" id="sourThroat"  onChange={onChangeHandler} >
                <option value="">Choose the option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                
                
                <button  style={{
    backgroundColor: " #e60000",
    color: "white",
    fontSize: "16px",
    borderRadius: "30px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, color 0.3s",
    height:"50px",
    width:"100px"
  }}>Test</button>
      </form>
    </div>
    </div>
  );
};

export default TestForm;
