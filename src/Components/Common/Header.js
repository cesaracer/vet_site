import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div className="navbarImg">
            <div className="overlay">
                <div id="navItems">
                    <h1>Rocky Mountain Animal Clinic</h1>
                    <div id="tabs">
                        <Link id="link" to={{pathname: "/"}}>Home</Link>
                        <Link id="link" to={{pathname: "/services"}}>Services</Link>
                        <Link id="link" to={{pathname: "/staff"}}>Staff</Link>
                        <Link id="link" to={{pathname: "/appointment"}}>Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}