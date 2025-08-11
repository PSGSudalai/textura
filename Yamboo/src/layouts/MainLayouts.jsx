import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayouts = ({ children }) => {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    };

    loadScript("/assets/js/vendor/jquery-3.6.0.min.js");
    loadScript("/assets/js/vendor/bootstrap.bundle.min.js");
    loadScript("/assets/js/main.js");
  }, []);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayouts;
