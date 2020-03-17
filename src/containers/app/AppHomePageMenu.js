// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

import { NEUTRALS } from '../../core/styles/Colors';
import * as Routes from '../../core/router/Routes';

const Menu = styled.div`
  align-items: center;
  background-color: ${NEUTRALS.DARK_GRAY};
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 12px;
  position: absolute;
  width: 100%;
`;

const getLinkStyles = () => (
  css`
    color: ${NEUTRALS.LIGHT_GRAY};
    font-size: 24px;
    font-style: normal;
    font-weight: 200;
    line-height: 30px;
    margin: 0px 80px;
    text-decoration: none;

   &:hover {
     color: ${NEUTRALS.LIGHT_GRAY};
     cursor: pointer;
   }
  `
);

const MenuHashLink = styled(NavHashLink)`
  ${getLinkStyles}
`;

const AppHeader = () => (
  <Menu>
    <MenuHashLink
        smooth
        to={Routes.PORTFOLIO}>
      projects
    </MenuHashLink>
    <MenuHashLink
        smooth
        to={Routes.ABOUT}>
      about
    </MenuHashLink>
  </Menu>
);

export default AppHeader;
