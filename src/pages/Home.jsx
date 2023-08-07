import React from "react";
import Carouselstart from "../Components/Carouselstart";
import Marquee from "../components/Marquee";
import PromotionCard from "../components/PromotionCard";
import NewsLetterSection from "../components/NewsletterSection";
import Contact from "../components/ContactSection";
import AboutUs from "../components/AboutUs";
function Home() {
  return (
    <>
      <Carouselstart />
      <AboutUs />
      <Marquee />
      <PromotionCard />
      <NewsLetterSection />
      <Contact />
    </>
  );
}

export default Home;
