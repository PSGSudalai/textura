import React from "react";

const Gallery = () => {
  const galleryItems = [
    { src: "assets/img/project/1.jpg", delay: "200ms" },
    { src: "assets/img/project/1.jpg", delay: "400ms" },
    { src: "assets/img/project/1.jpg", delay: "600ms" },
    { src: "assets/img/project/1.jpg", delay: "200ms" },
    { src: "assets/img/project/1.jpg", delay: "400ms" },
    { src: "assets/img/project/1.jpg", delay: "600ms" },
  ];

  return (
    <div className="gallery-section gray-bg section-padding">
      <div className="container">
        <div className="row gy-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated"
              data-wow-delay={item.delay}
            >
              <a href={item.src} data-fancybox="gallery">
                <img src={item.src} alt={`Gallery item ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
