import React, { useState } from 'react';
import Select from 'react-select';
import './AddDoctor.css';

const AddDoctor = ({ onAddDoctor }) => {
  //Time Slot Select
  const [selectedOption, setSelectedOption] = useState(null);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    qualification: '',
    profession: '',
    location: '',
    personalExpertise: '',
    imgurl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [name]: value,
    });
  };


  const handleSubmit = () => {
    // Here We have to write the Post Api with body details newDoctor and selectOptions(Time Slot)
    // onAddDoctor(newDoctor);
    console.log("newDoctor", newDoctor)
    console.log(selectedOption)
    setNewDoctor({
      name: '',
      qualification: '',
      profession: '',
      location: '',
      personalExpertise: '',
      imgurl: '',
    });
    setSelectedOption('');

  };

  const TimeSlotOptions = [
    { value: '9:00 AM - 10:00 AM', label: '9:00 AM - 10:00 AM' },
    { value: '10:00 AM - 11:00 AM', label: '10:00 AM - 11:00 AM' },
    { value: '11:00 AM - 12:00 AM', label: '11:00 AM - 12:00 AM' },
    { value: '12:00 AM - 1:00 AMAM', label: '12:00 AM - 1:00 AM' },
    { value: '2:00 AM - 3:00 AM', label: '2:00 AM - 3:00 AM' },
  ]
  return (
    <div style={{ backgroundImage: 'url(/images/addoctor.jpeg)', backgroundSize: 'cover', height: '120vh', overflow: "hidden", position: "relative" }} >
      <div className="add-doctor-form">
        <h2 style={{ color: '#260593', fontWeight: 'bold' }}>Add New Doctor</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newDoctor.name}
            onChange={handleInputChange}
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={newDoctor.location}
            onChange={handleInputChange}
          />
          <label>Qualification:</label>
          <select name="qualification" onChange={handleInputChange} value={newDoctor.qualification}>
            <option value="">Please choose Qualification</option>
            <option value="MD">MD</option>
            <option value="MBBS">MBBS</option>
            <option value="MS">MS</option>
            <option value="BOT">BOT</option>
          </select>
          <label>Profession:</label>
          <input
            type="text"
            name="profession"
            value={newDoctor.profession}
            onChange={handleInputChange}
          />

          <label>Image URL:</label>
          <input
            type="text"
            name="imgurl"
            value={newDoctor.imgurl}
            onChange={handleInputChange}
          />
          <label>Personal Expertise:</label>
          <textarea
            name="personalExpertise"
            value={newDoctor.personalExpertise}
            onChange={handleInputChange}
          ></textarea>
          <label>Select the time slots </label>
          <Select
            onChange={setSelectedOption}
            defaultValue={selectedOption}
            isMulti
            name="timeSlots"
            options={TimeSlotOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />

          <button type="button" onClick={handleSubmit} className="add-doctor-button">
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
