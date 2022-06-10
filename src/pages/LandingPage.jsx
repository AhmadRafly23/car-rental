import React from "react";
import NavbarProduct from "../components/NavbarProduct";
import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import WhySection from "../components/WhySection";
import CtaBanner from "../components/CtaBanner";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Chart from "../components/Chart";

function LandingPage() {
  return (
    <>
      <NavbarProduct />
      <HeroSection />
      <Service />
      <Chart />
      <WhySection />
      <CtaBanner />
      <FaqSection />
      <Footer />
    </>
  );
}

export default LandingPage;
