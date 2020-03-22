import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: ${NEUTRALS.DARK_TEXT};
  font-size: 86px;
  font-weight: 200;
  justify-content: center;
  margin: 40px 140px;
  max-width: 100%;
  padding: 100px 0px;
  text-align: center;
`;

/* react component */
const AboutSection = () => (
  <PageSection bgColor={NEUTRALS.LIGHT_BACKGROUND}>
    <Content id="about">
      Coming soon...
    </Content>
  </PageSection>
);

export default AboutSection;
