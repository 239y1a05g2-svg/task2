import Nav from "../Nav/Nav";
import "./Contact.css";
import Footer from "../Footer/Footer";

export default function Contact(){
    return(
        <>
         <Nav/>
        <div className="length">
<div className="food-image">
                <img src="https://techmoshop.s3.ap-south-1.amazonaws.com/content_images/nutryfood/contact_us.png"/>

            </div>

            <div className="contact">
                <h2>Contact Us</h2>

                <form>
                    <label>Name</label><br />
                    <input type="text" 
                        placeholder="Enter your name" 
                    /><br /><br />

                    <label>Email</label><br />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                    /><br /><br />

                    <label>Message</label><br />
                    <textarea 
                        placeholder="Enter your message"
                    ></textarea><br /><br />

                    <button>Send Message</button>
                </form>
            </div>
        </div>
           <Footer/>
            
        </>
    );
}
