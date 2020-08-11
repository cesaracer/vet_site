import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <img className="logo" src="images/logo.png" alt="rmac logo"/>
                </div>
                <div className="navbar-title">
                    <h1>Rocky Mountain Animal Clinic</h1>
                </div>
            </div>
            
            <div className="navbar-links">
                <div className="navbar-container">
                    <Link className="navbar-links-tab" to={{pathname: "/"}}>Home</Link>
                    <Link className="navbar-links-tab" to={{pathname: "/services"}}>Services</Link>
                    <Link className="navbar-links-tab" to={{pathname: "/staff"}}>Staff</Link>
                    <Link className="navbar-links-tab" to={{pathname: "/appointment"}}>Appointment</Link>
                </div>
            </div>
        </div>
    );
}