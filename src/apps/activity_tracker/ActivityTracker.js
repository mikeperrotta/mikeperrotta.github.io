// @flow

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import AppHomePageMenu from '../../containers/app/AppHomePageMenu';
import Footer from '../../components/content/Footer';

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

const ActivityTracker = () => {

  return (
    <>
      <AppHomePageMenu
          isProjectMenu />
      <Content>
        Hey there.
      </Content>
      <Footer />
    </>
  );
};

export default ActivityTracker;
