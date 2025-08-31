import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Hero Area */}
      <div id="home-1" className="homepage-slides owl-carousel">
        <div
          className="single-slide-item d-flex align-items-center"
          data-background="/assets/img/home1.jpg"
        >
          <div className="overlay-4" />
          <div className="hero-area-content">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                  data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6 className="text-white">Premium Export</h6>
                    <h1 className="text-white">
                      <span>Transform</span> Your Space <br />
                      One Textura At A Time
                    </h1>
                  </div>
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum..
                  </p>
                  <a href="#" className="white-btn mt-40">
                    Our Services <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="single-slide-item d-flex align-items-center"
          data-background="/assets/img/home1.jpg"
        >
          <div className="overlay-5" />
          <div className="hero-area-content">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                  data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6 className="text-white">Duraable Design</h6>
                    <h1 className="text-white">
                      <span>Textura</span> Export: Your <br />
                      Foundation For Style
                    </h1>
                  </div>
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <a href="#" className="white-btn mt-40">
                    Our Services <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="single-slide-item d-flex align-items-center"
          data-background="/assets/img/home2.jpg"
        >
          <div className="overlay-4" />
          <div className="hero-area-content">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                  data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6 className="text-white">Duraable Design</h6>
                    <h1 className="text-white">
                      Your <span>Dream</span> Floors, <br />
                      Our Expert Installation
                    </h1>
                  </div>
                  <p className="text-white">
                    Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                    lacus. Etiam molestie justo neque, <br />
                    in convallis massa tempus in.
                  </p>
                  <a href="#" className="white-btn mt-40">
                    Our Services <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
