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
      count: "01",
    },
    {
      bg: "/assets/images/slider/bg/2-1.jpg",
      img: "/assets/images/yamboo/Hero5.png",
      count: "02",
    },
    {
      bg: "/assets/images/slider/bg/2-1.jpg",
      img: "/assets/images/yamboo/Hero2.png",
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
          delay: 3000,
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
              <div className="slide-content text-black" style={{padding:"10px"}}>
                <h2 className="title">
                  Eco Friendly <br />
                  Textiles
                </h2>
                <p className="short-desc">
                  Crafted with care from eco-friendly bamboo for lasting
                  comfort.
                </p>

                <div className="btn-wrap">
                  {/* <Link
                  className="btn btn-custom-size xl-size btn-Yamboo-primary"
                  to="/shop"
                >
                  Discover Now
                </Link> */}
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
