import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHomePage from './AppHomePage';
import AppAboutPage from './AppAboutPage';
import * as Routes from '../../core/router/Routes';

const AppContainer = () => (
  <Switch>
    <Route path={Routes.ABOUT} component={AppAboutPage} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
