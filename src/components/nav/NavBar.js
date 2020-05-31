import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'


class NavBar extends Component {

    render() {
return (
    <header>
        <nav>
            <ul className="container">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/books">Books</Link></li>
                <li><Link className="nav-link" to="/patrons">Patrons</Link></li>
            </ul>
                
            
        </nav>
    </header>
)

}
}

export default NavBar;