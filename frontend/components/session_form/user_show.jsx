import React from 'react'
import { Link } from 'react-router-dom'

const UserShow = ({currentUser, logoutUser}) => {

    return(
        <div>
            <Link onClick={logoutUser} to="/">LOGOUT</Link>
            <h1>MY ACCOUNT</h1>
            <p>Welcome back, {currentUser.email}!</p>

            <div id='order-container'>
                <p>MY ORDERS</p>
            </div>

            <div id='address-container'>
                <p>MY ADDRESS</p>
            </div>

        </div>
    )
}

export default UserShow; 



/* 

    11:31AM 
        > created UserShow component 
        > create welcome messages
        > added in link to logout

    // shows address info, order history
    // should probably have seperate components for the order but redirect from here 

*/