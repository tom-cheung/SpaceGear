import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions'

const sessionErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors; 
        case RECEIVE_USER: 
            return []; 
            // if you receive a user it means they either created a user correctly or logged in correctly so you should clear your errors
        default:
            return oldState; 
    }
}

export default sessionErrorsReducer; 