import React from 'react'
import { Link } from 'react-router-dom'

const ProductIndexItem = ({product}) => {
    console.log('hello from product_index_jsx')
    let hold = 'placeholder'

    return(
        <div className="product-container">
            <Link to={`/product/${product.id}`}><img className="product-index-pictures" src={window.productImages[hold]} width="200" height="200"/></Link>
            <Link to={`/product/${product.id}`}><p>{product.product_name}</p></Link>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductIndexItem

/*

12/14/20
11:09AM 

I would want the picture and the product name to be links to a product show page. 
Use the Link tag 
Could hav the route be product/:productId (this distinction could help avoid the user navigating to the productS pages)



*/