import { useNavigate } from 'react-router-dom';
import "../common/NavBar.css";
 
export default function NavBar() {
  console.log("This is the NavBar component.")
  let navigate = useNavigate();

  return (
    <nav>NavBar - tealish
      
      <button className='btn'  onClick = {() => {
            navigate('/')
      }}>
        Home
      </button>



      <button className='btn'  onClick = {() => {
            console.log('The see all button was clicked');
            navigate('/entries')
      }}>
        See All Entries
      </button>



      <button className='btn'  onClick = {() => {
            console.log('The new button was clicked');
            navigate('/entry/new')
      }}>
        Create a New Entry
      </button>

    </nav>
  )
}

//basically copied from lab-express-sql-seed-read
