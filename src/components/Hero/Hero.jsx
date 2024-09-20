import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Hi There, I'm Praneeth</h2>
        <p>
          Passionate Data Analyst | Harnessing Data to Drive    
          Business growth and Enhance Performance
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/ML.png" alt="" />
          </div>
          <img src="./assets/images/Grad.jpeg" alt="" style={{borderRadius: '20px'}}  />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/Rlogo.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/AI.jpg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/Power_BI.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/python.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
