import React from 'react'
import { Link } from 'react-router-dom'
import { fetchCategory } from '../../util/category_util';
import ProductDropdown from './product_dropdown'

class Header extends React.Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount() {
        this.props.fetchCategory(); 
    }

    render() {

        let {categories} = this.props
        let fetched; 
        let catArray; 

        if(Object.keys(categories).length === 0 && categories.constructor === Object) {
            fetched = false; 
        } else {
            fetched = true; 
            catArray = Object.values(categories)
        }

        return (
        <div id="mainHeader">
            
            <div id="headerLeft">
                <div id="mainLogo" className="animate__animated animate__fadeIn">
                    <Link to="/"><img src={window.mainLogo} alt="" width="100" height="100"/></Link>
                </div>

                <div id="product-categories">
                    <ul>
                        {fetched ? catArray.map((category, idx) => {
                            return <li key={category.id}><ProductDropdown key={idx} cat={category.category_name} typs={['T-Shirts', 'Outwear', 'View All']}/></li>
                        }) : null} 
                    </ul>
                </div>
            </div>
            

            <div id="userTools">
                <ul>
                    <li><Link to="/account">Account</Link></li> 
                    <li><a href="">Search</a></li>
                    <li><a href="">Cart</a></li>
                    {/* want to add in a link to the account here, will likely need to import Link above, and use Link tags */}
                </ul>
            </div>

        </div>
    )}
    
}

export default Header; 

/*
    
    2:04PM 
        > added in Header component 
        > added in div items for main header, logo, product-categories, and userTools 


*/