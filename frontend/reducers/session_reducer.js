import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions' 

const sessionReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.user.id] = action.user.id;
            return nextState;
        case REMOVE_USER: 
            delete nextState[action.user.id];
            return nextState; 
        default:
            return oldState; 
    }
}

export default sessionReducer; 