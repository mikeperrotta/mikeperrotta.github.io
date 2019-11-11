import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import initializeRouterHistory from './core/router/RouterHistory';

import AppContainer from './containers/app/AppContainer';
import * as serviceWorker from './serviceWorker';

const routerHistory = initializeRouterHistory();
const APP_ROOT_NODE = document.getElementById('root');

if (APP_ROOT_NODE) {
  ReactDOM.render(
    <Router history={routerHistory}>
      <AppContainer />
    </Router>,
    APP_ROOT_NODE
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
