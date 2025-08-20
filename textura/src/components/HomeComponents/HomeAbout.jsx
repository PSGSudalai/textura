import React from "react";

const HomeAbout = () => {
  return (
    <div id="about-1" className="about-section section-padding">
      <div className="container">
        {/* Title Row */}
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="section-title">
              <h2 className="visible-slowly-right">
                10 Decades of Expertise in Quality Flooring
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
            <a href="about.html" className="bordered-btn">
              About Us <i className="fa-light fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Image & Accordion Row */}
        <div className="row gx-0">
          {/* Image Section */}
          <div className="col-xl-6 col-lg-6">
            <div
              className="about-img-wrap wow img-custom-anim-left"
              data-wow-delay=".3s"
            >
              <img src="assets/img/project/1.jpg" alt="About Textura" />
            </div>
          </div>

          {/* Accordion Section */}
          <div className="col-xl-6 col-lg-6">
            <div className="cp-custom-accordion">
              <div className="accordions" id="accordionAbout">
                {/* Accordion Item - History */}
                <div className="accordion-items">
                  <h2 className="accordion-header" id="aboutOne">
                    <button
                      className="accordion-buttons"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      History
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="aboutOne"
                    data-bs-parent="#accordionAbout"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s...
                    </div>
                  </div>
                </div>

                {/* Accordion Item - Mission */}
                <div className="accordion-items">
                  <h2 className="accordion-header" id="aboutTwo">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Mission
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="aboutTwo"
                    data-bs-parent="#accordionAbout"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s...
                    </div>
                  </div>
                </div>

                {/* Accordion Item - Vision */}
                <div className="accordion-items">
                  <h2 className="accordion-header" id="aboutThree">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Vision
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="aboutThree"
                    data-bs-parent="#accordionAbout"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default HomeAbout;
