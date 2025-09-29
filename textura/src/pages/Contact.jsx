import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // <-- import emailjs

export const Contact = () => {
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });

  const contactData = {
    breadcrumb: {
      title: "Contact",
      background: "assets/img/home1.jpg",
    },
    extraInfo: {
      introText:
        "Welcome to Textura Exports, a full-service textile exports company specializing in eco-friendly bamboo products.",
      image: "assets/img/home2.jpg",
      cta: {
        text: "Get In Touch",
        link: "/contact",
        className: "white-btn",
      },
      socialLinks: [
        { platform: "facebook", icon: "lab la-facebook-f", url: "#" },
        { platform: "instagram", icon: "lab la-instagram", url: "#" },
        { platform: "linkedin", icon: "lab la-linkedin-in", url: "#" },
      ],
    },
    contactInfo: {
      description:
        "Have a question about our services or want to get started on your textile project? We’re here to help! Fill out the contact form or reach us via phone/email.",
      details: [
        {
          type: "Email",
          value: "prabakar@texturaexports.com",
          delay: "200ms",
        },
        {
          type: "Phone",
          value: "+91 97406 43497",
          delay: "400ms",
        },
        {
          type: "Address",
          value:
            "3101, Prestige Sunrise Park Birchwood, Electronic City Phase 1, Bangalore",
          pincode: "560100, India",
          delay: "600ms",
        },
      ],
      social: [
        {
          platform: "instagram",
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/texturaexports/",
        },
        {
          platform: "linkedin",
          icon: "fab fa-linkedin-in",
          url: "https://www.linkedin.com/in/textura-exports-a88135368/?originalSubdomain=in",
        },
        {
          platform: "twitter",
          icon: "fab fa-twitter",
          url: "https://x.com/texturaexports",
        },
      ],
    },
    form: {
      title: "Submit Form",
      fields: [
        { type: "text", placeholder: "Your Name" },
        { type: "email", placeholder: "Email" },
        { type: "tel", placeholder: "Phone Number" },
        { type: "textarea", placeholder: "Message" },
      ],
      submitButton: {
        text: "Submit",
        type: "submit",
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements["firstname"]?.value?.trim() || "";
    const phone = e.target.elements["phone"]?.value?.trim() || "";

    if (!name || !phone) {
      setFormMessage({
        type: "error",
        text: "Please enter your Name and Phone number (both required).",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_mafgzvq",   // 🔹 Your EmailJS Service ID
        "template_g07p279",  // 🔹 Your EmailJS Template ID (make sure it has company, firstname, lastname, email, phone, message variables)
        e.target,
        "RLN__pvlNyFcMngmP"  // 🔹 Your EmailJS Public Key
      )
      .then(
        () => {
          setFormMessage({
            type: "success",
            text: "Your message has been sent successfully!",
          });
          e.target.reset();
        },
        () => {
          setFormMessage({
            type: "error",
            text: "Failed to send message. Please try again.",
          });
        }
      );
  };

  return (
    <div>
      {/* Sidebar Extra Info */}
      <div className="extra-info">
        <div className="close-icon menu-close">
          <button>
            <i className="las la-times" />
          </button>
        </div>
        <div className="logo-side">
          <div className="logo">
            <a href="/">
              <img src="assets/img/logo-white.png" alt="Textura Logo" />
            </a>
          </div>
        </div>
        <div className="side-info">
          <div className="contact-list mb-40">
            <p>{contactData.extraInfo.introText}</p>
            <img src={contactData.extraInfo.image} alt="extra" />
            <div className="mt-30 mb-30">
              <Link
                to={contactData.extraInfo.cta.link}
                className={contactData.extraInfo.cta.className}
              >
                {contactData.extraInfo.cta.text}
              </Link>
            </div>
          </div>
          <div className="social-area-wrap">
            {contactData.extraInfo.socialLinks.map((social, index) => (
              <a key={index} href={social.url}>
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="offcanvas-overlay" />

      {/* Breadcrumb Area */}
      <div
        className="breadcrumb-area contact"
        style={{ backgroundImage: `url(${contactData.breadcrumb.background})` }}
      >
        <div className="overlay-3" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="breadcrumb-title">
                <h1>{contactData.breadcrumb.title}</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-xl-5 col-lg-5">
              <div className="section-title">
                <h2 className="visible-slowly-right">Contact Info</h2>
              </div>
              <div className="contact-text">
                <p>{contactData.contactInfo.description}</p>
              </div>
              <div className="contact-info-inner">
                {contactData.contactInfo.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay={detail.delay}
                  >
                    <p>{detail.type}</p>
                    <h5 style={{ margin: "0px" }}>{detail.value}</h5>
                    <h5 style={{ margin: "0px" }}>{detail.pincode}</h5>
                  </div>
                ))}
                <div className="social-area">
                  {contactData.contactInfo.social.map((social, idx) => (
                    <a key={idx} href={social.url}>
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
              <div className="subimit-form-wrap">
                <div className="section-title">
                  <h2 className="visible-slowly-right">
                    {contactData.form.title}
                  </h2>
                </div>

                <form
                  id="contact-form"
                  className="contact-form"
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* hidden fields for EmailJS */}
                  <input type="hidden" name="company" value="Textura" />
                  <input type="hidden" name="lastname" value="" />

                  {contactData.form.fields.map((field, idx) =>
                    field.type === "textarea" ? (
                      <textarea
                        key={idx}
                        name="message"
                        placeholder={field.placeholder}
                        rows={5}
                        className="input-field"
                      />
                    ) : (
                      <input
                        key={idx}
                        name={
                          idx === 0
                            ? "firstname" // full name goes into firstname
                            : idx === 1
                            ? "email"
                            : idx === 2
                            ? "phone"
                            : `field_${idx}`
                        }
                        type={field.type}
                        placeholder={field.placeholder}
                        className="input-field"
                        required={idx === 0 || idx === 2}
                      />
                    )
                  )}

                  <input
                    type={contactData.form.submitButton.type}
                    value={contactData.form.submitButton.text}
                    className="btn btn-Yamboo-primary"
                  />

                  {formMessage.text && (
                    <p
                      className="form-message mt-3 mb-0"
                      style={{
                        color:
                          formMessage.type === "error" ? "#c0392b" : "#1e8f3e",
                        fontWeight: 600,
                      }}
                    >
                      {formMessage.text}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
