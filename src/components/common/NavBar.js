import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../common/NavBar.css";
import logo from "../assets/TypeWriter Keys.png"
 
export default function NavBar() {
  const navigate = useNavigate();


  const handleTabClick = (tabName) => {
    if (tabName === 'home') {
      navigate('/');
    } else if (tabName === 'entries') {
      navigate('/entries');
    } else if (tabName === 'newEntry') {
      navigate('/entries/new');
    } else if (tabName === 'about') {
      // Handle your about route here
    }
  };

  return (
    <nav className='topnav'>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>  
   
      <div className="nav-links">
        <a onClick={() => handleTabClick('home')}>Home</a>
        <a onClick={() => handleTabClick('entries')}>See All Entries</a>
        <a onClick={() => handleTabClick('newEntry')}>Create a New Entry</a>
        <a href="#about">About</a>
      </div>

   

    </nav>
  )
}
