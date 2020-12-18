import React from 'react'

const OrderItemDetails = ({item}) => {

    console.log(item)
    return(
        <div className="item-details-container">
            <img className="item-img" src={window.productImages[item.product.img_name]} alt="" width="70" height="70"/>
            <span className="floating-quantity">{item.quantity}</span>
            <div className="item-details">
                <p>{item.product.product_name}</p>
                <p>{item.product.size} / {item.product.color}</p>
            </div>

            <div className="price-details">
                <p>${parseFloat(item.product.price).toFixed(2)}</p>
            </div>
        </div>
    )
}



export default OrderItemDetails;