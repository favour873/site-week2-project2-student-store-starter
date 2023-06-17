import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"


export default function Home(props) {

  return (
    <div className="home">

      <ProductGrid products={props.products}/>

      <div className="bottom">
        <div id="about" className="about">
          <div className="about-content"> 
            <h3> About </h3>
            <div className="summary">
              <div className="text">
                <p> Books are a uniquely portable magic. </p>
                <p> The more that you read, the more things you will know. The more that you learn, the more places you’ll go. </p>
                <p> We are of opinion that instead of letting books grow moldy behind an iron grating, far from the vulgar gaze, it is better to let them wear out by being read. </p>
              </div>
              <div className="media">
                <img src="src/components/Logo/logo.png" alt="codepath large"></img>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="contact">
          <h3> Contact Us </h3>
          <div className="content">
            <div className="summary">
              <ul className="info">

                <li className="label"> Email: code@path.org </li>
                <li className="label"> Phone: 1-800-CODEPATH</li>
                <li className="label"> Address: 123 Fake Street, San Francisco, CA </li>

              </ul>
            </div>

          </div>
        </div>

        <footer className="footer">
          <div className="content">
            <div className="top">
              <div className="links">

                <div className="link-column">
                  <h4>Categories</h4>
                  <ul>
                    <li>All Categories</li>
                    <li>Clothing</li>
                    <li>Food</li>
                    <li>Accessories</li>
                    <li>Tech</li>
                  </ul>
                </div>

                <div className="link-column">
                  <h4>Company</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Find a Store</li>
                    <li>Terms</li>
                    <li>Sitemap</li>
                    <li>Careers</li>
                  </ul>
                </div>

                <div className="link-column">
                  <h4>Support</h4>
                  <ul>
                    <li>Contact Us</li>
                    <li>Money Refund</li>
                    <li>Order Status</li>
                    <li>Shipping Info</li>
                    <li>Open Dispute</li>
                  </ul>
                </div>
                
                <div className="link-column">
                  <h4>Account</h4>
                  <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Account Setting</li>
                    <li>My Orders</li>
                  </ul>
                </div>

                <div className="link-column">
                  <h4>Socials</h4>
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                  </ul>
                </div>

                <div className="link-column">
                  <h4>Our App</h4>
                  <ul>
                    <li><img src="	https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="app store"/></li>
                    <li><img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="google play store"/></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bottom">
              <span className="payment-options">
                <img src="	https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg" alt="american express"/>
                <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg" alt="mastercard"/>
                <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg" alt="paypal"/>
                <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg" alt="visa" />
              </span>
            </div>

          </div>
        </footer>
      </div>

    </div>
  )
}

