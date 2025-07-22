import React from "react";
import Navbar from "../components/Navbar/Navbar"; // adjust path as needed
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2"
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import FAQ from "../components/FAQ";

import Footer from "../components/Footer/Footer";


const Dashboard = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark scroll-smooth">

     
      
       <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />

      <Testimonial />
      <Team />
      <FAQ />
      

    </main>
  );
};

export default Dashboard;
