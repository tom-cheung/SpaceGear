import React from 'react'

const ProductIndexItem = ({product}) => {
    
    let hold = 'placeholder.jpg'

    return(
        <div className="product-container">
            <img className="product-index-pictures" src={window.productImages['placeHolder']} width="200" height="200"/>
            <p>{product.product_name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductIndexItem