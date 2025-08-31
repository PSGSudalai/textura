import React from 'react'

export const Contact = () => {
  return (
    <div>
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
          Welcome to Textura, A Full Service of Flooring and Tilling Works.{" "}
        </p>
        <img src="assets/img/home2.jpg" alt="" />
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
  <div className="breadcrumb-area contact">
    <div className="overlay-3" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div className="breadcrumb-title">
            <h1>Contact</h1>
          </div>
          <div className="breadcrumb-icon">
            <i className="las la-angle-down" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Section  */}
  <div className="contact-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-5">
          <div className="section-title">
            <h2 className="visible-slowly-right">Contact Info</h2>
          </div>
          <div className="contact-text">
            <p>
              Have a question about our services or want to get started on you
              design project? We are here to help! Fill out the contact form
              below and one of our team members will get back to you within 24
              hours. Alternatively, you can reach out to us via phone or email
              using the contact information provided below. We can't wait to
              hear from you!
            </p>
          </div>
          <div className="contact-info-inner">
            <div
              className="single-contact-info wow fadeInUp animated"
              data-wow-delay="200ms"
            >
              <p>Email</p>
              <h4>info@Textura.com</h4>
            </div>
            <div
              className="single-contact-info wow fadeInUp animated"
              data-wow-delay="400ms"
            >
              <p>Phone</p>
              <h4>(123) 456-7890</h4>
            </div>
            <div
              className="single-contact-info wow fadeInUp animated"
              data-wow-delay="600ms"
            >
              <p>Address</p>
              <h4>77 Kennedy Road, Manhattan, New York - USA</h4>
            </div>
            <div className="social-area">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-skype" />
              </a>
            </div>
          </div>
        </div>
        <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
          <div className="subimit-form-wrap">
            <div className="section-title">
              <h2 className="visible-slowly-right">Submit Form</h2>
            </div>
            <form action="#">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder="Message"
                defaultValue={""}
              />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
