import React, {useState, useEffect} from 'react'
  
const OrderedProduct = ({details, product}) => {

    return(

        <div> 
            { details && product ? 
                <div>
                    <div className="order-product-details">
                        <div className="order-product-img">
                            <img src={window.productImages[product.img_name]} alt="" width="100" height="100"/>
                        </div>
                        {/* <input type="text" value={details.quantity}/> */}
                        <div className="order-product-text">
                            <p>{product.product_name}</p>
                            <p>{product.size} / {product.color}</p>
                            <p>${parseFloat(product.price).toFixed(2)}</p>
                        </div>
                    </div>
                </div>     
                : 
                null
            }
        </div>

    )
}

// export default OrderedProduct; 