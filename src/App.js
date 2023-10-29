import React from 'react';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import Main from './components/Main';
import Profile from './components/Profile';
import TestForm from './components/TestForm';
import Patientform from './components/Patientform';
import Admin from './components/Admin';
import  Patientdetails from './components/Patientdetails';
import Nursedetails from './components/Nursedetails';
import BookingDetails from './components/BookingDetails';
import Nurse from './components/Nurse';
import Logout from './components/Logout';
import Doctor from './components/Doctor';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { UserAuthContextProvider } from './components/Login/UserAuthContext';
import DoctorTable from './components/DoctorTable';
import AddDoctor from './components/AddDoctor';

function App() {
  return (
   <div className='main'>
    <UserAuthContextProvider>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/' element={<Main/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile' element={<Profile/> } />
      <Route path='/test' element={<TestForm/>} />
      <Route path='/patient' element={<Patientform/> } />
      <Route path='/Admin' element={<Admin/> } />
      <Route path='/patientdetails' element={<Patientdetails/> } />
      <Route path='/nursedetails' element={<Nursedetails/> } />
      <Route path='/Nurse' element={<Nurse/> } />
      <Route path='/Doctor' element={<Doctor/> } />
      <Route path='/BookingDetails' element={<BookingDetails/> } />
      <Route path='/ForgotPassword' element={<ForgotPassword/> } />
      <Route path='/ResetPassword' element={<ResetPassword/> } />
      <Route path='/DoctorTable' element={<DoctorTable/> } />
      <Route path='/AddDoctor' element={<AddDoctor/>} />
    </Routes>
    </UserAuthContextProvider>
   </div>
  );
  }

export default App;