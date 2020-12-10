import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Show = ({ component: Component, path, loggedIn, exact }) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
  
  const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) }; 
  };
  
  export const ShowRoute = withRouter(
    connect(
      mapStateToProps, 
      null
    )(Show)
  ); 

  /*
        11:33AM 
            > removed bang(!) operator from !loggedIn? as it was incorrectly redirecting logged out users  
  

        the mSTP passes into the show component a prop of loggedIn which is a boolean indicating whether a user is logged in
        the component returns a route that mounts a component if logged in and redirects if not logged in 
  */