import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div>
      <header className="main-header-area">
        {/* Header Top */}
        <div className="header-top bg-Yamboo-primary d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="header-top-left">
                  <span className="Yamboo-offer">
                    HELLO EVERYONE! 25% Off All Products
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-end">
                  <div className="header-contact d-none d-lg-flex">
                    <i className="pe-7s-call"></i>
                    <a href="tel://+91 97406 43497" style={{ color: "white" }}>
                      +91 97406 43497
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Middle */}
        <div className="header-middle py-30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="header-middle-wrap position-relative">
                  <a
                    href="/"
                    className="header-logo"
                    style={{ maxWidth: "100px" }}
                  >
                    <img src="/assets/images/logo/dark.png" alt="Header Logo" />
                  </a>

                  <div className="d-none d-lg-block">
                    <nav className="main-nav">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        {/* <li>
                          <Link to="/shop">Products</Link>
                        </li> */}
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/about#contact-form-section">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header-right">
                    <ul>
                      <li className="mobile-menu_wrap d-block d-lg-none">
                        <button
                          onClick={openMobileMenu}
                          className="mobile-menu_btn toolbar-btn pl-0"
                          aria-label="Open mobile menu"
                        >
                          <i className="pe-7s-menu"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu_wrapper ${isMobileMenuOpen ? "open" : ""}`}
          id="mobileMenu"
        >
          <div className="offcanvas-body">
            <div className="inner-body">
              <div className="offcanvas-top">
                <button
                  onClick={closeMobileMenu}
                  className="button-close"
                  aria-label="Close mobile menu"
                >
                  <i className="pe-7s-close"></i>
                </button>
              </div>
              <div className="header-contact offcanvas-contact">
                <i className="pe-7s-call"></i>
                <a href="tel://+00-123-456-789">+00 123 456 789</a>
              </div>
              <div className="offcanvas-menu_area">
                <nav className="offcanvas-navigation">
                  <ul className="mobile-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    {/* <li>
                      <a href="/shop">Shop</a>
                    </li> */}
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="global-overlay" onClick={closeMobileMenu}></div>
        )}
      </header>
    </div>
  );
};

export default Header;
