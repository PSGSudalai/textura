import React from "react";
import Hero from "../components/HomeComponents/Hero";

const Home = () => {
  return (
    <div>
      <Hero/>

      {/* Off-canvas Area*/}
      <div className="extra-info">
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
      <div className="offcanvas-overlay" />

      {/* Service Section */}
      <div id="project-1" className="project-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="section-title">
                <h2 className="visible-slowly-right">
                  Real Textura projects, real customer satisfaction
                </h2>
                <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
              <a href="#" className="bordered-btn">
                View All Projects <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row project-wrapper">
            <div className="project-slider owl-carousel">
              <div
                className="single-project-item"
                style={{ maxWidth: 432, maxHeight: 432 }}
              >
                <div
                  className="project-bg"
                  style={{ maxWidth: 432, maxHeight: 432 }}
                >
                  <img src="assets/img/img1.jpg" alt="" />
                </div>
                <div className="project-info">
                  <h6>Luxury Produucts</h6>
                </div>
              </div>
              <div className="single-project-item">
                <div
                  className="project-bg"
                  style={{ maxWidth: 432, maxHeight: 432 }}
                >
                  <img src="assets/img/img6.jpg" alt="" />
                </div>
                <div
                  className="project-info"
                  style={{ maxWidth: 432, maxHeight: 432 }}
                >
                  <h6>Textura Products</h6>
                </div>
              </div>
              <div className="single-project-item">
                <div
                  className="project-bg"
                  style={{ maxWidth: 432, maxHeight: 432 }}
                >
                  <img src="assets/img/img1.jpg" alt="" />
                </div>
                <div className="project-info">
                  <h6> Textura Products</h6>
                </div>
              </div>
              <div className="single-project-item">
                <div
                  className="project-bg"
                  style={{ maxWidth: 432, maxHeight: 432 }}
                >
                  <img src="assets/img/img6.jpg" alt="" />
                </div>
                <div className="project-info">
                  <h6>Essentials Products</h6>
                </div>
              </div>
              <div className="single-project-item">
                <div
                  className="project-bg"
                  style={{ maxWidth: 432, maxHeight: 432 }}
                >
                  <img src="assets/img/img1.jpg" alt="" />
                </div>
                <div className="project-info">
                  <h6> Textura Products</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="service-2" className="service-section section-padding pb-0 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-6">
              <div className="section-title">
                <h6>Our Services</h6>
                <h2 className="visible-slowly-right">
                  Textura for Homes and Businesses
                </h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-1" />
            <div className="col-xl-4 col-lg-4 col-md-5">
              <p className="pt-40">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <a href="#" className="details-link">
                View All Services <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row mt-60">
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
              data-wow-delay="200ms"
            >
              <div className="single-service-item">
                <div className="service-icon">
                  <img src="assets/img/service/icon1.png" alt="" />
                </div>
                <div className="service-title">
                  <h5>
                    Select <br />
                    Fright
                  </h5>
                </div>
                <div className="border-right d-none d-md-inline-block" />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
              data-wow-delay="400ms"
            >
              <div className="single-service-item">
                <div className="service-icon">
                  <img src="assets/img/service/icon2.png" alt="" />
                </div>
                <div className="service-title">
                  <h5>
                    Select <br />
                    Product
                  </h5>
                </div>
                <div className="border-right d-none d-lg-inline-block" />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
              data-wow-delay="600ms"
            >
              <div className="single-service-item">
                <div className="service-icon">
                  <img src="assets/img/service/icon3.png" alt="" />
                </div>
                <div className="service-title">
                  <h5>
                    Select <br />
                    Payment
                  </h5>
                </div>
                <div className="border-right d-none d-md-inline-block" />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
              data-wow-delay="800ms"
            >
              <div className="single-service-item">
                <div className="service-icon">
                  <img src="assets/img/service/icon4.png" alt="" />
                </div>
                <div className="service-title">
                  <h5>
                    Recieve <br />
                    Product
                  </h5>
                </div>
                {/* <a href="service-details.html" class="details-link">
          <i class="fa-light fa-arrow-right"></i>
        </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* About Section */}
      <div id="about-1" className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="section-title">
                <h2 className="visible-slowly-right">
                  10 Decades of Expertise in Quality Flooring
                </h2>
                <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
              <a href="about.html" className="bordered-btn">
                About Us <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-xl-6 col-lg-6">
              <div
                className="about-img-wrap wow img-custom-anim-left"
                data-wow-delay=".3s"
              >
                <img src="assets/img/img1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="cp-custom-accordion">
                <div className="accordions" id="accordionAbout">
                  <div className="accordion-items">
                    <h2 className="accordion-header" id="aboutOne">
                      <button
                        className="accordion-buttons"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        History
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="aboutOne"
                      data-bs-parent="#accordionAbout"
                    >
                      <div className="accordion-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-items">
                    <h2 className="accordion-header" id="aboutTwo">
                      <button
                        className="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Mission
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="aboutTwo"
                      data-bs-parent="#accordionAbout"
                    >
                      <div className="accordion-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-items">
                    <h2 className="accordion-header" id="aboutThree">
                      <button
                        className="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Vision
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="aboutThree"
                      data-bs-parent="#accordionAbout"
                    >
                      <div className="accordion-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="counter-section section-padding pb-0">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="single-counter-box highlights">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration={1}
                    data-purecounter-end={1995}
                  >
                    1995
                  </span>
                </p>
                <h6>Since</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="single-counter-box">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration={1}
                    data-purecounter-end={16}
                  >
                    16
                  </span>
                </p>
                <h6>Offices</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="single-counter-box">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration={1}
                    data-purecounter-end={215}
                  >
                    215
                  </span>
                </p>
                <h6>Projects</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="single-counter-box">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration={1}
                    data-purecounter-end={47}
                  >
                    47
                  </span>
                </p>
                <h6>Countries</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="team-2"
        className="team-section section-padding"
        data-background="assets/img/img2.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="team-intro-wrap">
                <div className="section-title">
                  <h6 className="text-white">Our Team</h6>
                  <h2 className="text-white visible-slowly-right">
                    Meet our skilled team of Textura experts
                  </h2>
                </div>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum..
                </p>
                {/* <a href="team.html" class="bordered-btn white-btn mt-20"
          >Work with Us<i class="fa-light fa-arrow-right"></i
        ></a> */}
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-6">
              <div className="row team-content-wrap">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-team-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/2-1.jpg" alt="" />
                      <div className="team-info">
                        <h6>Anna Taylor</h6>
                        <p>Team Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-team-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/2-2.jpg" alt="" />
                      <div className="team-info">
                        <h6>Anna Taylor</h6>
                        <p>Team Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-team-wrap">
                    <div className="team-img">
                      <img src="assets/img/team/2-3.jpg" alt="" />
                      <div className="team-info">
                        <h6>Anna Taylor</h6>
                        <p>Team Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="section-title">
                <h2 className="visible-slowly-right">
                  Real Customers, Real Reviews, Real Quality!
                </h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
              <a href="#" className="bordered-btn">
                Testimonial <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="testimonial-one owl-carousel">
              <div className="single-testimonial-item">
                <div className="testimonial-quote">
                  <img src="assets/img/quote.png" alt="" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p>
                      I couldn’t be happier with my new hardwood floors from
                      Florz Flooring! The team was professional, attentive, and
                      guided me through every step of the process. The
                      installation was seamless, and the quality of the work is
                      outstanding. Highly recommend!
                    </p>
                  </div>
                  <div className="testimonial-author">
                    <h5>James Clark</h5>
                    <span>CEO, Alfa Inc.</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-item">
                <div className="testimonial-quote">
                  <img src="assets/img/quote.png" alt="" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p>
                      I couldn’t be happier with my new hardwood floors from
                      Florz Flooring! The team was professional, attentive, and
                      guided me through every step of the process. The
                      installation was seamless, and the quality of the work is
                      outstanding. Highly recommend!
                    </p>
                  </div>
                  <div className="testimonial-author">
                    <h5>James Clark</h5>
                    <span>CEO, Alfa Inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Dropdown */}
      <div className="search-popup">
        <span className="search-back-drop" />
        <div className="search-inner">
          <div className="container">
            <div className="logo">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo-white.png" alt="" />
              </a>
            </div>
            <button className="close-search">
              <span className="la la-times" />
            </button>
            <form
              method="post"
              action="https://capricorn-theme.com/html/Textura/index.html"
            >
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  defaultValue=""
                  placeholder="Type your keyword"
                  required=""
                />
                <button type="submit">
                  <i className="fal fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
