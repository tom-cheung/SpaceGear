import React from 'react'
import ProductIndexItem from './product_index_item'

const ProductCategory = ({filteredProducts, categoryName}) => {

    
    return(
        <div className="product-index-container">
            
            <div className="product-header-container">
                <h1>{categoryName}</h1>
            </div>
            
            <div className="items-container">
                {filteredProducts.map( (product) => { return <ProductIndexItem key={product.id} product={product}/>} )}
            </div>
            
        </div>
    )
} 

export default ProductCategory;

// notice that when you refresh the page that mounts this component, filtered products is actually empty 
// that's why the elements that depend on it dont load right away. 
// BUT they also dont throw an error because of the filteredProducts.map... since the array is empty it just returns nothing 
// when you refresh it hits the category container first, then the component, i believe this is isn't part of the import function 
// then it hits the header component did mount ajax call 
// this causes a rerender which is why it hits the category.jsx file again (this file) 

// refresh clears products slice of state but not category because i bootstrapped it
// i dont think I would want to bootstrap products since there could be a lot of them 