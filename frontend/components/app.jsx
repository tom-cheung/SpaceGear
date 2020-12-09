// know that this gets wrapped by the root component 
// believe this gets wrapped by the router component 
// this also contains the frontend routes also 
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductContainer from './product/product_container'
import RegistrationFormContainer from './session_form/registration_form_container'
import LoginFormContainer from './session_form/login_form_container'
import { AuthRoute } from '../util/route_util'

// class App extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h1>Hello from app.jsx</h1>
//                 <Switch>
//                     <Route path='/register' component={SignUpFormContainer}/>   
//                     <Route path='/login' component={LoginFormContainer}/> 
//                     <Route path='/' component={ProductContainer}/>
//                 </Switch>
//             </div>
//         )
//     }
// }

const App = () => {
    return(
        <div>
            <h1>Hello from app.jsx</h1>
            <Switch>
                <AuthRoute path='/register' component={RegistrationFormContainer}/>   
                <AuthRoute path='/login' component={LoginFormContainer}/> 
                <Route path='/' component={ProductContainer}/>
            </Switch>
        </div>
    )
}

export default App; 

// this doesn't have access to the store yet because it hasn't been passed into the App component via root.jsx 