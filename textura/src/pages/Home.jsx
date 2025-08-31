import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Service from "../components/HomeComponents/Service";
import Testimonial from "../components/HomeComponents/Testimonial";
import About from "../components/HomeComponents/About";
import Team from "../components/HomeComponents/Team";
import Counter from "../components/HomeComponents/Counter";
import Service2 from "../components/HomeComponents/Service2";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Off-canvas Area*/}
      {/* <div className="extra-info">
        <div className="close-icon menu-close">
          <button>
            <i className="las la-times" />
          </button>
        </div>
        <div className="logo-side">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/logo-white.png" alt="" />
            </a>
          </div>
        </div>
        <div className="side-info">
          <div className="contact-list mb-40">
            <p>
              Welcome to Textura, A Full Service of Flooring and Tilling Works.
            </p>
            <img src="assets/img/1.jpg" alt="" />
            <div className="mt-30 mb-30">
              <a href="contact.html" className="white-btn">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="social-area-wrap">
            <a href="#">
              <i className="lab la-facebook-f" />
            </a>
            <a href="#">
              <i className="lab la-instagram" />
            </a>
            <a href="#">
              <i className="lab la-linkedin-in" />
            </a>
            <a href="#">
              <i className="lab la-skype" />
            </a>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay" /> */}

      <Service />

      <Service2/>

      {/* Gallery Section */}
      <div className="gallery-section gray-bg section-padding">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
              data-wow-delay="200ms"
            >
              <a href="assets/img/img4.jpg" data-fancybox="gallery">
                <img src="assets/img/img4.jpg" alt="" />
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
              data-wow-delay="400ms"
            >
              <a href="assets/img/img5.jpg" data-fancybox="gallery">
                <img src="assets/img/img5.jpg" alt="" />
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
              data-wow-delay="600ms"
            >
              <a href="assets/img/img3.jpg" data-fancybox="gallery">
                <img src="assets/img/img3.jpg" alt="" />
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
              data-wow-delay="200ms"
            >
              <a href="assets/img/img4.jpg" data-fancybox="gallery">
                <img src="assets/img/img4.jpg" alt="" />
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
              data-wow-delay="400ms"
            >
              <a href="assets/img/img5.jpg" data-fancybox="gallery">
                <img src="assets/img/img5.jpg" alt="" />
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
              data-wow-delay="600ms"
            >
              <a href="assets/img/img3.jpg" data-fancybox="gallery">
                <img src="assets/img/img3.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <About />

      {/* Counter Section */}
      
      <Counter/>
      <Team />

      <Testimonial />
    </div>
  );
};

export default Home;
