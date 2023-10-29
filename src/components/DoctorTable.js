import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function DoctorTable() {
  const [doctorData, setDoctorData] = useState(doctors);

  const handleDelete = (name) => {
    const filteredDoctors = doctorData.filter(doctor => doctor.name !== name);
    setDoctorData(filteredDoctors);
  }
  

  return (
    <div style={{
        
        background: "linear-gradient(#c4f0f1 100%, rgb(153, 51, 255) 0%)",
        backgroundSize: 'cover',
      
      }}>
      <h1 style={{color:'#260593',fontWeight:'bold',fontSize:'30px'}}>Doctor Details</h1>
      <table style={{ borderCollapse: 'collapse', width: '80%', margin: '0 auto', marginTop: '20px', border: '2px solid #000' ,backgroundColor:'white'}}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #000', padding: '8px',fontSize:'20px',color:'blue',fontWeight:'bold'  }}>Name</th>
            <th style={{ border: '1px solid #000', padding: '8px',fontSize:'20px',color:'blue',fontWeight:'bold'  }}>Qualification</th>
            <th style={{ border: '1px solid #000', padding: '8px',fontSize:'20px',color:'blue',fontWeight:'bold'  }}>Profession</th>
            <th style={{ border: '1px solid #000', padding: '8px',fontSize:'20px',color:'blue',fontWeight:'bold'  }}>Location</th>
            <th style={{ border: '1px solid #000', padding: '8px',fontSize:'20px',color:'blue' ,fontWeight:'bold' }}>Personal Expertise</th>
            <th style={{ border: '1px solid #000', padding: '8px',fontSize:'20px',color:'blue',fontWeight:'bold'  }}>Time Slots</th>
            <th style={{ border: '1px solid #000', padding: '8px',fontSize:'20px',color:'blue',fontWeight:'bold'  }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctorData.map(doctor => (
            <tr key={doctor.name}>
              <td style={{ border: '1px solid #000', padding: '8px',fontSize:'18px',fontWeight:'bold' }}>{doctor.name}</td>
              <td style={{ border: '1px solid #000', padding: '8px',fontSize:'18px' }}>{doctor.qualification}</td>
              <td style={{ border: '1px solid #000', padding: '8px',fontSize:'18px' }}>{doctor.profession}</td>
              <td style={{ border: '1px solid #000', padding: '8px' ,fontSize:'18px'}}>{doctor.location}</td>
              <td style={{ border: '1px solid #000', padding: '8px',fontSize:'18px' }}>{doctor.personalExpertise}</td>
              <td style={{ border: '1px solid #000', padding: '8px',fontSize:'18px' }}>
                <ul>
                  {doctor.timeSlots.map((slot, i) => (
                    <li key={i}>{slot}</li>
                  ))}
                </ul>
              </td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                <button onClick={() => handleDelete(doctor.name)} style={{ backgroundColor: "red" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/AddDoctor" class="btn btn-info" style={{fontSize:'20px',background:'red',marginBottom:'30px',marginTop:'20px'}} >Add Doctor</a>

    </div>
  );
}

export default DoctorTable;



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
      timeSlots: ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM'],
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
      name: 'Dr. K. Shyam Sundar',
      qualification: 'M.B.B.S., M.S.(General Surgery), M.Ch.(Neurosurgery)',
      profession: 'Neurology',
      location: 'Chennai',
      personalExpertise:
        'Senior Consultant Brain and Spine Surgeon with extensive education, fellowships, awards, and memberships in the field.',
      imgSrc: '/images/brain.jpg', // Replace with the actual image file path
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
