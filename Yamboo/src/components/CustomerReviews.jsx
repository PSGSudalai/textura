import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CustomerReviews = () => {
  const reviews = [
    {
      img: "/assets/images/testimonial/user/1.png",
      name: "Hotel Manager",
      occupation: "California, USA",
      comment:
        "We switched to Yamboo bamboo towels for our boutique hotel, and the response from our guests has been incredible. The towels are luxuriously soft, highly absorbent, and eco-friendly. We are proud to offer a product that aligns with our sustainability goals.",
    },
    {
      img: "/assets/images/testimonial/user/2.png",
      name: "Retail Chain Buyer",
      occupation: "New York, USA",
      comment:
        "Yamboo provided us with beautifully packaged bamboo hand towels and baby towels. The quality is exceptional, and their private-label service made it easy for us to sell under our own brand. Our eco-conscious customers love them!",
    },
    {
      img: "/assets/images/testimonial/user/3.png",
      name: "Eco-Brand Founder",
      occupation: "Austin, USA",
      comment:
        "From order placement to timely delivery, Yamboo has been a reliable partner. Their focus on quality and compliance gives us confidence in every shipment. We are excited to expand our bamboo product line with them.",
    },
    {
      img: "/assets/images/testimonial/user/2.png",
      name: "E-commerce Buyer",
      occupation: "London, UK",
      comment:
        "Professional, responsive, and transparent—working with Yamboo has been smooth from start to finish. Their bamboo pillow covers have become a bestseller in our online store.",
    },
  ];

  return (
    <>
      {/* Internal CSS for green pagination */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: green !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background-color: green !important;
          opacity: 1;
        }
      `}</style>

      <div className="testimonial-area section-space-top-100 section-space-bottom-95">
        <div className="container-fluid px-10">
          <div className="section-title-wrap">
            <h2 className="section-title mb-7">What Our Clients Say</h2>
            <p className="section-desc mb-10">
              Real feedback from businesses that trust Yamboo for their
              eco-friendly bamboo textiles.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="swiper-container testimonial-slider">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                el: ".swiper-pagination.without-absolute",
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {reviews.map((review, idx) => (
                <SwiperSlide key={idx} style={{ padding: "10px" }}>
                  <div className="testimonial-item">
                    <div className="user-info mb-3">
                      <div className="user-shape-wrap">
                        <div className="user-img">
                          <img src={review.img} alt={review.name} />
                        </div>
                      </div>
                      <div className="user-content text-charcoal">
                        <h4 className="user-name mb-1">{review.name}</h4>
                        <span className="user-occupation">
                          {review.occupation}
                        </span>
                      </div>
                    </div>
                    <p className="user-comment mb-6">“{review.comment}”</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination element */}
            <div className="swiper-pagination without-absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
