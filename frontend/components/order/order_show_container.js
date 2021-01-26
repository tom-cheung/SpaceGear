import { connect } from "react-redux";
import OrderShow from './order_show'
import { editOrder, deleteOrder } from '../../actions/order_actions' 
import React from 'react'
import { Redirect } from 'react-router-dom'

const mSTP = (state, ownProps) => {

    let order = state.entities.orders[ownProps.match.params.orderId];
    // let orderedProducts; 

    return({
        order: order ?  order : {},
        // order: state.entities.orders[ownProps.match.params.orderId], 
        // orderedProducts: (state.entities.orders[ownProps.match.params.orderId]).ordered_product.map((detail) => {
        //     return {
        //         'id': detail.id,
        //         'quantity': detail.quantity, 
        //         'product': state.entities.products[detail.product_id]
        //     }
        // })
    })
}

const mDTP = (dispatch) => {
    return({
        editOrder: (order, products) => dispatch(editOrder()), 
        deleteOrder: (orderId) => dispatch(deleteOrder(orderId))
    })
}

export default connect(mSTP, mDTP)(OrderShow)