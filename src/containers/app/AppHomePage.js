import React from 'react';

import IntroSection from '../intro/IntroSection';
import PortfolioSection from '../portfolio/PortfolioSection';
import AboutSection from '../about/AboutSection';
import Footer from '../../components/content/Footer';

const AppHomePage = () => (
  <>
    <div id="top" />
    <IntroSection />
    <PortfolioSection />
    <AboutSection />
    <Footer />
  </>
);

export default AppHomePage;
