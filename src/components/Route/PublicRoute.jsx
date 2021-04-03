import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);

export default function PublicRoute({
  isAuthenticated,
  children,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
  return (
    <Route {...routeProps}>
        {isLoggedIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          children
        )}
    </Route>
  );
}
