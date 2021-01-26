import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import OrderedProduct from './ordered_products';

const OrderShow = (props) => {
    
    const [order, updateOrder] = useState(props.order)

    return (

        
        <div>

         
            {Object.values(props.order).length ? 
                    <div className="order-show-container">
                        <h1>Order Number: {order.id}</h1>
                        <h1>Order Total: ${parseFloat(order.total).toFixed(2)}</h1>
                        <h1>Ordered Products:</h1>
                        {order.ordered_product.map((product, idx) => {
                            return <OrderedProduct key={product.id} product={product}/>
                        })}
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
                                    
                : 
                
                <div>
                    <div>No Order Found </div> 
                    {/* {redirect()};  */}
                </div>

                }
        </div>
    )
    // }
}


export default OrderShow