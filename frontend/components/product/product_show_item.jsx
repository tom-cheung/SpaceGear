import React from 'react'

const ProductShowItem = ({product}) => {
    return(
        <div>
            <div className="product-show-row">
                <div className="product-show-picture" >
                    <img src="" alt=""/>
                </div>
        
                <div className="product-show-details">
                    <h1>{product.product_name}</h1>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>
                </div>

            </div>

           
         
        </div>
    )
}

export default ProductShowItem;