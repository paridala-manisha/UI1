import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar1 = ({ profile }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };
  const redirectToLogout = () => {
    // Redirect to the logout page
    window.location.href=('/logout');
  };


  return (
    <div className='head'>
      <div className={`navMenu`}>
        <b>
          <div className='form-button' onClick={toggleMenu}>
            <span>&#9776;</span>
          </div>
        </b>
      </div>
      <h1 style={{ color: "red", marginLeft: "-1200px", fontSize: "30px", fontFamily: "'Arial, sans-serif'" ,marginTop:'13px'}}>COVID19Guard</h1>
      <div className='profile-container'>
  <div className='profile-button' onClick={redirectToLogout}>
    <div className='circular-icon'>
      <i className="fas fa-sign-out-alt"></i>
    </div>
  </div>
</div>

      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/test" className='menu-link'>
          <span className="menu-icon"><i className="fas fa-vial"></i></span> Test Form
        </NavLink>
       
        <NavLink to="/doctor" className='menu-link1'>
          <span className="menu-icon"><i className="fas fa-user-md"></i></span> Doctor Appointment
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar1;
