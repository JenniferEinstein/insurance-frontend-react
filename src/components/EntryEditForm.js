import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./EntryEditForm.css";

function EntryEditForm() {

  const API = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  let navigate = useNavigate();

  const [entry, setEntry] = useState({
    patient: "",
    service_date: "",
    description: "",
    cost: "",
    insurance: "",
    status: "",
    sentto_how: "",
    sentto_when: "",
    claimnumber: "",
    eob: "", 
    notes: "",
  },);

  const options = ["To send to insurance", "Sent to insurance", "Waiting for reimbursement", "Done!"];

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const eobValue = type === "checkbox" ? checked : value;
    setEntry((prevEntry) => ({ ...prevEntry, [id]: eobValue }));
};


const handleCheckboxChange = () => {
  setEntry((prevEntry) => ({ ...prevEntry, eob: !prevEntry.eob }));
};


  const handleSubmit = (event) => {
    event.preventDefault();
    updateEntry(entry, id);
  };

  
  const updateEntry = (updatedEntry) => {
    console.log("URL:",`${API}/entries/${id}`);
    axios
      .put(`${API}/entries/${id}`, updatedEntry)
      .then(() => {
          navigate(`/entries/${id}`);
        })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    axios.get(`${API}/entries/${id}`).then(
      (response) => setEntry(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate, API]);


  return (
    <div className="edit entry-details">
      
      <h2>Update This Entry</h2>
      <h3>Cancel the update?&nbsp;      
        <Link to={`/entries/${id}`}>
          <button>Never mind!</button>
        </Link>
      </h3>
      <form onSubmit={handleSubmit} className="form data-lines">
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
            <input
            type="text"
            id="patient"
            name="patient" 
            value={entry.patient}
            onChange={handleInputChange}
            required
            />
            <input 
            type="date" 
            id="service_date" 
            name="service_date"  
            value={entry.service_date}
            onChange={handleInputChange}
            required
            />
            <select 
              id="status" 
              name="status"
              value={entry.status}
              onChange={handleInputChange}
            >
              <option value="">Select status</option>
              {options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <br/>
            <input type="text" id="description"   
            value={entry.description}
            placeholder="office visit, Dr. B."
            onChange={handleInputChange}
            className="wide-input"
            />  
 
            <input 
              type="number" 
              id="cost"
              value={entry.cost}
              onChange={handleInputChange} 
            />

            <input type="text" id="insurance" name="insurance" 
            value={entry.insurance}
            placeholder="name of insurance"
            onChange={handleInputChange}
            />
 
 
            <input type="text" id="claimnumber" name="claimnumber" 
            value={entry.claimnumber}
            onChange={handleInputChange}
            />
    
            <input type="date" id="sentto_when" name="sentto_when" 
            value={entry.sentto_when}
            onChange={handleInputChange}
            />
            <input type="text" id="sentto_how" name="sentto_how" 
            value={entry.sentto_how}
            placeholder="health portal, by mail, etc."
            onChange={handleInputChange}
            />
          </div>
        </div>
        </div>
        <div className="form-group">
          <br/><br/>
        <div className="form-group">
        <label htmlFor="eob">Explanation of benefits (EOB) received</label>
        <input type="checkbox" id="eob" name="eob" 
            value={entry.eob}
            onChange={handleCheckboxChange}
            checked={entry.eob}
            />
          <br/><br/>
        <legend>Notes</legend>
        <label>
              <textarea
               className="notes"
               rows={4} 
               cols={60} 
               value={entry.notes}
               onChange={handleInputChange}
               id="notes"
               />
        </label>
        </div>
          <input className="submit go-right" type="submit" />
        </div>
        <br/>      <br/>
      </form>
      <br/>      <br/>
    </div>
  );
}

export default EntryEditForm;

/*  OLDER CODE

code that looks like new form:

 return (
    <div className="edit">
      <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
          <fieldset>
          <legend>Basic Information</legend>
        <label htmlFor="name">Patient Name:</label>
        <input
          id="name"
          value={entry.patient}
          type="text"
          onChange={handleInputChange}
          placeholder="name of patient"
          required
        />
          <label htmlFor="date1">Date of Service:</label>
          <input type="date" id="date1" name="date"  
            value={entry.service_date}
            placeholder="2024-08-31"
            onChange={handleInputChange}
            required
        />

        <label htmlFor="description">Description:</label>
            <input type="text" id="description"   
            value={entry.description}
            placeholder="office visit, Dr. B."
            onChange={handleInputChange}
            className="wide-input"
            />  
          </fieldset>
        </div>

        <div className="form-group">
          <fieldset>
            <legend>Insurance-related Information</legend>
            <label htmlFor="insurance">Insurance:</label>
            <input type="text" id="insurance" name="insurance" 
            value={entry.insurance}
            placeholder="name of insurance"
            onChange={handleInputChange}
            />
            <label htmlFor="charged">Amount charged:</label>
            <input type="number" id="charged" name="charged"  
            value={entry.cost}
            onChange={handleInputChange} 
            />
            <label htmlFor="status">Status:</label>
            <select id="status" name="status">
              <option value="to send to insurance">To send to insurance</option>
              <option value="sent to insurance">Sent to insurance</option>
              <option value="waiting for reimbursement">Waiting for reimbursement</option>
              <option value="done">done!</option>
            </select>
            <input type="text" id="statusinput" name="status"  
            value={entry.status}
            onChange={handleInputChange}
            />
            <label htmlFor="senthow">How was this sent to the insurance company?</label>
            <input type="text" id="senthow" name="senthow" 
            value={entry.sentto_how}
            placeholder="health portal, by mail, etc."
            onChange={handleInputChange}
            />
            <label htmlFor="sentwhen">When was this sent to the insurance company?</label>
            <input type="date" id="sentwhen" name="sentwhen" 
            value={entry.sentto_when}
            onChange={handleInputChange}
            />
            <label htmlFor="claimnumber">What claim number did the insurance assign to this?</label>
            <input type="text" id="claimnumber" name="claimnumber" 
            value={entry.claimnumber}
            onChange={handleInputChange}
            />
            <label htmlFor="eob">I have received an explanation of benefits (EOB) from insurance.</label>
            <input type="checkbox" id="eob" name="eob" 
            value={entry.EOB}
            onChange={handleCheckboxChange}
            checked={entry.EOB}
            />
          </fieldset>
          <div className="form-group">
          <fieldset>
            <legend>Notes</legend>
            <label htmlFor="notes">
              <textarea value={entry.notes} onChange={handleInputChange} placeholder="called insurance 8/15 to find out where my payment was"/>
            </label>
          </fieldset>
</div>

        <br />

        <input type="submit" />
        </div>
      </form>

      <Link to={`/entry/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );







//====================
//   const handleTextChange = (event) => {
//     setEntry({ ...entry, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setEntry({ ...entry, eob: !entry.eob });
//   };


*/
