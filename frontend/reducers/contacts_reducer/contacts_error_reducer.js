import { RECEIVE_CONTACT_ERROR, REMOVE_CONTACT_ERROR } from '../../actions/contact_actions';

const contactErrorReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CONTACT_ERROR:
            action.error.forEach(err => {
                let key = err.split(" ")[0].toLowerCase();
                nextState[key] = err
            });
            return nextState;
        case REMOVE_CONTACT_ERROR: 
            return oldState; 
        default:
            return oldState;
    }
}

export default contactErrorReducer;