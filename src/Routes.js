import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Users } from './views';
import { RouteWithLayout } from './components';
import { ChatRoom } from './views';

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
        path='/users'
      />
      <RouteWithLayout
        component={ ChatRoom }
        path='/chatRoom'
      />
      {/* ここにnot_foundページを用意する */}
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  )
}

export default Routes;
