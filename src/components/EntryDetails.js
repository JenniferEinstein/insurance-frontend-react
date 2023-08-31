import axios from "axios";
import React, { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import "./EntryEditForm.css"


function EntryDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [ entry, setEntry ] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
    
  const handleDelete = () => {
    console.log("handleDelete")
    deleteEntry();
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const deleteEntry = () => {
    console.log("deleteEntry");
    const deleteURL = `${API}/entries/${id}`;
    console.log(deleteURL);
    axios.delete(deleteURL, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        navigate(`/entries`);
      })
      .catch((error) => console.error("Error Deleting entry:", error));
  };


  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios.get(`${API}/entries/${id}`)   
      .then((res) => {
        console.log("API URL", `${API}/entries/${id}`);
        console.log("API response:", res.data);
        setEntry(res.data);
      })
      .catch((error) =>
        console.error(
          "The get functionality of this code is not working. Make sure to check the API and if the URL pathway is correct.",
          error.response?.data || "unknown error"
        )
      );
  }, [id, navigate]);

    return(
        <div className="entry-details">

          <h2>Entry Details </h2>
          <h3>Time to update?&nbsp;   
            <button className='btn'  onClick = {() => {
              navigate(`/entries/${id}/edit`)
              }}>
                Press here
            </button> 
          </h3>

          <div className="data-lines">
          <div className="form-container">
            <div className="form-columns">
              <div className="form-labels">
                <label htmlFor="patient">Patient:</label>
                <br/><br/>
                <label htmlFor="service_date">Service Date:</label>
                <br/><br/>
                <label htmlFor="status">Status:</label>
                <br/><br/>
                <label htmlFor="description">Description:</label>
                <br/><br/>
                <label htmlFor="cost">Cost:</label>
                <br/><br/>
                <label htmlFor="insurance">Insurance:</label>
                <br/><br/>
                <label htmlFor="claimnumber">Claim number?</label>
                <br/><br/>
                <label htmlFor="sentto_when">Date sent to the insurance company?</label>
                <br/><br/>
                <label htmlFor="sentto_how">Method sent to the insurance company?</label>
                <br/><br/>
              </div>
              <div className="form-fields">
                {entry.patient} <br/><br/>
                {formatDate(entry.service_date)}<br/><br/>
                {entry.status}<br/><br/>
                {entry.description}<br/><br/>
                { entry.cost ? `$${entry.cost}` : '' }<br/><br/>
                {entry.insurance}<br/><br/>
                {entry.claimnumber}<br/><br/>
                {formatDate(entry.sentto_when)}<br/><br/>
                {entry.sentto_how}<br/><br/>
              </div>
            </div>
            </div>
            <p>Have you received an Explanation of Benefits (EOB)? {entry.eob ? "Yes" : "No"}</p>
            <p>Notes: {entry.notes}</p>
          </div>

      <button onClick={handleDelete}>Delete Entry</button>
  

        </div>
    )
}
export default EntryDetails;

//I had useEffect as below, which appears to be wrong:
// useEffect(() => {
//   axios
//     .get(`${API}/entry/${id}`)
//     .then((res) => setEntry(res.data))
//     .catch((c) =>
//       console.error(
//         "The get functionality of this code is not working. Make sure to check the API and if the URL pathway is correct."
//       )
//     );
// }, [id, navigate]);


/*
            <p>Patient: {entry.patient}</p>
            <p>Service Date: {formatDate(entry.service_date)}</p>
            <p>Status: {entry.status}</p>
            <p>Description: {entry.description}</p>
            <p>Cost:  { entry.cost ? `$${entry.cost}` : '' }</p>

            <p>Insurance: {entry.insurance}</p>
            <p>Claim #: {entry.claimnumber}</p>
            <p>When was this sent to the insurance company? {formatDate(entry.sentto_when)}</p>
            <p>How was this sent to the insurance company? {entry.sentto_how}</p>

            */