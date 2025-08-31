import React from "react";

const Header = () => {
  return (
    <>
      {/* Header Area  */}
      <div id="header-1" className="header-area absolute-header">
        <div id="header-sticky">
          <div className="navigation">
            <div className="container-fluid">
              <div className="header-inner-box">
                <div className="logo" style={{ maxWidth: 90 }}>
                  <a className="navbar-brand" href="index.html">
                    <img src="assets/img/logo-white.png" alt="" />
                  </a>
                </div>
                {/* Main Menu  */}
                <div className="main-menu d-none d-lg-block">
                  <ul>
                    <li className="active">
                      <a className="navlink" href="index.html">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="has-arrow" href="#">
                        Services
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Yamboo</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="has-arrow" href="about.html">
                        about us
                      </a>
                    </li>
                    <li>
                      <a className="navlink" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Mobile Menu */}
                <div className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
                  <div className="mobile-nav-wrap">
                    <div id="hamburger">
                      <i className="las la-bars" />
                    </div>
                    {/* mobile menu - responsive menu  */}
                    <div className="mobile-nav">
                      <button type="button" className="close-nav">
                        <i className="las la-times-circle" />
                      </button>
                      <nav className="sidebar-nav">
                        <ul className="metismenu" id="mobile-menu">
                          <li>
                            <a className="has-arrow" href="index.html">
                              Homes
                            </a>
                          </li>
                          <li>
                            <a className="has-arrow" href="#">
                              Services
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="#">Services</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="has-arrow" href="about.html">
                              about us
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                      <div className="action-bar">
                        <a href="mailto:info@roofix.com">
                          <i className="las la-envelope" />
                          info@Textura.com
                        </a>
                        <a href="tel:123-456-7890">
                          <i className="fal fa-phone" />
                          123-456-7890
                        </a>
                        <a href="contact.html" className="theme-btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
