import React from 'react'
import { Link } from 'react-router-dom'

const UserShow = ({currentUser, logoutUser}) => {

    return(
        <div class="userInfoContainer">

            <header id="userHeader">
                <Link id="logoutButton" onClick={logoutUser} to="/">LOGOUT</Link>
                <h1 id="accountTitle">MY ACCOUNT</h1>
                <p>Welcome back, {currentUser.email}!</p>
            </header>
            

            <div id='orderContainer'>
                <h2>MY ORDERS</h2>
            </div>

            <div id='addressContainer'>
                <h2>MY ADDRESS</h2>
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