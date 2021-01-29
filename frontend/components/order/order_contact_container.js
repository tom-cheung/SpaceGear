import { connect } from 'react-redux';
import OrderContactForm from './order_contact';
import { createContact, removeContactError } from '../../actions/contact_actions';

const mSTP = (state, ownProps) => {
    return({
        currentUser: Object.keys(state.entities.users),
        contacts: state.entities.contacts, 
        contactErrors: state.errors.contacts
    })
} 

const mDTP = (dispatch) => {
    return({
        createContact: (newContact) => dispatch(createContact(newContact)),
        removeContactError: () => dispatch(removeContactError()), 
    })
}

export default connect(mSTP, mDTP)(OrderContactForm);