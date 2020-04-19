import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppHomePage from './AppHomePage';
import EmpireApp from '../projects/empire_app/EmpireApp';
import ErrorPage from './Error';
import Resume from '../resume/Resume';
import * as Routes from '../../core/router/Routes';

const AppContainer = () => (
  <Switch>
    <Route path={Routes.EMPIRE_APP} component={EmpireApp} />
    <Route path={Routes.RESUME} component={Resume} />
    <Route exact strict path={Routes.ROOT} component={AppHomePage} />
    <Route path={Routes.ERROR404} component={ErrorPage} />
    <Redirect to={Routes.ERROR404} />
  </Switch>
);

export default AppContainer;
