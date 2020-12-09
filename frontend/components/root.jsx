import React from 'react' // needed for the class component 
import App from './app'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'


const Root = ({store}) => { 
    // destructure {store} so you dont need to say arg.store 
    // provider has access to the store now, which means connect does also 
    return (
        <Provider store={store}> 
            <HashRouter> 
                <h1>Hello from root.jsx</h1>
                <App/> 
            </HashRouter>
        </Provider>
    )
}

export default Root;  

// root has access to the store because you passed it in through your entry file space_gear.jsx
// doesn't need to be a class component