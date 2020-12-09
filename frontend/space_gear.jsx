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
    const store = configureStore(); 
    
    // testing 
    window.createUser = userActions.createUser
    window.loginUser = userActions.loginUser
    window.logoutUser = userActions.logoutUser
    window.store = store; 
    // testing 


    ReactDOM.render(<Root store={store}/>, root); 
})