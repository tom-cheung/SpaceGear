import React from 'react'
import { Link } from 'react-router-dom'
import OrderItemDetails from '../order_item_details'

class OrderForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            purchaser_id: null,
            total: null, 
            address_id: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.currentUser ? this.setState({'purchaser_id': this.props.currentUser[0]}) : null;
        this.total(); 
        // this.props.retrieveContact(this.props.currentUser[0])

        // brings the user back to the contact page if no contact information is found for shipping 
        this.props.retrieveContact(this.props.currentUser[0])
        .then( () => {
            if(this.props.contacts.length === 0) {
                this.props.history.push("/checkout/contact");
            } else {
                this.setState({address_id: String(this.props.contacts[0].id)})
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
        console.log(this.orderedProducts())
        console.log(this.state)
        this.props.createOrder(this.state, this.orderedProducts())
        // window.localStorage.clear(); // clears the cart after checkout 
        // this.props.history.push("/account")
    }


    calcTotal() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        return total
    }

    inputText(e, id) {
        let label = document.getElementById(id)
        if(e.target.value === "") {
            label.classList.remove("filled_label")
        } else {
            label.classList.add("filled_label")
        }
        // this.setState({[id]: e.target.value})
    }

    render() {

        let address_one;
        let address_two;
        let city;
        let state; 
        let country; 
        let zipcode; 

        if(this.props.contacts.length) {
            address_one =  this.props.contacts[0].address_one ? this.props.contacts[0].address_one + ", " : ""
            address_two =  this.props.contacts[0].address_two ? this.props.contacts[0].address_two + ", " : ""
            city =  this.props.contacts[0].city ? this.props.contacts[0].city + ", " : ""
            state =  this.props.contacts[0].state ? this.props.contacts[0].state + ", " : ""
            country =  this.props.contacts[0].country ? this.props.contacts[0].country + ", " : ""
            zipcode =  this.props.contacts[0].zipcode ? this.props.contacts[0].zipcode : ""
        }

        return(
            <div className="order-form-container">  

                <div className="order-form">
                        


                    {this.state.total ? 
                    

                        <form onSubmit={this.handleSubmit}>

                            <div className="order-payment-container">

                                <div className="form-logo-container">
                                    <Link to="/"><img src={window.productImages.mainLogoBlack} alt="" width="200" height="200"/></Link>
                                </div>

                                <div className="order-shipping-information">
                                    <div className="shipping-info-inner">   
                                        <div className="shipping-info" id="shipping-email">
                                            <div >Email</div>
                                            <span>{
                                                this.props.userEmail
                                            }</span>
                                        </div>
                                        <div className="shipping-info" id="shipping-option">
                                            <div >Ship to</div>
                                            <div id="shipping-address">{this.props.contacts.length ? 
                                                address_one + address_two + city + state + country + zipcode
                                                :
                                                null
                                            }</div>
                                        </div>
                                        <div className="shipping-info">
                                            <div>Method</div>
                                            <span>Free - One Day Delivery</span>
                                            <span id="shipping-price">$0.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="payment-messages">
                                    <h2 id="payment-title">Payment</h2>
                                    <p id="payment-message">No credit card information will be saved.</p>
                                </div>

                                <div className="credit-card-container">

                                    <div className="credit-card-header">
                                        <span>Credit card</span>
                                        <div className="card-icons">
                                            <li className="card-list-item"><i className="fa fa-cc-visa fa-2x" id="visa"></i></li>
                                            <li className="card-list-item"><i className="fa fa-cc-mastercard fa-2x" id="mastercard"></i></li>
                                            <li className="card-list-item"><i className="fa fa-cc-amex fa-2x" id="americanexpress"></i></li>
                                            <li className="card-list-item"><i className="fa fa-cc-discover fa-2x" id="discover"></i></li>
                                            <span> and more ...</span>
                                        </div>
                                    </div>

                                    <div className="card-info">
                                        <div className="card-number">
                                            <label id="card-number">Card numbers</label>
                                            <input type="text" onChange={(e) => this.inputText(e, 'card-number')} required/>
                                        </div>

                                        <div className="card-name">
                                            <label id="card-name">Name on card</label>
                                            <input type="text" onChange={(e) => this.inputText(e, 'card-name')} required/>
                                        </div>

                                        <div className="card-date-code">
                                            <div className="card-exp-date">
                                                <label id="card-exp-date">Expiration date (MM/YY)</label>
                                                <input type="text" onChange={(e) => this.inputText(e, 'card-exp-date')} required/>
                                            </div>

                                            <div className="card-security-code">
                                                <label id="card-security-code">Security code</label>
                                                <input type="text" onChange={(e) => this.inputText(e, 'card-security-code')} required/>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="order-billing-address">
                                    <h2 id="billing-title">Billing address</h2>
                                    <span>Will default to your shipping address.</span>

                                    <div id="billing-address-container">
                                        <input type="radio" readOnly selected/>
                                        <span>Same as shipping address</span>
                                    </div>
                                    
                                </div>
                                
                                <div>
                                    {/* <Link to="/account"><button onClick={this.handleSubmit} className="order-form-button">Submit Order</button></Link>  */}
                                    <button id="submit-order" onClick={this.handleSubmit} className="order-form-button">Submit Order</button>
                                </div>


                            </div>

                        </form>
                        
                        : 
                        
                        <button>Your cart is empty! Click here to continue shopping!</button>
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
        )
    }
}

export default OrderForm; 

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