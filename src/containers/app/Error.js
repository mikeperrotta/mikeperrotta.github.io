// @flow

import React from 'react';
import styled from 'styled-components';
import AppHomePageMenu from './AppHomePageMenu';
import Footer from '../../components/content/Footer';

import ManyMikes from '../../assets/images/404/many-mikes.jpg';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px);
  justify-content: center;
  min-height: 500px;
  text-align: center;
  padding: 72px 30px 0;
`;

const HeaderText = styled.div`
  font-size: 60px;
  font-weight: 200;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin: 60px;
  width: 900px;
  max-width: 80%;

  @media only screen and (max-height: 730px) {
    margin: 20px
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin: 10px 50px;
  max-width: 500px;
`;

const SmallText = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin: 10px 50px;
  max-width: 500px;
`;

const ErrorPage = () => (
  <>
    <AppHomePageMenu isProjectMenu />
    <Content>
      <HeaderText>404!</HeaderText>
      <ImageContainer>
        <Image src={ManyMikes} alt="" />
      </ImageContainer>
      <Text>
        {`Sorry, but we couldn't find that page! Instead,
        here's a picture of my coworkers, all dressed up as me.`}
      </Text>
      <SmallText>Photoediting credit goes to Syed Rahman.</SmallText>
    </Content>
    <Footer />
  </>
);

export default ErrorPage;
