import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { billsToSendToInsurance } from 

function Home() {
  const navigate = useNavigate();
  const handleSearch = async (queryType) => {
    try {
      let response;
      if (queryType === "billsByPatient") {
        response = await axios.get(`/entries/search?queryType=${queryType}`);
      } else {
        response = await axios.get(`/entries/search?queryType=${queryType}`);
      }
      console.log(response.data); // Do something with the data, like displaying it on the UI
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div className='home'>
      <main>
      <h2>What would you like to do?</h2>
      <p>See All Entries</p>
      <p  className='home-search' onClick={() => handleSearch('billsToSendToInsurance')}>
          Bills to send to insurance
        </p>
      <p className='home-search' onClick={() => handleSearch('waitingToHearFromInsurance')}>
        Waiting to hear from insurance
        </p>
      <p className='home-search' onClick={() => handleSearch('billsFrom2023')}>
        All entries from a 2023
        </p>
      <p className='home-search' onClick={() => handleSearch('billsByPatient')}>Bills by Patient</p>

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