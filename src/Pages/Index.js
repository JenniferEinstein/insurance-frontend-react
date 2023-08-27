import Entries from '../components/Entries';

function Index() {
  console.log("You have reached the Index Page")
  return (
    <div className='index'>
      <h2>List of Entries</h2>
      <div>
        <Entries />
      </div>
    </div>
  )
}

export default Index


/* Old Code
Why did I have this. It leads to itself.

      <div>
        <button>
          <Link to="/entries">Link to Entries in index</Link>
        </button>
      </div>

      */