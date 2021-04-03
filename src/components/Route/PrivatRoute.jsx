import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

// const mapStateToProps = state => ({
//   token: authSelectors.getToken(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);

export default function PrivateRoute({
  isAuthenticated,
  children,
  redirectTo,
  ...routeProps
}) {
  const token = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {token ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

