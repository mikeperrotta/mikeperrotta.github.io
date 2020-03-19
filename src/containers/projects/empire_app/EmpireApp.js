import React from 'react';
import styled from 'styled-components';

import Menu from '../../../components/content/Menu';
import PageSection from '../../../components/layout/PageSection';
import ProjectSection from '../../../components/content/ProjectSection';
import EMPIRE_APP from './EmpireAppSections';
import ScrollToTopOnMount from '../../../core/router/RouterHelpers';
import EmpireAppHeader from '../../../assets/images/empire-app/empire_app_header2x.png';

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
const EmpireApp = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection
        bgColor={COLORS.EMPIRE_BLUE}
        bgImage={EmpireAppHeader}
        bgImagePosition="0% 28%"
        bgSize="contain"
        height="75%">
      <Menu />
      <Content />
    </PageSection>
    {
      EMPIRE_APP.map((section) => (
        <PageSection bgColor={section.bgColor} height="680px" key={section.name}>
          <ProjectSection
              header={section.header}
              description={section.description}
              image={section.image}
              imageOnLeft={section.imageOnLeft} />
        </PageSection>
      ))
    }
  </>
);

export default EmpireApp;
