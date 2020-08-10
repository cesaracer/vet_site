import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import Schedule from './Schedule';

export default function Receipt(props){
    const data = props.location.state

    if(data === undefined){
        return(
            <Redirect to='/appointement'/>
        )
    }
    else{
        return(
            <div className="container">
                <div className="title">
                    <h5>A confirmation email has been sent to {data.email}</h5>
                    <Link id="btn" to={{pathname: '/'}}>Home</Link>
                </div>
            </div>
        );
    }
    
}