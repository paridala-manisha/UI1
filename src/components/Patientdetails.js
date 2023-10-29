import React, { useState, useEffect } from 'react';

import axios from 'axios';
function Patientdetails() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
        axios.get("http://127.0.0.1:8080/patients")
        .then(res => {
          setPatients(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
 
  
  async function deletePatient(id) {
    const response = await axios.delete(`http://127.0.0.1:8080/patients/${id}`);
    if (response.status === 200) {
      setPatients(patients.filter((patient) => patient.patient_id !== id));
    } else {
      console.log(response.data);
    }
  }
  return (
  
    <div  style={{height: '100vh',
    width: '100%',
    overflow: 'hidden',
    background: 'url("images/patient.jpg")',
    backgroundSize: 'cover',
 
    alignItems: 'center',
    backgroundRepeat:'no-repeat',
   }}>
    <br></br>
      <h1 style={{fontSize:'20px',color:'blue'}}>Patient Details</h1>
      <table align='center' style={{marginTop:'200px'}} class="table table-striped table-light mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>DOB</th>
            <th>Gov_id</th>
            <th>Address</th>
            <th>State</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
               <td>{patient.patient_id}</td>
               <td>{patient.name}</td>
              <td>{patient.email} </td>
              <td>{patient.mobile}</td>
              <td>{patient.dob}</td>
              <td>{patient.govid}</td>
              <td>{patient.address}</td>
              <td>{patient.state}</td>
              <td><button onClick={() => deletePatient(patient.patient_id)} style={{backgroundColor:"red"}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <a href="/patient" class="btn btn-info" style={{fontSize:'20px'}} >Add Patient</a>
       </div>
       
  );
}

export default Patientdetails;
/*import React, { useState, useEffect } from 'react';

function Patientdetails() {
  const [patients, setPatients] = useState([]);
  const [email, setEmail] = useState('');
  const [mobile, setmobile] = useState('');
  const [dob, setdob] = useState('');
  const [address, setAddress] = useState('');
  const [state, setstate] = useState('');


  useEffect(() => {
    async function fetchPatients() {
      const response = await fetch('/api/patients');
      const data = await response.json();
      setPatients(data);
    }
    fetchPatients();
  }, []);

  async function addPatient() {
    const response = await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, mobile, dob,address,state }),
    });
    const data = await response.json();
    setPatients([...patients, data]);
  }

  async function updatePatient(id, fields) {
    const response = await fetch(`http://127.0.0.1:8080/patient/Patients/{id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fields),
    });
    const data = await response.json();
    setPatients(patients.map((patient) => (patient.id === id ? data : patient)));
  }

  async function deletePatient(id) {
    const response = await fetch(`http://127.0.0.1:8080//patients/{id}/*`, { method: 'DELETE' });
    if (response.ok) {
      setPatients(patients.filter((patient) => patient.id !== id));
    }
  }

  return (
    <div>
      {patients.map((patient) => (
        <div key={patient.id}>
          <label>
            Name:
            <input
              type="text"
              value={patient.email}
              onChange={(event) =>
                updatePatient(patient.id, { name: event.target.value })
              }
            />
          </label>
          <label>
            mobile:
            <input
              type="number"
              value={patient.mobile}
              onChange={(event) =>
                updatePatient(patient.id, { age: event.target.valueAsNumber })
              }
            />
          </label>
          <label>
            Gender:
            <select
              value={patient.gender}
              onChange={(event) =>
                updatePatient(patient.id, { gender: event.target.value })
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <button onClick={() => deletePatient(patient.id)}>Delete</button>
        </div>
      ))}
      
</div>
  );
            }
            export default Patientdetails;*/