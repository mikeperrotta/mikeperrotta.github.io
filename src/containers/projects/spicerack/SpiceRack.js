import React from 'react';
import styled from 'styled-components';

import PageSection from '../../../components/layout/PageSection';

import { NEUTRALS } from '../../../core/styles/Colors';

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
const SpiceRack = () => (
  <PageSection bgColor={NEUTRALS.DARK_GRAY}>
    Text and more text
  </PageSection>
);

export default SpiceRack;
