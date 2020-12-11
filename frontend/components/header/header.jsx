import React from 'react'
import { Link } from 'react-router-dom'
import ProductDropdown from './product_dropdown'

const Header = () => {
    return (
        <div id="main-header">

            <div id="headerLeft">
                <div id="main-logo" className="animate__animated animate__fadeIn">
                    <Link to="/"><img src={window.mainLogo} alt="" width="100" height="100"/></Link>
                </div>

                <div id="product-categories">
                    <ul>
                        <li><ProductDropdown cat={'Men'} typs={['T-Shirts', 'Outwear', 'View All']}/></li>
                        <li><ProductDropdown cat={'Women'} typs={['T-Shirts', 'Outwear', 'View All']}/></li>
                        <li><ProductDropdown cat={'Children'} typs={['T-Shirts', 'Outwear', 'View All']}/></li>
                        <li><ProductDropdown cat={'Accessories'} typs={['Hats', 'Helmets']}/></li>
                        <li><ProductDropdown cat={'Premium'} typs={['Moon Rocks', 'Space Dust']}/></li>
                        <li><ProductDropdown cat={'Vehicle'} typs={['Model S', 'Roadster', 'Rocketship']}/></li>
                    </ul>
                </div>
            </div>
            

            <div id="user-tools">
                <ul>
                    <li><Link to="/account">Account</Link></li> 
                    <li><a href="">Search</a></li>
                    <li><a href="">Cart</a></li>
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