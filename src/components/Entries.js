import axios from "axios";
import { useState, useEffect } from "react";

import Entry from "./Entry";

const API = process.env.REACT_APP_API_URL;

function Entries() {
  console.log("this is the entries component")
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log(`Line 15 is ${API}/entries`)
    axios
      .get(`${API}/entries`)

      .then((response) => {
        console.log(response.data);
        setEntries(response.data)
      })

      .catch((c) => {
        console.warn("catch", c);
      });
  }, []);
  
  return (
    <div className="Entries">
      <section>
        <table>
          <thead>
            <tr>
                <th>Service Date</th>
                <th>Patient</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => {
              return <Entry key={entry.id} entry={entry} id={entry.id}/>;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Entries;
