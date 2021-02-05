import React from 'react';
import { Link } from 'react-router-dom';
import HeaderDropdown from './header_dropdown';
import { withRouter } from 'react-router';
import SearchBar from '../search_bar/search_bar';

class Header extends React.Component {
    constructor(props) {
        super(props)
       
        this.state = {
            showSearch: false,
        }
    }

    componentDidMount() {
        this.props.fetchProducts(); 
    }

    componentDidUpdate(prevState) {
        if(prevState.location.pathname !== this.props.history.location.pathname) {
            this.setState({showSearch: false})
        }

    }

    searchButton(e) {
        let searchBar = document.getElementById("search-bar");

        if(this.state.showSearch) {
            this.setState({showSearch: false});
            // searchBar.classList.remove("show-search-bar");
            // searchBar.classList.add("hide-search-bar")
            // console.log(searchBar.classList)
        } else {
            this.setState({showSearch: true});
            // searchBar.classList.remove("hide-search-bar")
            // searchBar.classList.add("show-search-bar")
            // console.log(searchBar.classList)
        }

        // console.log(searchBar);
    }

    closeSearchBar(e) {
        this.setState({showSearch: false})
    }
    
    render() {
        return (

        <div id="mainHeader">

            <div className="header-top">

                <div id="headerLeft">
                    <div id="mainLogo" className="animate__animated animate__fadeIn">
                        <Link to="/"><img src={window.mainLogo} alt="" width="150" height="150"/></Link>
                    </div>

                    <div id="product-categories">
                        <ul>
                            {this.props.categories.map((category, idx) => {
                                return <li key={category.id}>
                                        <HeaderDropdown key={idx} categoryName={category.category_name} categoryId={category.id} categoryTypes={category.product_types}/>
                                        </li>
                            })} 
                        </ul>
                    </div>
                </div>
            

                <div id="userTools">
                    <ul>
                        <li><Link to="/account">Account</Link></li> 
                        <li><span onClick={(e) => {this.searchButton(e)}}>Search</span></li>
                        <li><Link to="/cart">Cart</Link></li>
                        {/* want to add in a link to the account here, will likely need to import Link above, and use Link tags */}
                    </ul>
                </div>


            </div>

                {/* <div id="search-bar" className="hide-search-bar">
                        <SearchBar products={this.props.products}/>
                </div> */}

 
            {
                this.state.showSearch ? 

                    <div id="search-bar" className="show-search-bar">
                        <div className="close-search-button">
                            <button onClick={(e) => this.closeSearchBar(e)}>X</button>
                        </div>

                        <SearchBar products={this.props.products} categories={this.props.categories}/>
                    </div>

                :

                    null
            }

            {/* <div id="search-bar" className="hide-search-bar">
                <p>hello</p>
            </div> */}
        


        </div>
    )}
    
}

export default withRouter(Header); 

/*
    
    2:04PM 
        > added in Header component 
        > added in div items for main header, logo, product-categories, and userTools 


*/