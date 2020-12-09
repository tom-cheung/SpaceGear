import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
  
  const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) }; // this returns true if there is a session.id i.e. if a user is logged in 
  };
  
  export const AuthRoute = withRouter(
    connect(
      mapStateToProps, 
      null
    )(Auth)
  ); 
  
  // this would pass in the loggedIn as a prop and ownProps to the Auth component as props 
  // this passes that information to the Auth component which destructures the props (including own props)
  // so here you're exporting a connected component... 