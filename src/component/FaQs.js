import React from "react";
import "../component/FAQs.css"
import faqs_img from "../assests/FAQs_img.png";
import faqs_foot_img from "../assests/faqs_foot_img.png"

const FaQs = () => {
  return (
    <section id="faqs">
      <div className="container">
        <h2 className="faqs_heading">FAQs</h2>
        <div className="faqs_main">
          <div className="faqs_img">
            <img src={faqs_img} alt="FAQs Image" />
          </div>
          <div className="faqs_con">
            <h4>What is H4U CMS?</h4>
            <p>
              12233333456 <br />
              4566662 <br />
              222333
            </p>
            <p>How much time will I need to learn H4U Software?</p>
            <p>How much does H4U CMS cost?</p>
            <p>Can I write Rx online with my customized letterhead ?</p>
            <p>How safe is my data?</p>
            <p> How H4U can benefits us ?</p>
            <p>I have never used EMR for Clinic. Can I try out First?</p>
            <p>
              Why should I pay for an EMR software when there are Free
              alternatives?
            </p>
          </div>
        </div>
        <div className="faqs_footer">
          <div className="footer_con">
            <h2>Helping Clinics/Doctors digitalize their Practice</h2>
            <div className="faqs_btn">
              <button className="btn_1">
                <a href="#">See How it Works</a>
              </button>
              <button className="btn_2">
                <a href="#">Get a Free Demo</a>
              </button>
            </div>
          </div>
          <div className="footer_img">
            <img src={faqs_foot_img} altt="Helping Clinic"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaQs;
