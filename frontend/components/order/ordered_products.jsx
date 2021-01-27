import React, {useState, useEffect} from 'react'
  
const OrderedProduct = ({details, product}) => {

    return(

        <div> 
            { details && product ? 
                <div>
                    <div >
                        <img src={window.productImages[product.img_name]} alt="" width="70" height="70"/>
                        {/* <input type="text" value={details.quantity}/> */}
                        <div >
                            <p>{product.product_name}</p>
                            <p>{product.size} / {product.color}</p>
                        </div>

                        <div >
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

export default OrderedProduct; 