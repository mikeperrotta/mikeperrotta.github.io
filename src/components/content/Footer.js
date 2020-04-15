// @flow

import React from 'react';
import styled from 'styled-components';
import { NEUTRALS } from '../../core/styles/Colors';

const Content = styled.div`
  align-items: center;
  background-color: ${NEUTRALS.LIGHT_BACKGROUND};
  display: flex;
  height: 50px;
  justify-content: flex-start;
`;

const Text = styled.div`
  color: ${NEUTRALS.DARK_TEXT};
  font-family: Muli;
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  margin: 0 20px;
  text-align: center;
`;

const Footer = () => (
  <Content>
    <Text>© Mike Perrotta 2020. Made by me.</Text>
  </Content>
);

export default Footer;
