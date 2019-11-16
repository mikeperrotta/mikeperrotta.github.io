// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
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
    text-decoration: none;
    margin: 0px 80px;

   &:hover {
     color: ${NEUTRALS.LIGHT_GRAY};
     cursor: pointer;
   }
  `
);

const MenuLink = styled(NavLink)`
  ${getLinkStyles}
`;

const MenuHashLink = styled(NavHashLink)`
  ${getLinkStyles}
`;

const AppHeader = () => (
  <Menu>
    <MenuHashLink
        to={Routes.PORTFOLIO}
        smooth>
      projects
    </MenuHashLink>
    <MenuLink
        to={Routes.ABOUT}>
      about
    </MenuLink>
  </Menu>
);

export default AppHeader;
