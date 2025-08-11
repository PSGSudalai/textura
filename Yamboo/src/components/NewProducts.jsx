import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    name: "American Marigold",
    price: "$23.45",
    primaryImg: "assets/images/product/medium-size/1-9-270x300.jpg",
    secondaryImg: "assets/images/product/medium-size/1-10-270x300.jpg",
    rating: 5,
    link: "/shop-grid-fullwidth"
  },
  {
    name: "Black Eyed Susan",
    price: "$25.45",
    primaryImg: "assets/images/product/medium-size/1-10-270x300.jpg",
    secondaryImg: "assets/images/product/medium-size/1-11-270x300.jpg",
    rating: 5,
    link: "/shop-grid-fullwidth"
  },
  {
    name: "Bleeding Heart",
    price: "$30.45",
    primaryImg: "assets/images/product/medium-size/1-11-270x300.jpg",
    secondaryImg: "assets/images/product/medium-size/1-4-270x300.jpg",
    rating: 5,
    link: "/shop-grid-fullwidth"
  },
  {
    name: "Bloody Cranesbill",
    price: "$45.00",
    primaryImg: "assets/images/product/medium-size/1-7-270x300.jpg",
    secondaryImg: "assets/images/product/medium-size/1-8-270x300.jpg",
    rating: 5,
    link: "/shop-grid-fullwidth"
  }
];

const NewProducts = () => {
  return (
    <div className="product-area section-space-top-100 section-space-bottom-90">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title">New Products</h2>
            <p className="section-desc">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature.
            </p>
          </div>
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 }
              }}
              className="product-slider"
            >
              {products.map((product, idx) => (
                <SwiperSlide key={idx} className="product-item">
                  <div className="product-img">
                    <a href={product.link}>
                      <img
                        className="primary-img"
                        src={product.primaryImg}
                        alt={product.name}
                      />
                      <img
                        className="secondary-img"
                        src={product.secondaryImg}
                        alt={product.name}
                      />
                    </a>
                  </div>
                  <div className="product-content">
                    <a className="product-name" href={product.link}>
                      {product.name}
                    </a>
                    <div className="price-box pb-1">
                      <span className="new-price">{product.price}</span>
                    </div>
                    <div className="rating-box">
                      <ul>
                        {Array.from({ length: product.rating }).map((_, i) => (
                          <li key={i}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
