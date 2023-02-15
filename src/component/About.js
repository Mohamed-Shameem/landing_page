import React from "react";
import "../component/About.css";
import about_img from "../assests/about_img.png";
import rating from "../assests/Star_rating.png";
import unrating from "../assests/Star_unrating.png";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about_head">
          <h2>
            Who <span> We Are</span>
          </h2>
        </div>
        <div className="about_con">
          <div className="about_img">
            <img src={about_img} alt="about_img" />
          </div>
          <div>
            <p className="about_img_con">
              Our Cloud-based Clinic Management Software with modern AI
              technologies & innovation helps even the busiest Clinic run more
              efficiently by automating and digitizing every task. Appointment
              management, Tele-consultation, are some major key benefits of
              choosing H4U CMS.
            </p>
          </div>
        </div>
        <div className="client">
          <h2>What our Client Say</h2>
          <div className="our_clients">
            <div className="client_detail">
              <div className="circle_1"></div>
              <div className="client_name">
                <h5>James Pattinson</h5>
              </div>
              <div className="circle_img">
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={unrating} alt="UnRating" />
              </div>
              <div className="circle_content">
                <p>
                  “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque
                  risus tortor donec ipsum consequat semper consequat adipiscing
                  ultrices.”
                </p>
              </div>
            </div>
            <div className="client_detail">
              <div className="circle_1"></div>
              <div className="client_name">
                <h5>James Pattinson</h5>
              </div>
              <div className="circle_img">
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={unrating} alt="UnRating" />
              </div>
              <div className="circle_content">
                <p>
                  “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque
                  risus tortor donec ipsum consequat semper consequat adipiscing
                  ultrices.”
                </p>
              </div>
            </div>
            <div className="client_detail">
              <div className="circle_1"></div>
              <div className="client_name">
                <h5>James Pattinson</h5>
              </div>
              <div className="circle_img">
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={unrating} alt="UnRating" />
              </div>
              <div className="circle_content">
                <p>
                  “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque
                  risus tortor donec ipsum consequat semper consequat adipiscing
                  ultrices.”
                </p>
              </div>
            </div>
           <div className="client_detail">
              <div className="circle_1"></div>
              <div className="client_name">
                <h5>James Pattinson</h5>
              </div>
              <div className="circle_img">
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={rating} alt="Rating" />
                <img src={unrating} alt="UnRating" />
              </div>
              <div className="circle_content">
                <p>
                  “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque
                  risus tortor donec ipsum consequat semper consequat adipiscing
                  ultrices.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
