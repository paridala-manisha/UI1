import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';

const buttonStyles = {
  backgroundColor: ' #ff1a1a',
  color: 'white',
  fontSize: '22px',
  borderRadius: '30px',
  padding: '15px 20px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s, color 0.3s',
  height: '50px',
  width: '100px',
  marginRight:'50px',
  textDecoration: 'none',
  fontWeight:'bold'
};

const Main = () => {
  return (
    <div style={{ backgroundImage: 'url(/images/mainpage.jpeg)', backgroundSize: 'cover', height: '100vh', overflow: "hidden", position: "relative" }}>
      <h1 style={{
        fontSize: '90px',
        color: '#e60000',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        marginLeft:"400px",overflow: "hidden",
      }}>COVID19Guard</h1>
      <div style={{ position: "absolute", top: "30px", right: "50px" }}>
        <NavLink end to="/login" className='navData' style={buttonStyles}><strong>Sign In</strong></NavLink>
        <NavLink end to="/register" className='navData' style={buttonStyles}><strong>Sign Up</strong></NavLink>
      </div>
    </div>
  );
}

export default Main;
