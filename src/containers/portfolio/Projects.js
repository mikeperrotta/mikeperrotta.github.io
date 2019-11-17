// @flow

import DeskImage from '../../assets/images/desk.jpeg';
import SpiceRackImage from '../../assets/images/spice-rack.jpeg';
import ShoeRackImage from '../../assets/images/shoe-rack.jpeg';

import * as Routes from '../../core/router/Routes';

const PROJECTS :Object[] = [
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
