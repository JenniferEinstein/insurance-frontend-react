import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

function EntryDetails() {
    let { id } = useParams();
    let navigate = useNavigate();
    
    const [ entry, setEntry ] = useState([])


    useEffect(() => {
        axios
          .get(`${API}/entry/${id}`)
          .then((res) => setEntry(res.data))
          .catch((c) =>
            console.error(
              "The get functionality of this code is not working. Make sure to check the API and if the URL pathway is correct."
            )
          );
      }, [id, navigate]);


    const deleteEntry = () => {
        axios
        .delete(`${API}/entry/${id}`)
        .then(() => navigate(`/all-entries`))
        .catch((c) => console.error("catch", c));
    };

    return(
        <div className="entry-details">

        </div>
    )
}



export default EntryDetails;