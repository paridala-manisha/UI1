import React from 'react';
import Navbar3 from '../Navbar3';
import './admin.css'
function Admin(){
    return(
       
        <div style={{height: '100vh',
        width: '100%',
       
        background: 'url("images/image.jpg")',
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat:'no-repeat',}}> 
             <Navbar3></Navbar3>
             <div className="home-content1">
             <h1 className='home-heading1'>Welcome, Admin!</h1>
           
           </div>
        </div>
    );
}
export default Admin;