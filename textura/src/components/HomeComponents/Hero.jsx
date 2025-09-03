import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import home1 from "../img/home1.jpg";
import home2 from "../img/home2.jpg";
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
          <span>Experience</span> Comfort <br /> With Sustainable Luxury
        </>
      ),
      description:
        "Discover our eco-friendly bamboo towels, hand towels, and pillow covers—designed for softness, durability, and a greener lifestyle.",
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
          <span>Luxury</span> That Cares <br /> For You & The Planet
        </>
      ),
      description:
        "Our Yamboo products combine natural antibacterial properties with premium quality, offering skin-friendly, hypoallergenic, and sustainable solutions.",
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
          Bringing <span>Sustainable Textiles</span> <br /> To Homes &
          Businesses Globally
        </>
      ),
      description:
        "From hotels to eco-conscious retailers, we deliver bamboo textiles that meet international standards of quality, safety, and sustainability.",
      buttonText: "Get In Touch",
      buttonLink: "#contact",
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
                height: "100vh", // Full screen height
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
                        <h6 className="text-white">{slide.subtitle}</h6>
                        <h1 className="text-white">{slide.title}</h1>
                      </div>
                      <p className="text-white">{slide.description}</p>
                      <a href={slide.buttonLink} className="white-btn mt-40">
                        {slide.buttonText}{" "}
                        <i className="fa-light fa-arrow-right" />
                      </a>
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
