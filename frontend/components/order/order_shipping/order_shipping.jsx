import React from 'react'
import { Link } from 'react-router-dom'
import OrderItemDetails from '../order_item_details'

class OrderShipping extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            purchaser_id: null,
            total: null, 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.currentUser ? this.setState({'purchaser_id': this.props.currentUser[0]}) : null;
        this.total(); 

        // fetch the address, if none exists redirect to the show page 

        this.props.retrieveContact(this.props.currentUser[0])
            .then( () => {
                if(this.props.contact.length === 0) {
                    this.props.history.push("/checkout/contact");
                }
            })

        
    }

    cartItems() {

        let cart = JSON.parse(localStorage.getItem('cart'));
        

        if(cart) {
            let items = Object.keys(cart)
            items = items.map( (key) => {
                return cart[key]
            })
            return items
        } else {
            return []
        }
 
    }

    total() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        this.setState({total: parseFloat(total)})
    }

    orderedProducts() {
        return this.cartItems().map((item) => {return {'product_id': parseInt(item.product.id), 'quantity': parseInt(item.quantity)}})
        
    }

    handleSubmit(e) {
        // e.preventDefault();
        // this.props.createOrder(this.state, this.orderedProducts())
        // window.localStorage.clear(); // clears the cart after checkout 
    }


    calcTotal() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        return total
    }

    render() {

        let address_one;
        let address_two;
        let city;
        let state; 
        let country; 
        let zipcode; 

        if(this.props.contact.length) {
            address_one =  this.props.contact[0].address_one ? this.props.contact[0].address_one + ", " : ""
            address_two =  this.props.contact[0].address_two ? this.props.contact[0].address_two + ", " : ""
            city =  this.props.contact[0].city ? this.props.contact[0].city + ", " : ""
            state =  this.props.contact[0].state ? this.props.contact[0].state + ", " : ""
            country =  this.props.contact[0].country ? this.props.contact[0].country + ", " : ""
            zipcode =  this.props.contact[0].zipcode ? this.props.contact[0].zipcode : ""
        }

        return(
            <div className="order-form-container">  

                <div className="shipping-top-container">

                        <div className="order-form">
                            {/* <div className="form-logo-container">
                                <Link to="/" className="order-form-logo">SPOOK</Link>
                            </div> */}

                            {this.state.total ? 

                                <div className="order-shipping-container">
                                    <div className="form-logo-container">
                                        <Link to="/"><img src={window.productImages.mainLogoBlack} alt="" width="200" height="200"/></Link>
                                    </div>
                            
                                    <div className="order-shipping-information">
                                        <div className="shipping-info-inner">   
                                            <div className="shipping-email" id="shipping-email">
                                                <div >Email</div>
                                                <span>{
                                                    this.props.userEmail
                                                }</span>
                                            </div>
                                            <div className="shipping-email">
                                                <div >Ship to</div>
                                                <div id="shipping-address">{this.props.contact.length ? 

                                                    address_one + address_two + city + state + country + zipcode
                                                    :
                                                
                                                    null
                                                }</div>
                                            </div>
                                        </div>
                                    </div>
                                            
                                    <div className="order-shipping-method">
                                        <div id="order-shipping-title">
                                            <span>Shipping method</span>
                                        </div>
                                            
                                            
                                        <div id="shipping-option-container"> 
                                            <div className="order-shipping-option" id="order-shipping-option-one">
                                                <div id="shipping-ups">
                                                    <input type="radio" disabled/>
                                                    <span>Shipping - UPS Home Delivery®</span>
                                                </div>
                                                <span className="shipping-price">$11.24</span>
                                            </div>
                                            
                                            <div className="order-shipping-option">
                                                <div>
                                                    <input type="radio" readOnly/>
                                                    <span>Free - One Day Delivery</span>
                                                </div>
                                                <span className="shipping-price">$0.00</span>
                                            </div>
                                        </div>
                                    </div>
                                            
                                    <div className="order-button-container">
                                        <Link to="/checkout/form"><button className="order-shipping-button" onClick={this.handleSubmit} className="order-form-button">Proceed to Payment</button></Link> 
                                    </div>
                                            
                                </div>
                            : 
                                <div className="empty-cart">
                                    <div className="form-logo-container">
                                        <Link to="/"><img src={window.productImages.mainLogoBlack} alt="" width="200" height="200"/></Link>
                                    </div>
                                    <h1>Your Cart is Empty!</h1> 
                                    <Link to="/allproducts"><button>Browse Products</button></Link>
                                </div>
                            }

                        </div> 
                        
                        <div className="items-info">
                            {this.cartItems().map((details) => {
                                return <OrderItemDetails item={details} key={details.product.id}/>
                            })}

                            <div className="price-info"> 
                        
                                <div className="promo">
                                    <input type="text" defaultValue="PROMO CODE"/> <button>Apply</button> 
                                </div>
                        
                                <div className="shipping">
                                    <p>Shipping + Handling</p>
                                    <p>FREE ONE DAY DELIVERY</p>
                                </div>
                        
                                <div className="tax">
                                    <p>Taxes</p>
                                    <p>NONE</p>
                                </div>
                        
                                <div className="order-total">
                                    <div className="price-details">
                                        <span>Total</span>
                                        <span>usd ${parseFloat(this.state.total).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>

                <div className="fill-container">
                    <div className="left-container"></div>
                    <div className="right-container"></div>
                </div>

            </div>
        )
    }
}

export default OrderShipping; 

/*

    store.dispatch(createOrder({purchaser_id: 26, total: 61.24}, [{product_id: 35, quantity: 2}]))

    needs current user id (for now, should refactor to allow non users to sign in)
    needs the cart, which is in the localStorage
    really only need these two things to create an order 

    should put in an address form 
        on click should save this to the address table, which should return the address
    should put in a credit card form 
        on click should save this to the payments table, which should return just the payment id 

    should make this a protected route forcing users to sign in before placing the order, this way you get the user id 
    should redirect users back to this page after sign in

        this.props.history.goBack(); may serve you 


*/