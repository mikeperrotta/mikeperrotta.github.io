// @flow
import React from 'react';

import AmplitudeImage from '../../../assets/images/empire-app/amplitude.png';
import AppLogo from '../../../assets/images/empire-app/logo.png';
import ArticleImage from '../../../assets/images/empire-app/article-image-shadow1.png';
import ExpoDemo from '../../../assets/images/empire-app/expo-demo.gif';
import XDDemo from '../../../assets/images/empire-app/xd-demo.png';
import { COLORS, NEUTRALS } from '../../../core/styles/Colors';

const EMPIRE_SECTIONS :Object[] = [
  {
    name: 'section_1',
    image: AppLogo,
    imageOnLeft: true,
    imageWidth: '25%',
    header: 'The game',
    description: `Empire is my go-to game for large groups because it is easy to learn and
    works well with any number of players. The downside is that someone has
    to sit out during the game to collect all the answers and make up fake answers.
    I had been wanting to create an app with React Native for a while,
    and this seemed like a great use for an app.`,
    bgColor: NEUTRALS.OFF_WHITE_BLUE,
  },
  {
    name: 'section_2',
    image: XDDemo,
    imageOnLeft: false,
    header: 'Design',
    description: `I used Adobe XD to design the visuals and the navigation pathways.
    One decision that saved me time was to design a logo without putting
    too much thought into making it perfect. It could be improved, but I
    created a design which isn’t too bad and then got to work on the app
    itself.`,
    bgColor: NEUTRALS.WHITE,
  },
  {
    name: 'section_3',
    image: ExpoDemo,
    imageOnLeft: true,
    imageWidth: '35%',
    header: 'React Native and Expo',
    description: `I chose to use React Native because it would let me develop
    for both iOS and Android simultaneously and to use Expo because
    it saves a lot of the headache of setting up a new project.`,
    bgColor: NEUTRALS.OFF_WHITE_BLUE,
  },
  {
    name: 'section_4',
    image: AmplitudeImage,
    imageOnLeft: false,
    header: 'Analytics',
    description: `I wanted to know when people were using my app
    and how long they were spending on each screen.
    I used Amplitude as my analytics tool and found that
    it was very easy to integrate with my Expo project.`,
    bgColor: NEUTRALS.WHITE,
  },
  {
    bgColor: NEUTRALS.OFF_WHITE_BLUE,
    description:
  <>
    I wrote an article giving more detail to each step.
    You can follow along with my steps in order to
    develop an app of your own, from concept to
    App Store. Read the&nbsp;
    <a
        href="https://www.openlattice.com"
        rel="noreferrer noopener"
        target="_blank"
        style={{
          color: COLORS.EMPIRE_BLUE,
          fontWeight: 300,
          textDecoration: 'none'
        }}>
      article here
    </a>
    .
  </>,
    header: 'Tutorial',
    image: ArticleImage,
    imageOnLeft: true,
    name: 'section_5',
  }
];

export default EMPIRE_SECTIONS;
