import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img from "../img/quote.png";

const Testimonial = () => {
  const testimonialData = {
    sectionTitle: "Real Customers, Real Reviews, Real Quality!",
    buttonText: "Testimonials",
    buttonLink: "#",
    testimonials: [
      {
        id: 1,
        quoteImg: img, // Replace with relevant testimonial image if available
        text: "We switched to Yamboo bamboo towels for our boutique hotel, and the response from our guests has been incredible. Luxuriously soft, highly absorbent, and eco-friendly – a perfect match for our sustainability goals.",
        author: "Hotel Manager",
        position: "California, USA",
      },
      {
        id: 2,
        quoteImg: img,
        text: "Textura Exports provided beautifully packaged bamboo hand towels and baby towels for our retail store. The quality is exceptional, and private-labeling made it easy to sell under our brand. Our customers love them!",
        author: "Retail Chain Buyer",
        position: "New York, USA",
      },
      {
        id: 3,
        quoteImg: img,
        text: "From order placement to timely delivery, Textura Exports has been a reliable partner. Their focus on quality and compliance gives us confidence in every shipment. Excited to expand our bamboo product line with them.",
        author: "Eco-Brand Founder",
        position: "Austin, USA",
      },
      {
        id: 4,
        quoteImg: img,
        text: "Professional, responsive, and transparent—working with Textura Exports has been smooth from start to finish. Their bamboo pillow covers have become a bestseller in our online store.",
        author: "E-commerce Buyer",
        position: "London, UK",
      },
    ],
  };

  return (
    <div className="testimonial-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <h2 className="visible-slowly-right">
                {testimonialData.sectionTitle}
              </h2>
            </div>
          </div>
          {/* <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
            <a href={testimonialData.buttonLink} className="bordered-btn">
              {testimonialData.buttonText}{" "}
              <i className="fa-light fa-arrow-right" />
            </a>
          </div> */}
        </div>

        {/* Swiper Testimonials */}
        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation
          spaceBetween={20}
          slidesPerView={1} // Always 1 testimonial
          pagination={{ clickable: true }} // Only dots
          autoplay={{
            delay: 2500,
            disableOnInteraction: true, // Stops autoplay on swipe/touch
            pauseOnMouseEnter: true, // Also pauses when hovered (desktop)
          }}
        >
          {testimonialData.testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="single-testimonial-item">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
