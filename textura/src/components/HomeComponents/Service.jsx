import React from "react";

const Service = () => {
  return (
    <div>
      {/* Projects Section */}
      <div id="project-1" className="project-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="section-title">
                <h2 className="visible-slowly-right">
                  Real Textura projects, real customer satisfaction
                </h2>
                <p
                  className="pt-20 wow fadeInUp animated"
                  data-wow-delay=".4s"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
              <a href="projects.html" className="bordered-btn">
                View All Projects <i className="fa-light fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Project Slider */}
          <div className="row project-wrapper">
            <div className="project-slider owl-carousel">
              {[
                "Luxury Living Spaces",
                "Textura",
                "Family Friendly Textura",
                "Elegant Essentials",
                "Timberland Revival",
              ].map((title, index) => (
                <div className="single-project-item" key={index}>
                  <div className="project-bg">
                    <img src="assets/img/project/1.jpg" alt={title} />
                  </div>
                  <div className="project-info">
                    <h6>{title}</h6>
                    <a href="#">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="service-2" className="service-section section-padding pb-0 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-6">
              <div className="section-title">
                <h6>Our Services</h6>
                <h2 className="visible-slowly-right">
                  Textura for Homes and Businesses
                </h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-1"></div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <p className="pt-40">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </p>
              <a href="#" className="details-link">
                View All Services <i className="fa-light fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Services List */}
          <div className="row mt-60">
            {[
              { title: "Textura", delay: "200ms" },
              { title: "Textura Installation", delay: "400ms" },
              { title: "Textura Product", delay: "600ms" },
              { title: "Textura", delay: "800ms" },
            ].map((service, index) => (
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
                data-wow-delay={service.delay}
                key={index}
              >
                <div className="single-service-item">
                  <div className="service-icon">
                    <img src="assets/img/project/1.jpg" alt={service.title} />
                  </div>
                  <div className="service-title">
                    <h5>{service.title}</h5>
                  </div>
                  <a href="service-details.html" className="details-link">
                    <i className="fa-light fa-arrow-right"></i>
                  </a>
                  {index !== 3 && (
                    <div className="border-right d-none d-md-inline-block"></div>
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

export default Service;
