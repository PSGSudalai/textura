import React from "react";
import { Link } from "react-router-dom";

const footerData = {
  section: {
    title: "Transform Your Space",
    description:
      "At Textura, we blend India’s rich textile heritage with modern eco-friendly technology to create sustainable and globally adaptable solutions. Discover how we can help transform your spaces with craftsmanship, trust, and quality.",
    cta: {
      text: "Let's Talk",
      link: "/contact",
      className: "white-btn mt-20 wow fadeInDown animated",
      delay: "600ms",
      icon: "fa-light fa-arrow-right",
    },
    background: "/assets/img/home3.jpg",
  },
  contact: {
    phone: "+91 97406 43497",
    email: "prabakar@texturaexports.com",
    website: "www.texturaexports.com",
    address: [
      "3101, Prestige Sunrise Park Birchwood",
      "Electronic City Phase 1",
      "Bangalore - 560100, India",
    ],
    animationDelays: ["200ms", "400ms", "600ms"],
  },
  copyright: "Copyright © 2025 Textura Exports Pvt Ltd. - All rights reserved.",
};

const Footer = () => {
  return (
    <>
      <div
        className="footer-section pt-80"
        style={{ backgroundImage: `url(${footerData.section.background})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="footer-content-wrap">
                <div className="section-title">
                  <h2 className="text-white visible-slowly-right">
                    {footerData.section.title}
                  </h2>
                </div>
                <hr />
                <p
                  className="text-white wow fadeInUp animated"
                  data-wow-delay="400ms"
                >
                  {footerData.section.description}
                </p>
                <Link
                  to={footerData.section.cta.link}
                  className={footerData.section.cta.className}
                  data-wow-delay={footerData.section.cta.delay}
                >
                  {footerData.section.cta.text}{" "}
                  <i className={footerData.section.cta.icon} />
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-1" />

            <div className="col-xl-3 col-lg-3 col-md-5">
              <div className="contact-info-wrap mt-40">
                <div
                  className="single-contact-info wow fadeInUp animated"
                  data-wow-delay={footerData.contact.animationDelays[0]}
                >
                  <h6 className="text-white">Phone</h6>
                  <p className="p-xl">{footerData.contact.phone}</p>
                </div>
                <div
                  className="single-contact-info wow fadeInUp animated"
                  data-wow-delay={footerData.contact.animationDelays[1]}
                >
                  <h6 className="text-white">E-mail</h6>
                  <p>{footerData.contact.email}</p>
                </div>
                <div
                  className="single-contact-info wow fadeInUp animated"
                  data-wow-delay={footerData.contact.animationDelays[2]}
                >
                  <h6 className="text-white">Directions</h6>
                  <p>
                    {footerData.contact.address.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="row align-items-center justify-content-center">
          <div className="site-info text-center">
            <p className="mb-0">{footerData.copyright}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
