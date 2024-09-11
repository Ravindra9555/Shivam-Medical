import React from "react";
import HomeNavbar from "./HomeNavbar";
import Hero from "./Hero";
import About from "./About";
import Appointment from "./Appointment";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {

  return (
    <>
    <HomeNavbar />
    <div style={{ paddingTop: '70px' }}> {/* Adjust padding based on navbar height */}
      <Hero />
      <About />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  </>
  );
};

export default Home;
