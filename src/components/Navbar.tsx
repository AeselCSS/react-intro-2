import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"


export default function Navbar() {
    return (
        <div className="navBar">
            <NavLink className="NavLink" to="/">
                Homepage
            </NavLink>
            <NavLink className="NavLink" to="/artists">
                Artists
            </NavLink>
            <NavLink className="NavLink" to="/artists/create">
                Create artist
            </NavLink>
        </div>
    );
}
