import React from 'react';
import Navbar1 from '../Navbar2';
import Image from '../Pictures/OIP.jpeg';
import './home.css'
function Home() {
  const paragraphStyle = {
    fontSize: '22px', 
    lineHeight: '1.6',
    marginBottom: '20px', 
    color: '#333'
  };
 

  return (
    <div  style={{backgroundImage: 'url(/images/homepage.jpeg)', backgroundSize: 'cover', height: '100vh', overflow: "hidden", position: "relative"}} > 
    <div className="home-container">
      <Navbar1 />
      
      <div className="home-content">
        <h1 className="home-heading">COVID-19 Testing And Management</h1><break></break>
        
        <p className="home-paragraph">
          In these challenging times, it's important to stay informed and follow health guidelines to protect yourself and your loved ones from the spread of COVID-19.
        </p>
        <p className="home-paragraph">
          Our testing center is here to help you get tested and stay safe. Remember, getting tested not only protects you, but also your community.
        </p>
        <h2 className="home-heading">Stay Informed</h2>
        <p className="home-paragraph">
          Stay updated with the latest information from reliable sources like the <a href="https://www.who.int/emergencies/disease/novel-coronavirus-2019" target="_blank" rel="noopener noreferrer">World Health Organization (WHO)</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention (CDC)</a>.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
    </div>
  );
  
}

export default Home;