import React from 'react'
import { Link } from 'react-router-dom'

class ProductShowItem extends React.Component{
    constructor(props) {
        super(props)
    }



    render() {

        let product = this.props.product
        let price = this.props.product.price

        return(
            <div>
                <div className="product-show-row">
                    <div className="product-show-picture" >
                        <img src={window.productImages[product.img_name]} alt="" width="400" height="400"/>
                    </div>


                    <div>
                        <div className="product-show-details">
                            <h1>{product.product_name}</h1>
                            <h3>${parseFloat(product.price).toFixed(2)}</h3>
                            <p>{product.description}</p>
                        </div>

                        <div>

                        </div>


                        <div>
                            <Link to='/'><button>ADD TO CART</button></Link>
                        </div>
                    </div>
                    
                    
    
                </div>
             
            </div>
        )
    }
    
}

export default ProductShowItem;