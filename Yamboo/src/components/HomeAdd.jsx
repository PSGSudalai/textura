import React from "react";
import { Link } from "react-router-dom";

const HomeAdd = () => {
  // Banner data
  const bannerData = {
    bgImage: "/assets/images/banner/4-1-1170x400.jpg",
    offer: "Only Today",
    title: "Luxury Bamboo Towels",
    discountText: "Up To",
    discountValue: "50%",
    discountSuffix: "Off",
    link: "/shop",
    btnClass: "btn btn-custom-size btn-Yamboo-primary",
    btnText: "Explore",
  };

  // Counter data
  const counters = [
    { num: 120, title: "Products Sold", time: 500 },
    { num: 85, title: "Clients Worldwide", time: 1000 },
    { num: 300, title: "Happy Customers", time: 1500 },
    { num: 20, title: "Premium Collections", time: 2000 },
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
                  {/* <div className="button-wrap">

                  <Link
                    className={bannerData.btnClass}
                    to={bannerData.link}
                  >
                    {bannerData.btnText}
                  </Link>
                  </div> */}
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
            Experience <span>luxury and sustainability</span> 
            <br />with Yamboo bamboo products.
          </h2>

          <div className="row">
            {counters.map((item, idx) => (
              <div
                key={idx}
                className={`col-lg-3 col-md-4 col-6 ${idx >= 2 ? "pt-4" : ""} ${
                  idx === 3 ? "pt-lg-0" : ""
                } ${idx === 2 ? "pt-md-0" : ""}`}
              >
                <div className="counter-item">
                  <div className="count-wrap">
                    <h3 className="count mb-0" data-counterup-time={item.time}>
                      {item.num}
                    </h3>
                    <span className="prefix">+</span>
                  </div>
                  <h4 className="count-title mb-0" style={{fontSize:"20px"}}>{item.title}</h4>
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
