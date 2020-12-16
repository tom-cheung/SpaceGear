import React from 'react'
// import Header from '../header/header'
import { Link } from 'react-router-dom'
// import SplashProductItems from './splash_product_items'

const ProductIndex = ({categories}) => {

    return(
        <div id="splash-container">
            <img id="product-main-img" src={window.productImages['splashImage']}/>
            <h1 id="product-title">Gear Up</h1>
            
            <div id="splash-product-container">
              

                <div id='splash-category-container'>

                    <div className="splash-category" id="splash-category-1">
                        {/* <img className="splash-category-img" src={window.productImages['womensbomberjacket']} alt="" width="400" height="400"/> */}
                        <Link className="splash-category-link" to={`/products/${categories[1].category_name}/${categories[1].id}`}><h1 className="splash-category-title">Womens</h1></Link>
                    </div>

                    <div className="splash-category" id="splash-category-2">
                        {/* <img className="splash-category-img" src={window.productImages['mensbomberjacket']} alt="" width="400" height="400"/> */}
                        <Link className="splash-category-link" to={`/products/${categories[0].category_name}/${categories[0].id}`}><h1 className="splash-category-title">Mens</h1></Link>
                    </div>

                    <div className="splash-category" id="splash-category-3">
                        {/* <img className="splash-category-img" src={window.productImages['kidsonesie']} alt="" width="400" height="400"/> */}
                        <Link className="splash-category-link" to={`/products/${categories[2].category_name}/${categories[2].id}`}><h1 className="splash-category-title">Children</h1></Link>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default ProductIndex; 

/* 
    12/8/2020 
        > added in a link to accounts. Accounts is a protected route that only logged in users can see 

*/