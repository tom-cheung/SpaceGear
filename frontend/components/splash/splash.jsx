import React from 'react'
import Header from '../header/header'

const ProductIndex = ({currentUser, logout}) => {

    let name = splashImage 
    return(
        <div id="products-img-container">
            {/* <Header /> */}
            <img id="product-main-img" src={window.splashImage}/>
            {/* <img id="product-main-img" src={require("../../../app/assets/images/splash/astronaut.jpg")}/> */}
            <h1 id="product-title">Gear Up</h1>
        </div>
    )

}

export default ProductIndex; 

/* 
    12/8/2020 
        > added in a link to accounts. Accounts is a protected route that only logged in users can see 

*/