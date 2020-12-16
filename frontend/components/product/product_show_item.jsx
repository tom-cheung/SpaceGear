import React, { useState } from 'react'
import { Link } from 'react-router-dom'

class ProductShowItem extends React.Component{
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            quantity: 1
        };
    }

    changeQuantity(field) {
        return(e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    addToCart() {
        localStorage.setItem(this.props.product.id, JSON.stringify({
            'quantity': this.state['quantity'], 
            'product': this.props.product,
        }))
    }


    render() {
        let product = this.props.product
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
                            {/* <Link to='/'><button onClick={this.addToCart}>ADD TO CART</button></Link> */}
                            <input type="number" min="1" value={this.state['quantity']} onChange={this.changeQuantity('quantity')}/>
                            <Link to="/cart"><button onClick={this.addToCart}>ADD TO CART</button></Link>
                        </div>
                    </div>
                    
                    
    
                </div>
             
            </div>
        )
    }
    
}

export default ProductShowItem;

// should always have access the product because of the way the data is being passed in via product_show