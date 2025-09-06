import React from "react";
import Breadcrumb from "../components/BreadCrumb";

const breadcrumbData = {
  title: "Contact",
  links: [{ to: "/", label: "Home" }, { label: "Contact Us" }],
};

const aboutData = {
  title: "Our Story",
  description: `At Yamboo, we are committed to delivering premium quality
  textile products that combine luxury, sustainability, and comfort. 
  Our journey began with a vision to provide eco-friendly solutions 
  that not only meet international standards but also bring 
  long-lasting value to our customers. With a focus on bamboo-based 
  fabrics and innovative designs, we ensure every product reflects 
  superior craftsmanship, durability, and style.`,
  signatureImg: "/assets/images/about/icon/2.png",
};

const shippingData = [
  {
    icon: "/assets/images/shipping/icon/car.png",
    title: "Premium Quality",
    desc: "Crafted with the finest bamboo fibers for luxury & durability.",
  },
  {
    icon: "/assets/images/shipping/icon/service.png",
    title: "Customer Support",
    desc: "We’re here to assist you with quick and friendly service.",
  },
  {
    icon: "/assets/images/shipping/icon/card.png",
    title: "Eco-Friendly",
    desc: "100% hypoallergenic, and safe for sensitive skin.",
  },
];

const contactInfoData = {
  backgroundImg: "url(/assets/images/contact/1-1-370x500.jpg)",
  title: "Contact Info:",
  desc: "Fill the form and our team will get back to you within 24 hours.",
  contacts: [
    {
      icon: "pe-7s-map-marker",
      text: "Prestige Sunrise Park Birchwood, Electronic City Phase 1, Bangalore – 560100",
    },
    {
      icon: "pe-7s-call",
      link: "tel://+919740643497",
      text: "+91 97406 43497",
    },
    // {
    //   icon: "pe-7s-user",
    //   text: "Managing Director: Prabakar"
    // },
    // {
    //   icon: "pe-7s-chat",
    //   link: "https://wa.me/919740643497",
    //   text: "WhatsApp: +91 97406 43497"
    // },
    // {
    //   icon: "pe-7s-global",
    //   link: "https://texturaexports.com",
    //   text: "www.texturaexports.com"
    // },
    // {
    //   icon: "pe-7s-mail",
    //   link: "mailto:Prabakar@texturaexports.com",
    //   text: "Prabakar@texturaexports.com"
    // },
    // {
    //   icon: "pe-7s-mail",
    //   link: "mailto:Sales@texturaexports.com",
    //   text: "Sales@texturaexports.com"
    // }
  ],
};

const About = () => {
  return (
    <div>
      <main className="main-content">
        {/* Breadcrumb */}
        <Breadcrumb title={breadcrumbData.title} links={breadcrumbData.links} />

        {/* About Section */}
        <div className="about-area section-space-top-95" id="about-area">
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
        <div
          id="contact-form-section"
          className="contact-form-area section-space-y-axis-100"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-wrap">
                  <div
                    className="contact-info text-white"
                    style={{
                      backgroundImage: contactInfoData.backgroundImg,
                      backgroundRepeat: "round",
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
                  <form id="contact-form" className="contact-form" action="">
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
                        Submit
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
