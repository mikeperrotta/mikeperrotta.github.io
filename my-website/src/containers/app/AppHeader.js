import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import * as Routes from '../../core/router/Routes';

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const LinkToHome = styled(Link)`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
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
  font-size: 14px;
  justify-content: space-between;
`;

const MenuInternalLink = styled(NavLink)`
  color: #fff;
  margin-right: 30px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const AppHeader = () => (
  <Header>
    <LinkToHome to={Routes.ROOT}>
      Mike Perrotta
    </LinkToHome>
    <Menu>
      <MenuInternalLink
          activeStyle={{ color: '#b9b7bf' }}
          to={Routes.PORTFOLIO}>
        Portfolio
      </MenuInternalLink>
      <MenuInternalLink
          activeStyle={{ color: '#b9b7bf' }}
          to={Routes.ABOUT}>
        About
      </MenuInternalLink>
    </Menu>
  </Header>
);

export default AppHeader;
