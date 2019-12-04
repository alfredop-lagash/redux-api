import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Example, Home, Ramdom } from '../../containers';
import { ROOT, HOME, RAMDOM } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Example} />
    <Route exact path={HOME} component={Home} />
    <Route exact path={RAMDOM} component={Ramdom} />
  </Switch>
);

export default Routes;
