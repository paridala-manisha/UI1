import React, { useState } from 'react';
import './Doctor.css';
import Navbar2 from '../Navbar2';

const doctors = [
  {
    name: 'Dr. M. Prasanna',
    qualification:
      'M.B.B.S., M.D.(Gen. Med.), D.N.B.(Cardiology), F.N.B.(Interventional Cardiology)',
    profession: 'Cardiologist',
    personalExpertise:
      'Conducted 10,000 Cardiac interventions, spanning Coronary angiograms, Angioplasty, Pacemakers, ICD implants, and more, with expertise in ICU/CCU and emergency care.',
    imgSrc: '/images/doctor2.jpg', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM','10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM'],
    location: 'Hyderabad',
  },
  {
    name: 'Dr Anand Chopda',
    qualification:
      'MBBS NDMVPS,MD MVJ and Research Hospital',
    profession: 'Cardiologist',
    personalExpertise:
      'Experienced cardiologist with a history of roles at Manipal Hospital and Rajiv Gandhi Super Speciality Hospital. Now runs own hospital in Nashik, prioritizing patient care.',
    imgSrc: '/images/heart1.jpg', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
    location: 'pune',
  },
  {
    name: 'Dr Vinayak Agarwal',
    qualification:
      'MBBS MAMC,MD UCMS,DNB Cardiology Escorts Heart Institute and Research Center',
    profession: 'Cardiologist',
    personalExpertise:
      "With 23+ years of experience, he's a pioneer in advanced cardiac imaging, holding Fellowships in American College of Cardiology, Society of Echocardiography, and Heart Failure Association.",
    imgSrc: '/images/heart3.jpg', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','4:00 PM - 5:00 PM'],
    location: 'Chennai',
  },
  {
    name: 'Dr Vineet Malik',
    qualification: 'MBBS, MD AIIMSDM, Cardiology AIIMS',
    profession: 'Cardiologist',
    personalExpertise:
      'Extensive experience at AIIMS and a Fellowship in Interventional Cardiology at Escorts Heart Institute, showcasing dedication to top-tier medical expertise.',
    imgSrc: '/images/heart2.jpg', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM','10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM'],
    location: 'Mumbai',
  },
  {
    name: 'Dr. Gopi Krishna Yedlapati',
    qualification: 'MD, FCCP, FAPSR',
    profession: 'Pulmonologist',
    personalExpertise:
      '15 years of experience in pulmonary medicine, sleep medicine, interventional pulmonology, allergy specialist, interstitial lung diseases, and lung cancers.',
    imgSrc: '/images/Gopikrishna.webp', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM','10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM'],
    location: 'Hyderabad',
  },
  {
    name: 'Dr Nalanda Debnath Singh',
    qualification:" MBBS from Lady Hardinge, Post Grad Diploma in TB from Vallabhbhai Patel.",
    profession: 'Pulmonologist',
    personalExpertise:
      'She worked at Lady Hardinge Medical College, Vallabhbhai Patel Chest Institute, and ISPAT Hospital, now with a multi-speciality health chain.',
    imgSrc: '/images/pulm1.png', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM','10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM'],
    location: 'Chennai',
  },
  {
    name: 'Dr. Nikhil Modi',
    qualification: 'MBBS, MD, FCCP, EDARM, IDCCM',
    profession: 'Pulmonologist',
    location: 'Mumbai',
    personalExpertise:
      'A renowned pulmonologist with 15 years of experience, specializing in critical care, associated with Apollo Hospitals Indraprastha, South Delhi.',
    imgSrc: '/images/pulm3.webp', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },
  {
    name: 'Dr. K. Shyam Sundar',
    qualification: 'M.B.B.S., M.S, M.Ch.(Neurosurgery)',
    profession: 'Neurology',
    location: 'Chennai',
    personalExpertise:
      'Senior Consultant Brain and Spine Surgeon with extensive education, fellowships, awards, and memberships in the field.',
    imgSrc: '/images/brain.jpg', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },
  
  {
    name: 'Dr. A Navaladi Shankar',
    qualification: 'MBBS, MNAMS, Dortho, DNB,FAO',
    profession: 'Orthopaedics',
    location: 'Chennai',
    personalExpertise:
      'Dr. A Navaladi Shankar is one of the most renowned orthopaedic Surgeons, currently associated with Apollo Hospitals, Chennai.',
    imgSrc: '/images/orth.webp', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },
  {
    name: 'Dr. Sayak Subhra Kayal',
    qualification: 'MBBS , Diploma (Orthopaedics)',
    profession: 'Orthopaedics',
    location: 'pune',
    personalExpertise:
      'An 8-year-experienced joint replacement specialist and renowned orthopaedist in Gurgaon, excelling in bone trauma, soft tissue injury, osteoporosis, and knee osteotomy.',
    imgSrc: '/images/orth2.webp', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },
  {
    name: 'Dr. Pradip Sharma',
    qualification: 'MBBS, Diploma(Orthopedics), DNB (Orthopaedics)',
    profession: 'Orthopaedics',
    location: 'Mumbai',
    personalExpertise:
      'An 18-year-experienced joint replacement specialist and renowned orthopaedist in Gurgaon, excelling in bone trauma, soft tissue injury, osteoporosis, and knee osteotomy.',
    imgSrc: '/images/orth1.webp', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },
  
  {
    name: 'Dr. Mukunth Krishnamoorthy',
    qualification: 'M.B.B.S., M.S.(Ortho), F.I.A.(Ger) Exe.Hip.Fel(UK)',
    profession: 'Orthopaedics',
    location: 'Hyderabad',
    personalExpertise:
      'Experienced orthopaedic surgeon with 15+ years, specializing in Complex Trauma, Pelvic Acetabular, Sports Injuries, Paediatric Trauma, and Joint Replacement with Navigation.',
    imgSrc: '/images/bones.jpg', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },
  {
    name: 'Dr Abhishek Juneja',
    qualification: 'MBBS MAMC',
    profession: 'Neurology',
    location: 'Hyderabad',
    personalExpertise:
   ' He has special expertise in managing headache, epilepsy, stroke, sleep and spine disorders.',
    imgSrc: '/images/brain2.webp', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },
  {
    name: 'Dr Ponnu Pillai',
    qualification: 'MBBS DNB DM',
    profession: 'Neurology',
    location: 'pune',
    personalExpertise:
   ' A Consultant Neurologist with expertise in General and Paediatric Neurology, trained in emergency procedures and acute neurological conditions management',
    imgSrc: '/images/brain3.jpg', // Replace with the actual image file path
    timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
  },

{
  name: 'Dr. Somasundaram A C',
  qualification: 'MBBS, MD (General Medicine), DM (Neurology), SCE (Neurology, UK), PhD (Neurology)',
  profession: 'Neurology',
  location: 'Mumbai',
  personalExpertise:
 ' He has 9 years of experience and multiple degrees in the field. Alongside MBBS and PhD, he holds DM and SCE degrees in neurology from esteemed universities',
  imgSrc: '/images/brain4.webp', // Replace with the actual image file path
  timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM','3:00 PM - 4:00 PM'],
},
];

