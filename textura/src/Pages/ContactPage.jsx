// ContactPage.jsx
import React from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Contact" />
      <ContactSection />
      <Footer />
      <BackToTop/>
    </>
  );
}
