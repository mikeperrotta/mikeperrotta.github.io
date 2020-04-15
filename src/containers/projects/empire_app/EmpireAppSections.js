// @flow
import React from 'react';

import AmplitudeImage from '../../../assets/images/empire-app/amplitude.png';
import AppLogo from '../../../assets/images/empire-app/logo.png';
import ArticleImage from '../../../assets/images/empire-app/article-image.png';
import ExpoDemo from '../../../assets/images/empire-app/expo-demo.gif';
import XDDemo from '../../../assets/images/empire-app/xd-demo.png';
import { COLORS, NEUTRALS } from '../../../core/styles/Colors';
import * as Routes from '../../../core/router/Routes';

const shadow = 'drop-shadow(2px 8px 6px rgba(0, 0, 0, 0.25))';

const EMPIRE_SECTIONS :Object[] = [
  {
    name: 'section_1',
    buttonText: 'Check out the app',
    image: AppLogo,
    imageOnLeft: true,
    imageWidth: '25%',
    header: 'The game',
    description: `Empire is my go-to game for large groups because it is easy to learn and
    works well with any number of players. The downside is someone has
    to sit out to facilitate the game. I wanted to create an app with React Native,
    and this seemed like a great excuse.`,
    bgColor: NEUTRALS.WHITE,
    link: Routes.EMPIRE_APP_APP_STORE,
    external: true,
  },
  {
    name: 'section_2',
    image: XDDemo,
    imageOnLeft: false,
    header: 'Design',
    description: `I used Adobe XD to design the visuals and the navigation pathways.
    Creating the designs without letting myself get hung up on perfection
    allowed me to start coding quickly and with efficiency.`,
    bgColor: NEUTRALS.OFF_WHITE_BLUE,
    shadow,
  },
  {
    name: 'section_3',
    image: ExpoDemo,
    imageOnLeft: true,
    imageWidth: '35%',
    header: 'React Native and Expo',
    description: `I used React Native so I could develop
    for both iOS and Android simultaneously. I used Expo because
    it saves a lot of the headache of setting up a new React Native project.`,
    bgColor: NEUTRALS.WHITE,
    shadow,
  },
  {
    name: 'section_4',
    image: AmplitudeImage,
    imageOnLeft: false,
    header: 'Analytics',
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
    bgColor: NEUTRALS.OFF_WHITE_BLUE,
    shadow,
  },
  {
    bgColor: NEUTRALS.WHITE,
    description: `I wrote a tutorial giving more detail to each step.
    You can follow along with my steps in order to
    develop an app of your own, from concept to App Store.`,
    header: 'Tutorial',
    image: ArticleImage,
    imageOnLeft: true,
    name: 'section_5',
    shadow,
    buttonText: 'Read the tutorial',
    link: Routes.EMPIRE_APP_TUTORIAL,
    external: true,
  }
];

export default EMPIRE_SECTIONS;
