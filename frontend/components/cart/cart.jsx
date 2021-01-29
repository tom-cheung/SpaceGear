import React from 'react';
import { Link } from 'react-router-dom'


class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
        }

        this.total = this.total.bind(this);
    }

    componentDidMount() {
        this.total()
    }

    total() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        this.setState({total: parseFloat(total)})
    }

    cartItems() {
        // let localStorageCopy = Object.assign({})
        // delete items["better_errors_previous_commands"];
        // needs to return an array

        // let items = Object.keys(localStorage).filter( (key) => parseInt(key) != NaN);
        // items = items.map( (id) => {return JSON.parse(localStorage.getItem(id))})
        // return items; 
        
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(cart) {
            let items = Object.keys(cart)
            items = items.map( (key) => {
                return cart[key]
            })
            return items 
        } else {
            return [];
        }
    }

    updateQuantity({product}) {
        return(e) => {

            // localStorage.setItem(product.id, JSON.stringify({'quantity': e.currentTarget.value, 'product': product}))
            // this.total();

            // console.log(product)

            let oldCart = JSON.parse(localStorage.getItem('cart')); // turns the stringified cart back into a json object
            let newCart = Object.assign({}, oldCart, { [product.id]: { 'quantity': e.currentTarget.value, 'product': product} })
    
            localStorage.setItem('cart', JSON.stringify(newCart))

            this.total();
        }
    }

    removeItem(id) {
        // localStorage.removeItem('cart');
        let oldCart = JSON.parse(localStorage.getItem('cart'));
        delete oldCart[id]
        let newCart = Object.assign({}, oldCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
        // console.log(oldCart)
        this.total(); 
    }

    render() {
        // console.log(this.props)
        // console.log(this.props.history.location)

        return (
            <div className="shopping-cart-container">

                {this.cartItems().length != 0 ? 
                    <div>
                        <div className="cart-title">
                            <h1>CART</h1>
                        </div>

                        <div className="cart-product-header">

                            <div className="cart-details">
                                <h3 className="cart-cell">PRODUCT</h3>
                            </div>

                            <div className="cart-metrics">
                                <h3>QUANTITY</h3>
                                <h3 className="subtotal">TOTAL</h3>
                            </div>
                        </div>
                    </div>
            : null }
                
                {this.cartItems().length != 0 ? this.cartItems().map((item, idx) => {
                    return (
                        <div key={item.product.id}>

                            <div className="items-in-cart">

                                <div>
                                    <img src={window.productImages[item.product.img_name]} alt="" width="200" height="200"/>
                                </div>

                                <div className="cart-item-details">
                                    <h2 className="cart-item-content">{item.product.product_name.toUpperCase()}</h2>
                                    <h2 className="cart-item-content">{item.product.color.toUpperCase()} / {item.product.size.toUpperCase()}</h2> 
                                    <h2>${parseFloat(item.product.price).toFixed(2)}</h2>  
                                </div>
                                
                                <div className="cart-item-details">
                                    <input className="cart-item-content" id="cart-item-quantity" type="number" defaultValue={item.quantity} onChange={this.updateQuantity(item)} min="0"/>

                                    <button className="cart-remove-item" onClick={()=>{this.removeItem(item.product.id)}}>REMOVE</button>
                                </div>

                                <div className="cart-item-details">
                                    <h2>${  
                                        (parseFloat(item.quantity) * parseFloat(item.product.price)).toFixed(2)
                                    }</h2>
                                
                                </div>

                            </div>
                        </div> 
                    )

                }) : 
                
                <div className="cart-empty-container">
                    <div className="cart-empty-header">
                        <h1>YOUR CART IS EMPTY</h1>
                    </div>

                    <div>
                        <Link to="/allproducts"><button className="cart-empty-link">SHOP OUR PRODUCTS</button></Link>
                    </div>
                </div>
                }

                {this.cartItems().length != 0 ? 
                    <div className="grand-total">
                        <label htmlFor="">TOTAL:</label>
                        <h2 id="cart-order-total">${parseFloat(this.state.total).toFixed(2)}</h2>
                        {/* <p id="cart-shipping-message">Shipping & taxes calculated at checkout</p> */}
                        <Link to="/checkout/contact"><button id="cart-checkout-button">CHECKOUT</button></Link>
                    </div>
                : null
                }


                
            </div>
        )
    }

}


export default Cart;