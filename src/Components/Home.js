import React from 'react';

export default function Home(){
    return(
        <div className="container">
            <div id="title"><h1>Welcome to Rocky Mountain Animal Clinic</h1></div>
            <div className="content">
                <div style={{width: "100%", overflow: "hidden", padding: "10px"}}>
                    <img src="images/founder.jpg" style={{width: "250px", height: "250px", float: "left", marginRight: "15px", boxShadow: "2px 2px 5px 2px"}} alt="founder" />
                    <div id="message" style={{float: "right"}}>
                        <h3>Our mission</h3>
                        <p>
                            Welcome to Rocky Mountain Animal Clinic(RMAC)! We pride ourselves in being able to provide our clients with the best quality care available. We have been serving the
                            metropolitan area for the past 18 years. Our clinic was founded in 2002 by one of the state's leading veterinarians, Emilia Heurtz. Rocky Mountain Animal Clinic is unrivaled
                            when it comes to not only quality care, but affordability as well. Schedule an appointment today! You owe it to your pet to get the best quality care at a price that won't hurt 
                            your wallet. We accept most forms of animal insurance and are more than capable of setting up custom payment plans if needed. 
                        </p>
                    </div>"
                    
                </div>
                <div style={{width: "100%", overflow: "hidden", padding: "10px"}}>
                    <div id="message" style={{float: "left"}}>
                        <h3>Our community</h3>
                        <p>
                            Want to know how good we are? How about you ask the Denver community! We have been nominated 7 times as best animal care option in the metropolitan area, and have won 5 times. 
                            We don't see ourselves as another clinic or business, we see ourselves as a part of the community. In order to be readily available, most of our doctors live in the Denver area. 
                            On their days off, you may even see some of our own staff walking their own pets around City Park! We know what it means to live in Denver, and this is what sets us apart from the 
                            rest. 
                        </p>
                    </div>
                    <img src="images/city.jpg" style={{width: "250px", height: "250px", float: "right", boxShadow: "-2px -2px 5px 2px"}} alt="clinic" /> 
                </div>
            </div>
        </div>
    );
}