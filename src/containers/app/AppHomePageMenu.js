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
  height: 72px;
  padding: 0 32px;
  position: fixed;
  width: 100%;
  z-index: 200;

  ${(props) => (props.isSticky ? css`
    background-color: ${NEUTRALS.LIGHT_BACKGROUND};
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    ` : `
    background-color: ${NEUTRALS.LIGHT_BACKGROUND};
    box-shadow: none;
    position: absolute;
    top: 0;
    `
  )}
`;

const MenuHashLink = styled(NavHashLink)`
  color: ${NEUTRALS.DARK_TEXT};
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: 30px;
  opacity: 1;
  position: absolute;
  text-decoration: none;
  top: calc(50% - 36px / 2);
  transition: left 0.3s, opacity 0.3s, font-weight 0.1s, font-size 0.1s;

  ${(props) => props.props};

  &:hover {
   color: ${NEUTRALS.BLACK};
   cursor: pointer;
  }
`;

const titleWidth = 142.19;
const projWidth = 84.56;
const aboutWidth = 62.5;
const menuMargin = 48;

const titleCenter = css`
  left: calc(50% - ${titleWidth}px / 2);
  font-weight: 300;
  font-size: 28px;
`;
const titleInvisible = css`
  opacity: 0;
  ${titleCenter}
`;
const titleLeft = css`left: calc(${menuMargin}px);`;
const projRight = css`left: calc(100% - calc(${projWidth}px + ${aboutWidth}px + calc(${menuMargin}px * 2)));`;
const projCenter = css`
  left: calc(50% - ${projWidth}px / 2);
  font-weight: 300;
  font-size: 28px;
`;
const projLeft = css`left: calc(${titleWidth}px + calc(${menuMargin}px * 2));`;
const aboutRight = css`left: calc(100% - calc(${aboutWidth}px + ${menuMargin}px));`;
const aboutCenter = css`
  left: calc(50% - ${aboutWidth}px / 2);
  font-weight: 300;
  font-size: 28px;
`;

const getElementYCoordinate = (el) => el.getBoundingClientRect().top + window.pageYOffset;

const scrollWithOffset = (el) => {
  const yCoordinate = getElementYCoordinate(el);
  const yOffset = -71;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

type Props = {
  projectMenu :boolean;
};

const smallMenuSize = 500;
const staticMenuSize = 768;

const AppHomePageMenu = ({ projectMenu } :Props) => {
  const [isSticky, setStickiness] = useState(false);
  let defaultTitle = projectMenu ? titleCenter : titleInvisible;
  defaultTitle = window.innerWidth < staticMenuSize ? titleLeft : defaultTitle;
  const [titleProps, setTitleProps] = useState(defaultTitle);
  const [projProps, setProjProps] = useState(projRight);
  const [aboutProps, setAboutProps] = useState(aboutRight);
  const [smallMenu, setSmallMenu] = useState(window.innerWidth < smallMenuSize);
  const ref = useRef({});

  const updateMenuProps = () => {
    setSmallMenu(window.innerWidth < smallMenuSize);
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

      if (window.innerWidth < staticMenuSize) {
        setTitleProps(titleLeft);
        setProjProps(projRight);
        setAboutProps(aboutRight);
        return;
      }

      if (menuPos - 72 >= -1 * titleTextHeight) {
        setTitleProps(titleInvisible);
        setProjProps(projRight);
        setAboutProps(aboutRight);
      }
      else if (!projectsSectionHeight || menuPos - 72 >= -1 * projectsSectionHeight) {
        setTitleProps(titleCenter);
        setProjProps(projRight);
        setAboutProps(aboutRight);
      }
      else if (!aboutSection || menuPos - 72 >= -1 * aboutSectionHeight) {
        setTitleProps(titleLeft);
        setProjProps(projCenter);
        setAboutProps(aboutRight);
      }
      else {
        setTitleProps(titleLeft);
        setProjProps(projLeft);
        setAboutProps(aboutCenter);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateMenuProps);
    window.addEventListener('resize', updateMenuProps);
    return () => {
      window.removeEventListener('scroll', () => updateMenuProps);
      window.removeEventListener('resize', () => updateMenuProps);
    };
  }, []);

  const homeButtonText = smallMenu ? 'mp' : 'mike perrotta';

  return (
    <StickyWrapper ref={ref}>
      <Menu isSticky={isSticky}>
        <MenuHashLink
            props={titleProps}
            smooth
            to={Routes.HOME}>
          {homeButtonText}
        </MenuHashLink>
        <MenuHashLink
            props={projProps}
            scroll={scrollWithOffset}
            smooth
            to={Routes.PORTFOLIO}>
          projects
        </MenuHashLink>
        <MenuHashLink
            props={aboutProps}
            scroll={scrollWithOffset}
            smooth
            to={Routes.ABOUT}>
          about
        </MenuHashLink>
      </Menu>
    </StickyWrapper>
  );
};

export default AppHomePageMenu;
