import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="footer-area"
        data-bg-image="/assets/images/footer/bg/1-1920x465.jpg"
      >
        <div className="footer-top section-space-top-100 pb-60">
          <div className="container">
            <div className="row" style={{ justifyContent: "space-between" }}>
              {/* Company Info */}
              <div className="col-lg-3">
                <div className="footer-widget-item">
                  <div className="footer-widget-logo">
                    <a href="/">
                      <img src="/assets/images/logo/dark.png" alt="Logo" />
                    </a>
                  </div>
                  <p className="footer-widget-desc">
                    At <strong>Yamboo</strong>, we specialize in premium
                    bamboo-based textiles crafted for luxury, sustainability,
                    and comfort. Our eco-friendly fabrics are designed with care
                    for your lifestyle and the planet.
                  </p>
                  <div className="social-link with-border">
                    <ul>
                      <li>
                        <a
                          href="https://facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                          data-tippy="Facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                          data-tippy="Instagram"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                          data-tippy="LinkedIn"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/919740643497"
                          target="_blank"
                          rel="noreferrer"
                          data-tippy="WhatsApp"
                        >
                          <i className="fa fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-lg-2 col-md-4 pt-40">
                <div className="footer-widget-item">
                  <h3 className="footer-widget-title">Useful Links</h3>
                  <ul className="footer-widget-list-item">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    {/* <li>
                      <a href="/products">Products</a>
                    </li> */}
                    <li>
                      <a href="/about">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-4 col-md-6 pt-40">
                <div className="footer-widget-item">
                  <h3 className="footer-widget-title">Contact Info</h3>
                  <ul className="footer-widget-list-item">
                    <li>
                      <i className="fa fa-map-marker"></i> Prestige Sunrise Park
                      Birchwood, Electronic City Phase 1, Bangalore – 560100
                    </li>
                    <li>
                      <i className="fa fa-user"></i> Managing Director: Prabakar
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>{" "}
                      <a href="tel:+919740643497">+91 97406 43497</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>{" "}
                      <a href="mailto:Prabakar@texturaexports.com">
                        Prabakar@texturaexports.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>{" "}
                      <a href="mailto:Sales@texturaexports.com">
                        Sales@texturaexports.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-globe"></i>{" "}
                      <a
                        href="https://texturaexports.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.texturaexports.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright">
                  <span className="copyright-text">
                    © {new Date().getFullYear()} <strong>Yamboo</strong> | All
                    Rights Reserved | Made with{" "}
                    <i className="fa fa-heart text-danger"></i> in India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
