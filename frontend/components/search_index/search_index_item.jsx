import React from 'react'
import { Link } from 'react-router-dom'

const SearchIndexItem = ({product}) => {

    return(
        <div className="product-container">
            <Link className='product-container-links' to={`/product/${product.id}`}><img className="product-index-pictures" src={window.productImages[product.img_name]} width="275" height="275"/></Link>
            <Link className='product-container-links' to={`/product/${product.id}`}><p className="product-index-details">{product.product_name}</p></Link>
            <p className="product-index-details">${product.price}0</p>
        </div>
    )
}

export default SearchIndexItem

/*

12/14/20
11:09AM 

I would want the picture and the product name to be links to a product show page. 
Use the Link tag 
Could hav the route be product/:productId (this distinction could help avoid the user navigating to the productS pages)



*/