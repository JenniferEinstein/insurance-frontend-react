import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// IS USEPARAMS NEEDED?

const API = process.env.REACT_APP_API_URL;

console.log("EntryEditForm: this log is before the function is executed");


function EntryEditForm() {
    console.log("EntryEditForm component is being executed");
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
    EOB: "", 
    notes: "",
  },);

  const updateEntry = (updatedEntry) => {
    axios
      .put(`${API}/entry/${id}`, updatedEntry)
      .then(
        () => {
          navigate(`/entries/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };


  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setEntry({ ...entry, [id]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEntry(entry, id);
  };


  useEffect(() => {
    axios.get(`${API}/entries/${id}`).then(
      (response) => setEntry(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);


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
            placeholder="through their portal, by mail, etc."
            onChange={handleInputChange}
            />
            <label htmlFor="sentwhen">When was this sent to the insurance company?</label>
            <input type="date" id="sentwhen" name="sentwhen" 
            value={entry.sentto_when}
            placeholder="through their portal, by mail, etc."
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
            onChange={handleInputChange}
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
}

export default EntryEditForm;

// OLDER CODE

//   const handleTextChange = (event) => {
//     setEntry({ ...entry, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setEntry({ ...entry, eob: !entry.eob });
//   };
