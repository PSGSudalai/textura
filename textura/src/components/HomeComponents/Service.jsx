import React from "react";

const Service = () => {
  const serviceData = {
    sectionTitle: "Real Textura projects, real customersdfsdfasdf",
    sectionDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it...",
    buttonText: "View All Projects",
    buttonLink: "#",
    projects: [
      { id: 1, img: "/assets/img/img1.jpg", title: "Luxury Products" },
      { id: 2, img: "/assets/img/img6.jpg", title: "Textura Products" },
      { id: 3, img: "/assets/img/img1.jpg", title: "Textura Products" },
      { id: 4, img: "/assets/img/img6.jpg", title: "Essentials Products" },
      { id: 5, img: "/assets/img/img1.jpg", title: "Textura Products" },
    ],
  };

  return (
    <div id="project-1" className="project-section section-padding pb-0">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="section-title">
              <h2 className="visible-slowly-right">{serviceData.sectionTitle}</h2>
              <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">
                {serviceData.sectionDescription}
              </p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
            <a href={serviceData.buttonLink} className="bordered-btn">
              {serviceData.buttonText} <i className="fa-light fa-arrow-right" />
            </a>
          </div>
        </div>

        {/* Project Slider */}
        <div className="row project-wrapper">
          <div className="project-slider owl-carousel">
            {serviceData.projects.map((project) => (
              <div
                key={project.id}
                className="single-project-item"
                style={{ maxWidth: 432, maxHeight: 432 }}
              >
                <div className="project-bg">
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="project-info">
                  <h6>{project.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
