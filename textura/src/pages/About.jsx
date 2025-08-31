import React from 'react'

const About = () => {
  return (
    <>


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
        <p>Welcome to Textura, A Full Service of Experts and Tilling Works. </p>
        <img src="assets/img/home1.jpg" alt="" />
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
  {/* Breadcrumb Area  */}
  <div className="breadcrumb-area about">
    <div className="overlay-5" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <div className="breadcrumb-title">
            <h1>About Us</h1>
          </div>
          <div className="breadcrumb-icon">
            <i className="las la-angle-down" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Section  */}
  <div id="about-page" className="about-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-lg-7 order-2 order-md-1">
          <div className="about-content-wrap">
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 order-1 order-md-2">
          <div className="about-img-wrap">
            <img src="assets/img/img2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Timeline Section */}
  <div className="timeline-section section-padding pt-0">
    <div className="container">
      <div className="row">
        <div className="timeline-wrapper">
          <div className="timeline-item obverse">
            <div className="timeline-line-wrap">
              <span className="timeline-line" />
            </div>
            <div className="timeline-inner">
              <div className="time-line-point-wrap">
                <div className="time-line-point" />
              </div>
              <div className="timeline-img-wrap">
                <img src="assets/img/img1.jpg" alt="" />
              </div>
              <div className="timeline-content-wrap">
                <span className="timeline-date">2010</span>
                <h5 className="timeline-title">Textura Year</h5>
                <p className="timeline-text">
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
          </div>
          <div className="timeline-item reverse">
            <div className="timeline-line-wrap">
              <span className="timeline-line" />
            </div>
            <div className="timeline-inner">
              <div className="time-line-point-wrap">
                <div className="time-line-point" />
              </div>
              <div className="timeline-content-wrap order-2 order-md-1">
                <span className="timeline-date">2013</span>
                <h5 className="timeline-title">Initial Launch</h5>
                <p className="timeline-text">
                  Business Setup: Florz established its headquarters in New
                  York, partnering with top manufacturers to offer a diverse
                  range of flooring products, including hardwood, laminate,
                  vinyl, and tile.
                </p>
              </div>
              <div className="timeline-img-wrap order-1 order-md-2">
                <img src="assets/img/img2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team Section */}
  <div className="team-section section-padding pt-0">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-7">
          <div className="section-title">
            <h2 className="visible-slowly-right">
              Meet our skilled team of flooring experts
            </h2>
          </div>
          <p>
            We provide professional flooring installation, repair, refinishing,
            maintenance, and custom design services for homes and businesses.
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
          <a href="team.html" className="bordered-btn">
            Our Team <i className="fa-light fa-arrow-right" />
          </a>
        </div>
      </div>
      <div className="row mt-30">
        <div
          className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated"
          data-wow-delay="200ms"
        >
          <div className="single-team-item">
            <div className="team-img">
              <img src="assets/img/team/1.jpg" alt="" />
            </div>
            <div className="team-info">
              <span>CTO</span>
              <h5>Benjamin Scott</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated"
          data-wow-delay="400ms"
        >
          <div className="single-team-item">
            <div className="team-img">
              <img src="assets/img/team/2.jpg" alt="" />
            </div>
            <div className="team-info">
              <span>Director</span>
              <h5>Anna Hallberg</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated"
          data-wow-delay="600ms"
        >
          <div className="single-team-item">
            <div className="team-img">
              <img src="assets/img/team/3.jpg" alt="" />
            </div>
            <div className="team-info">
              <span>Manager</span>
              <h5>Deniel Lee</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated"
          data-wow-delay="800ms"
        >
          <div className="single-team-item">
            <div className="team-img">
              <img src="assets/img/team/4.jpg" alt="" />
            </div>
            <div className="team-info">
              <span>Engineer</span>
              <h5>Sophia Ramirez</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  )
}

export default About