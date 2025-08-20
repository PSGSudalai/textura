// AboutPage.jsx
import React from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import About from "../components/About";
import Timeline from "../components/TimeLine";
import TeamSection from "../components/TeamSection";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="About Us" />
      <About />
      <Timeline />
      <TeamSection />
      <Footer />
      <BackToTop />
    </>
  );
}
