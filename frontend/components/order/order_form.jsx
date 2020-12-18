import React from 'react'
import { Link } from 'react-router-dom'

class OrderForm extends React.Component {
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
        let items = Object.keys(cart)
        items = items.map( (key) => {
            return cart[key]
        })
        console.log(items)
        return items 
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

    render() {
        console.log(this.orderedProducts())
        return(
            <div className="order-form-container">  
                <div className="order-form">
                    <h1>SpaceGear logo to take you back to homepage</h1>
                    <h1>Place Your Order</h1>
                    <h1>Address Form Goes Here</h1>
                    <h1>Payment Form Goes here</h1>
                    {this.state.total ? <Link to="/account"><button onClick={this.handleSubmit}>Order Button Goes here</button></Link> : 
                        <button>Calculating...</button>
                    }
                    
                </div> 

                <div className="order-form">
                    <h1>cart details goes here</h1>
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