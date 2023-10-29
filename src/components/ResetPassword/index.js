import React, { useState } from "react";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Create an object with the email and password
    const data = {
      email,
      password,
    };

    // Send a POST request to update the password
    fetch("http://127.0.0.1:8080/updatePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage("Password updated successfully.");
        } else {
          setMessage("Failed to update password. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div style={{backgroundImage: 'url(/images/resetpasswod.jpg)', backgroundSize: 'cover', height: '100vh', overflow: "hidden", position: "relative"}}>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <h2 className="mb-4" style={{ fontSize: "40px", fontWeight: "bold", fontFamily: 'inherit', color: '#663300' }}>Reset Password</h2>
        <div style={{position:" relative",
    backgroundColor: "rgba(255, 255, 255, 0.7)" /* Adjust the opacity (last value) as needed */
   
  
   }}>
       
          <form onSubmit={handleSubmit} style={{marginTop:'100px', border: "1px solid #ccc", borderRadius: "10px", padding: "20px" }}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{fontSize:"20px",fontWeight:"bold",color:'#663300'}}>
                Email:
              </label>
              <input
              style={{borderRadius:"2em",border:" 1px solid #0bab60"}}
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{fontSize:"20px",fontWeight:"bold",color:'#663300'}}>
                New Password:
              </label>
              <input
              style={{borderRadius:"2em",border:" 1px solid #0bab60"}}
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label" style={{fontSize:"20px",fontWeight:"bold",color:'#663300'}}>
                Confirm Password:
              </label>
              <input
              style={{borderRadius:"2em",border:" 1px solid #0bab60"}}
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary"  style={{
    backgroundColor: " blue",
    color: "white",
    fontSize: "16px",
    borderRadius: "30px",
    padding: "5px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, color 0.3s",
    height:"50px",
    width:"200px"
  }}>
                Reset Password
              </button>
            </div>
            {message && <p className="text-danger green-text">{message}</p>}
          </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
  
}

export default ResetPassword;