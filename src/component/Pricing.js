import React from "react";
import "../component/Pricing.css"
import tick from "../assests/tick.png";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <p className="price_head">Pricing</p>
        <div className="price_content">
          <div className="price_main">
            <div className="price_main_head">
              <h2>Standard</h2>
              <p>Supports up to 2 Accounts</p>
            </div>
            <div className="price_main_body">
              <div className="price_main_con">
                <h2>Features</h2>
                <p>
                  <img src={tick} alt="tick" />
                  Dashboard - Business Intelligence
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Google My Business Integration
                </p>
                <p>
                  <img src={tick} alt="tick" /> Desktop & Mobile Application{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Google Website{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Treatment Planner
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  E-Prescription via SMS
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Calendar- Appointment Booking System
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Billing Management{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Electronic Medical Records (EMR){" "}
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Patient Information Management{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Separate Log-in For Admin, & Staff{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" /> Only UPI Payment Accepted{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" /> 8,000 SMS/Year{" "}
                </p>
              </div>
              <div className="price_main_foot">
                <h3>Launch Offer</h3>
                <button>₹ 1000/ Month</button>
              </div>
            </div>
          </div>
          <div className="price_main">
            <div className="price_main_head">
              <h2>Standard</h2>
              <p>Personal Domain + SSL</p>
            </div>
            <div className="price_main_body">
              <div className="price_main_con">
                <h2>Features</h2>
                <h5>All features of Standard +</h5>
                <p>
                  <img src={tick} alt="tick" />
                  Basic Website
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Separate Log-in For Admin, Doctors & Staff
                </p>
                <p>
                  <img src={tick} alt="tick" /> Desktop & Mobile Application{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Multiple Payment Methods
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  SMS/E-Mail/Push Notification Alerts
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  12,000 SMS/Year
                </p>
              </div>
              <div className="price_main_foot">
                <h3>Launch Offer</h3>
                <button>₹ 2000/ Month</button>
              </div>
            </div>
          </div>
          <div className="price_main">
            <div className="price_main_head">
              <h2>Standard</h2>
              <p>Supports up to 2 Accounts</p>
            </div>
            <div className="price_main_body">
              <div className="price_main_con">
                <h2>Features</h2>
                <h5>All features of Standard and Advanced +</h5>
                <p>
                  <img src={tick} alt="tick" />
                  Customized Dynamic Website
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Promotional SMS & Campaigns
                </p>
                <p>
                  <img src={tick} alt="tick" /> Desktop & Mobile Application{" "}
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Video Consultation
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  Interactive Voice Response (IVR)
                </p>
                <p>
                  <img src={tick} alt="tick" />
                  15,000 SMS/Year
                </p>
              </div>
              <div className="price_main_foot">
                <h3>Launch Offer</h3>
                <button>₹ 2000/ Month</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
