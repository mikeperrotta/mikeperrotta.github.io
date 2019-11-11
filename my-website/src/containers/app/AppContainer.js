import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHomePage from './AppHomePage';

const AppContainer = () => (
  <Switch>
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
