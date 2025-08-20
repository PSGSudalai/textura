import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <div className="footer-section-three section-padding pt-0 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title">
                <h6>All queries are replied within 24hrs.</h6>
                <h2 className="visible-slowly-right">Let's Work Together</h2>
              </div>
            </div>
          </div>

          <div className="row mt-60">
            <div className="col-lg-6">
              <div className="footer-text">
                <p>
                  You're invited to explore our innovative flooring solutions,
                  featuring durable, water-resistant vinyl planks and engineered
                  wood, perfect for enhancing the beauty of your space!
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a
                href="contact.html"
                className="footer-btn bordered-btn"
              >
                Let's Talk <i className="fa-light fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="row align-items-center justify-content-center">
          <div className="site-info text-center">
            <p className="mb-0">
              Copyright © {new Date().getFullYear()} Textura, Inc. - All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
