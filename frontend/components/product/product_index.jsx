import React from 'react'
import { Link } from 'react-router-dom'

const productIndex = (props) => {
    return(
        <div>
            <h1>Products Page</h1>
            <Link to='/login'>Account</Link>
        </div>
    )
}

export default productIndex; 