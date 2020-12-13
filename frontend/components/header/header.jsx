import React from 'react'
import { Link } from 'react-router-dom'
import { fetchCategory } from '../../util/category_util';
import ProductDropdown from './product_dropdown'

class Header extends React.Component {
    constructor(props) {
        super(props)
       
    }

    // componentDidMount() {
    //     this.props.fetchCategory(); 
    // }

    
    render() {
        // console.log(this.props.categories[0].product_types)
        return (
        <div id="mainHeader">
            
            <div id="headerLeft">
                <div id="mainLogo" className="animate__animated animate__fadeIn">
                    <Link to="/"><img src={window.mainLogo} alt="" width="100" height="100"/></Link>
                </div>

                <div id="product-categories">
                    <ul>
                        {this.props.categories.map((category, idx) => {
                            return <li key={category.id}>
                                    <ProductDropdown key={idx} cat={category.category_name} typs={category.product_types}/>
                                    </li>
                        })} 
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