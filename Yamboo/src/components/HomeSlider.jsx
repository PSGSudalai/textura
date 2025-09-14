import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const HomeSlider = () => {
  const slides = [
    {
      bg: "/assets/images/slider/bg/2-1.jpg",
      img: "/assets/images/yamboo/Hero4.png",
      count: "1",
      title: "SUSTAINABLE BAMBOO <br /> SOLUTIONS",
      desc: "Crafted With Precision, Designed To Serve Homes And Businesses Worldwide.",
    },
    {
      bg: "/assets/images/slider/bg/2-1.jpg",
      img: "/assets/images/yamboo/Hero5.png",
      count: "2",
      title: "ECO FRIENDLY <br /> TEXTILES",
      desc: "From Bamboo Fabrics To Everyday Essentials – Comfort Meets Sustainability.",
    },
    {
      bg: "/assets/images/slider/bg/2-1.jpg",
      img: "/assets/images/yamboo/Hero2.png",
      count: "3",
      title: "GLOBAL BAMBOO <br /> INNOVATION",
      desc: "Delivering Durable, Stylish, And Eco-Friendly Bamboo Products Across Continents.",
    },
  ];

  return (
    <div className="slider-area">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".slide-button-next",
          prevEl: ".slide-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="main-slider-2 swiper-arrow with-bg_white"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-inner style-2"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div
                className="slide-content text-black"
                style={{
                  padding: "20px",
                  maxWidth: "700px",
                }}
              >
                <h2
                  className="title"
                  style={{
                    fontSize: "42px",
                    lineHeight: "1.3",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p
                  className="short-desc"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: "#444",
                    marginBottom: "25px",
                  }}
                >
                  {slide.desc}
                </p>

                <div className="btn-wrap">
                  <a
                    href="#products"
                    className="btn btn-custom-size xl-size btn-Yamboo-primary"
                  >
                    Discover Now
                  </a>
                </div>
              </div>

              <div className="slide-img">
                <img src={slide.img} alt={slide.title} />
                <div className="slide-count">
                  <span className="data-count" data-count={slide.count}>
                    <span className="forward-slash">/</span>
                    <span>{slides.length}</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slide-button-wrap">
          <div className="slide-button-prev">
            <i className="pe-7s-angle-left"></i>
          </div>
          <div className="slide-button-next">
            <i className="pe-7s-angle-right"></i>
          </div>
        </div>
      </Swiper>

      {/* Responsive styles for smaller devices */}
      <style>
        {`
          @media (max-width: 768px) {
            .slide-content .title {
              font-size: 28px !important;
              line-height: 1.3;
            }
            .slide-content .short-desc {
              font-size: 16px !important;
            }
          }

          @media (max-width: 480px) {
            .slide-content .title {
              font-size: 22px !important;
            }
            .slide-content .short-desc {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomeSlider;
