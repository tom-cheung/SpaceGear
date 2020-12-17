import { RECEIVE_ORDER_ERRORS, CLEAR_ORDER_ERRORS, RECEIVE_ORDER } from '../../actions/order_actions'

const ordersErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ORDER_ERRORS:
            return action.errors;
        case RECEIVE_ORDER: 
            return [];
        case CLEAR_ORDER_ERRORS:
            return []; 
        default:
            return oldState;
    }
}

export default ordersErrorsReducer; 