import React from "react";

const Hero = () => {
  const heroData = [
    {
      id: 1,
      bg: "/assets/img/home1.jpg",
      overlay: "overlay-4",
      subtitle: "Premium Export",
      title: (
        <>
          <span>Transform</span> Your Space <br /> One Textura At A Time
        </>
      ),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      buttonText: "Our Services",
      buttonLink: "#",
    },
    {
      id: 2,
      bg: "/assets/img/home1.jpg",
      overlay: "overlay-5",
      subtitle: "Durable Design",
      title: (
        <>
          <span>Textura</span> Export: Your <br /> Foundation For Style
        </>
      ),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries...",
      buttonText: "Our Services",
      buttonLink: "#",
    },
    {
      id: 3,
      bg: "/assets/img/home2.jpg",
      overlay: "overlay-4",
      subtitle: "Durable Design",
      title: (
        <>
          Your <span>Dream</span> Floors, <br /> Our Expert Installation
        </>
      ),
      description:
        "Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque...",
      buttonText: "Our Services",
      buttonLink: "#",
    },
  ];

  return (
    <div id="home-1" className="homepage-slides owl-carousel">
      {heroData.map((slide) => (
        <div
          key={slide.id}
          className="single-slide-item d-flex align-items-center"
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          {/* Overlay */}
          <div className={slide.overlay} />

          {/* Hero Content */}
          <div className="hero-area-content">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                  data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6 className="text-white">{slide.subtitle}</h6>
                    <h1 className="text-white">{slide.title}</h1>
                  </div>
                  <p className="text-white">{slide.description}</p>
                  <a href={slide.buttonLink} className="white-btn mt-40">
                    {slide.buttonText} <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
