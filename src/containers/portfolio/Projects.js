// @flow

import DeskImage from '../../assets/images/desk/desk.jpeg';
import SpiceRackImage from '../../assets/images/spice-rack.jpeg';
import ShoeRackImage from '../../assets/images/shoe-rack.jpeg';
import MeditationArticleImage from '../../assets/images/meditation-article-cover-image-with-text.png';
import EmpireAppImage from '../../assets/images/empire-app-image.png';

import * as Routes from '../../core/router/Routes';

const PROJECTS :Object[] = [
  {
    name: 'Meditation Article',
    image: MeditationArticleImage,
    text: 'Shaping Your Meditation Through Brain Science',
    link: Routes.MEDITATION_ARTICLE,
    external: true,
  },
  {
    name: 'Empire App',
    image: EmpireAppImage,
    text: 'Empire',
    link: Routes.EMPIRE_APP,
  },
];

export default PROJECTS;
