import React from "react";

export const Contact = () => {
  const contactData = {
    breadcrumb: {
      title: "Contact",
      background: "assets/img/home1.jpg",
    },
    extraInfo: {
      introText:
        "Welcome to Textura, a full-service textile exports company specializing in eco-friendly bamboo products.",
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
        { platform: "skype", icon: "lab la-skype", url: "#" },
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
            "3101, Prestige Sunrise Park Birchwood, Electronic City Phase 1, Bangalore - 560100, India",
          delay: "600ms",
        },
      ],
      social: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "instagram", icon: "fab fa-instagram", url: "#" },
        { platform: "linkedin", icon: "fab fa-linkedin-in", url: "#" },
        { platform: "skype", icon: "fab fa-skype", url: "#" },
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
              <a href={contactData.extraInfo.cta.link} className={contactData.extraInfo.cta.className}>
                {contactData.extraInfo.cta.text}
              </a>
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
                    <h4>{detail.value}</h4>
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
                  <h2 className="visible-slowly-right">{contactData.form.title}</h2>
                </div>
                <form action="#">
                  {contactData.form.fields.map((field, idx) =>
                    field.type === "textarea" ? (
                      <textarea
                        key={idx}
                        placeholder={field.placeholder}
                        rows={5}
                      />
                    ) : (
                      <input
                        key={idx}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    )
                  )}
                  <input type={contactData.form.submitButton.type} value={contactData.form.submitButton.text} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
