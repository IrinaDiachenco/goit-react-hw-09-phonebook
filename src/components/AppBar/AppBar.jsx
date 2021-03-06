import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import { AppBar } from '@material-ui/core';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBarNav);

export default function AppBarNav() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
return (
  <AppBar>
   <header style={styles.header}>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  </AppBar>
)
};
