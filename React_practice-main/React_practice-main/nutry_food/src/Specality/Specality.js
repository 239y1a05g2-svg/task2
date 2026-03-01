import Nav from "../Nav/Nav";
import "./Specality.css";
import Footer from "../Footer/Footer";
export default function Speciality(){
    return(
        <>
            <Nav />

            <div className="speciality">
                <h2>Our Speciality</h2>

                <p>
                    Our products are made using only natural ingredients.
                    We do not use any chemicals, preservatives, or artificial colors.
                </p>

                <p>
                    All items are prepared in a clean and healthy environment
                    by following traditional methods.
                </p>

                <p>
                    Our food is safe for all age groups and helps in maintaining
                    good health and nutrition.
                </p>

                <p>
                    We believe natural food is the best medicine for a healthy life.
                </p>

                {/* CEO Section */}
                <div className="message">
                    <div className="ceo-image">
                        <img 
                          src="https://www.livemint.com/lm-img/img/2024/12/30/original/PTI12-12-2024-000152A-0_1735555744526.jpg"
                          alt="CEO of NutryFood"
                        />
                    </div>

                    <div className="ceo">
                        <h3>Message from Our CEO</h3>

                        <p>
                            Hello, I am the CEO of NutryFood. Our vision is to provide
                            healthy and natural food to every family. We strongly believe
                            that using traditional methods and natural ingredients
                            improves the quality of life.
                        </p>

                        <p>
                            We are committed to honesty, purity, and customer satisfaction.
                            Your health is our first priority.
                        </p>
                    </div>
                </div>
            </div>

            <marquee>
                <h2>
                    To lead a healthy and organic life, choose our products.
                    We assure you will be satisfied with our taste and natural ingredients.
                </h2>
            </marquee>
            <Footer/>
        </>
    )
}
