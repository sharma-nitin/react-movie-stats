

import React from 'react'
import { Link } from 'react-router-dom';
import './button.scss'

const Button = (props) => {
    const { btnName, goTo } = props;
    return (
        <div data-test='buttonComponent'>
            <Link to={goTo} >
                <button data-test='buttonname' className="button">{btnName}</button>
            </Link>
        </div>
    )
}

export default Button;
