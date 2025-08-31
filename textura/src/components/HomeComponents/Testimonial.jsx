import React from "react";

const Testimonial = () => {
  const testimonialData = {
    sectionTitle: "Real Customers, Real Reviews, Real Quality!",
    buttonText: "Testimonial",
    buttonLink: "#",
    testimonials: [
      {
        id: 1,
        quoteImg: "/assets/img/quote.png",
        text: "I couldn’t be happier with my new hardwood floors from Florz Flooring! The team was professional, attentive, and guided me through every step of the process. The installation was seamless, and the quality of the work is outstanding. Highly recommend!",
        author: "James Clark",
        position: "CEO, Alfa Inc.",
      },
      {
        id: 2,
        quoteImg: "/assets/img/quote.png",
        text: "The quality and finish of the flooring exceeded our expectations. From consultation to installation, the process was flawless. Definitely recommending Florz Flooring to friends and family!",
        author: "Sarah Johnson",
        position: "Manager, Beta Ltd.",
      },
    ],
  };

  return (
    <div className="testimonial-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="section-title">
              <h2 className="visible-slowly-right">{testimonialData.sectionTitle}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
            <a href={testimonialData.buttonLink} className="bordered-btn">
              {testimonialData.buttonText} <i className="fa-light fa-arrow-right" />
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className="row">
          <div className="testimonial-one owl-carousel">
            {testimonialData.testimonials.map((item) => (
              <div key={item.id} className="single-testimonial-item">
                <div className="testimonial-quote">
                  <img src={item.quoteImg} alt="quote" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p>{item.text}</p>
                  </div>
                  <div className="testimonial-author">
                    <h5>{item.author}</h5>
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
