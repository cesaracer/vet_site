import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import NotFound from './Common/NotFound';

export default function Confirmation(props){
    const data = props.location.state;

    if(data === undefined){
        return <Redirect to='/appointment'/>
    }
    else{
        return(
                <div className="container">
                    {
                        console.log(data)
                    }
                    <div id="review">
                        <div id="title"><h1>Confirm Details</h1></div>
                        <h5>Name: {data.firstName} {data.lastName}</h5>
                        <h5>Email: {data.email}</h5>
                        <h5>Phone: {data.phone}</h5>
                        <h5>Pet Name: {data.petName}</h5>
                        <h5>Pet Type: {data.petType}</h5>
                        <h5>Appointment: {data.date} at {data.time}</h5>
                    </div>
                    <div id="options">
                        <Link style={{float: "left"}} id="btn" to={{pathname: '/appointment'}}>Return</Link>
                        <Link style={{float: "right"}} id="btn" to={{pathname: '/receipt', state: data}}>Confirm</Link>
                    </div>
                    
                </div>
            )
    }
    
}