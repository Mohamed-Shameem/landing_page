import React from "react";
import "../component/Features.css";
import service from "../assests/feature_img.png";
import billing from "../assests/Billing.png";
import calender from "../assests/calender.png";
import rewards from "../assests/rewards.png";
import ivr from "../assests/ivr.png";
import Interface from "../assests/Interface.png";
import sms from "../assests/sms.png";
import google from "../assests/google.png";
import appointment from "../assests/appointment.png";
import boost from "../assests/boost.png";
import automate from "../assests/automate.png";
import scale_faster from "../assests/scale_faster.png";
import patient from "../assests/patient.png";
import brand from "../assests/brand.png";
import easy_use from "../assests/Easy_use.png";
import work from "../assests/work_together.png";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="features_header">
          <div>
            <h2>
              Let’s <span>Streamline</span> <br />
              Your Workflow
            </h2>
          </div>
          <div>
            <p>
              Our software solution streamlines your workflow, making it easier
              for you to manage appointments, access and update electronic
              medical records, and prescribe medications. Plus, it improves
              patient care by providing real-time access to important health
              information.
            </p>
          </div>
        </div>
        <div className="fea_main_con">
          <div className="feature_img">
            <img src={service} alt="Our Service" />
          </div>
          <div className="feature_content">
            <h2>What We Provide</h2>
            <div className="our_service">
              <div>
                <p>
                  <img src={billing} alt="Billing" />
                  &emsp; Billing and Prescriptions
                </p>
                <p>
                  <img src={calender} alt="calender" />
                  &emsp; Intergrated Calender
                </p>
                <p>
                  <img src={rewards} alt="rewards" />
                  &emsp; Referal Rewards
                </p>
                <p>
                  <img src={ivr} alt="ivr" />
                  &emsp; Sophisticated IVR
                </p>
              </div>
              <div>
                <p>
                  <img src={Interface} alt="interface" />
                  &emsp; Easy to Use Interface
                </p>
                <p>
                  <img src={sms} alt="sms" />
                  &emsp; SMS Customization Support
                </p>
                <p>
                  <img src={google} alt="google" />
                  &emsp; Google My business integration
                </p>
                <p>
                  <img src={appointment} alt="appointment" />
                  &emsp; Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="some_head">
          <h1>
            Why <span>Choose Us</span>
          </h1>
        </div>
        <div className="choose_us">
          <div className="your_oppinion">
            <img src={boost} alt="Boost" />
            <h4>Boost Your Presence and Productivity</h4>
            <small>
              We Provide Google Listing , Personal Website Personal Desktop &
              Mobile Application along with analytics for you
            </small>
          </div>
          <div className="your_oppinion">
            <img src={automate} alt="automate" />
            <h4>Digitalize and Automate</h4>
            <small>
              Automate your workflows and enable online booking, electronic
              medical records, alerts and notifications to help your patients.
            </small>
          </div>
          <div className="your_oppinion">
            <img src={scale_faster} alt="scale_faster" />
            <h4>Gain Insights and Scale Faster</h4>
            <small>
              Access reports on a daily, weekly, or monthly basis within seconds
              for analyzing the clinic's cash flow.
            </small>
          </div>
          <div className="your_oppinion">
            <img src={patient} alt="patient" />
            <h4>Patient Engagement </h4>
            <small>
              To send valuable health content and alerts to loyal patients which
              helps to improve the patient experience. Build patient's trust by
              improving your services.
            </small>
          </div>
          <div className="your_oppinion">
            <img src={brand} alt="brand" />
            <h4>Increase Brand Reputation</h4>
            <small>
              Provide exceptional customer service and consistently meet or
              exceed patient expectations, gather and act on patient feedback to
              improve the overall experience.
            </small>
          </div>
          <div className="your_oppinion">
            <img src={easy_use} alt="easy_use" />
            <h4>Easy to use Interface</h4>
            <small>
              A functional and easy to use CMS with separate login for doctors,
              admins and staff, online payment seamless facility
            </small>
          </div>
        </div>
        <div className="features_footer">
          <div className=" fea_footer_con">
            <h2>Let’s Work Together</h2>
            <p>
              Experience seamless patient care with our cutting-edge H4U CMS.
              Join our healthcare brand today and take the first step towards a
              smarter, more efficient future."
            </p>
            <div className="features_btn">
              <button className="btn_1">
                <a href="#">See How it Works</a>
              </button>
              <button className="btn_2">
                <a href="#">Get a Free Demo</a>
              </button>
            </div>
          </div>
          <div className="features_img">
            <img src={work} alt="Work Together"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
