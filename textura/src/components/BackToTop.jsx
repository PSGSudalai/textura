import React, { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const progress = document.querySelector(".progress-wrap");
      if (window.scrollY > 200) {
        progress.classList.add("active-progress");
      } else {
        progress.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="progress-wrap" onClick={scrollToTop}>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
