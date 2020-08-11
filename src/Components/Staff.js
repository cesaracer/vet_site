import React from 'react';

export default function Staff(){
    return(
        <div className="container">
            <div className="review-title">
                <h1>Meet Our Staff</h1>
            </div>
            <div className="profile">
                <div className="profile-avatar">
                    <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/founder.jpg" alt="founder"/>
                    <h4>Dr. Emilia Heurtz</h4>
                </div>
                <div className="profile-description">
                    <p>
                        Dr. Heurtz has been working with animals for about 37 years. In 2002, she decided to open up her own clinic in the Denver metropolitan area. Praised as one of the state's 
                        leading veterinarians, her clinic quickly began to garner a reputation amonst the community. Dr. Heurtz personally ensures that each animal treated receives the proper care it deserves. 
                        When it comes to veterinarians of equal talent and dedication, there are very few who can rival Dr. Heurtz.
                    </p>
                </div>
            </div>
            <div className="profile">
                <div className="profile-avatar">
                    <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/doc1.jpg" alt="doctor"/>
                    <h4>Dr. Elijah Rashford</h4>
                </div>
                <div className="profile-description">
                    <p>
                        Dr. Rashford is second to Dr. Heurtz when it comes to experience. Dr. Rashford has 32 years of experience having travelled the world treating all sorts of animals. Dr. Rashford is 
                        meticulous with his work and will ensure that your pet has been fully examined before leaving. No detail or pet is too small for Dr. Rashford to consider.
                    </p>
                </div>
            </div>
            <div className="profile">
                <div className="profile-avatar">
                    <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/doc2.jpg" alt="doctor"/>
                    <h4>Dr. Carmen Mendoza</h4>
                </div>
                <div className="profile-description">
                    <p>
                        Dr. Mendoza is our latest addition to the team. Dr. Mendoza has 7 years worth of experience and is our inhouse tech specialist. Dr. Menodza might seem fresh faced, but her wisdom is 
                        beyond her years. Dr. Menodza knowledge of equipment and animals means that your pet will only get the most accurate results and diagnosis. 
                    </p>
                </div>
            </div>
            <div className="profile">
                <div className="profile-avatar">
                    <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/doc3.jpg" alt="doctor"/>
                    <h4>Dr. Steve Englemann</h4>
                </div>
                <div className="profile-description">
                    <p>
                        Dr. Englemann is another recent addition to our team. Dr. Englemann has worked in various other clinics across the metropolitan area and has built a reputation throughout the years. Dr. 
                        Englemann has 22 years worth of experience working as a veterinarian. Dr. Englemann initially began his career as a RNA before discovering his passion for working with animals. 
                    </p>
                </div>
            </div>
            <div className="profile">
                <div className="profile-avatar">
                    <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/doc4.jpg" alt="doctor"/>
                    <h4>Ms. Whitney Carrol</h4>
                </div>
                <div className="profile-description">
                    <p>
                        Ms. Carrol is one of our two stylists who are here three days a week. Ms. Carrol is currently working on becoming a veterinarian herself. Ms. Carrol works to ensure that your pet experiences the least 
                        stressful visit possible.
                    </p>
                </div>
            </div>
            <div className="profile">
                <div className="profile-avatar">
                    <img style={{width: "150px", height: "150px", marginLeft: "25%"}} src="images/doc5.jpg" alt="doctor"/>
                    <h4>Ms. Candace Grant</h4>
                </div>
                <div className="profile-description">
                    <p>
                        Ms. Grant is the second of our two stylists and is one of our latest additions. Ms. Grant has been around animals all her life growing up in rural Oklahoma. If there is anyone who understands the importance 
                        of proper grooming, it is Ms. Grant.
                    </p>
                </div>
            </div>
        </div>
    );
}