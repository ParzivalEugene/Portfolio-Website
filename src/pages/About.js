import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../components/AboutSection/AboutSection";

const About = () => {
  return (
    <>
      <Navbar active_tab="about" />
      <AboutSection />
    </>
  );
};

export default About;