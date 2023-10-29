import React, { useState } from 'react';

function Nursedetails() {
  const [nurseData, setNurseData] = useState([
    {
      nurse_id: 1,
      name: "archana@gmail.com",
      password:"archana@123",
      contact: "archana.doe@gmail.com",
      address: "123 Main St, Anytown, USA"
    },
    {
      nurse_id: 2,
      name: "JohnSmith@gmail.com",
      password:"john@123",
      contact: "john.smith@gmail.com",
      address: "456 Oak St, Anytown, USA"
    },
    {
      nurse_id: 3,
      name: "MaryJohnson@gmail.com",
      password:"marry@123",
      contact: "mary.johnson@gmail.com",
      address: "789 Elm St, Anytown, USA"
    }
  ]);

  const handleDelete = (nurse_id) => {
    const filteredNurses = nurseData.filter(nurse => nurse.nurse_id !== nurse_id);
    setNurseData(filteredNurses);
  }

  return (
    <div style={{height: '100vh',
    width: '100%',
    overflow: 'hidden',
    background: 'url("images/nurse.jpg")',
    backgroundSize: 'cover',
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat:'no-repeat',}}>
    <h1>Nurse Details</h1>
    <table align='center' style={{marginLeft:'650px',marginTop:'200px'}} >
        
      <thead>
        <tr>
          <th>Nurse ID</th>
          <th>Name</th>
          <th>Password</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {nurseData.map(nurse => (
          <tr key={nurse.nurse_id}>
            <td>{nurse.nurse_id}</td>
            <td>{nurse.name}</td>
            <td>{nurse.password}</td>
            <td>{nurse.contact}</td>
            <td>{nurse.address}</td>
            <td><button onClick={() => handleDelete(nurse.nurse_id)} style={{backgroundColor:"red"}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Nursedetails;

