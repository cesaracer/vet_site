import React from 'react';
import {Link, Redirect} from 'react-router-dom'

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
                    <div className="review">
                        <div className="review-title"><h1>Confirm Details</h1></div>
                        
                        <h4>Name: {data.firstName} {data.lastName}</h4>
                        <h4>Email: {data.email}</h4>
                        <h4>Phone: {data.phone}</h4>
                        <h4>Pet Name: {data.petName}</h4>
                        <h4>Pet Type: {data.petType}</h4>
                        <h4>Appointment: {data.date} at {data.time}</h4>
                        <h4>Reason for visit: {data.appointmentType}</h4>
                    </div>
                    <div id="options">
                        <Link style={{float: "left"}} className="btn" to={{pathname: '/appointment'}}>Return</Link>
                        <Link style={{float: "right"}} className="btn" to={{pathname: '/receipt', state: data}}>Confirm</Link>
                    </div>
                    
                </div>
            )
    }
    
}