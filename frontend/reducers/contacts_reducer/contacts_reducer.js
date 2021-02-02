
import { RECEIVE_CONTACT, REMOVE_CONTACT } from '../../actions/contact_actions';

const contactReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CONTACT:
            // console.log(action)
            let contact_ids = Object.keys(action.contacts)
            contact_ids.forEach(key => {
                nextState[key] = action.contacts[key]
            })
            return nextState; 
        case REMOVE_CONTACT:
            delete nextState[action.contactID];
            return nextState
        default:
            return oldState; 
    }
}

export default contactReducer; 