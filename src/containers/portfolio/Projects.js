// @flow

import { css } from 'styled-components';

import MeditationArticleImage from '../../assets/images/meditation-article-cover-image-with-text.png';
import NeosensoryImage from '../../assets/images/neosensory-image.png';
import EmpireAppImage from '../../assets/images/empire-app-image.png';
import { NEUTRALS } from '../../core/styles/Colors';

import * as Routes from '../../core/router/Routes';

const shadow = css`drop-shadow(2px 8px 6px rgba(0, 0, 0, 0.25))`;

const PROJECTS :Object[] = [
  {
    bgColor: NEUTRALS.OFF_WHITE_BACKGROUND,
    buttonText: 'Check it out',
    description: `I’m a scientist at Neosensory, where
    we create hardware devices that give people
    new senses. Check out some of the projects
    I’ve helped build.`,
    external: true,
    header: 'Neosensory',
    image: NeosensoryImage,
    imageHeight: 'calc(100% - 220px)',
    imageOnLeft: false,
    link: Routes.NEOSENSORY_EXTERNAL,
    name: 'Neosensory',
  },
  {
    bgColor: NEUTRALS.LIGHT_BACKGROUND,
    buttonText: 'See more',
    description: `I made an app for a party game I love to
    play, so that no one has to sit out to
    facilitate the game. I also wrote a tutorial on
    how I made this app with React Native and Expo.`,
    external: false,
    header: 'Party Game App',
    image: EmpireAppImage,
    imageHeight: 'calc(100% - 200px)',
    imageOnLeft: true,
    link: Routes.EMPIRE_APP,
    name: 'Empire App',
  },
  {
    bgColor: NEUTRALS.OFF_WHITE_BACKGROUND,
    buttonText: 'Read my article',
    description: `As a meditator and a neuroscientist,
    I’m curious about how clearing your
    mind changes your brain. `,
    external: true,
    header: 'Shaping Your Meditation Through Brain Science',
    image: MeditationArticleImage,
    imageOnLeft: false,
    link: Routes.MEDITATION_ARTICLE,
    name: 'Meditation Article',
    shadow,
  },
];

export default PROJECTS;
