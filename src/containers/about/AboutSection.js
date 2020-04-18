// @flow

import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import AboutImage from '../../assets/images/about/headshot.jpg';
import PageSection from '../../components/layout/PageSection';
import { COLORS, NEUTRALS } from '../../core/styles/Colors';
import * as Routes from '../../core/router/Routes';

/* styled components */
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TextContainer = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin: 0 50px;
  max-width: 500px;
`;

const FaceImage = styled.img`
  border-radius: 50%;
  margin: 60px;
  max-width: 80%;
  width: 414px;
`;

const InternalLink = styled(NavLink)`
  color: ${COLORS.ACCENT_COLOR};
  text-decoration: none;
`;

const AboutText = (
  <TextContainer>
    <p>I am a scientist, writer, and developer.</p>
    <p>
      As a
      {' '}
      <span style={{ fontWeight: '500' }}>neuroscientist</span>
      , I want to understand
      how people think and how their brains work.
    </p>
    <p>
      As a
      {' '}
      <span style={{ fontWeight: '500' }}>writer</span>
      , I want to share
      knowledge and stories with people.
    </p>
    <p>
      As a
      {' '}
      <span style={{ fontWeight: '500' }}>developer</span>
      , I want to create products that
      people can use and tools that improve lives.
    </p>
    <p>
      I currently get to practice all three skills
      at Neosensory, where we build hardware
      devices that give people new senses.
    </p>
    <p>
      I am always looking for new projects
      that allow me to work with people, share
      with people, and create for people.
      {' '}
      <InternalLink to={Routes.RESUME}>Check out my resume</InternalLink>
      .
    </p>
    <p>I also happen to brew a mean keg of kombucha.</p>
  </TextContainer>
);

/* react component */
const AboutSection = () => (
  <PageSection bgColor={NEUTRALS.LIGHT_BACKGROUND}>
    <div id="about" />
    <Content>
      <FaceImage src={AboutImage} alt="" />
      {AboutText}
    </Content>
  </PageSection>
);

export default AboutSection;
