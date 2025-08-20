import React from "react";

export default function ContactSection() {
  return (
    <div className="contact-section section-padding">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-xl-5 col-lg-5">
            <div className="section-title">
              <h2>Contact Info</h2>
            </div>
            <p>
              Have a question about our services or want to get started? Fill out
              the form or reach us via phone/email.
            </p>
            <div className="contact-info-inner">
              <div className="single-contact-info">
                <p>Email</p>
                <h4>info@Textura.com</h4>
              </div>
              <div className="single-contact-info">
                <p>Phone</p>
                <h4>(123) 456-7890</h4>
              </div>
              <div className="single-contact-info">
                <p>Address</p>
                <h4>77 Kennedy Road, Manhattan, New York - USA</h4>
              </div>
              <div className="social-area">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-skype"></i></a>
              </div>
            </div>
          </div>

          {/* Submit Form */}
          <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
            <div className="subimit-form-wrap">
              <div className="section-title">
                <h2>Submit Form</h2>
              </div>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
