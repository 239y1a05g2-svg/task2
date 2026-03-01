import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav(){
           return(
            <>
            <nav className="element">
                <ul className="unorder">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About</Link></li>
                    <li><Link to="/contact"> Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/specality">Specality</Link></li>
                </ul>
            </nav>
            </>
           )
}