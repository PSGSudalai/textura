import React from "react";
import Breadcrumb from "../components/BreadCrumb";


const breadcrumbData = {
  title: "Contact",
  links: [
    { to: "/", label: "Home" },
    { label: "Contact Us" }
  ]
};

const aboutData = {
  title: "Our Story",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum. Sed ut perspiciatis`,
  signatureImg: "/assets/images/about/icon/2.png"
};

const shippingData = [
  {
    icon: "/assets/images/shipping/icon/car.png",
    title: "Free Shipping",
    desc: "Capped at $319 per order"
  },
  {
    icon: "/assets/images/shipping/icon/card.png",
    title: "Safe Payment",
    desc: "With our payment gateway"
  },
  {
    icon: "/assets/images/shipping/icon/service.png",
    title: "Best Services",
    desc: "Friendly & Supper Services"
  }
];

const contactInfoData = {
  backgroundImg: "url(/assets/images/contact/1-1-370x500.jpg)",
  title: "Contact Info:",
  desc: "Fill the form and our team will get back to you within 24 hours.",
  contacts: [
    { icon: "pe-7s-call", link: "tel://123-456-789", text: "123 456 789" },
    {
      icon: "pe-7s-mail",
      link: "mailto://info@example.com",
      text: "info@example.com"
    },
    { icon: "pe-7s-map-marker", text: "13, Your Address, Here" }
  ]
};

const About = () => {
  return (
    <div>
      <main className="main-content">
        {/* Breadcrumb */}
        <Breadcrumb title={breadcrumbData.title} links={breadcrumbData.links} />

        {/* About Section */}
        <div className="about-area section-space-top-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-content">
                  <h2 className="about-title">
                    {aboutData.title.split(" ")[0]}{" "}
                    <span>{aboutData.title.split(" ")[1]}</span>
                  </h2>
                  <p className="about-desc">{aboutData.description}</p>
                  <div className="about-signature">
                    <img src={aboutData.signatureImg} alt="Signature" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Area */}
        <div className="shipping-area section-space-y-axis-100">
          <div className="container">
            <div className="shipping-bg">
              <div className="row shipping-wrap">
                {shippingData.map((item, i) => (
                  <div
                    key={i}
                    className={`col-lg-4 col-md-6 ${
                      i > 0 ? `mt-4 ${i === 1 ? "mt-md-0" : "mt-lg-0"}` : ""
                    }`}
                  >
                    <div className="shipping-item">
                      <div className="shipping-img">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="shipping-content">
                        <h2 className="title">{item.title}</h2>
                        <p className="short-desc mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form-section" className="contact-form-area section-space-y-axis-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-wrap">
                  <div
                    className="contact-info text-white"
                    style={{
                      backgroundImage: contactInfoData.backgroundImg
                    }}
                  >
                    <h2 className="contact-title">{contactInfoData.title}</h2>
                    <p className="contact-desc">{contactInfoData.desc}</p>
                    <ul className="contact-list">
                      {contactInfoData.contacts.map((c, idx) => (
                        <li key={idx}>
                          <i className={c.icon}></i>
                          {c.link ? (
                            <a href={c.link}>{c.text}</a>
                          ) : (
                            <span>{c.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <form
                    id="contact-form"
                    className="contact-form"
                    action="https://whizthemes.com/mail-php/mamunur/Yamboo/Yamboo.php"
                  >
                    <div className="group-input">
                      <div className="form-field me-lg-30 mb-35 mb-lg-0">
                        <input
                          type="text"
                          name="con_firstName"
                          placeholder="First Name*"
                          className="input-field"
                        />
                      </div>
                      <div className="form-field mb-35">
                        <input
                          type="text"
                          name="con_lastName"
                          placeholder="Last Name*"
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="group-input mb-35">
                      <div className="form-field me-lg-30 mb-35 mb-lg-0">
                        <input
                          type="text"
                          name="con_phone"
                          placeholder="Phone*"
                          className="input-field"
                        />
                      </div>
                      <div className="form-field">
                        <input
                          type="text"
                          name="con_email"
                          placeholder="Email*"
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="form-field mb-5">
                      <textarea
                        name="con_message"
                        placeholder="Message"
                        className="textarea-field"
                      ></textarea>
                    </div>
                    <div className="contact-button-wrap">
                      <button
                        type="submit"
                        className="btn btn-custom-size xl-size btn-Yamboo-primary"
                      >
                        Post Comment
                      </button>
                    </div>
                    <p className="form-message mt-3 mb-0"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
