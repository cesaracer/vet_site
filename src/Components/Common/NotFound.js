import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound(){
    return(
    <div className="container" style={{height: "600px"}}>
        <div className="title" style={{textAlign: "center"}}>
            <h1>Page not found</h1>
        </div>
        <img style={{width: "500px", marginLeft: "30%"}} src="images/looking.jpg" alt="dog looking"/>
    </div>
    );
}