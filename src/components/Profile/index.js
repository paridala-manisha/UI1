import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { getDetails } from '../Apicall/Api';
import Navbar1 from '../Navbar1';
import './Profile.css';

const Profile = () => {
    const [details,setDetails] = useState([]); 


    const getUserDetails = async()=>{
        const response = await getDetails();
        setDetails(response.data);
    }
    useEffect(()=>{
        getUserDetails();
    },[])

    return (
        <>
        <Navbar1/>
        <br/>
        <div className='profile'>
            {details.map(details=>(
                <>
               { ((details.Role) == "Admin" || (details.Role) == "Nurse")?
            <table>
                <tr>
                    <td>Name</td>
                    <td>{details.Name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{details.email}</td>
                </tr>
                <tr>
                    <td>Mobile</td>
                    <td>{details.Mobile}</td>
                </tr>
                <tr>
                    <td>DOB</td>
                    <td>{details.DOB}</td>
                </tr>
                <tr>
                    <td>Gov_id</td>
                    <td>{details.Gov_id}</td>
                </tr>
                
                <tr>
                    <button  component={Link} end to={'/edit'+details.Name}>Edit</button>
                </tr>
            </table>
            :""}
            </>

            ))
}
        </div>
        </>
    )
}

export default Profile;