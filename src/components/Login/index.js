import React, { useState } from "react";
import { useUserAuth } from "./UserAuthContext";
import { useNavigate } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import Image from '../Pictures/login.jpeg'
import { LoginSocialGoogle } from "reactjs-social-login";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const {googleSignIn,fbSignIn} = useUserAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const errors = validate(user);

    if (Object.keys(errors).length === 0) {
      setEmail("");
      setPassword("");

      // Your login logic here...
      if (email === "admin@gmail.com" && password === "admin@123") {
        alert("admin login successful");
        window.location.href = '/Admin';
      } else if (
        (email === "archana@gmail.com" && password === "archana@123") ||
        (email === "johnSmith@gmail.com" && password === "john@123")
      ) {
        alert("nurse login successful");
        window.location.href = '/Nurse';
      } else {
        // if there are no validation errors, submit the data
        fetch("http://127.0.0.1:8080/getRegister")
          .then((response) => response.json())
          .then((data) => {
            const userMatch = data.find((storedUser) => storedUser.email === email);
            if (!userMatch) {
              // if the user's email is not found in the "registers" table
              setMessage("Email not found");
            } else {
              // if the user's email is found in the "registers" table
              const storedPassword = userMatch.password;
              if (password === storedPassword) {
                // if the password matches the stored password
                setMessage("Login successful");
                alert("login successful");
                window.location.href = '/home';
                //store the data in db
                fetch("http://127.0.0.1:8080/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(user),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("info:", data);
                    window.location.href = '/home';
                  })
                  // redirect to the dashboard or home page
              } else {
                // if the password does not match the stored password
                setMessage("Incorrect password");
              }
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    } else {
      // if there are validation errors, set the errors state variable
      setErrors(errors);
    }
  }

  function validate(user) {
    let errors = {};

    // validate email
    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is invalid";
    }

    // validate password
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  }

  function handleForgotPassword() {
   window.alert("Password reset link sent to your email.")
    fetch("http://127.0.0.1:8080/reset-password-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage("Password reset link sent to your email.");
          setShowSuccessModal(true);
        } else {
          setMessage("Password reset request failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleGoogleLogin = async(e) =>{
    e.preventDefault();     
    try{
      await googleSignIn();
      
      navigate("/home")
    }
    catch(error){
      console.log(error)
    }
  }
  const handleFbLogin = async(e) =>{
    e.preventDefault();      
    try{
      await fbSignIn();
      
      navigate("/home")
    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
    <div>
      
      <div
        style={{
          background: "rgb(140, 115, 140)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // Set to "100vh" to ensure a fixed screen without a scrollbar
          overflow: "hidden", // Hide any overflowing content
        }}
      >
        

        <div className="container mt-5"  >
          <div className="row mx-auto mt-5" >
            <div className="mx-auto col-md-6 mt-5 pt-4">
              <div className="card mb-5 p-2 shadow rounded" style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent background color to the content
      width: "800px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow:" 0 15px 25px rgba(0,0,0,.6)",
     
    }}>
                <div className="card-body mt-2"  >
                  <div className="row mb-3">
                    <div className="col-md-2" >
                      <div class="image">
                        <img
                          src="/images/login.jpeg"
                          alt="Your Image"
                           // Adjust image size if needed
                           style={{  height: "580px",width:"350px",marginLeft:"-5px",marginTop:"10px"}}
                        />
                      </div>
                    </div>
                    <div className="col-md-6" style={{  height: "580px",width:"400px",marginLeft:"240px",marginTop:"10px"}} >
                      <br></br><br></br>
                      <h3
  style={{
    color:"		rgb(156, 70, 185)",
    fontSize: "25px", // Adjust the font size as needed
    fontFamily: "Arial, sans-serif", // Change the font family as desired
    fontWeight: "bold", // Adjust the font weight as needed
    borderBottomColor:"white",
  }}
>
  SIGN IN
</h3>
                      <br></br> <br></br><br></br> 
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-2">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-user"></i>
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
                        <br></br> 
                        <div class="row mt-3">
                          <div class="col-sm-3"></div>
                          <div class="col-sm-3"></div>
                          <div class="col-sm-3"></div>
                          <div class="col-sm-3">
                            <a
                              className="text-decoration-none mb-3 text-info fw-bold"
                              onClick={handleForgotPassword} style={{marginLeft:"-100px",fontSize:"18px"}}
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div></div>
<br></br>
                        <button type="submit" className="btn btn-info mt-3"
  style={{
    backgroundColor: "	rgb(156, 70, 185)",
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
  }}>
                          Login
                        </button>
                        {message && (
                          <div className="mt-3">
                            <span className="text-info">{message}</span>
                          </div>
                        )}
<br></br><br></br>
<GoogleLoginButton onClick={handleGoogleLogin}/>
                  <FacebookLoginButton onClick={handleFbLogin}/>
      
   
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="modal fade show" id="successModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowSuccessModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{successMessage}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => setShowSuccessModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
