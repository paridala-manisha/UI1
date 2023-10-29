import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar3.css';

const Navbar3 = ({ profile }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };
  const adminData = {
    name: 'likhitha vaddi',
    email: 'vaddilikhitha1221@gmail.com',
    profession: 'Administrator',
   // You can get this information from your backend
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
        <div className='profile-button' onClick={toggleProfile}>
          <div className='circular-icon'>
           <i className="fas fa-user"></i>
          </div>
        </div>
        {isProfileOpen && (
          <div className='profile-dropdown'>
            
              <div>
                <p style={{ color: "#100e38", fontSize: "22px" }}>{adminData.name}</p>
                <p style={{ color: "#100e38", fontSize: "18px" }}>{adminData.email}</p>
                <p style={{ color: "#100e38", fontSize: "18px" }}>Profession: {adminData.profession}</p>
                <p style={{ color: "#100e38", fontSize: "18px" }}>Login Count: {adminData.loginCount}</p>
              </div>
            
           
            <NavLink to="/" className='profile-link1'>
              <span className="menu-icon"><i className="fas fa-sign-out-alt"></i></span>
              Logout
            </NavLink>
          </div>
        )}
      </div>

      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/DoctorTable" className='menu-link'>
          <span className="menu-icon"><i className="fas fa-user-md"></i></span> Doctor details
        </NavLink>
        <NavLink to="/BookingDetails" className='menu-link'>
          <span className="menu-icon"><i className="fas fa-book"></i>
</span> Booking Details
        </NavLink>
        <NavLink to="/Patientdetails" className='menu-link1'>
          <span className="menu-icon"><i className="fas fa-user-injured"></i></span> Patient Details
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar3;
