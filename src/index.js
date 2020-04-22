import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import AppContainer from './containers/app/AppContainer';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #ffffff;
    font-family: 'Muli', sans-serif;
    height: 100%;
    line-height: normal;
    margin: 0;
    width: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  #app {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

const APP_ROOT_NODE = document.getElementById('app');

ReactGA.initialize('UA-163997755-1', {
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});

if (APP_ROOT_NODE) {
  ReactDOM.render(
    <Router>
      <AppContainer />
      <GlobalStyle />
    </Router>,
    APP_ROOT_NODE
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
