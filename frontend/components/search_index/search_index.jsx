import React, {useState, useEffect} from 'react'
import SearchIndexItem from './search_index_item'

const SearchIndex = ({searchTerm, products, fetchProducts, history}) => {

    const [searchResults, updateResult] = useState([]);



    useEffect(() => {
        let results = [];

        products.map(product => {
          
            if(product.product_name.toLowerCase().includes((searchTerm).toLowerCase())) {
                results.push(product)
            }
        });

        updateResult(results);

    }, [products])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let newTerm = e.target.children[0].value
        history.push(`/search/${newTerm}`)
    }
    
    
    return(
        <div className="search-index-container">

            {
                searchResults.length ? 

                <div>
                    <div className="search-header-container">
                        <h1>SEARCH</h1>
                        <p>{searchResults.length} results for "{searchTerm}"</p>
                    </div>

                    <div className="items-container">
                        {searchResults.map( (product) => { return <SearchIndexItem key={product.id} product={product}/>} )}
                     </div>
                </div>

                : 

                <div className="empty-search-container">
                    <div className="empty-search-header">
                        <h1>SEARCH</h1>
                        <p>No results could be found for {searchTerm}</p>
                    </div>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type="text" placeholder="Search..."/>
                        </form>
                    </div>
                </div>

            }
            
        </div>
    )
} 

export default SearchIndex;

// notice that when you refresh the page that mounts this component, filtered products is actually empty 
// that's why the elements that depend on it dont load right away. 
// BUT they also dont throw an error because of the filteredProducts.map... since the array is empty it just returns nothing 
// when you refresh it hits the category container first, then the component, i believe this is isn't part of the import function 
// then it hits the header component did mount ajax call 
// this causes a rerender which is why it hits the category.jsx file again (this file) 

// refresh clears products slice of state but not category because i bootstrapped it
// i dont think I would want to bootstrap products since there could be a lot of them 