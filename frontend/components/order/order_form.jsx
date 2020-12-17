import React from 'react'

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        console.log(this.props)
        return(
            <div className="order-form-container">   
                <h1>Place Your Order</h1>
                <h1>Address Form Goes Here</h1>
                <h1>Payment Form Goes here</h1>
                <h1>Order Button Goes here</h1>
            </div>
        )
    }
}

export default OrderForm; 

/*

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