import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions' 

const _nullUser = Object.freeze({
    id: null
})

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_USER:
            // nextState[action.user.id] = action.user.id;
            // return nextState;
            return {id: action.user.id}
        case REMOVE_USER: 
            return _nullUser; 
        case REMOVE_USER: 
            return _nullUser; 
        default:
            return oldState; 
    }
}

export default sessionReducer; 