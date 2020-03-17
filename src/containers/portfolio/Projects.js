// @flow

import DeskImage from '../../assets/images/desk/desk.jpeg';
import SpiceRackImage from '../../assets/images/spice-rack.jpeg';
import ShoeRackImage from '../../assets/images/shoe-rack.jpeg';
import MeditationArticleImage from '../../assets/images/meditation-article-cover-image-with-text.png';

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
    name: 'Desk',
    image: DeskImage,
    text: 'Steel Pipe Desk',
    link: Routes.DESK,
  },
  {
    name: 'Spice Rack',
    image: SpiceRackImage,
    text: 'Reclaimed Wood Spice Rack',
    link: Routes.SPICE_RACK,
  },
  {
    name: 'Shoe Rack',
    image: ShoeRackImage,
    text: 'Copper Pipe Shoe Rack',
    link: Routes.SHOE_RACK,
  },
];

export default PROJECTS;
