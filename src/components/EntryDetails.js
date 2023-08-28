import axios from "axios";
import React, { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";


function EntryDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [ entry, setEntry ] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
    
  const handleDelete = () => {
    deleteEntry();
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const deleteEntry = () => {
    axios.delete(`${API}/entries/${id}`)
    .then(() => {
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
          <h3>Time to update? Press here. </h3>
          <button className='btn'  onClick = {() => {
            navigate(`/entries/${id}/edit`)
            }}>
              HERE
          </button>

          <div className="data-lines">
            <p>Patient: {entry.patient}</p>
            <p>Service Date: {formatDate(entry.service_date)}</p>
            <p>Status: {entry.status}</p>
            <p>Description: {entry.description}</p>
            <p>Cost:  { entry.cost ? `$${entry.cost}` : '' }</p>

            <p>Insurance: {entry.insurance}</p>
            <p>Claim #: {entry.claimnumber}</p>
            <p>When did you send this to the insurance company? {formatDate(entry.sentto_when)}</p>
            <p>How did you send this to the insurance company? {entry.sentto_how}</p>
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