import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions'

const userReducer = (oldState={}, action) => {
    Object.freeze(oldState); // dont want to manipulate the old state 
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign(nextState, action.user)
        default:
            return oldState
    }
}

export default userReducer;