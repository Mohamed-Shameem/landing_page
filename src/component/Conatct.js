import React from "react";
import "../component/Contact.css"
import contact_img from "../assests/Contact_img.png";
import logo_white from "../assests/logo_white.png";
import fb from "../assests/Fb_icon.png"
import twitter from "../assests/twitter_icon.png"
import insta from "../assests/instagram_icon.png"
import linked from "../assests/linked_icon.png"
import play_store from "../assests/play_store.png"

const Conatct = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact_head">Contact Us</h2>
        <div className="contact_main">
          <div className="contact_image">
            <img src={contact_img} alt="contact_img" />
          </div>
          <div className="contact_form">
            <form>
              <h2>Send a Message</h2>
              <div className="forms">
                <div>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      autoComplete="none"
                    />
                  </div>
                  <div className="form-group">
                    <label>Clinic Name</label>
                    <input type="text" placeholder="Enter Your Clinic Name" />
                  </div>
                  <div className="form-group">
                    <label> Write your message here ...</label>
                    <textarea placeholder="Write a message"> </textarea>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Your Number</label>
                    <input type="number" placeholder="Enter Your Number" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      autoComplete="none"
                    />
                  </div>
                </div>
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>
        <div className="contact_footer">
          <div className="contact_foot_con">
            <div className="footer_con_1">
                  <img src={logo_white} alt="Footer Details" />
                  <h2>H4U</h2>
              <p>Revolutionarizing Healthcare</p>
            </div>
            <div className="footer_con_2">
                <h3>Company</h3>
                <p>About Us</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>FaQs</p>
            </div>
            <div className="footer_con_3">
                <h3>Follow Us</h3>
                <div className="icons">
                    <img src={fb} alt="Facebook Icon"/>
                    <img src={twitter} alt="Twitter Icon"/>
                    <img src={insta} alt="Instagram Icon"/>
                    <img src={linked} alt="Linked Icon"/>
                </div>
            </div>
            <div className="footer_con_4">
                <h3>Download the App</h3>
                <img src={play_store} alt="Play Store"/>
            </div>
            <div className="footer_con_5">
                <h3>Contact Us</h3>
                <p>Write to us at</p>
                <p>support@H4U.com</p>
                <p>Call us on</p>
                <p>1800 1020 123</p>
            </div>
            <div className="End_Line">
            <small>Privacy Policy  |  Terms of Use | Contact Us</small>
            <small>©Copyright @HEALTH4YOU TECHNOLOGIES PRIVATE LIMITED </small>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conatct;
