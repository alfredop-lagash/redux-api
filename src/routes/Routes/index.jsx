import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Example, Home, Ramdom, Users, Ramdom2 } from '../../containers';
import { ROOT, HOME, RAMDOM, USERS, RAMDOM2 } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Example} />
    <Route exact path={HOME} component={Home} />
    <Route exact path={RAMDOM} component={Ramdom} />
    <Route exact path={USERS} component={Users} />
    <Route exact path={RAMDOM2} component={Ramdom2} />
  </Switch>
);

export default Routes;
