import React from 'react'
import ProductIndexItem from './product_index_item'

const ProductType = ({filteredProducts, categoryName, typeName}) => {

    return(
        <div className="product-index-container">
            <div className="product-header-container">
                <h1>{categoryName + ' ' + typeName}</h1>
            </div>
        
            <div className="items-container">
                {filteredProducts.map( (product) => { return <ProductIndexItem key={product.id} product={product}/>} )}
            </div>
        
        </div>
    )
}

export default ProductType;