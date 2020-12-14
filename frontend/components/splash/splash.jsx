import React from 'react'
import Header from '../header/header'

const ProductIndex = ({currentUser, logout}) => {

    let hold = 'splashImage' 

    return(
        <div id="products-img-container">
            {/* <Header /> */}
            <img id="product-main-img" src={window.productImages[hold]}/>
            {/* <img id="product-main-img" src="assets/splash/astronaut.jpg"/> */}
            <h1 id="product-title">Gear Up</h1>
        </div>
    )

}

export default ProductIndex; 

/* 
    12/8/2020 
        > added in a link to accounts. Accounts is a protected route that only logged in users can see 

*/