import React from 'react'

export default function Services(){
    return(
        <div className="container">
            <div id="title">
                <h1>Services Available</h1>
            </div>
            <div id="service">
                <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/vax.svg" alt="vaccination"/>
                <h3>Vaccinations</h3>
                <p>
                    We offer vaccines for all pets and ages. Certain vaccines may require proof of previous vaccinations in order to be administered.
                    If you have any questions or concerns, make sure to contact us prior to scheduling an appointment. We will work with you to determine if a vaccine is 
                    right for your pet. 
                </p>
            </div>
            <div id="service">
                <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/microchip.svg" alt="microchip"/>
                <h3>Microchipping</h3>
                <p>
                    Every year, thousands of pets go missing. Whether they were stolen, lost, or ran away, tracking down a pet with no identification can be a daunting task that often 
                    ends in heartbreak. Microchipping makes finding lost pets much easier. How do our chips work? We implant a chip with a unique id that is then stored in a large database 
                    available to all shelters. With this id, shelters can determine the owner of the found pet!
                </p>
            </div>
            <div id="service">
                <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/grooming.svg" alt="grooming"/>
                <h3>Grooming</h3>
                <p>
                    Even our pets deserved to be pampered. Schedule a grooming appointment today and receive 20% off on your first visit. Our grooming package includes; deshedding, a hair cut, 
                    nail trim, and dental cleaning. A well groomed pet is a happy pet. Have a question about our grooming products? No problem, give us a call and we'll answer your questions.
                </p>
            </div>
            <div id="service">
                <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/steth.svg" alt="wellness check"/>
                <h3>Wellness Check</h3>
                <p>As our pets get older, it's only natural that we worry about their health. Stop by for a regular wellness check. Wellness checks usually run no longer than 20 minutes. We 
                    administer tests to ensure that your companion is healthy and happy. 
                </p>
            </div>
        </div>
    )
}