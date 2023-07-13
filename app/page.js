import React from 'react';
import { Footer, Navbar } from '../components';
import About from '../sections/About';
import Explore from '../sections/Explore';
import Feedback from '../sections/Feedback';
import GetStarted from '../sections/GetStarted';
import Hero from '../sections/Hero';
import Insights from '../sections/Insights';
import WhatsNew from '../sections/WhatsNew';
import World from '../sections/World';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
