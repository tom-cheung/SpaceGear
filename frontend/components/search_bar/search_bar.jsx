import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom'

const SearchBar = ({products, categories}) => {

    const [searchResults, updateResult] = useState([]);
    const [prevSearches, updateSearch] = useState([])
        // save each search as a key in an object, the value being an array of words
        // keep this as an object 
        // during each subsequent search, check is the term exists in the prevSearches, if so just return the results   
        // save this to the DB? would this optimize search? 
    
    const [mens, updateMens] = useState({});
    const [womens, updateWomens] = useState({});
    const [kids, updateKids] = useState({});
    const [misc, updateMisc] = useState({});
    const [searchTerm, UpdateTerm] = useState("");

    let mensID = categories.find(cat => cat.category_name === "Mens").id;
    let womensID = categories.find(cat => cat.category_name === "Womens").id;
    let childrensID = categories.find(cat => cat.category_name === "Children").id;
    let miscID = categories.find(cat => cat.category_name === "Miscellaneous").id;


    const search = (e) => {
        updateMens({});
        updateWomens({});
        updateKids({});
        updateMisc({});

        if(prevSearches[e.target.value] !== undefined) {

            updateResult(prevSearches[e.target.value]);
            UpdateTerm(e.target.value);

            prevSearches[e.target.value].forEach(product => {
                    if(product.category_id === mensID ) {
                        updateMens(product)
                        // && Object.values(mens).length <= 1 
                    }

                    if(product.category_id === womensID) {
                        updateWomens(product)
                        // && Object.values(womens).length <= 1
                    }

                    if(product.category_id === childrensID) {
                        updateKids(product)
                        // && Object.values(kids).length <= 1
                    }

                    if(product.category_id === miscID) {
                        updateMisc(product)
                        // && Object.values(misc).length <= 1
                    }
            })
        

        } else {

            let results = [];

            if(e.target.value !== "" && e.target.value !== " ") {

                products.map(product => {
                    // console.log(product.product_name.includes(e.currentTarget.value))
                    if(product.product_name.toLowerCase().includes((e.target.value).toLowerCase())) {
                        results.push(product)
                        if(product.category_id === mensID) {
                            updateMens(product)
                            // && Object.values(mens).length <= 1 
                        }

                        if(product.category_id === womensID) {
                            updateWomens(product)
                            // && Object.values(womens).length <= 1
                        }

                        if(product.category_id === childrensID) {
                            updateKids(product)
                            // && Object.values(kids).length <= 1
                        }

                        if(product.category_id === miscID) {
                            updateMisc(product)
                            // && Object.values(misc).length <= 1
                        }
                    }
                })

            }

            updateResult(results);
            UpdateTerm(e.target.value);
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