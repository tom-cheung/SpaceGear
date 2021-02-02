// know that this gets wrapped by the root component 
// believe this gets wrapped by the router component 
// this also contains the frontend routes also 
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import { ShowRoute } from '../util/user_show_util';

import SplashContainer from './splash/splash_container';
import RegistrationFormContainer from './session_form/registration_form_container';
import LoginFormContainer from './session_form/login_form_container';
import UserShowContainer from './user_profile/user_show_container';
import HeaderContainer from './header/header_container';
import ProductCategoryContainer from './product/product_category_container';
import ProductTypeContainer from './product/product_type_container';
import ProductShowContainer from './product/product_show_container';
import ProductIndexContainer from './product/product_index_container';
import CartContainer from './cart/cart_container';
import OrderFormContainer from './order/order_form_container';
import OrderContactContainer from './order/order_contact_container';
import OrderShippingContainer from './order/order_shipping/order_shipping_container';

import OrderShowContainer from './order/order_show_container'



const App = () => {

    return(
        <div id="master-container">
            <HeaderContainer /> 
            <Switch>
                <Route exact path='/product/:productId' component={ProductShowContainer}/>
                <Route exact path='/products/:categoryName/:categoryId/:typeName/:typeId' component={ProductTypeContainer}/>
                <Route exact path='/products/:categoryName/:categoryId' component={ProductCategoryContainer}/>
                <Route exact path="/allproducts" component={ProductIndexContainer}/>
                <Route path='/cart' component={CartContainer}/>
                <ShowRoute exact path='/checkout/contact' component={OrderContactContainer}/> 
                <ShowRoute exact path='/checkout/shipping' component={OrderShippingContainer}/> 
                <ShowRoute exact path='/checkout/form' component={OrderFormContainer}/>
                <ShowRoute path='/order/:orderId' component={OrderShowContainer}/>
                <ShowRoute path='/account' component={UserShowContainer}/>
                <AuthRoute path='/register' component={RegistrationFormContainer}/>   
                <AuthRoute path='/login' component={LoginFormContainer}/> 
                <Route path='/' component={SplashContainer}/>
            </Switch>
        </div>
    )
}

export default App; 

// this doesn't have access to the store yet because it hasn't been passed into the App component via root.jsx 
/*
12/14/2020
11:54AM 

when you import a file, it gets run everything this page loads, if you put console logs in there you will see them pop up 

*/

// make the checkout component similar to this App, with a switch statement inside of it and the product details like the header 
//