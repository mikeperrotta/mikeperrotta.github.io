// @flow
import React from 'react';
import { css } from 'styled-components';

import NeoTeam from '../../../assets/images/neosensory/tmcx-team.png';
import Buzz from '../../../assets/images/neosensory/buzz.png';
import Vest from '../../../assets/images/neosensory/vest.gif';
import Prototyping from '../../../assets/images/neosensory/prototyping.jpg';
import Westworld from '../../../assets/images/neosensory/westworld.png';
import { COLORS, NEUTRALS } from '../../../core/styles/Colors';
import * as Routes from '../../../core/router/Routes';

const shadow = css`drop-shadow(2px 8px 6px rgba(0, 0, 0, 0.25))`;

const NEOSENSORY_SECTIONS :Object[] = [
  {
    bgColor: NEUTRALS.OFF_WHITE_BACKGROUND,
    description: `I had the opportunity to join Neosensory at its earliest stage and work
    with a wonderful group of people. Throughout my time at Neosensory
    I’ve gotten to see the team grow from 3 to 20+ employees, see multiple
    products move through the research and development cycle, and was
    able to work on science, user research, algorithms, software development,
    and hardware prototyping.`,
    header: '',
    image: NeoTeam,
    imageOnLeft: true,
    imageWidth: '25%',
    name: 'Intro',
    shadow,
  },
  {
    buttonText: 'Read more',
    bgColor: NEUTRALS.WHITE,
    description: `Our first product to reach market is Buzz, a vibrating wristband that allows
    people to sense sound through their skin. The wristband picks up
    surrounding sounds and translates them into patterns of vibration,
    which allows Deaf and hard-of-hearing people, for instance, to know
    when someone is knocking on their door or an ambulance is driving by.
    Working with people from these communities was one of the most
    rewarding parts of Neosensory.`,
    external: true,
    header: 'Buzz',
    image: Buzz,
    imageWidth: '25%',
    imageOnLeft: false,
    link: Routes.NEOSENSORY_BUZZ_POST,
    name: 'Buzz',
  },
  {
    buttonText: 'Watch the TED Talk',
    bgColor: NEUTRALS.OFF_WHITE_BACKGROUND,
    description: `Our first endeavor was the Vest, a technology similar to the
    Buzz wristband but with many more vibrating motors. We tested
    this Vest as a way to let people sense sound as well as gain other senses.
    Watch Neosensory co-founder David Eagleman’s TED Talk to
    learn more about the Vest and the neuroscience behind gaining new senses.`,
    external: true,
    header: 'Vest',
    image: Vest,
    imageOnLeft: true,
    imageWidth: '25%',
    link: Routes.NEOSENSORY_TED_TALK,
    name: 'Vest',
    shadow,
  },
  {
    bgColor: NEUTRALS.WHITE,
    description:
  <>
    I’ve had a lot of fun prototyping different sensory
    addition technologies that work with our Buzz wristband.
    Read my blog posts on how to make add-ons to Buzz
    that let you&nbsp;
    <a
        href={Routes.NEOSENSORY_INVISIBLE_LIGHT_POST}
        rel="noreferrer noopener"
        target="_blank"
        style={{
          color: COLORS.EMPIRE_BLUE,
          fontWeight: 300,
          textDecoration: 'none'
        }}>
      feel invisible light
    </a>
    &nbsp;or&nbsp;
    <a
        href={Routes.NEOSENSORY_TEMPERATURE_POST}
        rel="noreferrer noopener"
        target="_blank"
        style={{
          color: COLORS.EMPIRE_BLUE,
          fontWeight: 300,
          textDecoration: 'none'
        }}>
      gain thermal vision
    </a>
    . I also wrote&nbsp;
    <a
        href={Routes.NEOSENSORY_ARDUINO_SDK_POST}
        rel="noreferrer noopener"
        target="_blank"
        style={{
          color: COLORS.EMPIRE_BLUE,
          fontWeight: 300,
          textDecoration: 'none'
        }}>
      an SDK
    </a>
    &nbsp;that lets you build your own projects using an Arduino board.
    And there are so many other fun projects under wraps!
  </>,
    header: 'Sensory Substitution Projects',
    image: Prototyping,
    imageOnLeft: false,
    name: 'SSDs',
    shadow,
  },
  {
    bgColor: NEUTRALS.OFF_WHITE_BACKGROUND,
    buttonText: 'Watch the clip',
    description: `One of the most exciting and star-studded adventures
    at Neosensory was getting to build props for HBO’s
    Westworld. Soldiers in the show were equipped with
    Neosensory-inspired tactical vests that vibrated to indicate
    where the enemy androids were. I built these props using
    accelerometers, LoRa radios, and lots of LEDs.`,
    external: true,
    header: 'Westworld',
    image: Westworld,
    imageOnLeft: true,
    link: Routes.NEOSENSORY_WESTWORLD_CLIP,
    name: 'Westworld',
    shadow,
  }
];

export default NEOSENSORY_SECTIONS;
