import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHomePage from './AppHomePage';
import EmpireApp from '../projects/empire_app/EmpireApp';
import * as Routes from '../../core/router/Routes';

const AppContainer = () => (
  <Switch>
    <Route path={Routes.EMPIRE_APP} component={EmpireApp} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
