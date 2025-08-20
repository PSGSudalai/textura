import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      text: `I couldn’t be happier with my new hardwood floors from Florz Flooring! 
      The team was professional, attentive, and guided me through every step of the process. 
      The installation was seamless, and the quality of the work is outstanding. Highly recommend!`,
      author: "James Clark",
      position: "CEO, Alfa Inc.",
    },
    {
      text: `Florz Flooring exceeded my expectations! From consultation to installation, 
      everything was handled with great care. My home looks completely transformed. 
      Will definitely recommend to friends and family!`,
      author: "Sophia Martinez",
      position: "Homeowner",
    },
  ];

  return (
    <div className="testimonial-section section-padding">
      <div className="container">
        {/* Section Heading */}
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
              Testimonial <i className="fa-light fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="row">
          <div className="testimonial-one owl-carousel">
            {testimonials.map((item, index) => (
              <div className="single-testimonial-item" key={index}>
                <div className="testimonial-quote">
                  <img src="assets/img/quote.png" alt="quote" />
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
