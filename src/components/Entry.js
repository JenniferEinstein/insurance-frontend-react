import { Link } from "react-router-dom";


function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

function Entry({ entry }) {
    return (
        <>
            <tr>
                <td>{formatDate(entry.service_date)}</td>
                <td> { entry.patient } </td>
                <td>
                    <Link to={`/entries/${entry.id}`}>{ entry.description }</Link>
                </td>
                <td> { entry.cost }</td>
                <td> { entry.status } </td>
                <td> { entry.EOB } </td>
                <td>
                    <Link to={`/entries/${entry.id}`}>✏️</Link>
                </td>
            </tr>
        </>
                
    )   
}

export default Entry;


/*
8-23-23
Code was 
        <>
            <tr>
                <td>
                    {entry.EOB ? (
                    <span>⭐️</span>
                    ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                    )}
                </td>
                <td>
                        { entry.patient }
                </td>
            
                <td>
                        { entry.service_date }
                </td>
                <td>
                        { entry.status }
                </td>

                    <Link to={`/entry/${entry.id}`}>{ entry.description }</Link>
            
                <td>
                    <Link to={`/entry/${entry.id}`}>✏️</Link>
                </td>
            </tr>
        </>

*/