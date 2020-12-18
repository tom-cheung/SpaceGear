import { RECEIVE_ORDER, CLEAR_ORDERS, DELETE_ORDER } from '../../actions/order_actions' 

const orderReducer = (oldState = {}, action ) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ORDER:
            return Object.assign({}, nextState, action.order)
        case DELETE_ORDER:
            delete nextState[action.orderId]
            return nextState
        case CLEAR_ORDERS: 
            return {};
        default:
            return oldState;
    }
}

export default orderReducer; 