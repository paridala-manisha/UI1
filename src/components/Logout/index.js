import React from "react";
import "./Logout.css";

function Logout() {
  function handleLogout() {
  
  }

  return (
    <div
    className="logout-container"
    style={{
      background: 'url("images/corona2.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      width: "100%",
      height: "100vh",
    }}
    >
      <h1 style={{fontSize:'80px',color:'Blue',marginTop:'-30px'}}>Thank You!</h1>
      <br></br>
      <h1 className="slogan">Stay Home, Stay Safe</h1>
      <h1 className="slogan1" style={{fontSize:'20px'}}>
        Every small act counts. Wear a mask, wash your hands, and protect your loved ones
      </h1>
      <a href="/" onClick={handleLogout} className="Logout">
      <strong>Logout</strong>
       
      </a>
    </div>
  );
}

export default Logout;
