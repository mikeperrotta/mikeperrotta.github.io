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
  isProjectMenu :boolean;
};

const smallMenuSize = 500;
const staticMenuSize = 768;

const MenuStateStatic = 1;
const MenuStateTop = 2;
const MenuStateBelowTitle = 3;
const MenuStateProjects = 4;
const MenuStateAbout = 5;

const getTitleProps = (menuState, isProjectMenu) => {
  switch (menuState) {
    case MenuStateStatic:
      return titleLeft;
    case MenuStateTop:
      return isProjectMenu ? titleCenter : titleInvisible;
    case MenuStateBelowTitle:
      return titleCenter;
    case MenuStateProjects:
    case MenuStateAbout:
      return titleLeft;
    default:
      return titleLeft;
  }
};

const getProjProps = (menuState) => {
  switch (menuState) {
    case MenuStateStatic:
    case MenuStateTop:
    case MenuStateBelowTitle:
      return projRight;
    case MenuStateProjects:
      return projCenter;
    case MenuStateAbout:
      return projLeft;
    default:
      return projRight;
  }
};

const getAboutProps = (menuState) => {
  switch (menuState) {
    case MenuStateStatic:
    case MenuStateTop:
    case MenuStateBelowTitle:
    case MenuStateProjects:
      return aboutRight;
    case MenuStateAbout:
      return aboutCenter;
    default:
      return aboutRight;
  }
};

const AppHomePageMenu = ({ isProjectMenu } :Props) => {
  const ref = useRef({});

  const getMenuSticky = () => {
    if (!ref.current) {
      return false;
    }
    const menuPos = ref.current.getBoundingClientRect().top;
    return menuPos < 0;
  };

  const getMenuState = () => {
    if (!ref.current) {
      return MenuStateTop;
    }
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

    if (window.innerWidth < staticMenuSize) {
      return MenuStateStatic;
    }
    if (!titleTextHeight || menuPos - 72 >= -1 * titleTextHeight) {
      return MenuStateTop;
    }
    if (!projectsSectionHeight || menuPos - 72 >= -1 * projectsSectionHeight) {
      return MenuStateBelowTitle;
    }
    if (!aboutSection || menuPos - 72 >= -1 * aboutSectionHeight) {
      return MenuStateProjects;
    }
    return MenuStateAbout;
  };

  const getIsSmallMenu = () => window.innerWidth < smallMenuSize;

  const [isSticky, setStickiness] = useState(false);
  let menuState = MenuStateTop;
  const [titleProps, setTitleProps] = useState(getTitleProps(menuState, isProjectMenu));
  const [projProps, setProjProps] = useState(getProjProps(menuState));
  const [aboutProps, setAboutProps] = useState(getAboutProps(menuState));
  const [smallMenu, setSmallMenu] = useState(getIsSmallMenu);

  const updateMenuProps = () => {
    setSmallMenu(getIsSmallMenu);
    setStickiness(getMenuSticky);

    menuState = getMenuState();
    setTitleProps(getTitleProps(menuState, isProjectMenu));
    setProjProps(getProjProps(menuState));
    setAboutProps(getAboutProps(menuState));
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
