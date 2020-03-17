// @flow

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { NEUTRALS } from '../../core/styles/Colors';
import * as Routes from '../../core/router/Routes';

/* styled components */
const Content = styled.div`
  align-items: center;
  background: ${NEUTRALS.DARK_GRAY};
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 200;
  justify-content: space-between;
  opacity: 0.9;
  padding: 15px 20px;
  text-align: center;
  width: 100%;
`;

const MenuSubArea = styled.div``;

const Link = styled(NavLink)`
  color: ${NEUTRALS.LIGHT_GRAY};
  justify-content: center;
  margin: 0px 20px;
  text-decoration: none;

  &:hover {
    color: ${NEUTRALS.LIGHT_GRAY};
    cursor: pointer;
  }
`;

const HashLink = styled(NavHashLink)`
  color: ${NEUTRALS.LIGHT_GRAY};
  justify-content: center;
  margin: 0px 20px;
  text-decoration: none;

  &:hover {
    color: ${NEUTRALS.LIGHT_GRAY};
    cursor: pointer;
  }
`;

/* react component */
const Menu = () => (
  <Content>
    <MenuSubArea>
      <Link to={Routes.ROOT}> Mike Perrotta </Link>
    </MenuSubArea>
    <MenuSubArea>
      <HashLink smooth to={Routes.PORTFOLIO}> projects </HashLink>
      <HashLink smooth to={Routes.ABOUT}> about </HashLink>
    </MenuSubArea>
  </Content>
);

export default Menu;
