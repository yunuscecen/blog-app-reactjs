import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.userId,
});

export default connect(mapStateToProps)(PrivateRoute);
