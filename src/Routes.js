import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ChatRoom, Users, NotFound } from './views';
import { RouteWithLayout } from './components';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from='/'
        to='/users'
      />
      <RouteWithLayout
        component={ Users }
        exact
        path='/users'
      />
      <RouteWithLayout
        component={ ChatRoom }
        exact
        path='/chatRoom'
      />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes;
