// @flow

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import ActivityTracker from '../../apps/activity_tracker/ActivityTracker';
import AppHomePage from './AppHomePage';
import EmpireApp from '../projects/empire_app/EmpireApp';
import ErrorPage from './Error';
import Resume from '../resume/Resume';
import * as Routes from '../../core/router/Routes';

const propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const AppContainer = ({ location } :propTypes) => {
  ReactGA.pageview(location.pathname + location.hash);
  return (
    <Switch>
      <Route path={Routes.EMPIRE_APP} component={EmpireApp} />
      <Route path={Routes.RESUME} component={Resume} />
      <Route path={Routes.ACTIVITY_TRACKER} component={ActivityTracker} />
      <Route exact strict path={Routes.ROOT} component={AppHomePage} />
      <Route path={Routes.ERROR404} component={ErrorPage} />
      <Redirect to={Routes.ERROR404} />
    </Switch>
  );
};

export default withRouter(AppContainer);
