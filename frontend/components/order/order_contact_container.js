import { connect } from 'react-redux';
import OrderContactForm from './order_contact';
import { createContact, removeContactError, retrieveContact, editContact } from '../../actions/contact_actions';

const mSTP = (state, ownProps) => {
    return({
        currentUser: Object.keys(state.entities.users),
        userEmail: Object.values(state.entities.users)[0].email, 
        contacts: state.entities.contacts, 
        contactErrors: state.errors.contacts
    })
} 

const mDTP = (dispatch) => {
    return({
        createContact: (newContact) => dispatch(createContact(newContact)),
        retrieveContact: (userID) => dispatch(retrieveContact(userID)), 
        removeContactError: () => dispatch(removeContactError()), 
        editContact: (contactID) => dispatch(editContact(contactID)), 
    })
}

export default connect(mSTP, mDTP)(OrderContactForm);