import { Link } from "react-router-dom";
import "../common/NavBar.css";

export default function NavBar() {
  console.log("This is the NavBar component.")
  return (
    <nav>NavBar - tealish
      <h1>
        <Link to="/entries" >All Entries</Link> 
      </h1>
      <button>
        <Link to="/entry/new">A New Entry</Link>
      </button>
      <h2><Link to="./entry/edit">Link to edit entry, element is edit</Link>  </h2>
      <h2><Link to="./entry/editform">Link to editform, element is EntryEditForm</Link>  </h2>
      <h2><Link to="./entry/:id">Link to /entry/:id', element is Show</Link>  </h2>

        



    </nav>
  )
}

//basically copied from lab-express-sql-seed-read
