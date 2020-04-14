// @flow

import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

import { NEUTRALS } from '../../core/styles/Colors';
import * as Routes from '../../core/router/Routes';

const StickyWrapper = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
`;

const Menu = styled.div`
  padding: 0 32px;
  position: fixed;
  width: 100%;
  height: 72px;
  z-index: 200;

  ${(props) => (props.isSticky ? css`
    background-color: ${NEUTRALS.LIGHT_BACKGROUND};
    position: fixed;
    top: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    ` : `
    background-color: ${NEUTRALS.LIGHT_BACKGROUND};
    top: 0;
    position: absolute;
    box-shadow: none;
    `
  )}
`;

const MenuHashLink = styled(NavHashLink)`
  ${(props) => props.pos};
  color: ${NEUTRALS.DARK_TEXT};
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: 30px;
  top: calc(50% - 36px / 2);
  position: absolute;
  text-decoration: none;
  transition: left 0.3s;

  &:hover {
   color: ${NEUTRALS.BLACK};
   cursor: pointer;
  }
`;

const titleWidth = 142.19;
const projWidth = 84.56;
const aboutWidth = 62.5;
const menuMargin = 48;

const titleCentered = `left: calc(50% - ${titleWidth}px / 2)`;
const titleLeft = `left: calc(${menuMargin}px)`;
const projRight = `left: calc(100% - calc(${projWidth}px + ${aboutWidth}px + calc(${menuMargin}px * 2)))`
const projLeft = `left: calc(${titleWidth}px + calc(${menuMargin}px * 2))`;
const aboutRight = `left: calc(100% - calc(${aboutWidth}px + ${menuMargin}px))`;
const aboutLeft = `left: calc(${titleWidth}px + ${projWidth}px + calc(${menuMargin}px * 3))`;

const AppHomePageMenu = () => {
  const [isSticky, setStickiness] = useState(false);
  const [titlePos, setTitlePos] = useState(titleCentered);
  const [projPos, setProjPos] = useState(projRight);
  const [aboutPos, setAboutPos] = useState(aboutRight);
  const ref = useRef({});
  const handleScroll = () => {
    if (ref.current) {
      const menuPos = ref.current.getBoundingClientRect().top;
      setStickiness(menuPos < 0);
      setTitlePos(menuPos < 0 ? titleLeft : titleCentered);
      setProjPos(menuPos < 0 ? projLeft : projRight);
      setAboutPos(menuPos < 0 ? aboutLeft : aboutRight);
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
      <Menu isSticky={isSticky}>
        <MenuHashLink
            smooth
            pos={titlePos}
            to={Routes.PORTFOLIO}>
          mike perrotta
        </MenuHashLink>
        <MenuHashLink
            smooth
            pos={projPos}
            to={Routes.PORTFOLIO}>
          projects
        </MenuHashLink>
        <MenuHashLink
            smooth
            pos={aboutPos}
            to={Routes.ABOUT}>
          about
        </MenuHashLink>
      </Menu>
    </StickyWrapper>
  );
};

export default AppHomePageMenu;
