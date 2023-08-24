import React from 'react';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





function Home() {
  const navigate = useNavigate();
  
  return (
    <div className='home'>
      <main>
      <h2>This will be the landing page. ie, Home.js. It is the slash.</h2>
      <p>The color is currently LawnGreen</p>
      <button className='all-items-btn btn'  onClick = {() => navigate('/entries')}>
        This button goes to /entries
      </button>

      <button className='btn'  onClick = {() => {
            console.log('The new button was clicked');
            navigate('/entry/new')
      }}>
        This button goes to new entries
      </button>

{/* 
      <button className='btn'  onClick = {() => {
            console.log('The index button was clicked');
            navigate('/entries')
      }}>
        This button goes to all entries
      </button> */}


        
        </main>
    </div>
  )
}

export default Home



/*

import NavBar from "../common/NavBar";
import SideBar from "../common/SideBar";
import Footer from "../common/Footer";

        <NavBar />
        <SideBar />
        <Footer />

*/