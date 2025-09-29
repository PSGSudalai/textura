import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

import home2 from "../img/home1.jpg";
import home1 from "../img/home2.png";
import home3 from "../img/home3.jpg";

const Hero = () => {
  const heroData = [
    {
      id: 1,
      bg: home1,
      overlay: "overlay-4",
      subtitle: "Premium Bamboo Textiles",
      title: (
        <>
          <span>Eco-Friendly</span> Bamboo Towels <br /> & Pillow Covers
        </>
      ),
      description:
        "Soft, durable, and sustainable—crafted to bring comfort while supporting a greener lifestyle.",
      buttonText: "Explore Products",
      buttonLink: "#products",
    },
    {
      id: 2,
      bg: home2,
      overlay: "overlay-5",
      subtitle: "Eco-Friendly Innovation",
      title: (
        <>
          Skin-Friendly & <span>Hypoallergenic</span> <br /> Sustainable
          Products
        </>
      ),
      description:
        "Combining natural antibacterial properties with premium quality to care for you and the planet.",
      buttonText: "View Collection",
      buttonLink: "#collection",
    },
    {
      id: 3,
      bg: home3,
      overlay: "overlay-4",
      subtitle: "Trusted Worldwide",
      title: (
        <>
          <span>Sustainable Textiles</span> <br /> For Homes & Businesses
        </>
      ),
      description:
        "Meeting global standards of quality and sustainability—trusted by eco-conscious buyers worldwide.",
      buttonText: "Get In Touch",
      buttonLink: "/contact",
    },
  ];

  return (
    <div id="home-1" className="homepage-slides">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="single-slide-item d-flex align-items-center"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
                position: "relative",
              }}
            >
              {/* Overlay */}
              <div className={slide.overlay}></div>

              {/* Hero Content */}
              <div className="hero-area-content">
                <div className="container">
                  <div className="row align-items-center">
                    <div
                      className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                      data-wow-delay=".2s"
                    >
                      <div className="section-title">
                        <h5 className="text-white">{slide.subtitle}</h5>
                        <h2 className="text-white">{slide.title}</h2>
                      </div>
                      <h5 className="text-white">{slide.description}</h5>
                      {slide.buttonLink.startsWith("#") ? (
                        <a href={slide.buttonLink} className="white-btn mt-40">
                          {slide.buttonText}{" "}
                          <i className="fa-light fa-arrow-right" />
                        </a>
                      ) : (
                        <Link to={slide.buttonLink} className="white-btn mt-40">
                          {slide.buttonText}{" "}
                          <i className="fa-light fa-arrow-right" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
