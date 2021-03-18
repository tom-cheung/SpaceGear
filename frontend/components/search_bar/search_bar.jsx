import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom'

const SearchBar = ({products, categories}) => {

    // searchResults is an array containing all products that match the user input 
    const [searchResults, updateResult] = useState([]);

    // prevSearches is an object where keys are previous search terms and values are the products 
    const [prevSearches, updateSearch] = useState([]);   
        // saving this to the database may optimize search, would only have to pull it each time this component mounts  
    
    // products seperated by category, which is used as a preview in the search results 
    const [mens, updateMens] = useState({});
    const [womens, updateWomens] = useState({});
    const [kids, updateKids] = useState({});
    const [misc, updateMisc] = useState({});
    const [searchTerm, UpdateTerm] = useState("");

    // grabs the ID of each each product category 
    let mensID = categories.find(cat => cat.category_name === "Mens").id;
    let womensID = categories.find(cat => cat.category_name === "Womens").id;
    let childrensID = categories.find(cat => cat.category_name === "Children").id;
    let miscID = categories.find(cat => cat.category_name === "Miscellaneous").id;


    const search = (e) => {
        // clears the search bar of previous inputs 
        updateMens({});
        updateWomens({});
        updateKids({});
        updateMisc({});

        // if the search input is a key within prevSearches then we'll just return the previous results 
        if(prevSearches[e.target.value] !== undefined) {

            //updates the search result local state 
            updateResult(prevSearches[e.target.value]);

            // saves the search term to be used when user clicks to see all search results. Used to run the search again in the search index component
            UpdateTerm(e.target.value);

            // seperates the products by their category for search result preview 
            prevSearches[e.target.value].forEach(product => {
                    if(product.category_id === mensID ) {
                        updateMens(product)
                    }

                    if(product.category_id === womensID) {
                        updateWomens(product)
                    }

                    if(product.category_id === childrensID) {
                        updateKids(product)
                    }

                    if(product.category_id === miscID) {
                        updateMisc(product)
                    }
            })
        

        } else {

            let results = [];

            // does not pull results based on empty string or an empty space 
            if(e.target.value !== "" && e.target.value !== " ") {

                // maps through all the products and pushes all products whose name matches the search input into the results array
                products.map(product => { 

                    if(product.product_name.toLowerCase().includes((e.target.value).toLowerCase())) {

                        results.push(product)

                        if(product.category_id === mensID) {
                            updateMens(product)
                        }

                        if(product.category_id === womensID) {
                            updateWomens(product)
                        }

                        if(product.category_id === childrensID) {
                            updateKids(product)
                        }

                        if(product.category_id === miscID) {
                            updateMisc(product)
                        }
                    }
                })

            }

            //updates the search result local state  
            updateResult(results);
            
            // saves the search term to be used when user clicks to see all search results. Used to run the search again in the search index component
            UpdateTerm(e.target.value);

            // updates the prevSearches object so if a user retypes the same input we do not have to iterate through all products again
            updateSearch(Object.assign({}, prevSearches, {[e.target.value]: results}))

        }
    }

    return(
        <div id="search-container">
            <div id="search-bar">
                <span><i className="fa fa-search fa-2x"></i></span>
                <input type="text" onChange={(e) => search(e)} placeholder="SEARCH..."/>
            </div>
            {
                searchResults.length ? 

                    <div className="found-results-container">

                        <div className="search-bar-titles">
                            <h2>{searchResults.length} RESULTS</h2>
                            <Link id="view-results-link" to={`/search/${searchTerm}`}><h2>VIEW ALL</h2></Link>
                        </div>

                        <div className="result-product-container">
                            {Object.values(mens).length ? 
                                <div className="product-container">
                                    <Link to={`/product/${mens.id}`}><img src={window.productImages[mens.img_name]} alt="" width="300" height="300"/></Link>
                                    <h2>{mens.product_name}</h2>
                                    <Link className="result-price-link" to={`/product/${mens.id}`}><h2>${parseInt(mens.price).toFixed(2)}</h2></Link>
                                    
                                </div> 
                                : 
                                null }

                            {Object.values(womens).length ? 
                                <div className="product-container">
                                    <Link to={`/product/${womens.id}`}><img src={window.productImages[womens.img_name]} alt="" width="300" height="300"/></Link>
                                    <h2>{womens.product_name}</h2>
                                    <Link className="result-price-link" to={`/product/${womens.id}`}><h2>${parseInt(womens.price).toFixed(2)}</h2></Link>
                                    
                                </div> 
                                : 
                                null }

                            {Object.values(kids).length ? 
                                <div className="product-container">
                                    <Link to={`/product/${kids.id}`}><img src={window.productImages[kids.img_name]} alt="" width="300" height="300"/></Link>
                                    <h2>{kids.product_name}</h2>
                                    <Link className="result-price-link" to={`/product/${kids.id}`}><h2>${parseInt(kids.price).toFixed(2)}</h2></Link>
                                    
                                </div> 
                                : null }

                            {Object.values(misc).length ? 
                                <div className="product-container">
                                    <Link to={`/product/${misc.id}`}><img src={window.productImages[misc.img_name]} alt="" width="300" height="300"/></Link>
                                    <h2>{misc.product_name}</h2>
                                    <Link className="result-price-link" to={`/product/${misc.id}`}><h2>${parseInt(misc.price).toFixed(2)}</h2></Link>
                                    
                                </div> 
                                : null }
                        </div>

                    </div>

                :

                    <div className="empty-results-container">
                        <div>
                            <h2>{searchResults.length} RESULTS</h2>
                        </div>
                    </div>

            }
        </div>
    )
}

export default SearchBar; 