import React from 'react';
import { Route } from 'react-router-dom';
import { Main } from '../layouts';
// import PropTypes from 'prop-types'; TODO: 型チェック

const RouteWithLayout = props => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      { ...rest }
      render={() => (
        <Main>
          <Component />
        </Main>
      )}
    />
  );
};

export default RouteWithLayout;
