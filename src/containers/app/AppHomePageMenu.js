// @flow

import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

import { NEUTRALS } from '../../core/styles/Colors';
import * as Routes from '../../core/router/Routes';

const StickyWrapper = styled.div`
  align-items: center;
  background-color: ${NEUTRALS.WHITE};
  bottom: 0;
  display: flex;
  height: ${(props) => props.height}px;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 200;

  ${(props) => (props.isSticky ? css`
    background-color: ${NEUTRALS.ALMOST_DARK_GRAY};
    position: fixed;
    top: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    ` : `
    background-color: ${NEUTRALS.DARK_GRAY};
    bottom: 0;
    position: absolute;
    box-shadow: none;
    `
)}
`

const getLinkStyles = () => (
  css`
    color: ${NEUTRALS.LIGHT_GRAY};
    font-size: 24px;
    font-style: normal;
    font-weight: 200;
    line-height: 30px;
    margin: 12px 80px;
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

const AppHeader = () => {
  const [isSticky, setStickiness] = useState(false);
  const [menuHeight, setMenuHeight] = useState(80);
  const ref = useRef({});
  const menuRef = useRef({});
  const handleScroll = () => {
    if (ref.current) {
      setStickiness(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  useEffect(() => {
    setMenuHeight(menuRef.current.offsetHeight);
  }, []);

  return (
    <StickyWrapper ref={ref} height={menuHeight}>
      <Menu isSticky={isSticky} ref={menuRef}>
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
    </StickyWrapper>
  );
};

export default AppHeader;
