// Timeline.jsx
import React from "react";

export default function Timeline() {
  return (
    <div className="timeline-section section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="timeline-wrapper">

            <div className="timeline-item obverse">
              <div className="timeline-inner">
                <div className="timeline-img-wrap">
                  <img src="assets/img/project/1.jpg" alt="Timeline" />
                </div>
                <div className="timeline-content-wrap">
                  <span className="timeline-date">2010</span>
                  <h5 className="timeline-title">Textura Year</h5>
                  <p className="timeline-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item reverse">
              <div className="timeline-inner">
                <div className="timeline-content-wrap">
                  <span className="timeline-date">2013</span>
                  <h5 className="timeline-title">Initial Launch</h5>
                  <p className="timeline-text">
                    Business Setup: Florz established its headquarters in New York, 
                    partnering with top manufacturers to offer a diverse range of flooring products.
                  </p>
                </div>
                <div className="timeline-img-wrap">
                  <img src="assets/img/timeline/2.jpg" alt="Timeline" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
