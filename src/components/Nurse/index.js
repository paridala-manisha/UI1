import React from 'react';

function Nurse(){
    return(
        <div style={{height: '100vh',
        width: '100%',
        background: 'url("images/back.png")',
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat:'no-repeat',}}> 
            <div  className='heading'>
                <h2><span>COVID 19 </span>Test and Result Management System</h2>
            </div>
            <div style={{align:'center',border:'1px solid black',borderstyle:'inset',margin:'200px 600px 200px 600px',padding:'25px 0px 25px 0px',}}>
          <h2>Nurse Login</h2>  
           <a class="btn btn-info" href='/patientdetails'>Patient Details</a><br></br><br></br>
        
           </div>
        </div>
    );
}
export default Nurse;