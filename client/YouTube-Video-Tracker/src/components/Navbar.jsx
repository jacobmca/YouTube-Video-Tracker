import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <div className="navbar navbar-bar navbar-expand-md">
            <div className="container-fluid">
                <div className="navbar-header row-md-6">
                    <ul className="nav navbar-nav">
                        <li className="nav-item me-4">
                            <NavLink 
                                exact 
                                to="/" 
                                className={({ isActive }) => isActive ? "link-light no-text-dec navigation-links active-link" : "link-light no-text-dec navigation-links"}
                            >
                                About
                            </NavLink>
                            <NavLink 
                                exact 
                                to="/" 
                                className={({ isActive }) => isActive ? "link-light no-text-dec navigation-links active-link" : "link-light no-text-dec navigation-links"}
                            >
                                Project Page
                            </NavLink>
                            <NavLink 
                                exact 
                                to="/" 
                                className={({ isActive }) => isActive ? "link-light no-text-dec navigation-links active-link" : "link-light no-text-dec navigation-links"}
                            >
                                Contact Page
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;