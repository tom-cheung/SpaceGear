import React from 'react'
import { Link } from 'react-router-dom'
import OrderItemDetails from './order_item_details'

class OrderContactForm extends React.Component {
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
        e.preventDefault;
        this.props.createOrder(this.state, this.orderedProducts())
        window.localStorage.clear(); // clears the cart after checkout 
    }


    calcTotal() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        return total
    }

    inputText(e, id) {
        console.log(id)
        let label = document.getElementById(id)
        if(e.target.value === "") {
            label.classList.remove("filled_label")
        } else {
            label.classList.add("filled_label")
        }
    }

    render() {
        return(
            <div className="order-form-container">  

                <div className="order-form">

                    <div className="form-logo-container">
                        <Link to="/" className="order-form-logo">SpaceGear</Link>
                    </div>

                    
                    {this.state.total ? 
                    
                    <div className="order-contact-container"> 
            
                            <form action="">

                                <div className="order-name-container">
                                    <div className='field'>
                                        <label id="first-name" htmlFor="">First Name</label>
                                        <input type="text" onChange={(e) => this.inputText(e, 'first-name')} required/>
                                    </div>


                                    <div className='field'>
                                        <label id="last-name">Last Name</label>
                                        <input type="text" onChange={(e) => this.inputText(e, 'last-name')} required/>
                                    </div>
                                </div>

                                <div className="order-address-one">
                               
                                        <label htmlFor="">Address</label>
                                        <input type="text" required/>
                                
                                </div> 

                                <div className="order-address-two">

                                    <label htmlFor="">Apartment, suite, etc. (optional)</label>
                                    <input type="text" required/>
                                    
                                </div>

                                <div className="order-city">

                                </div>



                                {/* <div className="contact-name">
                        
                                    <input type="text" className="contact-input" required placeholder="first name"/>        
                                
                                    <input type="text" className="contact-input" required placeholder="last name"/>
                                      
                                </div>

                                <div>
                                    <label htmlFor="">Address
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="">Apartment, suite, etc. (optional)
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="">City
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="">Country/Region
                                        <select name="" id="">

                                        </select>
                                    </label>
                                    <label htmlFor="">State
                                        <input type="text"/>
                                    </label>
                                    <label htmlFor="">ZIP code
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="">Phone
                                        <input type="tel"/>
                                    </label>
                                </div>

                                <button>Continue to Shipping</button> */}

                            </form>
                        
                            <Link to="/account"><button onClick={this.handleSubmit} className="order-form-button">Continue to Shipping</button></Link> 
                
                    
                    </div>
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
                            <p>FREE 1 DAY DELIVERY</p>
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

export default OrderContactForm; 

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