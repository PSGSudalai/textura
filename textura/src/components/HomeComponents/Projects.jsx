import React from "react";

const Projects = () => {
  return (
    <div className="extra-info">
      {/* Close Button */}
      <div className="close-icon menu-close">
        <button>
          <i className="las la-times"></i>
        </button>
      </div>

      {/* Logo Section */}
      <div className="logo-side">
        <div className="logo">
          <a href="index.html">
            <img src="assets/img/logo-white.png" alt="Textura Logo" />
          </a>
        </div>
      </div>

      {/* Side Info */}
      <div className="side-info">
        <div className="contact-list mb-40">
          <p>
            Welcome to <b>Textura</b>, A Full Service of Flooring and Tiling Works.
          </p>
          <img src="assets/img/1.jpg" alt="Flooring" />

          <div className="mt-30 mb-30">
            <a href="contact.html" className="white-btn">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-area-wrap">
          <a href="#">
            <i className="lab la-facebook-f"></i>
          </a>
          <a href="#">
            <i className="lab la-instagram"></i>
          </a>
          <a href="#">
            <i className="lab la-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="lab la-skype"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
