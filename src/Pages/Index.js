// import {useState, useEffect} from 'react';
// import axios from 'axios';
// import Entries from '../components/Entries';
import { Link } from 'react-router-dom';


function Index() {
  console.log("You have reached the Index Page")
  return (
    <div className='index'>
      <h2>The Index Page</h2>
      <button>
        <Link to="/entries">Link to Entries in index</Link>
      </button>

    </div>
  )
}

export default Index