import React from 'react'
import ReactDOM from 'react-dom'
import * as UserAPIUtil from './util/user_api_util'

document.addEventListener('DOMContentLoaded', () => {
    
    // testing 
    window.createUser = UserAPIUtil.createUser
    window.loginUser = UserAPIUtil.loginUser
    window.logoutUser = UserAPIUtil.logoutUser
    // testing 
    
    const root = document.getElementById('root');

    ReactDOM.render(<h1>Hello from space_gear.jsx</h1>, root); 
})