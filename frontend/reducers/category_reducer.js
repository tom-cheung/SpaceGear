import { RECEIVE_CATEGORY } from "../actions/category_actions"

const categoryReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CATEGORY:
            return Object.assign({}, nextState, action.categories)
        default:
            return oldState
    }
}


export default categoryReducer; 