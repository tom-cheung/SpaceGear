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
        let quantity;
        this.state.quantity < 1 ? quantity = 1 : quantity = this.state.quantity 
        
        // localStorage.setItem(this.props.product.id, JSON.stringify({
        //     'quantity': quantity, 
        //     'product': this.props.product,
        // }))

        let oldCart = JSON.parse(localStorage.getItem('cart')); // turns the stringified cart back into a json object
        let newCart = Object.assign({}, oldCart, { [this.props.product.id]: { 'quantity': quantity, 'product': this.props.product} })

        localStorage.setItem('cart', JSON.stringify(newCart))

       

        // localStorage.setItem(['cart'], JSON.stringify({
        //     Object.assign({}, oldCart, { [this.props.product.id]: { 'quantity': quantity, 'product': this.props.product} })
        // }))
    }


    render() {
        let product = this.props.product

        return(
            <div>
                <div className="product-show-row">
                    <div className="product-show-picture" >
                        <img src={window.productImages[product.img_name]} alt="" width="600" height="600"/>
                    </div>


                    <div className="product-column">
                        <div className="product-details">
                            <h1>{product.product_name.toUpperCase()}</h1>
                            <h3 className="product-show-price">${parseFloat(product.price).toFixed(2)}</h3>
                            <label htmlFor="">Description: 
                                <p className="product-description">{product.description}</p>
                            </label>
                        </div>

                        <div>

                        </div>


                        <div className="product-options">
                            {/* <Link to='/'><button onClick={this.addToCart}>ADD TO CART</button></Link> */}
                            <div className="color-picker">
                                <label htmlFor="">Color: 
                                    <select name="" id="">
                                        <option>{product.color}</option>
                                    </select>
                                </label>
                            </div>

                            <div className="size-picker">
                                <label htmlFor="">Size: 
                                    <select name="" id="">
                                        <option>{product.size}</option>
                                    </select>
                                </label>
                            </div>

                            <input className="quantity-picker" type="number" min="1" value={this.state['quantity']} onChange={this.changeQuantity('quantity')}/>
                            
                            
                            <Link to="/cart"><button onClick={this.addToCart} className="add-to-cart">ADD TO CART</button></Link>
                            
                        </div>
                    </div>
                    
                    
    
                </div>
             
            </div>
        )
    }
    
}

export default ProductShowItem;

// should always have access the product because of the way the data is being passed in via product_show