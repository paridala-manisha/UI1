import React, { useState } from 'react';
import Navbar2 from '../Navbar2';
import './patientform.css';

const Patientform = () => {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dob, setDob] = useState("");
    const [govid, setGovid] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: Name,
            email: email,
            mobile: mobile,
            dob: dob,
            govid: govid,
            address: address,
            state: state,
        };
        console.log(user);

        const validationErrors = validate(user);

        if (Object.keys(validationErrors).length === 0) {
            // If there are no validation errors, submit the data
            setName("");
            setEmail("");
            setMobile("");
            setDob("");
            setGovid("");
            setAddress("");
            setState("");
            window.alert("Please take the Mask, Sanitizer and medicines")
            window.location.href = "/Doctor";
            fetch("http://127.0.0.1:8080/patientregister", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(user),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("info:", data);

                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        } else {
            // If there are validation errors, set the errors state variable
            setErrors(validationErrors);
        }
    };

    const validate = (user) => {
        let errors = {};

        if (!user.name) {
            errors.Name = "This field is required";
        }
        if (!user.email) {
            errors.email = "This field is required";
        }
        if (!user.dob) {
            errors.dob = "This field is required";
        }
        if (!user.govid || user.govid.length !== 12) {
            errors.govid = "Government ID must be 12 digits";
        }


        if (!user.mobile || user.mobile.length !== 10) {
            errors.mobile = "Phone number must be 10 digits";
        }
        if (!user.address) {
            errors.address = "This field is required";
        }


        if (!user.state) {
            errors.state = "This field is required";
        }



        // Other validations...

        return errors;
    };

    return (
        <div style={{
            backgroundImage: 'url(/images/patientform.jpeg)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed', // Fixed background to prevent scrolling
            width: '100vw', // Make sure the width takes the full viewport width
            height: '100vh', // Make sure the height takes the full viewport height
            position: 'relative',
            overflow: 'hidden',
        }}
        >
            <Navbar2 />


            <h4 style={{ marginTop: '70px', fontSize: "40px", fontWeight: 'bold', fontFamily: 'monospace', color: ' #260593', marginLeft: '-700px' }}>Patient Details</h4>
            <form onSubmit={handleSubmit} className="patient-form">

                <div className="form-group">
                    <label className="flabel">Name:</label>
                    <input className="input" type="text" name="Name" placeholder="Enter your name" value={Name} onChange={(e) => setName(e.target.value)} />
                    {errors.Name && <span className="text-danger">{errors.Name}</span>}
                </div>
                {/* Repeat the same structure for other form fields */}
                <div className="form-group">
                    <label className="flabel">Email:</label>
                    <input className="input" type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className="flabel">Mobile Number:</label>
                    <input className="input" type="number" name="mobile" placeholder="Enter your number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
                </div>
                {/* ... Repeat for other form fields ... */}
                <div className="form-group">
                    <label className="flabel">Date Of Birth:</label>
                    <input className="input" type="date" name="dob" placeholder="Enter your Dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                    {errors.dob && <span className="text-danger">{errors.dob}</span>}
                </div>
                <div className="form-group">
                    <label className='flabel'>Government ID:</label>
                    <input className="input" type="number" name="Gov_id" placeholder="Enter your govId" value={govid} onChange={(e) => setGovid(e.target.value)} />
                    {errors.govid && <span className="text-danger">{errors.govid}</span>}
                </div>
                <div className="form-group">
                    <label className="flabel">Address:</label>
                    <input className="input" type="text" name="Address" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    {errors.address && <span className="text-danger">{errors.address}</span>}
                </div>
                <div className="form-group">
                    <label className="flabel">State:</label>
                    <input className="input" type="text" name="state" placeholder="Enter your State" value={state} onChange={(e) => setState(e.target.value)} />
                    {errors.state && <span className="text-danger">{errors.state}</span>}
                </div>
                <button className="btn btn-primary" style={{
                    color: "white", fontSize: "16px", borderRadius: "30px", padding: "10px 20px", border: "none", cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s, color 0.3s", height: "50px", width: "100px"
                }}>Submit</button>
            </form>
        </div>
    );
};

export default Patientform;
