import React from 'react';
import styled from 'styled-components';

import AboutImage from '../../assets/images/about/headshot.jpg'
import BuchImage from '../../assets/images/about/stand-in-buch.jpg'
import PageSection from '../../components/layout/PageSection';
import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TextContainer = styled.div`
  font-size: 28px;
  max-width: 600px;
  margin: 0 50px;
  font-weight: 200;
`;

const faceImageStyles = {
  margin: '60px',
  width: '414px',
  maxWidth: '80%',
  borderRadius: '50%',
};

const buchImageStyles = {
  margin: '60px',
  width: '275px',
  maxWidth: '80%',
};

const AboutText = (
  <TextContainer>
    <p>I am a scientist, writer, and coder.</p>
    <p>
      As a neuroscientist, I want to understand
      how people think and how their brains work.
    </p>
    <p>
      As a writer, I want to share
      knowledge and stories with people.
    </p>
    <p>
      As a coder, I want to create products that
      people can use, tools that improve lives.
    </p>
    <p>
      I currently get to practice all three skills
      at Neosensory, where we build hardware
      devices that give people new senses.
    </p>
    <p>
      I am always looking for new projects
      that help me understand people, share
      with people, and create for people.
    </p>
    <p>I also happen to brew a mean keg of kombucha.</p>
  </TextContainer>
);

/* react component */
const AboutSection = () => (
  <PageSection bgColor={NEUTRALS.LIGHT_BACKGROUND}>
    <div id="about" />
    <Content>
      <img src={AboutImage} alt="" style={faceImageStyles} />
      {AboutText}
      <img src={BuchImage} alt="" style={buchImageStyles} />
    </Content>
  </PageSection>
);

export default AboutSection;
