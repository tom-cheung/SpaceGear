import { connect } from "react-redux";
import OrderShow from './order_show'
import { editOrder, deleteOrder } from '../../actions/order_actions' 
import React from 'react'
import { Redirect } from 'react-router-dom'

const mSTP = (state, ownProps) => {

    let order = state.entities.orders[ownProps.match.params.orderId];
    
    return({
        order: order ?  order : {},
        orderedProducts: order ? order.ordered_product : [],
        products: state.entities.products, 
    })
}

const mDTP = (dispatch) => {
    return({
        editOrder: (order, products) => dispatch(editOrder(order, products)), 
        deleteOrder: (orderId) => dispatch(deleteOrder(orderId))
    })
}

// export default connect(mSTP, mDTP)(OrderShow)