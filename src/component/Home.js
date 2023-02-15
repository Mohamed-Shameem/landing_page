import React from "react";
import "../component/Home.css"
import home_img from "../assests/home_img.gif"

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="homepage">
            <div className="home_content">
                <div>
                <h2>We Help Your Clinic<br/> Business <span>Grow Faster</span> </h2>
                <p>Launch your digital clinic with <br/><span>H4U CMS</span></p>
                </div>
                
            </div>
            <div className="home_img">
                <img src={home_img} alt="Home Img Gif Picture"/>
            </div> 
        </div>
        <div className="home_btn">
            <button className="btn_1"><a href="#">See How it Works</a></button>
            <button className="btn_2"><a href="#">Get a  Free Demo</a></button>
        </div>
        
        <div className="home_footer">
            <h2>Start 2023 with Something New & Better</h2>
            <h4>Here is a One-Stop Solution for a Great Clinical Journey!</h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
