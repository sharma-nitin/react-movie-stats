import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div data-test='navbar' className="topnav1">
                <Link data-test='movielink' className="active" to="/">
                    <h1>Movies</h1>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
