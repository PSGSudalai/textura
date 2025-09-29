import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Internal Styles for Mobile Nav */}
      <style>{`
  .mobile-nav {
    display: none !important;  /* force hidden by default */
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100vh;
    background: #000000ff;
    z-index: 9999;
    overflow-y: auto;
    padding: 20px;
  }

  .mobile-nav.open {
    display: block !important; /* force visible when open */
  }

  .mobile-nav .close-nav {
    position: absolute;
    top: 15px;
    background: none;
    border: none;
    font-size: 24px;
  }
`}</style>

      {/* Header Area */}
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

                {/* Main Menu */}
                <div className="main-menu d-none d-lg-block">
                  <ul>
                    <li>
                      <Link className="navlink" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="has-arrow navlink">
                        Our Brands
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a
                            href="https://yamboo.texturaexports.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Yamboo
                          </a>
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
                    {/* Hamburger */}
                    <div id="hamburger" onClick={toggleMenu}>
                      <i className="las la-bars" />
                    </div>

                    {/* Mobile Nav */}
                    <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
                      <button
                        type="button"
                        className="close-nav"
                        onClick={closeMenu}
                      >
                        <i className="las la-times-circle" />
                      </button>
                      <nav className="sidebar-nav">
                        <ul className="metismenu" id="mobile-menu">
                          <li>
                            <Link to="/" onClick={closeMenu}>
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={closeMenu}>
                              Our Brands
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <a
                                  href="https://yam-phi.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMenu}
                                >
                                  Yamboo
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/about" onClick={closeMenu}>
                              About Us
                            </Link>
                          </li>

                          <li>
                            <Link to="/contact" onClick={closeMenu}>
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </nav>

                      <div className="action-bar">
                        <a href="mailto:prabakar@texturaexports.com">
                          <i className="las la-envelope" />{" "}
                          prabakar@texturaexports.com
                        </a>
                        <a href="tel:+91 97406 43497">
                          <i className="fal fa-phone" /> +91 97406 43497
                        </a>
                        <Link
                          to="/contact"
                          className="theme-btn"
                          onClick={closeMenu}
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
