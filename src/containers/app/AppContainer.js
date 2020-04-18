import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHomePage from './AppHomePage';
import EmpireApp from '../projects/empire_app/EmpireApp';
import Resume from '../resume/Resume';
import * as Routes from '../../core/router/Routes';

const AppContainer = () => (
  <Switch>
    <Route path={Routes.EMPIRE_APP} component={EmpireApp} />
    <Route path={Routes.RESUME} component={Resume} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
