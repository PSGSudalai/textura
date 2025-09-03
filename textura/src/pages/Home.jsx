import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Service from "../components/HomeComponents/Service";
import Testimonial from "../components/HomeComponents/Testimonial";
import About from "../components/HomeComponents/About";
import Team from "../components/HomeComponents/Team";
import Counter from "../components/HomeComponents/Counter";
import Service2 from "../components/HomeComponents/Service2";

const productImages = [
  "/assets/img/product/1.jpg",
  "/assets/img/product/2.jpg",
  "/assets/img/product/3.jpg",
  "/assets/img/product/4.jpg",
  "/assets/img/product/5.jpg",
  "/assets/img/product/6.jpg",
];

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Service2 />

      {/* Gallery Section */}
      <div className="gallery-section gray-bg section-padding">
        <div className="container">
          <div className="row gy-4">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
                data-wow-delay={`${200 * ((idx % 3) + 1)}ms`}
              >
                <a href={img} data-fancybox="gallery">
                  <img src={img} alt={`Product ${idx + 1}`} 
                style={{ width: "300px", height: "250px"}} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <About />

      {/* Counter Section */}
      <Counter />
      <Team />
      <Testimonial />
    </div>
  );
};

export default Home;
