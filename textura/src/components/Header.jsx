import React from "react";
import { Link } from "react-router-dom";

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
                  <Link className="navbar-brand" to="/">
                    <img src="assets/img/logo-white.png" alt="Logo" />
                  </Link>
                </div>

                {/* Main Menu  */}
                <div className="main-menu d-none d-lg-block">
                  <ul>
                    <li>
                      <Link className="navlink" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="" className="has-arrow navlink">Services</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="https://yamboo.com" target="_blank" rel="noopener noreferrer"> Yamboo </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="navlink" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navlink" to="/contact">
                        Contact
                      </Link>
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
                            <Link className="has-arrow" to="/">
                              Homes
                            </Link>
                          </li>
                          <li>
                            <Link className="has-arrow" to="/services">
                              Services
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/services">Services</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link className="has-arrow" to="/about">
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
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
                        <Link to="/contact" className="theme-btn">
                          Contact Us
                        </Link>
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
