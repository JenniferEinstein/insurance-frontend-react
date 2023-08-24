// import {useState, useEffect} from 'react';
// import axios from 'axios';
import Entries from '../components/Entries';
import { Link } from 'react-router-dom';


function Index() {
  console.log("You have reached the Index Page")
  return (
    <div className='index'>
      <h2>The Index Page</h2>
      <div>
        <button>
          <Link to="/entries">Link to Entries in index</Link>
        </button>
      </div>

      <div>
        <Entries />
        
      </div>

    </div>
  )
}

export default Index