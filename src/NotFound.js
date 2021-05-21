import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!.. 404:)</h2>
            <p>wrong url maybe. this page can' be found buddy</p>
            <Link to="/"><i>Go Back!</i></Link>
        </div>
     );
}
 
export default NotFound;