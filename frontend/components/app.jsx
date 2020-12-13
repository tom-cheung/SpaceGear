// know that this gets wrapped by the root component 
// believe this gets wrapped by the router component 
// this also contains the frontend routes also 
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import { ShowRoute } from '../util/user_show_util';

import ProductContainer from './product/product_container';
import RegistrationFormContainer from './session_form/registration_form_container';
import LoginFormContainer from './session_form/login_form_container';
import UserShowContainer from './session_form/user_show_container';
import HeaderContainer from './header/header_container'

// test
import FetchContainer from './fetch/fetch_container'
// 

const App = () => {
    return(
        <div id="master-container">
            <HeaderContainer /> 
            <Switch>
                <ShowRoute path='/account' component={UserShowContainer}/>
                <AuthRoute path='/register' component={RegistrationFormContainer}/>   
                <AuthRoute path='/login' component={LoginFormContainer}/> 
                <Route path='/' component={ProductContainer}/>
            </Switch>
        </div>
    )
}

export default App; 

// this doesn't have access to the store yet because it hasn't been passed into the App component via root.jsx 