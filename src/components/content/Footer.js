// @flow

import React from 'react';
import styled from 'styled-components';
import { NEUTRALS } from '../../core/styles/Colors';

const Content = styled.div`
  height: 50px;
  background-color: ${NEUTRALS.DARK_GRAY};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Text = styled.div`
  color: ${NEUTRALS.WHITE};
  font-family: Muli;
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  text-align: center;
`;

const Footer = () => (
  <Content>
    <Text>© Mike Perrotta 2020</Text>
  </Content>
);

export default Footer;
