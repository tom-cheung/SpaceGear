import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id="main-header">

            <div id="main-logo" class="animate__animated animate__fadeIn">
                <Link to="/"><img src={window.mainLogo} alt="" width="100" height="100"/></Link>
            </div>

            <div id="product-categories">
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Children</li>
                    <li>Accessories</li>
                    <li>Premium</li>
                </ul>
            </div>

            <div id="user-tools">
                <ul>
                    <li><Link to="/account">Account</Link></li> 
                    <li>Search</li>
                    <li>Shopping Cart</li>
                    {/* want to add in a link to the account here, will likely need to import Link above, and use Link tags */}
                </ul>
            </div>

        </div>
    )
    
}

export default Header; 

/*
    
    2:04PM 
        > added in Header component 
        > added in div items for main header, logo, product-categories, and user-tools 


*/