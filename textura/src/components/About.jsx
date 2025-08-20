// AboutSection.jsx
import React from "react";

export default function About() {
  return (
    <div id="about-page" className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 order-2 order-md-1">
            <div className="about-content-wrap">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. 
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 order-1 order-md-2">
            <div className="about-img-wrap">
              <img src="assets/img/project/1.jpg" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
