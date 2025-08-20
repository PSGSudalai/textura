import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs"; // ✅ install via npm i @srexi/purecounterjs

const Counter = () => {
  useEffect(() => {
    new PureCounter(); 
  }, []);

  const counters = [
    { end: 1995, label: "Since", highlight: true },
    { end: 16, label: "Offices" },
    { end: 215, label: "Projects" },
    { end: 47, label: "Countries" },
  ];

  const teamMembers = [
    { img: "assets/img/team/2-1.jpg", name: "Anna Taylor", role: "Team Manager" },
    { img: "assets/img/team/2-2.jpg", name: "James Carter", role: "Senior Designer" },
    { img: "assets/img/team/2-3.jpg", name: "Sophia Lee", role: "Project Lead" },
  ];

  return (
    <div>
      {/* Counter Section */}
      <div className="counter-section section-padding pb-0">
        <div className="container">
          <div className="row gx-5">
            {counters.map((counter, i) => (
              <div key={i} className="col-lg-3 col-md-3 col-sm-6">
                <div
                  className={`single-counter-box ${counter.highlight ? "highlights" : ""}`}
                >
                  <p className="counter-number">
                    <span
                      className="purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end={counter.end}
                    >
                      {counter.end}
                    </span>
                  </p>
                  <h6>{counter.label}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div
        id="team-2"
        className="team-section section-padding"
        style={{ backgroundImage: "url(assets/img/team-bg.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="team-intro-wrap">
                <div className="section-title">
                  <h6 className="text-white">Our Team</h6>
                  <h2 className="text-white visible-slowly-right">
                    Meet our skilled team of Textura experts
                  </h2>
                </div>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s...
                </p>
                <a href="team.html" className="bordered-btn white-btn mt-20">
                  Work with Us <i className="fa-light fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Right Side - Team Members */}
            <div className="col-xl-8 col-lg-7 col-md-6">
              <div className="row team-content-wrap">
                {teamMembers.map((member, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-team-wrap">
                      <div className="team-img">
                        <img src={member.img} alt={member.name} />
                        <div className="team-info">
                          <h6>{member.name}</h6>
                          <p>{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
