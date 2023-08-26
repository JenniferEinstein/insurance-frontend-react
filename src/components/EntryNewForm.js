import axios from "axios";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
// import "New.css";

// HOW ARE THE EDIT AND NEW FORMS DIFFERENT?
// The new form doesn't need useParams or useEffect since it doesn't have to get something before it sends something.
// But otherwise, they entries themselves are the same. 


const API = process.env.REACT_APP_API_URL;

console.log("EntryNewForm: before the function is executed");

function EntryNewForm() {

console.log("EntryNewForm component is being executed");

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
    EOB: false, 
    notes: "",
  },);


  const options = ["To send to insurance", "Sent to insurance", "Waiting for reimbursement", "Done!"];

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setEntry({ ...entry, [id]: newValue });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(entry);
  };


  const addEntry = (newEntry) => {
    axios
      .post(`${API}/entry`, newEntry)
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="new">
      <p>EntryNewForm dot js. Before form tag</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <fieldset>
            <legend>Basic Information</legend>
            <label htmlFor="patient">Patient Name:</label>
            <input type="text" id="patient"  name="patient" 
            value={entry.patient}
            placeholder="name of patient"
            onChange={handleInputChange}
            required
            />
            <label htmlFor="service_date">Date of Service:</label>
            <input type="date" id="service_date" name="date1"  
            value={entry.service_date}
            onChange={handleInputChange}
            required
            />
            <hr></hr>
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
            <hr></hr>
            
            <label htmlFor="cost">Amount charged:</label>
            <input type="number" id="cost" 
            value={entry.cost}
            onChange={handleInputChange} 
            /> 
            {/* I have deleted the name attribute here and it now works */}
            <hr></hr>
            
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

            <hr></hr>
            <label htmlFor="sentto_how">How was this sent to the insurance company?</label>
            <input type="text" id="sentto_how" name="sentto_how" 
            value={entry.sentto_how}
            placeholder="through their portal, by mail, etc."
            onChange={handleInputChange}
            />
                        <hr></hr>
            <label htmlFor="sentto_when">When was this sent to the insurance company?</label>
            <input type="date" id="sentto_when" name="sentto_when" 
            value={entry.sentto_when}
            placeholder="through their portal, by mail, etc."
            onChange={handleInputChange}
            />            
            <hr></hr>
            <label htmlFor="claimnumber">What claim number did the insurance assign to this?</label>
            <input type="text" id="claimnumber" name="claimnumber" 
            value={entry.claimnumber}
            onChange={handleInputChange}
            />            
            <hr></hr>
            <label htmlFor="eob">I have received an explanation of benefits (EOB) from insurance.</label>
            <input type="checkbox" id="eob" name="eob" 
            value={entry.EOB}
            onChange={handleInputChange}
            checked={entry.EOB}
            />
          
          </fieldset>
          <fieldset>
            <legend>Notes</legend>
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
      </form>      
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


            //   {/* <label htmlFor="notes">
            //   <textarea value={entry.notes} onChange={handleInputChange} placeholder="called insurance 8/15 to find out where my payment was"/>
            // </label>
            // <input type="text" id="notes" name="notes"
            // /> */}


//NOTE : CHANGED CODE BELOW TO ABOVE
/*
<label htmlFor="status">Status:</label>
<select id="status" name="status">
  <option value="to send to insurance">To send to insurance</option>
  <option value="sent to insurance">Sent to insurance</option>
  <option value="waiting for reimbursement">Waiting for reimbursement</option>
  <option value="done">done!</option>
</select>
<input type="text" id="status" name="status"  
value={entry.status}
onChange={handleInputChange}
/>
*/