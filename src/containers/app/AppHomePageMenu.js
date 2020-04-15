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
  color: ${NEUTRALS.DARK_TEXT};
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: 30px;
  top: calc(50% - 36px / 2);
  position: absolute;
  text-decoration: none;
  transition: left 0.3s, opacity 0.3s;
  opacity: 1;

  ${(props) => props.pos};

  &:hover {
   color: ${NEUTRALS.BLACK};
   cursor: pointer;
  }
`;

const getElementYCoordinate = (el) => el.getBoundingClientRect().top + window.pageYOffset;

const scrollWithOffset = (el) => {
  const yCoordinate = getElementYCoordinate(el);
  const yOffset = -71;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const titleWidth = 142.19;
const projWidth = 84.56;
const aboutWidth = 62.5;
const menuMargin = 48;

const titleCenter = css`left: calc(50% - ${titleWidth}px / 2);`;
const titleInvisible = css`
  opacity: 0;
  ${titleCenter}
`;
const titleLeft = css`left: calc(${menuMargin}px);`;
const projRight = css`left: calc(100% - calc(${projWidth}px + ${aboutWidth}px + calc(${menuMargin}px * 2)));`;
const projCenter = css`left: calc(50% - ${projWidth}px / 2);`;
const projLeft = css`left: calc(${titleWidth}px + calc(${menuMargin}px * 2));`;
const aboutRight = css`left: calc(100% - calc(${aboutWidth}px + ${menuMargin}px));`;
const aboutCenter = css`left: calc(50% - ${aboutWidth}px / 2);`;

const AppHomePageMenu = () => {
  const [isSticky, setStickiness] = useState(false);
  const [titlePos, setTitlePos] = useState(titleInvisible);
  const [projPos, setProjPos] = useState(projRight);
  const [aboutPos, setAboutPos] = useState(aboutRight);
  const ref = useRef({});

  const handleScroll = () => {
    if (ref.current) {
      const menuPos = ref.current.getBoundingClientRect().top;
      const titleText = document.getElementById('TitleText');
      let titleTextHeight;
      if (titleText) {
        titleTextHeight = getElementYCoordinate(titleText) + titleText.offsetHeight;
      }
      const projectsSection = document.getElementById('projects');
      let projectsSectionHeight;
      if (projectsSection) {
        projectsSectionHeight = getElementYCoordinate(projectsSection);
      }
      const aboutSection = document.getElementById('about');
      let aboutSectionHeight;
      if (aboutSection) {
        aboutSectionHeight = getElementYCoordinate(aboutSection);
      }

      setStickiness(menuPos < 0);
      if (menuPos - 72 >= -1 * titleTextHeight) {
        setTitlePos(titleInvisible);
        setProjPos(projRight);
        setAboutPos(aboutRight);
      }
      else if (!projectsSectionHeight || menuPos - 72 >= -1 * projectsSectionHeight) {
        setTitlePos(titleCenter);
        setProjPos(projRight);
        setAboutPos(aboutRight);
      }
      else if (!aboutSection || menuPos - 72 >= -1 * aboutSectionHeight) {
        setTitlePos(titleLeft);
        setProjPos(projCenter);
        setAboutPos(aboutRight);
      }
      else {
        setTitlePos(titleLeft);
        setProjPos(projLeft);
        setAboutPos(aboutCenter);
      }
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
            to={Routes.HOME}>
          mike perrotta
        </MenuHashLink>
        <MenuHashLink
            smooth
            pos={projPos}
            scroll={scrollWithOffset}
            to={Routes.PORTFOLIO}>
          projects
        </MenuHashLink>
        <MenuHashLink
            smooth
            pos={aboutPos}
            scroll={scrollWithOffset}
            to={Routes.ABOUT}>
          about
        </MenuHashLink>
      </Menu>
    </StickyWrapper>
  );
};

export default AppHomePageMenu;
