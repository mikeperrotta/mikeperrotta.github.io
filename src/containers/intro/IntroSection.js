// @flow

import React from 'react';
import styled from 'styled-components';

import AppHomePageMenu from '../app/AppHomePageMenu'
import PageSection from '../../components/layout/PageSection';
import RockyMorning from '../../assets/images/rocky-morning.jpg';
// import RockyMorning from '../../assets/images/Header Photo.png';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const Content = styled.div`
  align-items: center;
  color: ${NEUTRALS.WHITE};
  display: block;
  flex-direction: column;
  margin: 170px auto 0px auto;
  max-width: 100%;
  text-align: center;
`;

const TitleText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 200;
  font-size: 72px;
  text-align: center;
  color: ${NEUTRALS.DARK_GRAY};
  padding: 0px 50px;
`;

const SubtitleLine = styled.div`
  border: 1px solid ${NEUTRALS.DARK_GRAY};
  margin: 15px;
`;

const SubtitleText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 200;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: ${NEUTRALS.DARK_GRAY};
`;

/* react component */
const IntroSection = () => (
  <PageSection bgImage={RockyMorning} fullScreen blur={6} flipHorizontal>
    <Content>
      <TitleText>
        MIKE PERROTTA
      </TitleText>
      <SubtitleLine />
      <SubtitleText>
        Scientist, Coder, Writer
      </SubtitleText>
    </Content>
    <AppHomePageMenu />
  </PageSection>
);

export default IntroSection;
