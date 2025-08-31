import React from "react";

const Team = () => {
  const teamData = {
    sectionBg: "/assets/img/img2.jpg",
    sectionTitle: "Our Team",
    sectionHeading: "Meet our skilled team of Textura experts",
    sectionDescription:
      "At Textura, our strength lies in our people. From design to delivery, our team blends creativity, technical expertise, and sustainable values to craft world-class bamboo textile solutions.",

    members: [
      {
        id: 1,
        name: "Anna Taylor",
        role: "Team Manager",
        img: "/assets/img/team/2-1.jpg",
      },
      {
        id: 2,
        name: "John Smith",
        role: "Lead Designer",
        img: "/assets/img/team/2-2.jpg",
      },
      {
        id: 3,
        name: "Sophia Brown",
        role: "Developer",
        img: "/assets/img/team/2-3.jpg",
      },
    ],
  };

  return (
    <div
      id="team-2"
      className="team-section section-padding"
      style={{ backgroundImage: `url(${teamData.sectionBg})` }} // ✅ react-friendly bg
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section (Intro) */}
          <div className="col-xl-4 col-lg-5 col-md-6">
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

          {/* Right Section (Team Members) */}
          <div className="col-xl-8 col-lg-7 col-md-6">
            <div className="row team-content-wrap">
              {teamData.members.map((member) => (
                <div key={member.id} className="col-xl-4 col-lg-4 col-md-6">
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
  );
};

export default Team;
