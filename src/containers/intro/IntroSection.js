// @flow

import React from 'react';
import styled from 'styled-components';

import AppHomePageMenu from '../app/AppHomePageMenu';
import PageSection from '../../components/layout/PageSection';
import KeyboardImage from '../../assets/images/white-keyboard.jpg';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const Content = styled.div`
  align-items: center;
  display: block;
  flex-direction: column;
  margin: 170px auto 0px auto;
  max-width: 100%;
  text-align: center;
`;

const TitleText = styled.div`
  color: ${NEUTRALS.DARK_TEXT};
  font-family: Muli;
  font-size: 72px;
  font-style: normal;
  font-weight: 200;
  padding: 0px 50px;
  text-align: center;

  @media only screen and (max-width: 550px) {
    font-size: 64px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 54px;
  }
`;

/* react component */
const IntroSection = () => (
  <PageSection
      bgImage={KeyboardImage}
      height="100%">
    <AppHomePageMenu />
    <Content>
      <TitleText id="TitleText">
        mike perrotta
      </TitleText>
    </Content>
  </PageSection>
);

export default IntroSection;
