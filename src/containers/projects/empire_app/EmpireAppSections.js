// @flow
import React from 'react';
import { css } from 'styled-components';

import AmplitudeImage from '../../../assets/images/empire-app/amplitude.png';
import AppLogo from '../../../assets/images/empire-app/logo.png';
import ArticleImage from '../../../assets/images/empire-app/article-image.png';
import ExpoDemo from '../../../assets/images/empire-app/expo-demo.gif';
import XDDemo from '../../../assets/images/empire-app/xd-demo.png';
import { COLORS, NEUTRALS } from '../../../core/styles/Colors';
import * as Routes from '../../../core/router/Routes';

const shadow = css`drop-shadow(2px 8px 6px rgba(0, 0, 0, 0.25))`;

const EMPIRE_SECTIONS :Object[] = [
  {
    bgColor: NEUTRALS.WHITE,
    buttonText: 'Check out the app',
    description: `Empire is my go-to game for large groups because it is easy to learn and
    works well with any number of players. The downside is someone has
    to sit out to facilitate the game. I wanted to create an app with React Native,
    and this seemed like a great excuse.`,
    external: true,
    header: 'The game',
    image: AppLogo,
    imageOnLeft: true,
    imageWidth: '25%',
    link: Routes.EMPIRE_APP_APP_STORE,
    name: 'Intro',
  },
  {
    bgColor: NEUTRALS.OFF_WHITE_BLUE,
    description: `I used Adobe XD to design the visuals and the navigation pathways.
    Creating the designs without letting myself get hung up on perfection
    allowed me to start coding quickly and with efficiency.`,
    header: 'Design',
    image: XDDemo,
    imageOnLeft: false,
    name: 'Design',
    shadow,
  },
  {
    bgColor: NEUTRALS.WHITE,
    description: `I used React Native so I could develop
    for both iOS and Android simultaneously. I used Expo because
    it saves a lot of the headache of setting up a new React Native project.`,
    header: 'React Native and Expo',
    image: ExpoDemo,
    imageOnLeft: true,
    imageWidth: '35%',
    name: 'Expo',
    shadow,
  },
  {
    bgColor: NEUTRALS.OFF_WHITE_BLUE,
    description:
  <>
    I wanted to know when people were using my app
    and how long they were spending on each screen.
    I used&nbsp;
    <a
        href="https://amplitude.com"
        rel="noreferrer noopener"
        target="_blank"
        style={{
          color: COLORS.EMPIRE_BLUE,
          fontWeight: 300,
          textDecoration: 'none'
        }}>
      Amplitude
    </a>
    &nbsp;as my analytics tool and found that
    it was very easy to integrate into my Expo project.
  </>,
    header: 'Analytics',
    image: AmplitudeImage,
    imageOnLeft: false,
    name: 'Amplitude',
    shadow,
  },
  {
    bgColor: NEUTRALS.WHITE,
    buttonText: 'Read the tutorial',
    description: `I wrote a tutorial giving more detail to each step.
    You can follow along with my steps in order to
    develop an app of your own, from concept to App Store.`,
    external: true,
    header: 'Tutorial',
    image: ArticleImage,
    imageOnLeft: true,
    link: Routes.EMPIRE_APP_TUTORIAL,
    name: 'Deploy',
    shadow,
  }
];

export default EMPIRE_SECTIONS;
