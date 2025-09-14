import React from "react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    icon: "assets/img/service/icon1.png",
    title: "Global Sourcing & Exporting",
    description:
      "We specialize in sourcing 100% bamboo textiles from certified manufacturers in India and exporting them to international markets with reliable logistics.",
    delay: "200ms",
  },
  {
    id: 2,
    icon: "assets/img/service/icon2.png",
    title: "Private Label & Custom Branding",
    description:
      "We provide white-label and private-label services with logo, packaging, and branding customization for retailers, hotels, and distributors.",
    delay: "400ms",
  },
  {
    id: 3,
    icon: "assets/img/service/icon3.png",
    title: "Bulk Orders & Customization",
    description:
      "Our products can be tailored for bulk buyers with specific size, color, GSM, and packaging requirements – from hotel-grade to retail-ready.",
    delay: "600ms",
  },
  {
    id: 4,
    icon: "assets/img/service/icon4.png",
    title: "Quality Assurance & Compliance",
    description:
      "All Yamboo products undergo strict quality checks. We are working towards GOTS, OEKO-TEX, and Fair Trade certifications.",
    delay: "800ms",
  },
  {
    id: 5,
    icon: "assets/img/service/icon5.png",
    title: "B2B Partnerships",
    description:
      "We serve hotels, retail chains, lifestyle brands, spas, and distributors worldwide with consistent supply, competitive pricing, and after-sales support.",
    delay: "1000ms",
  },
  {
    id: 6,
    icon: "assets/img/service/icon6.png",
    title: "Future Expansion Services",
    description:
      "We are expanding into bamboo bedding, apparel, and eco-lifestyle products. Partners today get early access to our upcoming product lines.",
    delay: "1200ms",
  },
];

const Service2 = () => {
  return (
    <div className="mt-50">
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
                We provide end-to-end export solutions for eco-friendly bamboo
                textiles. From sourcing and customization to private labeling
                and quality compliance, our services are designed to make global
                partnerships seamless and sustainable.
              </p>
            </div>
          </div>

          <div className="row mt-60 gy-4">
            {serviceData.map((service) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp animated"
                data-wow-delay={service.delay}
              >
                <div className="single-service-item text-center p-4 rounded shadow-sm h-100">
                  <div className="service-icon mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="service-title">
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="mt-2">{service.description}</p>
                  </div>
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
