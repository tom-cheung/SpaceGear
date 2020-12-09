import React from 'react'
import { Link } from 'react-router-dom'

const productIndex = ({currentUser, logout}) => {


    return(
        <div>
            <h1>Products Page</h1>
            {currentUser ? <p>Welcome {currentUser.email}</p> : null}
            <Link to='/login'>Account</Link>
            { currentUser ? <button onClick={logout}>Logout</button> : null}
        </div>
    )

}

export default productIndex; 