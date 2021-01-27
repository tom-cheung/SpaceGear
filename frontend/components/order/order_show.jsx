import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import OrderedProduct from './ordered_products';

const OrderShow = (props) => {
    
    const [order, updateOrder] = useState(props.order)
    const [orderedProducts, updateProducts] = useState([...props.order.ordered_product])

    useEffect(() => {
        let inputs = document.getElementsByTagName("INPUT")
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = orderedProducts[i].quantity
        }
    })


    const updateQuantity = (e, id) => {
        console.log(e)
        console.log(id)
        updateProducts(orderedProducts.map(product => {
            if(product.id === id) {
                product.quantity = parseInt(e.currentTarget.value);
                return product;
            } else {
                return product; 
            }
        }))
    }

    console.log(orderedProducts)

    return (

        <div>
            

         
            {Object.values(props.order).length ? 

                    <div className="order-show-container">
                        <h1>Order Number: {order.id}</h1>
                        <h1>Order Total: ${parseFloat(order.total).toFixed(2)}</h1>
                        <h1>Ordered Products:</h1>

                        {orderedProducts.map((details) => {
                            return <div>
                                        <OrderedProduct key={details.id} details={details} product={props.products[details.product_id]}/> 
                                        <input type="number" onChange={(e) => updateQuantity(e, details.id)} placeholder={details.quantity}/>
                                        <button onClick={() => {updateProducts(orderedProducts.filter(product => product.id != details.id) ) }}>Remove Item</button>
                                    </div>
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