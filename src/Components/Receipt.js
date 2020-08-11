import React from 'react';
import {Link, Redirect} from 'react-router-dom'

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
                <div className="review">
                    <h4>A confirmation email has been sent to {data.email}</h4>
                    <Link className="btn" to={{pathname: '/'}}>Home</Link>
                </div>
            </div>
        );
    }
    
}