import React from "react";

const About = () => {
  const historyData = [
    {
      year: "2025",
      title: "Foundation of Textura Exports",
      description:
        "Founded in Bangalore, India, with a clear vision: to create a textile export business that is environmentally responsible and globally competitive.",
      image: "assets/img/img1.jpg",
    },
    {
      year: "2025",
      title: "Launch of Yamboo",
      description:
        "Introduced our in-house sustainable brand Yamboo, starting with a premium range of towels, tissues, and pillow covers.",
      image: "assets/img/img2.jpg",
    },
    {
      year: "2026 & Beyond",
      title: "Expansion",
      description:
        "Plans to expand into bamboo bedding, bamboo clothing, and bamboo lifestyle products. Partnering with hotels, retail chains, and eco-friendly businesses across the U.S., Europe, and Middle East. Exploring certifications (GOTS, OEKO-TEX, Fair Trade) to meet global compliance and sustainability standards.",
      image: "assets/img/img3.jpg",
    },
  ];

  const teamData = {
    sectionTitle: "Meet our skilled team of textile experts",
    sectionDescription:
      "We specialize in innovative textile solutions, offering sustainable fabrics, design expertise, and export-quality manufacturing for global markets.",
    buttonText: "Our Team",
    buttonLink: "/team",
    members: [
      {
        id: 1,
        name: "Benjamin Scott",
        role: "CTO",
        image: "assets/img/team/1.jpg",
        delay: "200ms",
      },
      {
        id: 2,
        name: "Anna Hallberg",
        role: "Director",
        image: "assets/img/team/2.jpg",
        delay: "400ms",
      },
      {
        id: 3,
        name: "Deniel Lee",
        role: "Manager",
        image: "assets/img/team/3.jpg",
        delay: "600ms",
      },
      {
        id: 4,
        name: "Sophia Ramirez",
        role: "Engineer",
        image: "assets/img/team/4.jpg",
        delay: "800ms",
      },
    ],
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-area about">
        <div className="overlay-5" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>About Us</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about-page" className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 order-2 order-md-1">
              <div className="about-content-wrap">
                <p>
                  Welcome to Textura Exports, a Bangalore-based textile export
                  company specializing in 100% bamboo textiles. We are dedicated
                  to bridging the gap between India’s sustainable manufacturing
                  capabilities and the growing demand for eco-friendly textile
                  solutions worldwide. Our expertise lies in sourcing,
                  designing, and exporting high-quality bamboo-based products
                  such as bath towels, hand towels, baby towels, tissue papers,
                  and pillow covers under our premium brand Yamboo. Each product
                  is carefully crafted to meet international quality standards,
                  ensuring softness, durability, and sustainability. At Textura
                  Exports, we believe in responsible trade—supporting
                  eco-conscious buyers such as hotels, retailers, lifestyle
                  brands, and hospitality groups who are making a shift toward
                  greener alternatives.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 order-1 order-md-2">
              <div className="about-img-wrap">
                <img src="assets/img/img2.jpg" alt="About Textura Exports" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="timeline-wrapper">
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${
                    index % 2 === 0 ? "obverse" : "reverse"
                  }`}
                >
                  <div className="timeline-line-wrap">
                    <span className="timeline-line" />
                  </div>
                  <div className="timeline-inner">
                    <div className="time-line-point-wrap">
                      <div className="time-line-point" />
                    </div>
                    {index % 2 === 0 ? (
                      <>
                        <div className="timeline-img-wrap">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="timeline-content-wrap">
                          <span className="timeline-date">{item.year}</span>
                          <h5 className="timeline-title">{item.title}</h5>
                          <p className="timeline-text">{item.description}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="timeline-content-wrap order-2 order-md-1">
                          <span className="timeline-date">{item.year}</span>
                          <h5 className="timeline-title">{item.title}</h5>
                          <p className="timeline-text">{item.description}</p>
                        </div>
                        <div className="timeline-img-wrap order-1 order-md-2">
                          <img src={item.image} alt={item.title} />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section (JSON-driven) */}
      <div className="team-section section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="section-title">
                <h2 className="visible-slowly-right">
                  {teamData.sectionTitle}
                </h2>
              </div>
              <p>{teamData.sectionDescription}</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
              <a href={teamData.buttonLink} className="bordered-btn">
                {teamData.buttonText} <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>

          <div className="row mt-30">
            {teamData.members.map((member) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated"
                data-wow-delay={member.delay}
              >
                <div className="single-team-item">
                  <div className="team-img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <span>{member.role}</span>
                    <h5>{member.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
