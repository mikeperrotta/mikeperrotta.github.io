import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHomePage from './AppHomePage';
import SpiceRack from '../projects/spicerack/SpiceRack';
import * as Routes from '../../core/router/Routes';

const AppContainer = () => (
  <Switch>
    <Route path={Routes.SPICE_RACK} component={SpiceRack} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
