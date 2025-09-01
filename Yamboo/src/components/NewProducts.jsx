import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { products } from "../data/productsData";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const NewProducts = () => {
  const randomProducts = useMemo(() => shuffleArray(products), []);

  return (
    <div className="product-area section-space-top-100 section-space-bottom-90">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title">New Products</h2>
            <p className="section-desc">
              Explore our latest collection of sustainable bamboo textile
              products, crafted for style, durability, and eco-conscious living.
            </p>
          </div>
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              slidesPerView={5} // ✅ show 5 by default on desktop
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 5 }, // ✅ full 5 slides for large screens
              }}
              className="product-slider"
            >
              {randomProducts.map((product) => (
                <SwiperSlide key={product.id} className="product-item">
                  <div className="product-img">
                    <Link to={`/product/${product.id}`}>
                      <img
                        className="primary-img"
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <Link
                      className="product-name"
                      to={`/product/${product.id}`}
                    >
                      {product.name}
                    </Link>
                    <div className="price-box pb-1">
                      <span className="new-price">
                        ${product.price.toFixed(2)}
                      </span>
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
