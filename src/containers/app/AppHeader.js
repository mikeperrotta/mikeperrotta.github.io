import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { NEUTRALS } from '../../core/styles/Colors';
import * as Routes from '../../core/router/Routes';

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

const LinkToHome = styled(NavLink)`
  align-items: center;
  color: ${NEUTRALS.GRAY01};
  display: flex;
  font-size: 24px;
  font-weight: semi-bold;
  letter-spacing: 4px;
  line-height: 1.2;
  margin-top: 0;
  text-align: left;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  font-weight: semi-bold;
  justify-content: space-between;
  margin-left: 60px;
`;

const getInternalLinkStyles = () => (
  css`
   color: ${NEUTRALS.GRAY01};
   margin-right: 30px;
   text-decoration: none;

   &:hover {
     color: ${NEUTRALS.GRAY01};
     cursor: pointer;
   }
  `
);

const MenuInternalLink = styled(NavLink)`
  ${getInternalLinkStyles}
`;

const MenuInternalHashLink = styled(NavHashLink)`
  ${getInternalLinkStyles}
`;

const AppHeader = () => (
  <Header>
    <LinkToHome to={Routes.ROOT}>
      MIKE PERROTTA
    </LinkToHome>
    <Menu>
      <MenuInternalHashLink
          activeStyle={{ fontWeight: '600' }}
          to={Routes.PORTFOLIO}
          smooth>
        portfolio
      </MenuInternalHashLink>
      <MenuInternalLink
          activeStyle={{ fontWeight: '600' }}
          to={Routes.ABOUT}>
        about
      </MenuInternalLink>
    </Menu>
  </Header>
);

export default AppHeader;
