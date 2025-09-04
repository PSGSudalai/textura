import React from "react";
import { Link } from "react-router-dom";

<Link className="btn btn-custom-size xl-size btn-Yamboo-primary" to="/shop">
  Discover Now
</Link>;
const Banners = () => {
  const banners = [
  {
    type: "large", // large left-side banner
    img: "/assets/images/newbanner/banner1.png",
    collection: "Premium Collection",
    title: "Bamboo Bath Towels",
    link: "/shop",
    btnClass: "btn btn-custom-size btn-Yamboo-primary",
    position: "text-position-center",
  },
  {
    type: "small", // top-right banner
    img: "/assets/images/newbanner/banner2.png",
    collection: "Gentle Care",
    title: "Face Towels",
    link: "/shop",
    btnClass: "btn btn-custom-size sm-size btn-Yamboo-primary",
    position: "text-position-left",
  },
  {
    type: "small", // bottom-right banner
    img: "/assets/images/newbanner/banner3.png",
    collection: "Eco Friendy Reuseable",
    title: "Paper Towels",
    link: "/shop",
    btnClass: "btn btn-custom-size sm-size btn-Yamboo-primary",
    position: "text-position-left",
  },
];


  return (
    <div className="banner-area banner-style-2 section-space-top-100">
      <div className="container">
        <div className="row g-y-30">
          {/* Large Banner */}
          <div className="col-md-6">
            {banners
              .filter((banner) => banner.type === "large")
              .map((banner, idx) => (
                <div className="banner-item img-hover-effect" key={idx}>
                  <div className="banner-img">
                    <img src={banner.img} alt="Banner" />
                  </div>
                  <div className={`banner-content ${banner.position}`}>
                    <span className="collection" style={{color:"#75b143"}}>{banner.collection}</span>
                    <h3 className="title" style={{color:"#75b143"}}>{banner.title}</h3>
                    {/* <div className="button-wrap">
                      <Link className={banner.btnClass} to={banner.link}>
                        Explore
                      </Link>
                    </div> */}
                  </div>
                </div>
              ))}
          </div>

          {/* Small Banners */}
          <div className="col-md-6">
            <div className="banner-wrap row g-y-30">
              {banners
                .filter((banner) => banner.type === "small")
                .map((banner, idx) => (
                  <div className="col-12" key={idx}>
                    <div className="banner-item img-hover-effect">
                      <div className="banner-img">
                        <img src={banner.img} alt="Banner" />
                      </div>
                      <div className={`banner-content ${banner.position}`}>
                        <span className="collection" style={{color:"#75b143"}}>{banner.collection}</span>
                        <h3 className="title" style={{color:"#75b143"}}>{banner.title}</h3>
                        {/* <div className="button-wrap">
                          <a className={banner.btnClass} href={banner.link}>
                            Explore
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
