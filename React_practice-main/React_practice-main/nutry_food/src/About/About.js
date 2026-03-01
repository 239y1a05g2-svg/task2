import Nav from "../Nav/Nav";
import "./About.css";
import Footer from "../Footer/Footer";

export default function About(){
    return(
        <>
            <Nav/>
            <div className="main-about">
                 <div className="about">
                <h2>About Our Company</h2>

                <p>
                    We are a food-based company that focuses on healthy and 
                    nutritious products. Our goal is to provide quality food 
                    that helps people live a better and healthier life.
                </p>

                <p>
                    All our products are made using fresh ingredients and 
                    follow proper safety standards. Customer satisfaction 
                    is our top priority.
                </p>

                <p>
                    We believe good food creates good health and happiness.
                </p>
            </div>
            <div className="starting foundation">
                <img src="https://techmoshop.s3.ap-south-1.amazonaws.com/content_images/nutryfood/Standing%20Foundation.jpg"/>
                <span>Starting foundation</span>
                <p>“Growth across Globe”To reach our beloved Indian residents in any corner of globe not to miss the taste and benefits of Indian food - trunking through Indian Restaurants to serve maximum number of people through “Our NutryFood Industries.

</p>
            </div>
            <div className="fruitful-results">
                <img src="https://techmoshop.s3.ap-south-1.amazonaws.com/content_images/nutryfood/Fruitful%20Results.jpg"/>
                   <span>fruitfil-results</span>
                   <p>Carrying the legacy of our Mothers to present & future generations with our NutryFood</p>
            </div>
            <div className="mission">
               <h2>Mission</h2>
               <p>"To help people live healthier
                 and worls better a palce with new ideas"</p>
            </div>
            <div className="vision">
               <h2>Vision</h2>
               <p>"empowering individuals worldwide to embrance 
                convinience without compromising quality"</p>
            </div>
            <div className="core-values">
                <div className="Innnovation">
                    <h3>Innovation</h3>
                </div>
                <div className="Integrity">
                    <h3>Integrity</h3>
                </div>
                <div className="Excellence">
                    <h3>Excellence</h3>
                </div>
                <div className="Inclusivity">
                    <h3>Inclusivity</h3>
                </div>
                <div className="Sustainability">
                    <h3>sustainability</h3>
                </div>
                
            </div>
            <section className="our-team">
                <h2>Our team</h2>
                <span >Business development</span>
                <span>R&D</span>
                <span>Manfacturing</span>
                <span>Marketing</span>
                <span>Exports</span>
                <span>Creative media</span>

            </section>

            </div>

           
            <Footer/>
        </>
    );
}
