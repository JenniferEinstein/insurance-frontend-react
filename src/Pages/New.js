import EntryNewForm from "../components/EntryNewForm";
import { Link } from "react-router-dom"
import React from 'react'

console.log("You have reached the 'New' Page")


function New() {
  
  return (
    <div className="new">
      <h2>Component New.js</h2>
      <EntryNewForm />
      
        <Link to="/entries/new"> 
          Create A New Entry
        </Link>
      
    </div>
  )
}

export default New


/*

import EntryNewForm from "../components/EntryNewForm";
import { Link } from "react-router-dom"

import React from 'react'

function New() {
  return (
    <div className="new">
      <h2>Component New.js</h2>
      <EntryNewForm />
      <button>
        <Link to="/entry/new"> 
          Create A New Entry
        </Link>
      </button>
    </div>
  )
}

export default New
*/