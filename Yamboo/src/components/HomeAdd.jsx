import React from "react";
import { Link } from "react-router-dom";

const HomeAdd = () => {
  // Banner data
  const bannerData = {
    bgImage: "/assets/images/banner/4-1-1170x400.jpg",
    offer: "Only Today",
    title: "Indoore Plants & Poot",
    discountText: "Up To",
    discountValue: "-50%",
    discountSuffix: "Off",
    link: "/shop",
    btnClass: "btn btn-custom-size btn-Yamboo-primary",
    btnText: "Shop Now",
  };

  // Counter data
  const counters = [
    { num: 150, title: "Projects", time: 500 },
    { num: 359, title: "Clients", time: 1000 },
    { num: 251, title: "Rating", time: 1500 },
    { num: 110, title: "Award", time: 2000 },
  ];

  return (
    <div className="banner-with-counter">
      {/* Banner Area */}
      <div className="banner-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="banner-bg-image img-hover-effect"
                data-bg-image={bannerData.bgImage}
                style={{
                  backgroundImage: `url(${bannerData.bgImage})`,
                }}
              >
                <div className="inner-content">
                  <span className="offer">{bannerData.offer}</span>
                  <h2 className="title">{bannerData.title}</h2>
                  <h3 className="discount">
                    {bannerData.discountText}{" "}
                    <span>{bannerData.discountValue}</span>{" "}
                    {bannerData.discountSuffix}
                  </h3>
                  <div className="button-wrap">

                  <Link
                    className={bannerData.btnClass}
                    to={bannerData.link}
                  >
                    {bannerData.btnText}
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* Counter Area */}
      <div className="counter-area">
        <div className="container">
          <h2 className="counter-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit, sed do <span>eiusmod tempor</span> incididunt.
          </h2>
          <div className="row">
            {counters.map((item, idx) => (
              <div
                key={idx}
                className={`col-lg-3 col-md-4 col-6 ${
                  idx >= 2 ? "pt-4" : ""
                } ${idx === 3 ? "pt-lg-0" : ""} ${
                  idx === 2 ? "pt-md-0" : ""
                }`}
              >
                <div className="counter-item">
                  <div className="count-wrap">
                    <h3
                      className="count mb-0"
                      data-counterup-time={item.time}
                    >
                      {item.num}
                    </h3>
                    <span className="prefix">+</span>
                  </div>
                  <h4 className="count-title mb-0">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdd;
