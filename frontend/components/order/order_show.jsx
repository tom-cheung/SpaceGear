import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import OrderedProduct from './ordered_products';

const OrderShow = (props) => {
    
    const [order, updateOrder] = useState(Object.assign({}, props.order))
    const [orderedProducts, updateProducts] = useState([...props.order.ordered_product])
    const [total, updateTotal] = useState(props.order.total)

    useEffect(() => {
        let inputs = document.getElementsByTagName("INPUT")
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = orderedProducts[i].quantity
        }
        
    })

    useEffect(() => {
        calcTotal()
    }, [orderedProducts])


    const updateQuantity = (e, id) => {
        updateProducts(
            orderedProducts.map(product => {
            if(product.id === id) {
                product.quantity = parseInt(e.currentTarget.value);
                return product;
            } else {
                return product; 
            }
            })
        )
    }

    const removeItem = (id) => {
        updateProducts( orderedProducts.filter((product) => product.id !== id ) )
    }

    const calcTotal = () => {

        if(Object.values(props.products).length) {

            let newTotal = 0; 
            orderedProducts.forEach(order => {
                newTotal += (order.quantity * parseInt(props.products[order.product_id].price))
            })
            updateTotal(newTotal)

            updateOrder(Object.assign({}, order, {total: newTotal}))
        }
    }

    const submitUpdate = () => {
        console.log('hi')
        console.log(order)
        console.log(orderedProducts)
        props.editOrder(order, orderedProducts)
    }


    return (
        <div>
            
            {console.log(orderedProducts)}
         
            {Object.values(props.order).length ? 

                    <div className="order-show-container">

                        

                        <h1>Order Number: {order.id}</h1>
                        <h1>Order Total: ${parseFloat(total).toFixed(2)}</h1>
                        <h1>Ordered Products:</h1>

                        {orderedProducts.map((details) => {
                            return <div>
                                        <OrderedProduct key={details.id} details={details} product={props.products[details.product_id]}/> 
                                        <input type="number" onChange={(e) => updateQuantity(e, details.id)} placeholder={details.quantity} min='0'/>
                                        {/* <button onClick={() => {updateProducts(orderedProducts.filter(product => product.id != details.id) ) }}>Remove Item</button> */}
                                        <button onClick={() => removeItem(details.id)}>Remove Item</button>
                                    </div>
                        })}


                        <button onClick={() => submitUpdate()}>Update Order</button>

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