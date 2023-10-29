import React, { useState } from "react";
// import Image from './Pictures/SignUp.jpeg'
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import './Register.css';


function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
 
  function handleSubmit(event) {
    event.preventDefault();
  
    const user = {
      username: username,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
  
    const validationErrors = validate(user);
  
    if (Object.keys(validationErrors).length === 0) {
      // Clear any previous validation errors
      setErrors({});
  
      fetch("http://127.0.0.1:8080/getRegister")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error fetching registration data");
          }
          return response.json();
        })
        .then((data) => {
          const userMatch = data.find((storedUser) => storedUser.email === email);
          if (userMatch) {
            // Email is already registered, show an error message
            setErrors({ email: "Email is already registered" });
            
          } else {
            window.alert("You are Registered successfully");
                window.location.href = "/login";
            // Continue with form submission
            fetch("http://127.0.0.1:8080/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("info:", data);
                // Use React Router for navigation if you're using it
                
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // There are validation errors, update the errors state
      setErrors(validationErrors);
    }
  }
  
  function validate(user) {
    let errors = {};
  
    if (!user.email || user.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
  
    if (!user.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (user.confirmpassword !== user.password) {
      errors.confirmpassword = "Passwords do not match";
    }
  
    return errors;
  }
  
  
  return (
    <div>
      <div
        style={{
          background: " linear-gradient(to top left, #990000 0%, #000066 100%)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="container mt-5">
          <div className="row mx-auto mt-5">
            <div className="mx-auto col-md-6 mt-5 pt-4">
              <div className="card mb-5 p-2 shadow rounded" style={{
                backgroundColor: "#000066",
                width: "800px",
                height: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 15px 25px rgba(0,0,0,.6)",
                
              }}>
                <div className="card-body mt-2">
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <div className="image">
                        <img
                          src="images\signup.jpeg"
                          alt="Your Image"
                          style={{ height: "580px", width: "350px", marginLeft: "-5px", marginTop: "10px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ height: "580px", width: "400px", marginLeft: "240px", marginTop: "10px" }}>
                      <br></br><br></br>
                      <h3
                        style={{
                          color: "#e84c09",
                          fontSize: "30px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          borderBottomColor: "white",
                        }}
                      >
                        SIGN UP
                      </h3>
                      <br></br> <br></br><br></br>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-2">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-envelope"></i>
                            </span>
                            <input
                              type="email"
                              name="email"
                              className="form-control border-info shadow-none"
                              id="Email"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          {errors.email && (
                            <span className="text-danger">{errors.email}</span>
                          )}
                        </div>
                        <br></br> <br></br><br></br>
                        <div className="mb-3">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </span>
                            <input
                              type="password"
                              name="password"
                              className="form-control border-info shadow-none"
                              id="Password"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          {errors.password && (
                            <span className="text-danger">{errors.password}</span>
                          )}
                        </div>
                        <br></br> <br></br><br></br>
                        <div className="mb-3">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </span>
                            <input
                              type="password"
                              name="confirm_password"
                              className="form-control border-info shadow-none"
                              id="Confirm_Password"
                              placeholder="Confirm Password"
                              value={confirmpassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </div>
                          {errors.confirmpassword && (
                            <span className="text-danger">{errors.confirmpassword}</span>
                          )}
                        </div>

                        <h3 style={{color:"#33ccff",fontSize:'18px'}}>Already have an account</h3> <a href="/login" style={{color:"#33ccff",fontSize:'19px'}}>Login..</a>
                        <div className="row">
                          <div className="mt-3 text-center">
                            <button type="submit" name="signup" className="btn btn-primary" style={{color: "white",fontSize: "16px",borderRadius: "30px",padding: "10px 20px", border: "none", cursor: "pointer",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, color 0.3s", height:"50px", width:"100px"}}>
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rest of your code... */}
    </div>
  );
}
export default Registration;