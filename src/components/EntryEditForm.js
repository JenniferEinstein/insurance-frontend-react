import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

console.log("EntryEditForm component is being executed");

const API = process.env.REACT_APP_API_URL;

function EntryEditForm() {
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
    EOB: false, 
    notes: "",
  }, []);

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


//   const handleTextChange = (event) => {
//     setEntry({ ...entry, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setEntry({ ...entry, eob: !entry.eob });
//   };

  useEffect(() => {
    axios.get(`${API}/entries/${id}`).then(
      (response) => setEntry(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEntry(entry, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}className="form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={entry.name}
          type="text"
          onChange={handleInputChange}
          placeholder="name of song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={entry.artist}
          type="text"
          onChange={handleInputChange}
          placeholder="artist"
          required
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={entry.album}
          placeholder="album"
          onChange={handleInputChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          value={entry.time}
          type="text"
          onChange={handleInputChange}
          placeholder="time"
          required
        />
        <label htmlFor="EOB">Favorite:</label>
        <input
          id="EOB"
          type="checkbox"
          onChange={handleInputChange}
          checked={entry.EOB}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/entry/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EntryEditForm;