const headingColor = '#9A286D'; // Heading color

const imageStyle = {
  width: '100%',
  height: '250px',
};

const Doctor = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    selectedSlot: '', // Add selectedSlot to the form data
  });
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setSelectedProfession(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBooking = (doctor) => {
    setShowAppointmentForm(true);
    setSelectedDoctor(doctor);
  };
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [dateError, setDateError] = useState('');
  const [slotError, setSlotError] = useState('');
  const validateForm = () => {
    let hasError = false;

    if (formData.name.trim() === '') {
      setNameError('Name is required');
      hasError = true;
    } else {
      setNameError('');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setEmailError('Invalid email address');
      hasError = true;
    } else {
      setEmailError('');
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phoneNumber)) {
      setPhoneError('Invalid phone number (10 digits)');
      hasError = true;
    } else {
      setPhoneError('');
    }

    if (formData.date === '') {
      setDateError('Date is required');
      hasError = true;
    } else {
      setDateError('');
    }
    if (formData.selectedSlot === '') {
      setSlotError('Please select a time slot');
      hasError = true;
    } else {
      setSlotError('');
    }

    return !hasError;
  };

 
  const handleAppointmentConfirmation = () => {
    // Validate all form fields
    const isValid = validateForm();

    if (isValid) {
      // Create a new booking object with the required data
      const bookingData = {
        doctorName: selectedDoctor.name,
        patientName: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        date: formData.date,
        slot: formData.selectedSlot,
        location: selectedLocation,
        profession: selectedProfession,
      };
  
      // Send a POST request to your backend API to save the booking data
      setBookingConfirmation(true);
      fetch('http://127.0.0.1:8080/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to book appointment');
          }
        })
        .then((data) => {
          console.log('Appointment booked successfully:', data);
          setBookingConfirmation(true);
        })
        .catch((error) => {
          console.error('Error booking appointment:', error);
          // Handle error or display an error message to the user
        });
    }
  };
  

  return (
    <div >
      <div style={{backgroundColor:"#cccccc" }}>
       <Navbar2 />
    <div className="container mt-4" >
       
      <h5 className="text-center mb-4" style={{ color: headingColor, fontSize: '40px' ,fontWeight:'bold',marginTop:'70px'}}>
        Our Specialities
      </h5>
      <div className="form-group" style={{borderRadius:'2em'}}>
        <label htmlFor="locationFilter">
          <h5 style={{ color: headingColor, fontSize: '24px',fontFamily:'cursive' }}>
            Filter by Location:
          </h5>
        </label>
        <select
          id="locationFilter"
          className="form-control"
          value={selectedLocation}
          onChange={handleLocationChange}
          style={{ fontSize: '20px' ,borderRadius:'5em',color:'blue'}}
        >
          <option value="">All Locations</option>
          {[...new Set(doctors.map((doctor) => doctor.location))].map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="professionFilter" style={{ color: headingColor, fontSize: '24px', fontFamily:'cursive' }}>
          Filter by Profession:
        </label>
        <select
          id="professionFilter"
          className="form-control"
          value={selectedProfession}
          onChange={handleProfessionChange}
          style={{ fontSize: '20px' ,borderRadius:'5em',color:'blue'}}
          
        >
          <option value="">All Professions</option>
          {[...new Set(doctors.map((doctor) => doctor.profession))].map((profession, index) => (
            <option key={index} value={profession}>
              {profession}
            </option>
          ))}
        </select>
      </div>
      {!showAppointmentForm && !selectedDoctor &&
      <div className="row">
        {doctors
          .filter(
            (doctor) =>
              (!selectedLocation || doctor.location === selectedLocation) &&
              (!selectedProfession || doctor.profession === selectedProfession)
          )
          .map((doctor, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{borderRadius:"30px",backgroundColor: "",height:'800px'}}>
                <img className="card-img-top"  src={process.env.PUBLIC_URL + doctor.imgSrc} alt={doctor.name} style={{imageStyle,borderRadius:"3em",height:'300px'} }/>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: headingColor, fontSize: '20px' }}>
                    Name: {doctor.name}
                  </h5>
                  <p className="card-text" style={{ fontSize: '16px' }}>
                    <strong style={{ color: headingColor, fontSize: '18px' }}>Qualification:</strong> <br></br>{doctor.qualification}
                  </p>
                  <p className="card-text" style={{ fontSize: '16px' }}>
                    <strong style={{ color: headingColor, fontSize: '18px' }}>Profession:</strong><br></br> {doctor.profession}
                  </p>
                  {doctor.location && (
                    <p className="card-text" style={{ fontSize: '16px' }}>
                      <strong style={{ color: headingColor, fontSize: '18px' }}>Location:</strong><br></br> {doctor.location}
                    </p>
                  )}
                  <p className="card-text" style={{ fontSize: '16px' }}>
                    <strong style={{ color: headingColor, fontSize: '18px' }}>Personal Expertise:</strong>{' '}<br></br>
                    {doctor.personalExpertise}
                  </p>
                  <p className="card-text" style={{ fontSize: '16px' }}>
                    <strong style={{ color: headingColor, fontSize: '18px' }}>Timings:</strong><br></br> {doctor.timeSlots.join(', ')}
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ fontSize: '18px', padding: '10px 20px',marginBottom:'20px',marginTop:'0px' }} 
                    onClick={() => handleBooking(doctor)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
}

      {showAppointmentForm && selectedDoctor && (
        <div className="row mt-4">
          <div className="col-lg-6 offset-lg-3">
            {bookingConfirmation ? (
              <div className="alert alert-success" role="alert">
                Appointment booked successfully!
              </div>
            ) : (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{color:'orange',fontWeight:'bold',fontSize:'25px'}}>Book Appointment</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${nameError ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {nameError && <div className="invalid-feedback">{nameError}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {emailError && <div className="invalid-feedback">{emailError}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className={`form-control ${dateError ? 'is-invalid' : ''}`}
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                      {dateError && <div className="invalid-feedback">{dateError}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="slot" className="form-label">
                        Select Slot Time
                      </label>
                      <select
                        id="slot"
                        className={`form-control ${slotError ? 'is-invalid' : ''}`}
                        name="selectedSlot"
                        value={formData.selectedSlot}
                        onChange={handleChange}
                      >
                        <option value="">Select a time slot</option>
                        {selectedDoctor.timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {slotError && <div className="invalid-feedback">{slotError}</div>}
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ fontSize: '18px', padding: '10px 20px' }} 
                      onClick={handleAppointmentConfirmation}
                    >
                      Confirm Appointment
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
    </div> );
};

export default Doctor;
