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
  color: ${NEUTRALS.DARK_GRAY};
  font-family: Muli;
  font-size: 72px;
  font-style: normal;
  font-weight: 200;
  padding: 0px 50px;
  text-align: center;
`;

const SubtitleLine = styled.div`
  border: 1px solid ${NEUTRALS.DARK_GRAY};
  margin: 15px;
`;

const SubtitleText = styled.div`
  color: ${NEUTRALS.DARK_GRAY};
  font-family: Muli;
  font-size: 48px;
  font-style: normal;
  font-weight: 200;
  line-height: 60px;
  text-align: center;
`;

/* react component */
const IntroSection = () => (
  <PageSection
      bgImage={RockyMorning}
      blur={6}
      flipHorizontal
      fullScreen>
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
