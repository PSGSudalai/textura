import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, links }) => {
  return (
    <div
      className="breadcrumb-area breadcrumb-height"
      style={{
        backgroundImage:
          "url(/assets/images/breadcrumb/bg/1-1-1919x388.jpg)",
      }}
    >
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12">
            <div className="breadcrumb-item">
              <h2 className="breadcrumb-heading">{title}</h2>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    {link.to ? (
                      <Link to={link.to}>{link.label}</Link>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
