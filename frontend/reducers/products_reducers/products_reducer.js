import { RECEIVE_PRODUCTS } from '../../actions/product_actions'

const productsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products
        default:
            return oldState
    }
}


// selector 

export default productsReducer; 