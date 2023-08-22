import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from "../common/NavBar";
import SideBar from "../common/SideBar";
import Footer from "../common/Footer";




function Home() {
  const navigate = useNavigate;
  
  return (
    <div className='home'>
      <main>
      <h2>Welcome to the Home Page. Home dot js</h2>
      <button className='all-items-btn'  onClick = {() => navigate("/")}>
        This button goes to /
      </button>




        <NavBar />
        <SideBar />
        <Footer />

        
        </main>
    </div>
  )
}

export default Home