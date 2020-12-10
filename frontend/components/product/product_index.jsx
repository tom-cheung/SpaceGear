import React from 'react'
import Header from '../header/header'

const productIndex = ({currentUser, logout}) => {


    return(
        <div id="products-img-container">
            {/* <Header /> */}
            {/* <img id="product-main-img" src={window.splashImage}/> */}
            <h1 id="product-title">Products Page</h1>
        </div>
    )

}

export default productIndex; 

/* 
    12/8/2020 
        > added in a link to accounts. Accounts is a protected route that only logged in users can see 

*/