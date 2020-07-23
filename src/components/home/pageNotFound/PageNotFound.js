import React from 'react'
import { Link } from 'react-router-dom';
import './pageNotFound.scss'

function PageNotFound() {
    return (
        <div data-test='pagenotfoundHeader' className="page">
            <h3 data-test='pagenotfoundtext'>Page Not Found !</h3>
            <h3><Link data-test='pagenotfoundLink' to="/">Go to Home</Link></h3>
        </div>
    )
}

export default PageNotFound
