import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../common/NavBar.css";
 
export default function NavBar() {
  console.log("This is the NavBar component.")
  let navigate = useNavigate();

  return (
    <nav>NavBar - tealish
        <Link to="/entries" >All Entries</Link> 
      <button>
        <Link to="/entry/new">A New Entry</Link>
      </button>
      {/* <h6><Link to="./entry/edit">Link to entry/edit, element is edit</Link>  </h6> */}

      {/* <h6><Link to="./entry/:id">Link to /entry/:id, element is Show</Link>  </h6> */}

      <button className='btn'  onClick = {() => {
            console.log('The new button was clicked');
            navigate('/entry/new')
      }}>
        This button goes to new entries
      </button>



    </nav>
  )
}

//basically copied from lab-express-sql-seed-read
