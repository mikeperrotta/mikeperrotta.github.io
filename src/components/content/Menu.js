// @flow

import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { NEUTRALS } from '../../core/styles/Colors';
import * as Routes from '../../core/router/Routes';

/* styled components */
const StickyWrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  background: ${NEUTRALS.LIGHT_BACKGROUND};
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 200;
  justify-content: space-between;
  padding: 15px 20px;
  text-align: center;
  width: 100%;
  z-index: 200;

  ${(props) => (props.isSticky ? css`
  opacity: 0.98;
  position: fixed;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  ` : `
  opacity: 1.0;
  position: absolute;
  box-shadow: none;
  `)}
`;

const MenuSubArea = styled.div``;

const Link = styled(NavLink)`
  color: ${NEUTRALS.DARK_TEXT};
  justify-content: center;
  margin: 0px 20px;
  text-decoration: none;

  &:hover {
    color: ${NEUTRALS.DARK_TEXT};
    cursor: pointer;
  }
`;

const HashLink = styled(NavHashLink)`
  color: ${NEUTRALS.DARK_TEXT};
  justify-content: center;
  margin: 0px 20px;
  text-decoration: none;

  &:hover {
    color: ${NEUTRALS.DARK_TEXT};
    cursor: pointer;
  }
`;

/* react component */
const Menu = () => {
  const [isSticky, setStickiness] = useState(false);
  const ref = useRef({});
  const handleScroll = () => {
    if (ref.current) {
      setStickiness(ref.current.getBoundingClientRect().top < 0);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <StickyWrapper ref={ref}>
      <Content isSticky={isSticky}>
        <MenuSubArea>
          <Link to={Routes.ROOT}> Mike Perrotta </Link>
        </MenuSubArea>
        <MenuSubArea>
          <HashLink smooth to={Routes.PORTFOLIO}> projects </HashLink>
          <HashLink smooth to={Routes.ABOUT}> about </HashLink>
        </MenuSubArea>
      </Content>
    </StickyWrapper>
  );
};

export default Menu;
