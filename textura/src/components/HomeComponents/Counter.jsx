import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Counter = () => {
  return (
    <div className="counter-section section-padding pb-0">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="single-counter-box highlights">
              <p className="counter-number">
                <AnimatedCounter end={1995} duration={1000} />
              </p>
              <h6>Since</h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <AnimatedCounter end={16} duration={1000} />
              </p>
              <h6>Offices</h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <AnimatedCounter end={215} duration={1000} />
              </p>
              <h6>Projects</h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <AnimatedCounter end={47} duration={1000} />
              </p>
              <h6>Countries</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
