import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';

// testing 
import * as UserAPIUtil from './util/user_api_util'
import * as userActions from './actions/user_actions'
import configureStore from './store/store'
// testing 


document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById('root');

    let store;

    if (window.currentUser) {
        const preloadedState = {
          session: { id: window.currentUser.id },
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          }
        };
        store = configureStore(preloadedState);
        delete window.currentUser; 
        // the delete will remove the current user after creating a copy of the preloaded state 
        // this would make it so that when you reload you only have 1 current user 
      } else {
        store = configureStore();
      }

      // testing 
      window.createUser = userActions.createUser
      window.loginUser = userActions.loginUser
      window.logoutUser = userActions.logoutUser
      window.clearError = userActions.clearErrors
      window.receiveErrors = userActions.receiveErrors
      window.store = store; 
      // testing 
  
    ReactDOM.render(<Root store={store}/>, root); 
})