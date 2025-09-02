import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../img/img1.jpg";
import img2 from "../img/img6.jpg";
import img3 from "../img/img2.jpg";
// import img1 from "../img/img1.jpg";
// import img1 from "../img/img1.jpg";
// import img1 from "../img/img1.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Service = () => {
  const serviceData = {
    sectionTitle: "Real Textura projects, real customers",
    sectionDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s...",
    buttonText: "View All Projects",
    buttonLink: "#",
    projects: [
      { id: 1, img: img1, title: "Luxury Products" },
      { id: 2, img: img2, title: "Textura Products" },
      { id: 3, img: img3, title: "Textura Products" },
      { id: 4, img: img1, title: "Essentials Products" },
      { id: 5, img: img2, title: "Textura Products" },
    ],
  };

  return (
    <div id="project-1" className="project-section section-padding pb-0">
      <div className="container">
        {/* Section Heading */}
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="section-title">
              <h2 className="visible-slowly-right">
                {serviceData.sectionTitle}
              </h2>
              <p className="pt-20">{serviceData.sectionDescription}</p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
            <a href={serviceData.buttonLink} className="bordered-btn">
              {serviceData.buttonText} <i className="fa-light fa-arrow-right" />
            </a>
          </div>
        </div>

        {/* Project Swiper Carousel */}
        <div className="row project-wrapper mt-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {serviceData.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="single-project-item" style={{ maxWidth: 432 }}>
                  <div className="project-bg">
                    <img
                      src={project.img}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                  <div className="project-info mt-3 text-center">
                    <h6>{project.title}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;
