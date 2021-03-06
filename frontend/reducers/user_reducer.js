import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions'

const userReducer = (oldState={}, action) => {
    Object.freeze(oldState); // dont want to manipulate the old state 
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            // nextState[action.user.id] = Object.assign({}, action.user)
            // return nextState
            return Object.assign({}, oldState, { [action.user.id]: action.user.user });
            // return Object.assign(nextState, action.user) 
            // this didnt work because you were merging {id: x, email: y} {id: z, email: j}
            // so because the keys are the same then it'll just replace each key and value pair 
        case REMOVE_USER: 
            return {};
            // removes the user from the slice of state upon logout 
        default:
            return oldState
    }
}

export default userReducer;