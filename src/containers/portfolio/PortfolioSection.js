import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import ProjectSquare from './ProjectSquare';
import PROJECTS from './Projects';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 140px;
  max-width: 100%;
  text-align: center;
`;

/* react component */
const PortfolioSection = () => (
  <PageSection bgColor={NEUTRALS.DARK_GRAY}>
    <Content id="projects">
      {
        PROJECTS.map((project) => (
          <ProjectSquare key={project.name} project={project} />
        ))
      }
    </Content>
  </PageSection>
);

export default PortfolioSection;
