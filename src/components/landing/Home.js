import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from "../common/NavBar";
import SideBar from "../common/SideBar";
import Footer from "../common/Footer";




function Home() {
  return (
    <>
      <div>
        <h2>Home dot js</h2>
        </NavBar>
        </SideBar>
        </Footer>
      </div>
    </>
  )
}

export default Home