import React from 'react';
import styled from 'styled-components';

import AppHeader from '../app/AppHeader';
import PageSection from '../../components/layout/PageSection';
import StarryNight from '../../assets/images/starry-night.jpg';
import RockyMorning from '../../assets/images/rocky-morning.jpg';

const Content = styled.div`
  color: #ffffff;
  align-items: center;
  display: block;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: 768px) {
    max-width: 75%;
  }

  @media only screen and (min-width: 1020px) {
    margin: 210px auto 211px auto;
  }
`;

const IntroSection = () => (
  <PageSection bgImage={RockyMorning}>
    <AppHeader />
    <Content>
    </Content>
  </PageSection>
);

export default IntroSection;
