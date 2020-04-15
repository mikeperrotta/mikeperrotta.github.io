// @flow

import MeditationArticleImage from '../../assets/images/meditation-article-cover-image-with-text.png';
import NeosensoryImage from '../../assets/images/neosensory-image.png';
import EmpireAppImage from '../../assets/images/empire-app-image.png';
import { NEUTRALS } from '../../core/styles/Colors';

import * as Routes from '../../core/router/Routes';

const shadow = 'drop-shadow(2px 8px 6px rgba(0, 0, 0, 0.25))';

const PROJECTS :Object[] = [
  {
    name: 'Neosensory',
    image: NeosensoryImage,
    imageOnLeft: false,
    buttonText: 'Check it out',
    header: 'Neosensory',
    description: `I’m a scientist at Neosensory, where
    we create hardware devices that give people
    new senses. Check out some of the projects
    I’ve helped build.`,
    bgColor: NEUTRALS.OFF_WHITE_BACKGROUND,
    link: Routes.NEOSENSORY_EXTERNAL,
    external: true,
    imageHeight: 'calc(100% - 220px)',
  },
  {
    name: 'Empire App',
    image: EmpireAppImage,
    imageOnLeft: true,
    buttonText: 'Learn more',
    header: 'Party Game App',
    description: `I made an app for a party game I love to
    play, so that no one has to sit out to
    facilitate the game. I also wrote a tutorial on
    how I made this app with React Native and Expo.`,
    bgColor: NEUTRALS.LIGHT_BACKGROUND,
    link: Routes.EMPIRE_APP,
    external: false,
    imageHeight: 'calc(100% - 200px)',
  },
  {
    name: 'Meditation Article',
    buttonText: 'Read my article',
    image: MeditationArticleImage,
    imageOnLeft: false,
    header: 'Shaping Your Meditation Through Brain Science',
    description: `As a meditator and a neuroscientist,
    I’m curious about how clearing your
    mind changes your brain. `,
    bgColor: NEUTRALS.OFF_WHITE_BACKGROUND,
    link: Routes.MEDITATION_ARTICLE,
    external: true,
    shadow,
  },
];

export default PROJECTS;
