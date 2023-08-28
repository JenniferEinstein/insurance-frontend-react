import axios from "axios";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";

// HOW ARE THE EDIT AND NEW FORMS DIFFERENT?
// The new form doesn't need useParams or useEffect since it doesn't have to get something before it sends something.


const API = process.env.REACT_APP_API_URL;

function EntryNewForm() {

  let navigate = useNavigate();

  const [entry, setEntry] = useState({
    patient: "",
    service_date: "",
    description: "",
    cost: 0,
    insurance: "",
    status: "",
    sentto_how: "",
    sentto_when: "",
    claimnumber: "",
    eob: false, 
    notes: "",
  },);


  const options = ["To send to insurance", "Sent to insurance", "Waiting for reimbursement", "Done!"];

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const eobValue = type === "checkbox" ? checked : value;
    setEntry({ ...entry, [id]: eobValue });
  };

  const handleCheckboxChange = () => {
    setEntry({ ...entry, EOB: !entry.EOB});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(entry);
  };


  const addEntry = (newEntry) => {
    axios
      .post(`${API}/entries`, newEntry)
      .then(() => {
        navigate(`/entries`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="new">
      <h2>Create A New Entry</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <fieldset>
            <legend>Basic Information</legend>
            <label htmlFor="patient">Patient Name:</label>
            <input 
              type="text" 
              id="patient"  
              name="patient" 
              value={entry.patient}
              placeholder="name of patient"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="service_date">Date of Service:</label>
            <input 
              type="date" 
              id="service_date" 
              name="date1"  
              value={entry.service_date}
              onChange={handleInputChange}
              required
            />
            <br/><br/>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description"   
            value={entry.description}
            placeholder="office visit, Dr. B."
            onChange={handleInputChange}
            className="wide-input"
            />
          </fieldset>
          <br/><br/>
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
            <br/><br/>
            
            <label htmlFor="cost">Amount charged:</label>
            <input 
              type="number" 
              id="cost" 
              value={entry.cost}
              onChange={handleInputChange} 
            /> 
            <br/><br/>
            
            <label htmlFor="status">Status:</label>
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

            <br/><br/>
            <label htmlFor="sentto_how">How was this sent to the insurance company?</label>
            <input type="text" id="sentto_how" name="sentto_how" 
            value={entry.sentto_how}
            placeholder="health portal, mail, etc."
            onChange={handleInputChange}
            />
            <br/><br/>
            <label htmlFor="sentto_when">When was this sent to the insurance company?</label>
            <input type="date" id="sentto_when" name="sentto_when" 
            value={entry.sentto_when}
            onChange={handleInputChange}
            />            
            <br/><br/>
            <label htmlFor="claimnumber">What claim number did the insurance assign to this?</label>
            <input type="text" id="claimnumber" name="claimnumber" 
            value={entry.claimnumber}
            onChange={handleInputChange}
            />            
            <br/><br/>
            <label htmlFor="eob">I have received an explanation of benefits (EOB) from insurance.</label>
            <input type="checkbox" id="eob" name="eob" 
            value={entry.eob}
            onChange={handleCheckboxChange}
            checked={entry.eob}
            />
          
          </fieldset>
          <br/><br/>
          <fieldset>
            <legend>Notes to Self</legend>
            <label>
              <textarea 
                className="notes" 
                rows={4} 
                cols={60} 
                value={entry.notes}
                onChange={handleInputChange}
                id="notes"/>
            </label>
          </fieldset>
        </div>
        
          <input className="submit" type="submit" />

      </form>      
      <br/>      <br/>
    </div>
  )
}

export default EntryNewForm


// OLDER CODE 
  // const addEntry = (newEntry) => {
  //   axios.post(`${API}/entry`, newEntry)
  //   .then(
  //     () => {
  //       navigate(`/`);
  //     },
  //     (error) => console.error(error)
  //   )
  //   .catch((c) => console.warn("catch", c));
  // };

  // const handleTextChange = (e) => {
  //   setEntry({ ...entry, [e.target.id]: e.target.value });
  // };

  // const handleCheckboxChange = (field) => {
  //   setEntry({ ...entry, [field]: !entry[field] });
  // };

