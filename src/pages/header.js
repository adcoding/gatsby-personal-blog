import React from "react";
import { Link } from 'gatsby';
import './style.css';
import Avatar from '../images/avatar.png'

function header() {
    return(
        <div className='header'>
            <img className='avatar' src={Avatar}></img>
            <header>
                <nav>
                    <Link to="/">About Me</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Contacts</Link>
                </nav>
            </header>

            <hr />
        </div>
    )
}

export default header;