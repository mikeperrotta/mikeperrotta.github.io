import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import ProjectSquare from './ProjectSquare';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const Content = styled.div`
  align-items: center;
  display: block;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;
`;

/* react component */
const PortfolioSection = () => (
  <PageSection bgColor={NEUTRALS.DARK_GRAY}>
    <Content id="portfolio">
      {
        [1, 2, 3, 4, 5, 6].map((num) => (
          <ProjectSquare key={num} />
        ))
      }
    </Content>
  </PageSection>
);

export default PortfolioSection;
