// TeamSection.jsx
import React from "react";

export default function TeamSection() {
  return (
    <div className="team-section section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="section-title">
              <h2 className="visible-slowly-right">
                Meet our skilled team of flooring experts
              </h2>
            </div>
            <p>
              We provide professional flooring installation, repair, refinishing,
              maintenance, and custom design services for homes and businesses.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
            <a href="team.html" className="bordered-btn">
              Our Team <i className="fa-light fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row mt-30">
          {[
            { role: "CTO", name: "Benjamin Scott", img: "1.jpg" },
            { role: "Director", name: "Anna Hallberg", img: "2.jpg" },
            { role: "Manager", name: "Deniel Lee", img: "3.jpg" },
            { role: "Engineer", name: "Sophia Ramirez", img: "4.jpg" },
          ].map((member, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team-item">
                <div className="team-img">
                  <img src={`assets/img/team/${member.img}`} alt={member.name} />
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
  );
}
