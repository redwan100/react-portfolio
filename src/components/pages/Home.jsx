import React from 'react';
import AboutSection from '../AboutSection';
import ContactBanner from '../ContactBanner';
import HeroSection from '../HeroSection';
import ProjectsSection from '../ProjectsSection';
import ServicesSection from '../ServicesSection';
import TestimonialSection from '../TestimonialSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactBanner />
    </div>
  )
};

export default Home;
