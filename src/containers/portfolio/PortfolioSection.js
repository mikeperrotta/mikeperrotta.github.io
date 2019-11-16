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

const ComingSoonText = styled.div`
  color: ${NEUTRALS.LIGHT_GRAY};
  font-family: Muli;
  font-size: 72px;
  font-style: normal;
  font-weight: 200;
  padding: 250px 50px;
  text-align: center;
`;

/* react component */
const PortfolioSection = () => (
  <PageSection bgColor={NEUTRALS.DARK_GRAY}>
    <Content id="portfolio">
      <ComingSoonText>
        Coming Soon
      </ComingSoonText>
    </Content>
  </PageSection>
);

export default PortfolioSection;
