import { Link } from "react-router-dom";
import "./Landing.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
export default function Landing(){
    return(
        <>
            <Nav/>
            <div className="landing">
                
                <div className="btn-group">
                     
                    <button className="login-btn"><Link to="/login">Login  </Link></button>
                   
                    
                    <button className="register-btn"><Link to="/register">Register</Link></button>
                </div>
                <h2 >This is Landing Page</h2>
                <div className="backimg">
                    
                </div>
            </div>
            <section>
                <h2>Trending products</h2>
                <section>
                    <div className="top">
                       <div className="top-image">
                          <img src="https://techmoshop.s3.ap-south-1.amazonaws.com/nextshopz/uploads/Tenant_775/photos/9597PYApQx5Jx68xvGB.jpg"/>
                          <p>millet dosa powder</p>
                       <p className="pro-price">₹120</p>
                        <button className="order-btn">Order Now</button>
                       </div>
                       <div className="top-image">
                          <img src="https://techmoshop.s3.ap-south-1.amazonaws.com/nextshopz/uploads/Tenant_268/photos/4570Gp11Xh1g6VLGdrp.jpg"/>
                          <p>multi millet dosa</p>
                       <p className="pro-price">₹120</p>
                        <button className="order-btn">Order Now</button>
                       </div>
                       <div className="top-image">
                          <img src="https://techmoshop.s3.ap-south-1.amazonaws.com/nextshopz/uploads/Tenant_268/photos/4847RXTm9OOJ93Rdvh1.jpg"/>
                          <p>brown rice dosa</p>
                       <p className="pro-price">₹120</p>
                        <button className="order-btn">Order Now</button>
                       </div>
                       <div className="top-image">
                          <img src="https://techmoshop.s3.ap-south-1.amazonaws.com/nextshopz/uploads/Tenant_268/photos/7860qdb8p3NPJOY7eJE.jpg"/>
                          <p>ragi millet dosa</p>
                       <p className="pro-price">₹120</p>
                        <button className="order-btn">Order Now</button>
                       </div>
                            
                    </div>
                    <span className="breakfast">  
                        <h2>recommende for you</h2>
                        <button ><Link to="/products">Breakfast</Link></button>
                    </span>
                </section>
            </section>
            <Footer/>
        </>
    )
}
