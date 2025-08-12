import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CustomerReviews = () => {
  const reviews = [
    {
      img: "/assets/images/testimonial/user/1.png",
      name: "Phoenix Baker",
      occupation: "Client",
      comment:
        "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna",
    },
    {
      img: "/assets/images/testimonial/user/2.png",
      name: "Phoenix Baker",
      occupation: "Client",
      comment:
        "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna",
    },
    {
      img: "/assets/images/testimonial/user/3.png",
      name: "Phoenix Baker",
      occupation: "Client",
      comment:
        "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna",
    },
    {
      img: "/assets/images/testimonial/user/2.png",
      name: "Phoenix Baker",
      occupation: "Client",
      comment:
        "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna",
    },
    {
      img: "/assets/images/testimonial/user/3.png",
      name: "Phoenix Baker",
      occupation: "Client",
      comment:
        "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna",
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
            <h2 className="section-title mb-7">What Say Client</h2>
            <p className="section-desc mb-10">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
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
                          <img src={review.img} alt="User" />
                        </div>
                      </div>
                      <div className="user-content text-charcoal">
                        <h4 className="user-name mb-1">{review.name}</h4>
                        <span className="user-occupation">
                          {review.occupation}
                        </span>
                      </div>
                    </div>
                    <p className="user-comment mb-6">{review.comment}</p>
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
