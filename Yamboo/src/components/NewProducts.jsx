import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { products } from "../data/productsData";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

// Shuffle helper
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const NewProducts = () => {
  const randomProducts = useMemo(() => shuffleArray(products).slice(0, 4), []);

  return (
    <div className="product-area section-space-top-100 section-space-bottom-90">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title">New Products</h2>
            <p className="section-desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature.
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
              {randomProducts.map((product) => (
                <SwiperSlide key={product.id} className="product-item">
                  <div className="product-img">
                    <a href={`/product/${product.id}`}>
                      <img
                        className="primary-img"
                        src={product.image}
                        alt={product.name}
                      />
                    </a>
                  </div>
                  <div className="product-content">
                    <Link className="product-name" to={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                    <div className="price-box pb-1">
                      <span className="new-price">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    {/* <div className="rating-box">
                      <ul>
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <li key={i}>
                              <i className="fa fa-star"></i>
                            </li>
                          ))}
                      </ul>
                    </div> */}
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
