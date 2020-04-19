import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import EMPIRE_APP from './EmpireAppSections';
import EmpireAppHeader from '../../../assets/images/empire-app/empire_app_header2x.png';
import Footer from '../../../components/content/Footer';
import AppHomePageMenu from '../../app/AppHomePageMenu';
import PageSection from '../../../components/layout/PageSection';
import ProjectSection from '../../../components/content/ProjectSection';
import ScrollToTopOnMount from '../../../core/router/RouterHelpers';

import { COLORS, NEUTRALS } from '../../../core/styles/Colors';


/* styled components */
const Content = styled.div`
  align-items: center;
  align-items: center;
  color: ${NEUTRALS.LIGHT_GRAY};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 60px;
  font-weight: 500;
  height: 100%;
  justify-content: center;
  margin: 40px 80px;
  text-align: center;
`;

/* react component */
const EmpireApp = () => {

  const getHeightFromWidth = (fromWidth) => fromWidth / 2.5 + 75;

  const [height, setHeight] = useState(getHeightFromWidth(window.innerWidth));

  const handleResize = () => {
    setHeight(getHeightFromWidth(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', () => handleResize);
    };
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <PageSection
          bgColor={COLORS.EMPIRE_BLUE}
          bgImage={EmpireAppHeader}
          bgSize="contain"
          height={`${height}px`}
          top="36px">
        <AppHomePageMenu isProjectMenu />
        <Content />
      </PageSection>
      {
        EMPIRE_APP.map((section) => (
          <PageSection bgColor={section.bgColor} height="680px" key={section.name}>
            <ProjectSection
                section={section} />
          </PageSection>
        ))
      }
      <Footer />
    </>
  );
};

export default EmpireApp;
