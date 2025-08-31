import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = {
    background: "/assets/img/home3.jpg",
    heading: "Transform Your Space",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived not
  only five centuries.`,
    cta: {
      text: "Let's Talk",
      link: "contact/",
    },
    contact: [
      {
        id: 1,
        title: "Phone",
        value: "+34 567 721 12 35",
      },
      {
        id: 2,
        title: "E-mail",
        value: "info@Textura.com",
      },
      {
        id: 3,
        title: "Directions",
        value: `77 Kennedy Road
      Soho Manhattan
      New York - USA`,
      },
    ],
  };

  return (
    <div>
      <div
        className="footer-section pt-80"
        data-background={footerData.background}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left side */}
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="footer-content-wrap">
                <div className="section-title">
                  <h2 className="text-white visible-slowly-right">
                    {footerData.heading}
                  </h2>
                </div>
                <hr />
                <p
                  className="text-white wow fadeInUp animated"
                  data-wow-delay="400ms"
                >
                  {footerData.description}
                </p>
                <Link
                  to={footerData.cta.link}
                  className="white-btn mt-20 wow fadeInDown animated"
                  data-wow-delay="600ms"
                >
                  {footerData.cta.text}{" "}
                  <i className="fa-light fa-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Right side contact info */}
            <div className="col-xl-4 col-lg-4 col-md-1" />
            <div className="col-xl-3 col-lg-3 col-md-5">
              <div className="contact-info-wrap mt-40">
                {footerData.contact.map((item, index) => (
                  <div
                    key={item.id}
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay={`${200 * (index + 1)}ms`}
                  >
                    <h6 className="text-white">{item.title}</h6>
                    <p className={item.title === "Phone" ? "p-xl" : ""}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
