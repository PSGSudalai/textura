import React from "react";

const Team = () => {
  const teamData = {
    sectionBg: "/assets/img/img2.jpg",
    sectionTitle: "Our Team",
    sectionHeading: "Meet our skilled team of Textura Exports",
    sectionDescription:
      "At Textura, our strength lies in our people. From design to delivery, our team blends creativity, technical expertise, and sustainable values to craft world-class bamboo textile solutions.",

    members: [
      {
        id: 1,
        name: "Abdul Kabeez",
        role: "Team Manager",
        img: "/assets/img/team1.png",
      },
      {
        id: 2,
        name: "Preethi",
        role: "Sales Manager",
        img: "/assets/img/team2.png",
      },
      {
        id: 3,
        name: "Deepak Kumar",
        role: "Operations Head",
        img: "/assets/img/team3.png",
      },
    ],
  };

  return (
    <div
      id="team-2"
      className="team-section section-padding"
      style={{ backgroundImage: `url(${teamData.sectionBg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5 col-md-12">
            <div className="team-intro-wrap">
              <div className="section-title">
                <h6 className="text-white">{teamData.sectionTitle}</h6>
                <h2 className="text-white visible-slowly-right">
                  {teamData.sectionHeading}
                </h2>
              </div>
              <p className="text-white">{teamData.sectionDescription}</p>
            </div>
          </div>

          <div className="col-xl-8 col-lg-7 col-md-12">
            <div
              className="team-content-wrap"
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                flexWrap: "nowrap",
              }}
            >
              {teamData.members.map((member) => (
                <div
                  key={member.id}
                  className="single-team-wrap"
                  style={{
                    flex: "0 0 auto",
                    width: "200px",
                  }}
                >
                  <div className="team-img">
                    <img src={member.img} alt={member.name} style={{ width: "100%" }} />
                    <div className="team-info">
                      <h6>{member.name}</h6>
                      <p>{member.role}</p>
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

export default Team;
