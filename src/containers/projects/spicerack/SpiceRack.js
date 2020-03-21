import React from 'react';
import styled from 'styled-components';

import Footer from '../../../components/content/Footer';
import Menu from '../../../components/content/Menu';
import PageSection from '../../../components/layout/PageSection';
import ProjectSection from '../../../components/content/ProjectSection';
import SPICERACK from './SpiceRackSections';
import ScrollToTopOnMount from '../../../core/router/RouterHelpers';
import WoodHeader from '../../../assets/images/wood_header.jpg';

import { NEUTRALS } from '../../../core/styles/Colors';


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
const SpiceRack = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection
        bgImage={WoodHeader}
        bgImagePosition="0% 28%"
        height="75%">
      <Menu />
      <Content>
        Reclaimed Wood
        <br />
        Spice Rack
      </Content>
    </PageSection>
    {
      SPICERACK.map((section) => (
        <PageSection bgColor={section.bgColor} height="680px" key={section.name}>
          <ProjectSection
              header={section.header}
              description={section.description}
              image={section.image}
              imageOnLeft={section.imageOnLeft} />
        </PageSection>
      ))
    }
    <Footer />
  </>
);

export default SpiceRack;
