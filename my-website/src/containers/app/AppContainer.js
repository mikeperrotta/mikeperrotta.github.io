import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppHomePage from './AppHomePage';
import * as Routes from '../../core/router/Routes';

const AppContainer = () => (
  <Switch>
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
