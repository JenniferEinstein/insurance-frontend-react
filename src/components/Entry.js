import { Link } from "react-router-dom";

function Entry({ entry }) {
    return (
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
                <Link to={`/entry/${entry.id}`}>{ entry.description }</Link>
            </td>
            <td>
                <Link to={`/entry/${entry.id}`}>✏️</Link>
            </td>
        </tr>
    )   
}

export default Entry;