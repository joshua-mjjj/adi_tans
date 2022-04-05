import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, error, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.errors
});

export default connect(mapStateToProps)(PrivateRoute);
