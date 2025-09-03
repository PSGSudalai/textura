import React from "react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    icon: "assets/img/service/icon1.png",
    title: "Select Fright",
    delay: "200ms",
  },
  {
    id: 2,
    icon: "assets/img/service/icon2.png",
    title: "Select Product",
    delay: "400ms",
  },
  {
    id: 3,
    icon: "assets/img/service/icon3.png",
    title: "Select Payment",
    delay: "600ms",
  },
  {
    id: 4,
    icon: "assets/img/service/icon4.png",
    title: "Recieve Product",
    delay: "800ms",
  },
];

const Service2 = () => {
  return (
    <div>
      <div id="service-2" className="service-section section-padding pb-0 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-6">
              <div className="section-title">
                <h6>Our Services</h6>
                <h2 className="visible-slowly-right">
                  Textura Exports Solutions for Global Partners
                </h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-1" />
            <div className="col-xl-4 col-lg-4 col-md-5">
              <p className="pt-40">
                We provide end-to-end export solutions for eco-friendly bamboo textiles.
                From sourcing and customization to private labeling and quality compliance,
                our services are designed to make global partnerships seamless and sustainable.
              </p>
              <Link to="/services" className="details-link">
                View All Services <i className="fa-light fa-arrow-right" />
              </Link>
            </div>
          </div>

          <div className="row mt-60">
            {serviceData.map((service, index) => (
              <div
                key={service.id}
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
                data-wow-delay={service.delay}
              >
                <div className="single-service-item">
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="service-title">
                    <h5>{service.title}</h5>
                  </div>
                  {index !== serviceData.length - 1 && (
                    <div className="border-right d-none d-md-inline-block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
