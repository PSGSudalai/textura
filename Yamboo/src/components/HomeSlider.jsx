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
      img: "/assets/images/slider/slide-img/2-1-960x741.jpg",
      count: "01",
    },
    {
      bg: "/assets/images/slider/bg/2-1.jpg",
      img: "/assets/images/slider/slide-img/2-2-960x741.jpg",
      count: "02",
    },
    {
      bg: "/assets/images/slider/bg/2-1.jpg",
      img: "/assets/images/slider/slide-img/2-3-960x741.jpg",
      count: "03",
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
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // keeps autoplay after user interaction
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
              <div className="slide-content text-black">
                <h2 className="title">
                  Indoor <br />
                  Planters
                </h2>
                <p className="short-desc">
                  Yamboo, With 100% Natural, Organic & Plant Shop.
                </p>
                <div className="btn-wrap">

                <Link
                  className="btn btn-custom-size xl-size btn-Yamboo-primary"
                  to="/shop"
                >
                  Discover Now
                </Link>
                </div>
              </div>
              <div className="slide-img">
                <img src={slide.img} alt="Slide" />
                <div className="slide-count">
                  <span className="data-count" data-count={slide.count}>
                    <span className="forward-slash">/</span>
                    <span>03</span>
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
    </div>
  );
};

export default HomeSlider;
