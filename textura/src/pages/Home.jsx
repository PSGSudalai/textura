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
  "/assets/img/product/4.jpg",
  "/assets/img/product/1.png",
  "/assets/img/product/2.png",
  "/assets/img/product/5.jpg",
  "/assets/img/product/5.png",
];

const Home = () => {
  return (
    <div>
      <Hero />
      <div  id="products">
        <Service/>  
      </div>
      
      <Service2 />


<div className="gallery-section gray-bg section-padding" id="collection">
  <div className="container">
    <div className="row gy-4">
      {productImages.map((img, idx) => (
        <div
          key={idx}
          className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
          data-wow-delay={`${200 * ((idx % 3) + 1)}ms`}
        >
          <a href={img} data-fancybox="gallery" className="gallery-item d-block">
            <img
              src={img}
              alt={`Product ${idx + 1}`}
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", height: "250px", width: "100%" }}
            />
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
