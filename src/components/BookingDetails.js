
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingDetails() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/bookings")
      .then(res => {
        setBookings(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  async function deleteBooking(id) {
    try {
      const response = await axios.delete(`http://127.0.0.1:8080/booking/${id}`);
      console.log("Response:", response); // Log the response
      if (response.status === 200) {
        setBookings(bookings.filter((booking) => booking.id !== id));
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error deleting booking:", error); // Log any errors
    }
  }
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: 'url("images/patient.jpg")',
      backgroundSize: 'cover',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <br />
      <h1 style={{ fontSize: '30px', color: 'blue' }}>Booking Details</h1>
      <table align='center' style={{ marginTop: '200px' }} className="table table-striped table-light mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor Name</th>
            <th>Patient Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Location</th>
            <th>Profession</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.doctorName}</td>
              <td>{booking.patientName}</td>
              <td>{booking.email}</td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.date}</td>
              <td>{booking.slot}</td>
              <td>{booking.location}</td>
              <td>{booking.profession}</td>
              <td>
                <button onClick={() => deleteBooking(booking.id)} style={{ backgroundColor: "red" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <a href="/Doctor" className="btn btn-info" style={{ fontSize: '20px' }}>Add Booking</a>
    </div>
  );
}

export default BookingDetails;
