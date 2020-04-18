// @flow

import SpiceRackImage from '../../../assets/images/spice-rack.jpeg';
import { NEUTRALS } from '../../../core/styles/Colors';

const SPICERACK :Object[] = [
  {
    name: 'Intro',
    image: SpiceRackImage,
    imageOnLeft: true,
    header: 'Header',
    description: `I didn’t like any of the ugly metal spice racks on Amazon,
    which mostly held too few spices, and just wanted a nice, rustic looking
    wooden spice rack with plenty of room.`,
    bgColor: NEUTRALS.MED_LIGHT_GRAY,
  },
  {
    name: 'desk_section_2',
    image: SpiceRackImage,
    imageOnLeft: false,
    header: 'Steel Pipe Desk',
    description: 'description',
    bgColor: NEUTRALS.OFF_WHITE,
  },
  {
    name: 'desk_section_3',
    image: SpiceRackImage,
    imageOnLeft: true,
    header: 'Steel Pipe Desk',
    description: 'description',
    bgColor: NEUTRALS.MED_LIGHT_GRAY,
  },
];

export default SPICERACK;
