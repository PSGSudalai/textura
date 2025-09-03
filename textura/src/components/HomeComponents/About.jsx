import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const aboutData = {
    sectionTitle: "Redefining Exports with Innovation",
    sectionDescription:
      "At Textura, we blend India’s rich textile heritage with modern, eco-conscious innovation. With over a decade of expertise, we continue to set benchmarks in quality and sustainability for households and businesses worldwide.",
    buttonText: "About Us",
    buttonLink: "/about",
    image: "/assets/img/img4.jpg",
    accordion: [
      {
        id: "aboutTwo",
        title: "Mission",
        text: "To deliver premium-quality bamboo textiles that redefine comfort, encourage sustainability, and bring eco-conscious living into every household and business across the globe.",
        show: false,
      },
      {
        id: "aboutOne",
        title: "Core Values",
        text: [
          {
            title: "Trust & Transparency",
            description:
              "Building long-term partnerships based on honesty and reliability.",
          },
          {
            title: "Craftsmanship & Quality",
            description:
              "Combining India’s textile heritage with modern, eco-friendly technology.",
          },
          {
            title: "Global Perspective",
            description:
              "Serving diverse international markets with culturally adaptable textile solutions.",
          },
        ],
        show: true,
      },
      
      {
        id: "aboutThree",
        title: "Vision",
        text: "To be the preferred global supplier of eco-friendly textiles, setting new standards in quality, sustainability, and innovation—while proudly showcasing India’s role in the future of green textiles.",
        show: false,
      },
    ],
  };

  return (
    <div id="about-1" className="about-section section-padding" style={{paddingBottom:"0px"}}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="section-title">
              <h2 className="visible-slowly-right">{aboutData.sectionTitle}</h2>
              <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">
                {aboutData.sectionDescription}
              </p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
            <Link to={aboutData.buttonLink} className="bordered-btn">
              {aboutData.buttonText} <i className="fa-light fa-arrow-right" />
            </Link>
          </div>
        </div>

        {/* Image & Accordion */}
        <div className="row gx-0">
          <div className="col-xl-6 col-lg-6">
            <div
              className="about-img-wrap wow img-custom-anim-left"
              data-wow-delay=".3s"
            >
              <img src={aboutData.image} alt="About Us" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="cp-custom-accordion">
              <div className="accordions" id="accordionAbout">
                {aboutData.accordion.map((item, index) => (
                  <div key={item.id} className="accordion-items">
                    <h2 className="accordion-header" id={item.id}>
                      <button
                        className={`accordion-buttons ${
                          !item.show ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={item.show ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        item.show ? "show" : ""
                      }`}
                      aria-labelledby={item.id}
                      data-bs-parent="#accordionAbout"
                    >
                      <div className="accordion-body">
                        {Array.isArray(item.text) ? (
                          <ul>
                            {item.text.map((value, idx) => (
                              <li key={idx}>
                                <strong>{value.title}:</strong>{" "}
                                {value.description}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          item.text
                        )}
                      </div>
                    </div>
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

export default About;
