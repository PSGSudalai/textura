import React from "react";

export default function Breadcrumb({ title }) {
  return (
    <div className="breadcrumb-area contact">
      <div className="overlay-3"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="breadcrumb-title">
              <h1>{title}</h1>
            </div>
            <div className="breadcrumb-icon">
              <i className="las la-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
