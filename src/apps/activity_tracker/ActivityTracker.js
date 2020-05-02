// @flow

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import AppHomePageMenu from '../../containers/app/AppHomePageMenu';
import Footer from '../../components/content/Footer';
import { NEUTRALS } from '../../core/styles/Colors';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - calc(50px));
  justify-content: center;
  padding-top: 72px;
`;

const DisplaySection = styled.div`
  background-color: ${NEUTRALS.LIGHT_BACKGROUND};
  height: 100%;
  width: 70%;
`;

const OptionsSection = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE_BACKGROUND};
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 30%;
`;

const ActivityTracker = () => {

  return (
    <>
      <AppHomePageMenu
          alwaysShadow
          menuTitle="Tracker"
          isProjectMenu />
      <Content>
        <DisplaySection />
        <OptionsSection />
      </Content>
      <Footer />
    </>
  );
};

export default ActivityTracker;
