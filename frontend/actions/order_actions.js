import * as OrderAPIUtil from '../util/order_util'

export const RECEIVE_ORDER = "RECEIVE_ORDER"
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS"
export const CLEAR_ORDER_ERRORS = "CLEAR_ORDER_ERRORS"
export const CLEAR_ORDERS = "CLEAR_ORDERS"

const receiveOrder = (order) => {
    return({
        type: RECEIVE_ORDER, 
        order: order 
    })
} 

// the purpose of this regular action creator is to take in the order created by an ajax call and return a POJO with a type and a payload which can be dispatched to the store  
// the payload is determined by how you structured the view page of for the create order action 

export const clearOrders = () => {
    return({
        type: CLEAR_ORDERS
    })
}

const receiveError = (errors) => {
    return({
        type: RECEIVE_ORDER_ERRORS, 
        errors: errors
    })
}

export const clearErrors = () => {
    return({
        type: CLEAR_ORDER_ERRORS
    })
}


export const createOrder = (order, products) => (dispatch) => {
    return OrderAPIUtil.createOrder(order, products)
            .then((order) => dispatch(receiveOrder(order))
                ,(error) => dispatch(receiveError(error.responseJSON))
            )
} 
// the purpose of this is to update the global state 
// I suppose I do want a order slice of state 
// there are error messages associated with ordering and editing orders so I would want a order errors slice of state too

export const fetchOrders = () => (dispatch) => {
    return OrderAPIUtil.fetchOrders()
        .then((orders) => dispatch(receiveOrder(orders))
            ,(error) => dispatch(receiveError(error.responseJSON))
        )
}


export const editOrder = (order, products) => (dispatch) => {
    return OrderAPIUtil.editOrder(order, products)
        .then((order) => dispatch(receiveOrder(order))
            ,(error) => dispatch(receiveError(error.responseJSON))
        )
}