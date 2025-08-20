import React from "react";

export default function Header() {
  return (
    <div id="header-1" className="header-area absolute-header">
      <div id="header-sticky">
        <div className="navigation">
          <div className="container-fluid">
            <div className="header-inner-box">
              <div className="logo" style={{ maxWidth: "90px" }}>
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo-white.png" alt="logo" />
                </a>
              </div>

              <div className="main-menu d-none d-lg-block">
                <ul>
                  <li className="active"><a href="#">Home</a></li>
                  <li>
                    <a className="has-arrow" href="#">Services</a>
                    <ul className="sub-menu">
                      <li><a href="#">Yamboo</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>

              <div className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
                <div className="mobile-nav-wrap">
                  <div id="hamburger">
                    <i className="las la-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
