import { connect } from 'react-redux'
import OrderShipping from './order_shipping'
import {retrieveContact} from '../../../actions/contact_actions'

const mSTP = (state, ownProps) => {
    return({
        currentUser: Object.keys(state.entities.users),
        userEmail: Object.values(state.entities.users)[0].email, 
        contact: Object.values(state.entities.contacts),
    })
} 

const mDTP = (dispatch) => {
    return({
        retrieveContact: (userID) => dispatch(retrieveContact(userID))
    })
}

export default connect(mSTP, mDTP)(OrderShipping);