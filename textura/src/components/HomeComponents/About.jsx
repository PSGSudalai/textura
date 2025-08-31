import React from "react";

const About = () => {
  const aboutData = {
    sectionTitle: "10 Decades of Expertise in Quality Flooring",
    sectionDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    buttonText: "About Us",
    buttonLink: "/about", // instead of "about.html"
    image: "/assets/img/img1.jpg", // ✅ works if inside public/assets/img/
    accordion: [
      {
        id: "aboutOne",
        title: "History",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        show: true,
      },
      {
        id: "aboutTwo",
        title: "Mission",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting...",
        show: false,
      },
      {
        id: "aboutThree",
        title: "Vision",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets...",
        show: false,
      },
    ],
  };

  return (
    <div id="about-1" className="about-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="section-title">
              <h2 className="visible-slowly-right">{aboutData.sectionTitle}</h2>
              <p
                className="pt-20 wow fadeInUp animated"
                data-wow-delay=".4s"
              >
                {aboutData.sectionDescription}
              </p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
            <a href={aboutData.buttonLink} className="bordered-btn">
              {aboutData.buttonText} <i className="fa-light fa-arrow-right" />
            </a>
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
                      <div className="accordion-body">{item.text}</div>
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
