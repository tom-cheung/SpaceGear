// know that this gets wrapped by the root component 
// believe this gets wrapped by the router component 
// this also contains the frontend routes also 
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductContainer from './product/product_container'
import SignUpFormContainer from './user/signup_form_container'
import LoginFormContainer from './user/login_form_container'

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello from app.jsx</h1>
                <Switch>
                    <Route path='/register' component={SignUpFormContainer}/>   
                    <Route path='/login' component={LoginFormContainer}/> 
                    <Route path='/' component={ProductContainer}/>
                </Switch>
            </div>
        )
    }
}

export default App; 

// this doesn't have access to the store yet because it hasn't been passed into the App component via root.jsx 