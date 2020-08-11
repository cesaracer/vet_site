import React from 'react';

export default function NotFound(){
    return(
    <div className="container" style={{height: "600px"}}>
        <div className="review-title" style={{textAlign: "center"}}>
            <h1>Page not found</h1>
        </div>
        <img style={{width: "50%", marginLeft: "25%"}} src="images/looking.jpg" alt="dog looking"/>
    </div>
    );
}