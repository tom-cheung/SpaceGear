import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class OrderShow extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        
        console.log(this.props.order)
        
        return (
            <div className="order-show-container">

                <h1>Hi</h1>
                {/* <div>
                    <h1>Order Show and Edit Form</h1>
                    <h1>Order # {order.id}</h1>
                    <h1>Total ${parseFloat(order.total).toFixed(2)}</h1>
                    {orderedProducts.map((order, idx) => {
                        return (
                            <div key={idx}>
                                <p>{order.quantity}</p>
                                {order.product ? <li key={idx}>{order.product.product_name}</li> : null}
                            </div>
                        )
                    })}

                    <button onClick={() => this.props.deleteOrder(order.id)}>Cancel Order</button>
                </div> */}

                
            </div>
        )
    }
}


export default OrderShow